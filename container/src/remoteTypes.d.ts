///<reference types="react" />

interface StaticInterface {
  store: any;
}

declare module "app1/App1Container" {
  const App1Container: React.FunctionComponent<StaticInterface>;

  export default App1Container;
}

declare module "app2/App2Container" {
  const App2Container: React.FunctionComponent<StaticInterface>;

  export default App2Container;
}
