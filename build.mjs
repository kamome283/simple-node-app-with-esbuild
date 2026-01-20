import * as esbuild from "esbuild";

try {
    await esbuild.build({
        entryPoints: ["src/index.ts"],
        bundle: true,
        platform: "node",
        format: "esm",
        outfile: "dist/index.js",
        sourcemap: true,
        minify: true,
        external: [
            "node:*",
        ]
    });
    console.log("✅ ビルド成功");
} catch (error) {
    console.error("❌ ビルド失敗");
    printErrorDescription(error);
    process.exit(1)
}

function printErrorDescription(error) {
    if (error?.message === undefined) {
        console.error(error.message);
    } else {
        console.error(error);
    }
}