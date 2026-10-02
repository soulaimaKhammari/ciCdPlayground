import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Soulaima",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["unexpected failures, not very helpful log errors"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins",
    // What do you want to learn in this workshop?
    expectations: ["setup a cicd pipeline from scratch because usually either we use the pipeline or dupplicate it from another project and then use it"],
  },
});
