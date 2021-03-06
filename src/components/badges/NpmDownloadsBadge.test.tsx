/* @jsx MD */
import MD, { render } from "jsx-md";
import { NpmDownloadsBadge } from "./NpmDownloadsBadge";
import { Badge } from "../Badge";

describe("NpmDownloadsBadge", () => {
  it("shows an npm downloads badge", () => {
    const pkg = {
      name: "jsx-readme",
    };

    expect(render(<NpmDownloadsBadge pkg={pkg} />)).toContain(
      render(
        <Badge
          imageSource="https://img.shields.io/npm/dw/jsx-readme.svg"
          link="https://npm-stat.com/charts.html?package=jsx-readme"
        >
          downloads
        </Badge>
      )
    );
  });

  it("does not show an npm downloads badge if the package is private", () => {
    const pkg = {
      name: "jsx-readme",
      private: true,
    };
    expect(render(<NpmDownloadsBadge pkg={pkg} />)).toBe("");
  });
});
