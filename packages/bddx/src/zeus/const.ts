/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	ProviderLoginInput:{

	},
	Project:{
		reports:{
			filterDate:"DateInput"
		}
	},
	DateInput:{

	},
	ChangePasswordWhenLoggedInput:{

	},
	UpdateReportInput:{
		results:"TestResultInput"
	},
	RegisterErrors: "enum" as const,
	SocialKind: "enum" as const,
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
	ProjectMutation:{
		deleteKey:{

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
	GetOAuthInput:{

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
	UpdateProjectInput:{
		color:"Colors"
	},
	UploadReportInput:{
		results:"TestResultInput"
	},
	GenerateOAuthTokenInput:{
		social:"SocialKind"
	},
	LoginInput:{

	},
	ProviderErrors: "enum" as const,
	Colors: "enum" as const,
	RegisterInput:{

	},
	Query:{
		getAppleOAuthLink:{
			setup:"GetOAuthInput"
		},
		getGithubOAuthLink:{
			setup:"GetOAuthInput"
		},
		getGoogleOAuthLink:{
			setup:"GetOAuthInput"
		},
		requestForForgotPassword:{

		}
	},
	CLIMutation:{
		updateReport:{
			updateReportInput:"UpdateReportInput"
		},
		uploadReport:{
			uploadReportInput:"UploadReportInput"
		}
	},
	TestResultInput:{

	},
	LoginErrors: "enum" as const,
	AdminQuery:{
		reportById:{

		},
		reports:{
			filterDate:"DateInput"
		}
	},
	ProjectInput:{
		color:"Colors"
	},
	VerifyEmailInput:{

	},
	SimpleUserInput:{

	}
}

export const ReturnTypes: Record<string,any> = {
	Project:{
		_id:"String",
		color:"Colors",
		issueAddUrl:"String",
		keys:"String",
		name:"String",
		reports:"TestReport"
	},
	TestReport:{
		_id:"String",
		createdAt:"String",
		key:"String",
		name:"String",
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
	LoginQuery:{
		password:"LoginResponse",
		provider:"ProviderLoginQuery"
	},
	ProviderLoginQuery:{
		apple:"ProviderResponse",
		github:"ProviderResponse",
		google:"ProviderResponse"
	},
	ProviderResponse:{
		access_token:"String",
		hasError:"ProviderErrors",
		jwt:"String"
	},
	ReportInfo:{
		numberOfFailedResults:"Int",
		numberOfResults:"Int",
		numberOfRuns:"Int",
		projectId:"String",
		projectName:"String",
		reportId:"String"
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
	RegisterResponse:{
		hasError:"RegisterErrors",
		registered:"Boolean"
	},
	LoginResponse:{
		hasError:"LoginErrors",
		login:"String"
	},
	AdminQuery:{
		me:"User",
		projects:"Project",
		reportById:"TestReport",
		reports:"TestReport"
	},
	TestResult:{
		featureContent:"String",
		inherited:"String",
		reasonOfFail:"String",
		scenario:"String",
		testContent:"String",
		testPath:"String"
	},
	User:{
		username:"String"
	},
	CLIQuery:{
		getReport:"TestReport",
		getReports:"ReportInfo"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const
}