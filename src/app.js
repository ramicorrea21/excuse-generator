window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

const excuseGenerator = () => {
  let who = ["The cat", "My little brother", "His monkey", "My hamster"];
  let action = ["ate", "lost", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car", "my backpack"];
  let when = [
    "before the class",
    "right on time",
    "when I finished the homework",
    "during my lunch"
  ];
  let auxWho = Math.floor(Math.random() * 4);
  let auxAction = Math.floor(Math.random() * 4);
  let auxWhat = Math.floor(Math.random() * 4);
  let auxWhen = Math.floor(Math.random() * 4);
  return (
    who[auxWho] +
    " " +
    action[auxAction] +
    " " +
    what[auxWhat] +
    " " +
    when[auxWhen]
  );
};
