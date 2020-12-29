import React from "react";
import { RouteComponentProps } from 'react-router-dom';

interface URLParams {
	foo: string;
};
type Props = RouteComponentProps<URLParams>;

export const CommitList: React.FC<Props & { children?: React.ReactNode }> = (props) => {
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
			props:
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</>
	)
}
