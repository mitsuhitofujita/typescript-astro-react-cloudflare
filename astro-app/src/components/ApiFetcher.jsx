import React, { useEffect, useState } from "react";

export default function HonoFetcher() {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		// hono-api のエンドポイントに合わせて URL を変更してください
		fetch("http://localhost:8787/api/tasks?page=1")
			.then((res) => {
				if (!res.ok) {
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then(setData)
			.catch((err) => setError(err));
	}, []);

	if (error) return <div>Error: {error.message}</div>;
	if (!data) return <div>Loading...</div>;

	return (
		<div>
			<h2>API Data</h2>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}
