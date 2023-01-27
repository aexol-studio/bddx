/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	DateInput:{

	},
	GenerateOAuthTokenInput:{
		social:"SocialKind"
	},
	SocialKind: "enum" as const,
	VerifyEmailInput:{

	},
	CLIMutation:{
		updateReport:{
			uploadReportInput:"UpdateReportInput"
		},
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	},
	ProjectInput:{

	},
	SimpleUserInput:{

	},
	ProviderErrors: "enum" as const,
	Mutation:{
		changePassword:{
			changePasswordData:"ChangePasswordInput"
		},
		generateOAuthToken:{
			tokenData:"GenerateOAuthTokenInput"
		},
		integrateSocialAccount:{
			userData:"SimpleUserInput"
		},
		register:{
			user:"RegisterInput"
		},
		verifyEmail:{
			verifyData:"VerifyEmailInput"
		}
	},
	UploadReportInput:{
		results:"TestResultInput"
	},
	ChangePasswordInput:{

	},
	CLIQuery:{
		getReport:{

		},
		getReports:{

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
	UpdateReportInput:{
		results:"TestResultInput"
	},
	LoginQuery:{
		password:{
			user:"LoginInput"
		},
		provider:{
			params:"ProviderLoginInput"
		}
	},
	ProviderLoginInput:{

	},
	LoginErrors: "enum" as const,
	AdminQuery:{
		reportById:{

		}
	},
	UpdateProjectInput:{

	},
	ProjectMutation:{
		deleteKey:{

		}
	},
	Query:{
		getGithubOAuthLink:{

		},
		requestForForgotPassword:{

		}
	},
	LoginInput:{

	},
	TestResultInput:{

	},
	RegisterInput:{

	},
	RegisterErrors: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	CLIMutation:{
		updateReport:"Boolean",
		uploadReport:"String"
	},
	TestResult:{
		featureContent:"String",
		inherited:"String",
		reasonOfFail:"String",
		scenario:"String",
		testContent:"String",
		testPath:"String"
	},
	Project:{
		_id:"String",
		issueAddUrl:"String",
		keys:"String",
		name:"String",
		reports:"TestReport"
	},
	Mutation:{
		admin:"AdminMutation",
		changePassword:"Boolean",
		cli:"CLIMutation",
		generateOAuthToken:"Boolean",
		integrateSocialAccount:"Boolean",
		register:"RegisterResponse",
		verifyEmail:"Boolean"
	},
	CLIQuery:{
		getReport:"TestReport",
		getReports:"TestReport"
	},
	User:{
		username:"String"
	},
	AdminMutation:{
		createProject:"String",
		deleteProject:"Boolean",
		project:"ProjectMutation",
		updateProject:"Boolean"
	},
	ProviderLoginQuery:{
		apple:"ProviderResponse",
		github:"ProviderResponse",
		google:"ProviderResponse"
	},
	LoginQuery:{
		password:"LoginResponse",
		provider:"ProviderLoginQuery"
	},
	AdminQuery:{
		me:"User",
		projects:"Project",
		reportById:"TestReport"
	},
	ProjectMutation:{
		createKey:"String",
		deleteKey:"Boolean"
	},
	Query:{
		admin:"AdminQuery",
		cli:"CLIQuery",
		getAppleOAuthLink:"String",
		getGithubOAuthLink:"String",
		getGoogleOAuthLink:"String",
		login:"LoginQuery",
		requestForForgotPassword:"Boolean"
	},
	ProviderResponse:{
		access_token:"String",
		hasError:"ProviderErrors",
		jwt:"String"
	},
	LoginResponse:{
		hasError:"LoginErrors",
		login:"String"
	},
	RegisterResponse:{
		hasError:"RegisterErrors",
		registered:"Boolean"
	},
	TestReport:{
		_id:"String",
		createdAt:"String",
		project:"Project",
		results:"TestResult"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}