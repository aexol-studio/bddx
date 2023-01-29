/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	ChangePasswordInput:{

	},
	SimpleUserInput:{

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
	ProjectMutation:{
		deleteKey:{

		}
	},
	LoginInput:{

	},
	AdminQuery:{
		reportById:{

		}
	},
	DateInput:{

	},
	VerifyEmailInput:{

	},
	Query:{
		getGithubOAuthLink:{

		},
		requestForForgotPassword:{

		}
	},
	ProviderErrors: "enum" as const,
	CLIMutation:{
		updateReport:{
			uploadReportInput:"UploadReportInput"
		},
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	RegisterInput:{

	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	},
	LoginErrors: "enum" as const,
	GenerateOAuthTokenInput:{
		social:"SocialKind"
	},
	LoginQuery:{
		password:{
			user:"LoginInput"
		},
		provider:{
			params:"ProviderLoginInput"
		}
	},
	UploadReportInput:{
		results:"TestResultInput"
	},
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
	TestResultInput:{

	},
	RegisterErrors: "enum" as const,
	SocialKind: "enum" as const,
	ProjectInput:{

	},
	UpdateProjectInput:{

	},
	ProviderLoginInput:{

	}
}

export const ReturnTypes: Record<string,any> = {
	LoginResponse:{
		hasError:"LoginErrors",
		login:"String"
	},
	AdminMutation:{
		createProject:"String",
		deleteProject:"Boolean",
		project:"ProjectMutation",
		updateProject:"Boolean"
	},
	ProjectMutation:{
		createKey:"String",
		deleteKey:"Boolean"
	},
	TestReport:{
		_id:"String",
		createdAt:"String",
		project:"Project",
		results:"TestResult"
	},
	AdminQuery:{
		me:"User",
		projects:"Project",
		reportById:"TestReport"
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
	CLIMutation:{
		updateReport:"String",
		uploadReport:"String"
	},
	Project:{
		_id:"String",
		issueAddUrl:"String",
		keys:"String",
		name:"String",
		reports:"TestReport"
	},
	ProviderResponse:{
		access_token:"String",
		hasError:"ProviderErrors",
		jwt:"String"
	},
	RegisterResponse:{
		hasError:"RegisterErrors",
		registered:"Boolean"
	},
	User:{
		username:"String"
	},
	LoginQuery:{
		password:"LoginResponse",
		provider:"ProviderLoginQuery"
	},
	CLIQuery:{
		getReport:"TestReport",
		getReports:"TestReport"
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
	TestResult:{
		featureContent:"String",
		inherited:"String",
		reasonOfFail:"String",
		scenario:"String",
		testContent:"String",
		testPath:"String"
	},
	ProviderLoginQuery:{
		apple:"ProviderResponse",
		github:"ProviderResponse",
		google:"ProviderResponse"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}