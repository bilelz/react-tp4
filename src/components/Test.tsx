import { useEffect } from "react";

export function Test() {
  console.log("1. Render : corps de la fonction");

  // const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("3. Effect : apres le rendu");

    return () => {
      console.log("4. Cleanup : avant le prochain effect ou unmount");
    };
  });

  console.log("2. Render : avant le return");

  return <div>Hello from Test component</div>;
}
