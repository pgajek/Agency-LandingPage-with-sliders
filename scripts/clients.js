export default function ChangeClient(e, smallClients, allItems) {
  const clientNode = e.target.closest("[data-client]");

  const chosenItems = [...allItems].filter(
    item => item.dataset.client == clientNode.dataset.client
  );
  const restItems = [...allItems].filter(item => {
    if (item.classList.contains("clients__client--small")) {
      return null;
    } else {
      return item;
    }
  });
  restItems.forEach(item => {
    item.classList.add("opacity--none");

    item.classList.remove("comeFromRight");
  });
  chosenItems.forEach(item => {
    item.classList.add("opacity--full");
    if (!item.classList.contains("rectangleImage")) {
      item.classList.add("comeFromRight");
    }
    item.classList.remove("opacity--none");
  });
  smallClients.forEach(item => (item.style.boxShadow = "none"));
  clientNode.style.boxShadow = "-2px 6px 40px #bc2e3a";
}
