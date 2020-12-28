import React from "react";
import { useParams, useLocation } from 'react-router-dom';

export interface Props {

}

export const CommitList: React.FC<Props & { children?: React.ReactNode }> = () => {

	const params = useParams();
	const queryString = useLocation().search || 'null';

	return (
		<>
			<h1>Repo name</h1>
			<ul>
				<li><u>Author</u> - commit hash</li>
				<li><u>Author</u> - commit hash</li>
				<li><u>Author</u> - commit hash</li>
				<li><u>Author</u> - commit hash</li>
				<li><u>Author</u> - commit hash</li>
			</ul>
			params:
			<pre>{JSON.stringify(params)}</pre>
			query string:
			<pre>{queryString}</pre>
		</>
	)
}
