import { fireEvent, render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  useLoaderData,
  useAsyncValue,
  BrowserRouter,
} from "react-router-dom";
import DetailPost from "../DetailPost";
import { IMG_START_URL } from "@api/Constants";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useLoaderData: vi.fn(),
    useAsyncValue: vi.fn(),
  };
});

const mockDetailPost = {
  backdrop_path: "bg_img_mock",
  original_title: "Title",
  genres: [
    {
      id: 1,
      name: "Horror",
    },
    {
      id: 2,
      name: "Trailer",
    },
  ],
  release_date: "2024",
  popularity: 95,
  production_companies: [
    {
      id: 1,
      logo_path: "testlogo",
      name: "Countire_One",
      origin_country: "Original_Country",
    },
  ],
  status: "OK",
  overview: "Overview",
};

describe("DetailPost component", () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  it("Showing spinner while loading data", () => {
    useLoaderData.mockReturnValueOnce({ post: null });
    render(
      <MemoryRouter>
        <DetailPost />
      </MemoryRouter>
    );

    expect(useLoaderData).toHaveBeenCalled();
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("Displays error message when post fails to load", async () => {
    useLoaderData.mockReturnValueOnce({
      post: Promise.reject(new Error("Test error")),
    });

    render(
      <MemoryRouter>
        <DetailPost />
      </MemoryRouter>
    );

    expect(await screen.findByText(/Some error/i)).toBeInTheDocument();
  });

  it("Render full detail post correctly", () => {
    useLoaderData.mockReturnValueOnce({ post: mockDetailPost });
    useAsyncValue.mockReturnValueOnce(mockDetailPost);

    render(
      <MemoryRouter>
        <DetailPost />
      </MemoryRouter>
    );

    expect(screen.getByAltText(mockDetailPost.original_title)).toHaveAttribute(
      "src",
      `${IMG_START_URL}${mockDetailPost.backdrop_path}`
    );

    expect(screen.getByText(/Title/i)).toBeInTheDocument();

    for (let i = 0; i < mockDetailPost.genres.length; i++) {
      expect(
        screen.getByText(mockDetailPost.genres[i].name)
      ).toBeInTheDocument();
    }

    expect(screen.getByText(/2024/i)).toBeInTheDocument();

    expect(screen.getByText(/Popularity: 95/i)).toBeInTheDocument();

    expect(screen.getByText(/Status: OK/i)).toBeInTheDocument();

    expect(screen.getByText(/Overview/i)).toBeInTheDocument();
  });

  it("When button back is pressed navigate to /movies", () => {
    useLoaderData.mockReturnValueOnce({ post: mockDetailPost });
    useAsyncValue.mockReturnValueOnce(mockDetailPost);

    render(
      <BrowserRouter>
        <DetailPost />
      </BrowserRouter>
    );

    const buttonBack = screen.getByRole("button", { name: /Back/i });

    fireEvent.click(buttonBack);

    expect(window.location.pathname).toBe("/movies");
  });
});
