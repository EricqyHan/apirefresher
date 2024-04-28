alert("Working");

document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const rapperName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://simpleerichanapitest-12631724bb38.herokuapp.com/api/${rapperName}`
    );
    const data = await response.json();
    console.log(data);
    document.querySelector("#age").innerText = data.age;
    document.querySelector("#birthname").innerText = data.birthName;
    document.querySelector("#birthlocation").innerText = data.birthlocation;
  } catch (error) {
    console.log(error);
  }
}
