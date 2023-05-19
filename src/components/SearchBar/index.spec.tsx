import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import { SearchBar } from ".";

let searchQuery = "";
const onChange = (value: string) => (searchQuery = value);

describe("Seachbar tests", () => {
  it("should match snapshots", () => {
    const { container } = render(
      <SearchBar searchQuery={searchQuery} setSearchQuery={onChange} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should change values", () => {
    const { getByPlaceholderText } = render(
      <SearchBar searchQuery={searchQuery} setSearchQuery={onChange} />
    );

    const input = getByPlaceholderText("Buscar") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Camisa" } });

    cleanup();

    render(
      <SearchBar searchQuery={searchQuery} setSearchQuery={onChange} />
    );

    expect(searchQuery).toBe("Camisa");
    expect(screen.getByDisplayValue("Camisa")).toBeInTheDocument();
  });
});
