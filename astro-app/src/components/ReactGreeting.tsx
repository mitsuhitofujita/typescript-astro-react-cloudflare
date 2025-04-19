import { useState } from 'react';

// TypeScriptの型定義
interface ReactGreetingProps {
  // 必要に応じてprops型を追加できます
  initialCount?: number;
}

export default function ReactGreeting({ initialCount = 0 }: ReactGreetingProps): React.ReactElement {
  const [count, setCount] = useState<number>(initialCount);
  
  return (
    <div className="react-island">
      <h2>This is a React Island 👋</h2>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        クリックして増加
      </button>
    </div>
  );
}