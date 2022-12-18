/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		login:{
			user:"LoginInput"
		},
		register:{
			user:"RegisterInput"
		}
	},
	RegisterInput:{

	},
	DateInput:{

	},
	ProjectInput:{

	},
	UploadReportInput:{
		results:"TestResultInput"
	},
	ProjectMutation:{
		deleteKey:{

		}
	},
	CLIMutation:{
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	},
	AdminMutation:{
		createProject:{
			projectInput:"ProjectInput"
		},
		deleteProject:{

		},
		project:{

		},
		updateProject:{
			updateProjectInput:"UpdateProjectInput"
		}
	},
	UpdateProjectInput:{

	},
	TestResultInput:{

	},
	LoginInput:{

	}
}

export const ReturnTypes: Record<string,any> = {
	Query:{
		admin:"AdminQuery"
	},
	Mutation:{
		admin:"AdminMutation",
		cli:"CLIMutation",
		login:"String",
		register:"Boolean"
	},
	User:{
		username:"String"
	},
	TestResult:{
		feature:"String",
		reasonOfFail:"String",
		testContent:"String",
		testPath:"String"
	},
	AdminQuery:{
		me:"User",
		projects:"Project"
	},
	ProjectMutation:{
		createKey:"String",
		deleteKey:"Boolean"
	},
	CLIMutation:{
		uploadReport:"String"
	},
	Project:{
		_id:"String",
		keys:"String",
		name:"String",
		reports:"TestReport"
	},
	TestReport:{
		_id:"String",
		createdAt:"String",
		project:"Project",
		results:"TestResult"
	},
	AdminMutation:{
		createProject:"String",
		deleteProject:"Boolean",
		project:"ProjectMutation",
		updateProject:"Boolean"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}