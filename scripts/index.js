const getStoredConfig = async () => {
  try {
    const result = await browser.storage.local.get("autoObserve");
    return { autoObserveEnabled: result.autoObserve ?? false };
  } catch (e) {
    console.error(e.message);
    await browser.storage.local.set({ autoObserve: false });
    return { autoObserveEnabled: false };
  }
};

(async () => {
  const config = await getStoredConfig();

  const observe = document.getElementById("observeButton");
  const inputParent = document.createElement("div");
  inputParent.id = "toggle-parent";
  inputParent.style.display = "flex";
  inputParent.style.flexDirection = "row";
  inputParent.style.columnGap = "8px";

  const inputLabel = document.createElement("label");
  inputLabel.id = "auto-observe-toggle-label";
  inputLabel.htmlFor = "auto-observe-toggle";
  inputLabel.innerText = "Auto-Observe Toggle";

  inputParent.appendChild(inputLabel);

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = "auto-observe-toggle";
  input.checked = config.autoObserveEnabled;

  inputParent.appendChild(input);

  let autoObserver;

  input.addEventListener("change", (e) => {
    browser.storage.local.set({ autoObserve: e.target.checked });
    if (e.target.checked) {
      autoObserver = setInterval(() => {
        if (observe.children.length > 0) {
          console.log("Observe found");
          observe.querySelector("input").click();
        } else {
          console.log("No Observe found.");
        }
      }, 3000);
    } else {
      clearInterval(autoObserver);
    }
  });

  observe.insertAdjacentElement("beforebegin", inputParent);
})();
