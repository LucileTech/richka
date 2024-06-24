import { getAssetPath } from "../../src/utils/getAssetPath";

jest.mock("@/utils/getAssetPath", () => ({
  getAssetPath: jest.fn((path: string) => `mocked-public-url/${path}`),
}));

describe("getAssetPath", () => {
  it("returns correct asset path", () => {
    const path = "images/logo.png";
    const assetPath = getAssetPath(path);
    expect(assetPath).toBe(`mocked-public-url/${path}`);
  });
});
