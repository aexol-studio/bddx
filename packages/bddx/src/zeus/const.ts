/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	ProviderLoginInput:{

	},
	RegisterInput:{

	},
	LoginInput:{

	},
	Mutation:{
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
	VerifyEmailInput:{

	},
	Query:{
		getGithubOAuthLink:{

		},
		requestForForgotPassword:{

		}
	},
	ProviderErrors: "enum" as const,
	ChangePasswordWhenLoggedInput:{

	},
	UploadReportInput:{
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
	SocialKind: "enum" as const,
	RegisterErrors: "enum" as const,
	ChangePasswordWithTokenInput:{

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
	DateInput:{

	},
	AdminQuery:{
		reportById:{

		}
	},
	TestResultInput:{

	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	},
	ProjectMutation:{
		deleteKey:{

		}
	},
	UpdateProjectInput:{
		color:"Colors"
	},
	LoginErrors: "enum" as const,
	ProjectInput:{
		color:"Colors"
	},
	CLIMutation:{
		updateReport:{
			uploadReportInput:"UploadReportInput"
		},
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	Colors: "enum" as const,
	GenerateOAuthTokenInput:{
		social:"SocialKind"
	},
	SimpleUserInput:{

	}
}

export const ReturnTypes: Record<string,any> = {
	ReportRun:{
		_id:"String",
		createdAt:"String",
		number:"Int",
		project:"Project",
		report_id:"String",
		results:"TestResult"
	},
	Mutation:{
		admin:"AdminMutation",
		changePasswordWhenLogged:"Boolean",
		changePasswordWithToken:"Boolean",
		cli:"CLIMutation",
		generateOAuthToken:"String",
		integrateSocialAccount:"Boolean",
		register:"RegisterResponse",
		verifyEmail:"Boolean"
	},
	RegisterResponse:{
		hasError:"RegisterErrors",
		registered:"Boolean"
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
	ProviderLoginQuery:{
		apple:"ProviderResponse",
		github:"ProviderResponse",
		google:"ProviderResponse"
	},
	LoginQuery:{
		password:"LoginResponse",
		provider:"ProviderLoginQuery"
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
	TestReport:{
		_id:"String",
		createdAt:"String",
		project:"Project",
		runs:"ReportRun"
	},
	LoginResponse:{
		hasError:"LoginErrors",
		login:"String"
	},
	AdminQuery:{
		me:"User",
		projects:"Project",
		reportById:"TestReport"
	},
	Project:{
		_id:"String",
		color:"Colors",
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
	ProjectMutation:{
		createKey:"String",
		deleteKey:"Boolean"
	},
	TestResult:{
		featureContent:"String",
		inherited:"String",
		reasonOfFail:"String",
		scenario:"String",
		testContent:"String",
		testPath:"String"
	},
	CLIMutation:{
		updateReport:"String",
		uploadReport:"String"
	},
	CLIQuery:{
		getReport:"TestReport",
		getReports:"ReportInfo"
	},
	ReportInfo:{
		numberOfFailedResults:"Int",
		numberOfResults:"Int",
		numberOfRuns:"Int",
		projectId:"String",
		projectName:"String",
		reportId:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}