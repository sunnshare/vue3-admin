import { viteMockServe } from "vite-plugin-mock";

export default (viteEnv: ImportMetaEnv) => {
  const prodMock = viteEnv.VITE_PROD_MOCK === "Y";
  return viteMockServe({
    mockPath: "mock",
    enable: prodMock, //生产是否启用mock开关(默认开启)
    configPath: `
      import { setupProdMockServer } from '../mock'
			setupProdMockServer()
		`,
  });
};
