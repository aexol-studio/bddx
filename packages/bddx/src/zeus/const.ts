/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Mutation:{
		changePassword:{
			changePasswordData:"ChangePasswordInput"
		},
		changePasswordWhenLogged:{
			changePasswordData:"ChangePasswordWhenLoggedInput"
		},
		changePasswordWithToken:{
			token:"ChangePasswordWithTokenInput"
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
	RegisterErrors: "enum" as const,
	ProjectInput:{

	},
	LoginErrors: "enum" as const,
	Query:{
		getGithubOAuthLink:{

		},
		requestForForgotPassword:{

		}
	},
	LoginQuery:{
		password:{
			user:"LoginInput"
		},
		provider:{
			params:"ProviderLoginInput"
		}
	},
	SimpleUserInput:{

	},
	GenerateOAuthTokenInput:{
		social:"SocialKind"
	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	},
	AdminQuery:{
		reportById:{

		}
	},
	TestResultInput:{

	},
	ChangePasswordInput:{

	},
	LoginInput:{

	},
	UpdateProjectInput:{

	},
	ProjectMutation:{
		deleteKey:{

		}
	},
	SocialKind: "enum" as const,
	ChangePasswordWhenLoggedInput:{

	},
	DateInput:{

	},
	CLIMutation:{
		updateReport:{
			uploadReportInput:"UploadReportInput"
		},
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	UploadReportInput:{
		results:"TestResultInput"
	},
	RegisterInput:{

	},
	ProviderLoginInput:{

	},
	ProviderErrors: "enum" as const,
	VerifyEmailInput:{

	},
	ChangePasswordWithTokenInput:{

	}
}

export const ReturnTypes: Record<string,any> = {
	User:{
		username:"String"
	},
	Mutation:{
		admin:"AdminMutation",
		changePassword:"Boolean",
		changePasswordWhenLogged:"Boolean",
		changePasswordWithToken:"Boolean",
		cli:"CLIMutation",
		generateOAuthToken:"Boolean",
		integrateSocialAccount:"Boolean",
		register:"RegisterResponse",
		verifyEmail:"Boolean"
	},
	AdminMutation:{
		createProject:"String",
		deleteProject:"Boolean",
		project:"ProjectMutation",
		updateProject:"Boolean"
	},
	TestReport:{
		_id:"String",
		createdAt:"String",
		project:"Project",
		runs:"ReportRun"
	},
	ReportRun:{
		_id:"String",
		createdAt:"String",
		number:"Int",
		project:"Project",
		report_id:"String",
		results:"TestResult"
	},
	ProviderLoginQuery:{
		apple:"ProviderResponse",
		github:"ProviderResponse",
		google:"ProviderResponse"
	},
	LoginResponse:{
		hasError:"LoginErrors",
		login:"String"
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
	CLIQuery:{
		getReport:"TestReport",
		getReports:"TestReport"
	},
	TestResult:{
		featureContent:"String",
		inherited:"String",
		reasonOfFail:"String",
		scenario:"String",
		testContent:"String",
		testPath:"String"
	},
	LoginQuery:{
		password:"LoginResponse",
		provider:"ProviderLoginQuery"
	},
	Project:{
		_id:"String",
		issueAddUrl:"String",
		keys:"String",
		name:"String",
		reports:"TestReport"
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
	CLIMutation:{
		updateReport:"String",
		uploadReport:"String"
	},
	RegisterResponse:{
		hasError:"RegisterErrors",
		registered:"Boolean"
	},
	ProviderResponse:{
		access_token:"String",
		hasError:"ProviderErrors",
		jwt:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}