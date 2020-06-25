import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/type'

const initState = {
	projects: [
		{ id: 1, title: 'Project One', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
		{ id: 2, title: 'Project Two', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
		{ id: 3, title: 'Project Three', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
	]
}

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case CREATE_PROJECT:
			console.log('created project', action.payload)
			return state
		case CREATE_PROJECT_ERROR:
			console.log('created error', action.error)
			return state
		default:
			return state
	}
}

export default projectReducer;
