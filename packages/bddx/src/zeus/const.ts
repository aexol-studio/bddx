/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	ProjectMutation:{
		deleteKey:{

		}
	},
	Mutation:{
		login:{
			user:"LoginInput"
		},
		register:{
			user:"RegisterInput"
		}
	},
	TestResultInput:{

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
	UploadReportInput:{
		results:"TestResultInput"
	},
	RegisterInput:{

	},
	CLIMutation:{
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	DateInput:{

	},
	ProjectInput:{

	},
	AdminQuery:{
		reportById:{

		}
	},
	LoginInput:{

	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	ProjectMutation:{
		createKey:"String",
		deleteKey:"Boolean"
	},
	TestResult:{
		featureContent:"String",
		reasonOfFail:"String",
		scenario:"String",
		testContent:"String",
		testPath:"String"
	},
	Mutation:{
		admin:"AdminMutation",
		cli:"CLIMutation",
		login:"String",
		register:"Boolean"
	},
	AdminMutation:{
		createProject:"String",
		deleteProject:"Boolean",
		project:"ProjectMutation",
		updateProject:"Boolean"
	},
	User:{
		username:"String"
	},
	CLIMutation:{
		uploadReport:"String"
	},
	AdminQuery:{
		me:"User",
		projects:"Project",
		reportById:"TestReport"
	},
	Query:{
		admin:"AdminQuery"
	},
	TestReport:{
		_id:"String",
		createdAt:"String",
		project:"Project",
		results:"TestResult"
	},
	Project:{
		_id:"String",
		issueAddUrl:"String",
		keys:"String",
		name:"String",
		reports:"TestReport"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}