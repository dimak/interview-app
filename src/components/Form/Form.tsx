import React from "react";
import { useHistory } from 'react-router-dom';
import './Form.scss';

export interface StateProps {

}

export const Form: React.FC<StateProps & { children?: React.ReactNode }> = () => {
	const history = useHistory();

	return (
		<div className='form-container'>
			<h1>See latest committers</h1>
			<div>
				<label>Repo name</label>
				<input name='repoName'></input>
			</div>
			<div>
				<label>Commit count</label>
				<input name='commitCount'></input>
			</div>
			<button onClick={() => history.push('/commit-list/foobar')}>Submit</button>
		</div>
	)
}
