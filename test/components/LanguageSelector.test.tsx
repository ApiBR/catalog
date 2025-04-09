import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { LanguageSelector } from "../../src/components/LanguageSelector";

describe("LanguageSelector", () => {
  it("renders all language options", () => {
    render(
      <LanguageSelector currentLanguage="en-US" onLanguageChange={() => {}} />,
    );
    expect(screen.getByText(/português/i)).toBeInTheDocument();
    expect(screen.getByText(/english/i)).toBeInTheDocument();
    expect(screen.getByText(/español/i)).toBeInTheDocument();
  });

  it("shows current language as selected", () => {
    render(
      <LanguageSelector currentLanguage="pt-BR" onLanguageChange={() => {}} />,
    );
    expect(screen.getByRole("combobox")).toHaveValue("pt-BR");
  });

  it("calls onLanguageChange when selection changes", async () => {
    const onLanguageChange = vi.fn();
    render(
      <LanguageSelector
        currentLanguage="en-US"
        onLanguageChange={onLanguageChange}
      />,
    );

    const select = screen.getByRole("combobox");
    await userEvent.selectOptions(select, "pt-BR");

    expect(onLanguageChange).toHaveBeenCalledWith("pt-BR");
  });
});
