import { useRef, useState } from "react";

export function CounterRef() {
  const [stateCount, setStateCount] = useState(0); // Re-render
  const refCount = useRef(0); // Pas de re-render

  const incrementState = () => {
    setStateCount(stateCount + 1); // ✅ Le UI se met à jour
  };

  const incrementRef = () => {
    refCount.current = refCount.current + 1; // ❌ Le UI ne change pas
    console.log("Ref count:", refCount.current);
  };

  return (
    <div>
      <p>State count (visible): {stateCount}</p>
      <p>Ref count (pas visible): {refCount.current}</p>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}
