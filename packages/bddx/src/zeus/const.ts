/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	AccountStatus: "enum" as const,
	Activities:{
		all:{
			filters:"ActivitiesFilter"
		},
		workedOn:{
			filters:"ActivitiesFilter"
		}
	},
	ActivitiesArguments:{
		products:"ActivityProduct",
		eventTypes:"ActivityEventType",
		objectTypes:"ActivitiesObjectType",
		transitions:"ActivityTransition",
		earliestStart:"DateTime",
		latestStart:"DateTime"
	},
	ActivitiesContainerType: "enum" as const,
	ActivitiesFilter:{
		type:"ActivitiesFilterType",
		arguments:"ActivitiesArguments"
	},
	ActivitiesFilterType: "enum" as const,
	ActivitiesObject:{
		events:{

		}
	},
	ActivitiesObjectType: "enum" as const,
	Activity:{
		all:{
			filter:"ActivityFilter"
		},
		workedOn:{
			filter:"ActivityFilter"
		}
	},
	ActivityEventType: "enum" as const,
	ActivityFilter:{
		type:"ActivitiesFilterType",
		arguments:"ActivityFilterArgs"
	},
	ActivityFilterArgs:{
		transitions:"TransitionFilter",
		earliestStart:"DateTime",
		latestStart:"DateTime"
	},
	ActivityObjectType: "enum" as const,
	ActivityProduct: "enum" as const,
	ActivityTransition:{

	},
	AddAppContributorInput:{
		role:"AppContributorRole"
	},
	AddCompassComponentLabelsInput:{

	},
	AddPolarisColumnInput:{

	},
	ApiContext: "enum" as const,
	ApiGroup: "enum" as const,
	App:{
		environmentByKey:{

		}
	},
	AppContributorRole: "enum" as const,
	AppDeploymentEventLogLevel: "enum" as const,
	AppDeploymentStatus: "enum" as const,
	AppDeploymentStepStatus: "enum" as const,
	AppEnvironment:{
		versions:{

		}
	},
	AppEnvironmentInput:{

	},
	AppEnvironmentType: "enum" as const,
	AppEnvironmentVariableInput:{

	},
	AppInstallationInput:{
		licenseOverride:"LicenseOverrideState"
	},
	AppInstallationUpgradeInput:{
		sourceBillingType:"sourceBillingType"
	},
	AppInstallationsByAppFilter:{
		apps:"InstallationsListFilterByApps",
		appEnvironments:"InstallationsListFilterByAppEnvironments",
		appInstallations:"InstallationsListFilterByAppInstallations"
	},
	AppInstallationsByContextFilter:{
		appInstallations:"InstallationsListFilterByAppInstallationsWithCompulsoryContexts",
		apps:"InstallationsListFilterByApps"
	},
	AppInstallationsFilter:{
		environmentType:"AppEnvironmentType"
	},
	AppLog:{
		appLogLines:{

		}
	},
	AppNetworkPermissionType: "enum" as const,
	AppNetworkPermissionTypeExtension: "enum" as const,
	AppSecurityPoliciesPermissionType: "enum" as const,
	AppSecurityPoliciesPermissionTypeExtension: "enum" as const,
	AppServicesFilter:{

	},
	AppStorageMutation:{
		setAppStoredEntity:{
			input:"SetAppStoredEntityMutationInput"
		},
		deleteAppStoredEntity:{
			input:"DeleteAppStoredEntityMutationInput"
		}
	},
	AppStoredEntityCondition: "enum" as const,
	AppStoredEntityFieldValue: `scalar.AppStoredEntityFieldValue` as const,
	AppStoredEntityFilter:{
		condition:"AppStoredEntityCondition",
		value:"AppStoredEntityFieldValue"
	},
	AppSubscribeInput:{

	},
	AppTaskState: "enum" as const,
	AppUninstallationInput:{
		licenseOverride:"LicenseOverrideState",
		sourceBillingType:"sourceBillingType"
	},
	AppUnsubscribeInput:{

	},
	ApplyPolarisProjectTemplateInput:{

	},
	AppsFilter:{

	},
	AriGraph:{
		relationship:{

		},
		relationships:{
			filter:"AriGraphRelationshipsFilter",
			sort:"AriGraphRelationshipsSort"
		}
	},
	AriGraphCreateRelationshipsInput:{
		relationships:"AriGraphCreateRelationshipsInputRelationship"
	},
	AriGraphCreateRelationshipsInputRelationship:{
		sequenceNumber:"Long",
		updatedAt:"DateTime"
	},
	AriGraphDeleteRelationshipsInput:{

	},
	AriGraphMutation:{
		createRelationships:{
			input:"AriGraphCreateRelationshipsInput"
		},
		replaceRelationships:{
			input:"AriGraphReplaceRelationshipsInput"
		},
		deleteRelationships:{
			input:"AriGraphDeleteRelationshipsInput"
		}
	},
	AriGraphRelationshipsFilter:{
		updatedFrom:"DateTime",
		updatedTo:"DateTime"
	},
	AriGraphRelationshipsSort:{
		lastUpdatedSortDirection:"AriGraphRelationshipsSortDirection"
	},
	AriGraphRelationshipsSortDirection: "enum" as const,
	AriGraphReplaceRelationshipsInput:{
		sequenceNumber:"Long",
		updatedAt:"DateTime",
		relationships:"AriGraphReplaceRelationshipsInputRelationship"
	},
	AriGraphReplaceRelationshipsInputRelationship:{

	},
	AssignIssueParentInput:{

	},
	AtlassianProductHostingType: "enum" as const,
	AttachCompassComponentDataManagerInput:{
		externalSourceURL:"URL"
	},
	AttachEventSourceInput:{

	},
	AuxEffectsInvocationPayload:{
		state:"JSON",
		effects:"JSON",
		context:"JSON",
		extensionPayload:"JSON",
		config:"JSON"
	},
	AvatarInput:{

	},
	Avocado:{
		questionsByAri:{

		},
		answersByAri:{

		}
	},
	Backlog:{
		cards:{

		}
	},
	BitbucketPermission: "enum" as const,
	BitbucketQuery:{
		bitbucketRepository:{

		},
		bitbucketRepositories:{

		},
		bitbucketWorkspace:{

		}
	},
	BitbucketRepository:{
		jiraProjectRelationships:{
			filter:"JiraProjectAndRepositoryRelationshipFilter",
			sort:"JiraProjectAndRepositoryRelationshipSort"
		},
		devOpsServiceRelationships:{
			filter:"DevOpsServiceAndRepositoryRelationshipFilter",
			sort:"DevOpsServiceAndRepositoryRelationshipSort"
		}
	},
	BitbucketWorkspace:{
		repositories:{
			permissionFilter:"BitbucketPermission"
		}
	},
	BoardCardMoveInput:{
		rank:"CardRank"
	},
	BoardFeatureGroup:{
		features:{

		}
	},
	BoardFeatureStatus: "enum" as const,
	BoardFeatureToggleStatus: "enum" as const,
	BoardScope:{
		sprints:{
			state:"SprintState"
		},
		cards:{

		},
		sprint:{

		},
		startSprintPrototype:{

		},
		filteredCardIds:{

		}
	},
	BuiltinPolarisIdeaField: "enum" as const,
	BurndownChart:{
		chart:{
			estimation:"SprintReportsEstimationStatisticType"
		}
	},
	CardHierarchyLevelEnumType: "enum" as const,
	CardPaletteColor: `scalar.CardPaletteColor` as const,
	CardParentCreateInput:{
		newIssueParents:"NewCardParent"
	},
	CardParentRankInput:{
		rankBeforeIssueParentId:"Long",
		rankAfterIssueParentId:"Long"
	},
	CardRank:{

	},
	CardTypeHierarchyLevelType: `scalar.CardTypeHierarchyLevelType` as const,
	CheckConsentPermissionByOAuthClientIdInput:{

	},
	Classification: "enum" as const,
	Column:{
		cards:{

		}
	},
	ColumnInSwimlane:{
		cards:{

		}
	},
	CompassAcknowledgeAnnouncementInput:{

	},
	CompassAddTeamLabelsInput:{

	},
	CompassAlertEventPropertiesInput:{

	},
	CompassBuildEventPipelineInput:{

	},
	CompassBuildEventPropertiesInput:{
		state:"CompassBuildEventState",
		pipeline:"CompassBuildEventPipelineInput",
		startedAt:"DateTime",
		completedAt:"DateTime"
	},
	CompassBuildEventState: "enum" as const,
	CompassCatalogMutationApi:{
		createComponent:{
			input:"CreateCompassComponentInput"
		},
		updateComponent:{
			input:"UpdateCompassComponentInput"
		},
		updateComponentType:{
			input:"UpdateCompassComponentTypeInput"
		},
		deleteComponent:{
			input:"DeleteCompassComponentInput"
		},
		createComponentLink:{
			input:"CreateCompassComponentLinkInput"
		},
		updateComponentLink:{
			input:"UpdateCompassComponentLinkInput"
		},
		deleteComponentLink:{
			input:"DeleteCompassComponentLinkInput"
		},
		attachComponentDataManager:{
			input:"AttachCompassComponentDataManagerInput"
		},
		detachComponentDataManager:{
			input:"DetachCompassComponentDataManagerInput"
		},
		updateComponentDataManagerMetadata:{
			input:"UpdateCompassComponentDataManagerMetadataInput"
		},
		createComponentExternalAlias:{
			input:"CreateCompassComponentExternalAliasInput"
		},
		deleteComponentExternalAlias:{
			input:"DeleteCompassComponentExternalAliasInput"
		},
		createComponentSubscription:{
			input:"CompassCreateComponentSubscriptionInput"
		},
		deleteComponentSubscription:{
			input:"CompassDeleteComponentSubscriptionInput"
		},
		unlinkExternalSource:{
			input:"UnlinkExternalSourceInput"
		},
		createRelationship:{
			input:"CreateCompassRelationshipInput"
		},
		deleteRelationship:{
			input:"DeleteCompassRelationshipInput"
		},
		addComponentLabels:{
			input:"AddCompassComponentLabelsInput"
		},
		removeComponentLabels:{
			input:"RemoveCompassComponentLabelsInput"
		},
		createScorecard:{
			input:"CreateCompassScorecardInput"
		},
		updateScorecard:{
			input:"UpdateCompassScorecardInput"
		},
		deleteScorecard:{

		},
		applyScorecardToComponent:{

		},
		removeScorecardFromComponent:{

		},
		createScorecardCriterias:{
			input:"CreateCompassScorecardCriteriasInput"
		},
		updateScorecardCriterias:{
			input:"UpdateCompassScorecardCriteriasInput"
		},
		deleteScorecardCriterias:{
			input:"DeleteCompassScorecardCriteriasInput"
		},
		createAnnouncement:{
			input:"CompassCreateAnnouncementInput"
		},
		updateAnnouncement:{
			input:"CompassUpdateAnnouncementInput"
		},
		deleteAnnouncement:{
			input:"CompassDeleteAnnouncementInput"
		},
		acknowledgeAnnouncement:{
			input:"CompassAcknowledgeAnnouncementInput"
		},
		createEventSource:{
			input:"CreateEventSourceInput"
		},
		deleteEventSource:{
			input:"DeleteEventSourceInput"
		},
		createCompassEvent:{
			input:"CompassCreateEventInput"
		},
		attachEventSource:{
			input:"AttachEventSourceInput"
		},
		detachEventSource:{
			input:"DetachEventSourceInput"
		},
		createStarredComponent:{
			input:"CreateCompassStarredComponentInput"
		},
		deleteStarredComponent:{
			input:"DeleteCompassStarredComponentInput"
		},
		createTeamCheckin:{
			input:"CompassCreateTeamCheckinInput"
		},
		updateTeamCheckin:{
			input:"CompassUpdateTeamCheckinInput"
		},
		deleteTeamCheckin:{
			input:"CompassDeleteTeamCheckinInput"
		},
		addTeamLabels:{
			input:"CompassAddTeamLabelsInput"
		},
		removeTeamLabels:{
			input:"CompassRemoveTeamLabelsInput"
		},
		createMetricDefinition:{
			input:"CompassCreateMetricDefinitionInput"
		},
		updateMetricDefinition:{
			input:"CompassUpdateMetricDefinitionInput"
		},
		deleteMetricDefinition:{
			input:"CompassDeleteMetricDefinitionInput"
		},
		createMetricSource:{
			input:"CompassCreateMetricSourceInput"
		},
		deleteMetricSource:{
			input:"CompassDeleteMetricSourceInput"
		},
		insertMetricValue:{
			input:"CompassInsertMetricValueInput"
		},
		insertMetricValueByExternalId:{
			input:"CompassInsertMetricValueByExternalIdInput"
		},
		synchronizeLinkAssociations:{
			input:"CompassSynchronizeLinkAssociationsInput"
		},
		createCustomFieldDefinition:{
			input:"CompassCreateCustomFieldDefinitionInput"
		},
		updateCustomFieldDefinition:{
			input:"CompassUpdateCustomFieldDefinitionInput"
		},
		deleteCustomFieldDefinition:{
			input:"CompassDeleteCustomFieldDefinitionInput"
		}
	},
	CompassCatalogQueryApi:{
		component:{

		},
		componentByExternalAlias:{

		},
		componentType:{

		},
		componentTypes:{
			query:"CompassComponentTypeQueryInput"
		},
		fieldDefinitionsByComponentType:{
			input:"CompassComponentType"
		},
		searchComponents:{
			query:"CompassSearchComponentQuery"
		},
		searchComponentLabels:{
			query:"CompassSearchComponentLabelsQuery"
		},
		scorecard:{

		},
		scorecards:{
			query:"CompassScorecardsQuery"
		},
		starredComponents:{
			query:"CompassStarredComponentQuery"
		},
		teamCheckins:{
			input:"CompassTeamCheckinsInput"
		},
		teamData:{
			input:"CompassTeamDataInput"
		},
		searchTeams:{
			input:"CompassSearchTeamsInput"
		},
		searchTeamLabels:{
			input:"CompassSearchTeamLabelsInput"
		},
		metricDefinitions:{
			query:"CompassMetricDefinitionsQuery"
		},
		metricDefinition:{

		},
		eventSource:{
			eventType:"CompassEventType"
		},
		customFieldDefinitions:{
			query:"CompassCustomFieldDefinitionsQuery"
		},
		metricValuesTimeSeries:{

		}
	},
	CompassComponent:{
		relationships:{
			query:"CompassRelationshipQuery"
		},
		events:{
			query:"CompassEventsQuery"
		},
		scorecardScore:{
			query:"CompassComponentScorecardScoreQuery"
		},
		metricSources:{
			query:"CompassComponentMetricSourcesQuery"
		}
	},
	CompassComponentMetricSourcesQuery:{

	},
	CompassComponentScorecardScoreQuery:{

	},
	CompassComponentType: "enum" as const,
	CompassComponentTypeQueryInput:{

	},
	CompassCreateAlertEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		alertProperties:"CompassAlertEventPropertiesInput"
	},
	CompassCreateAnnouncementInput:{
		targetDate:"DateTime"
	},
	CompassCreateBuildEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		buildProperties:"CompassBuildEventPropertiesInput"
	},
	CompassCreateComponentSubscriptionInput:{

	},
	CompassCreateCustomBooleanFieldDefinitionInput:{
		componentTypes:"CompassComponentType"
	},
	CompassCreateCustomEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		customEventProperties:"CompassCustomEventPropertiesInput"
	},
	CompassCreateCustomFieldDefinitionInput:{
		booleanFieldDefinition:"CompassCreateCustomBooleanFieldDefinitionInput",
		textFieldDefinition:"CompassCreateCustomTextFieldDefinitionInput",
		numberFieldDefinition:"CompassCreateCustomNumberFieldDefinitionInput"
	},
	CompassCreateCustomNumberFieldDefinitionInput:{
		componentTypes:"CompassComponentType"
	},
	CompassCreateCustomTextFieldDefinitionInput:{
		componentTypes:"CompassComponentType"
	},
	CompassCreateDeploymentEventInput:{
		updateSequenceNumber:"Long",
		url:"URL",
		lastUpdated:"DateTime",
		deploymentProperties:"CompassCreateDeploymentEventPropertiesInput"
	},
	CompassCreateDeploymentEventPropertiesInput:{
		sequenceNumber:"Long",
		state:"CompassDeploymentEventState",
		pipeline:"CompassDeploymentEventPipelineInput",
		environment:"CompassDeploymentEventEnvironmentInput",
		startedAt:"DateTime",
		completedAt:"DateTime"
	},
	CompassCreateEventInput:{
		event:"CompassEventInput"
	},
	CompassCreateFlagEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		flagProperties:"CompassCreateFlagEventPropertiesInput"
	},
	CompassCreateFlagEventPropertiesInput:{

	},
	CompassCreateHasCustomBooleanFieldScorecardCriteriaInput:{
		booleanComparator:"CompassCriteriaBooleanComparatorOptions"
	},
	CompassCreateHasCustomNumberFieldScorecardCriteriaInput:{
		numberComparator:"CompassCriteriaNumberComparatorOptions"
	},
	CompassCreateHasCustomTextFieldScorecardCriteriaInput:{

	},
	CompassCreateIncidentEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		incidentProperties:"CompassCreateIncidentEventPropertiesInput"
	},
	CompassCreateIncidentEventPropertiesInput:{
		state:"CompassIncidentEventState",
		severity:"CompassIncidentEventSeverityInput",
		startTime:"DateTime",
		endTime:"DateTime"
	},
	CompassCreateLifecycleEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		lifecycleProperties:"CompassLifecycleEventInputProperties"
	},
	CompassCreateMetricDefinitionInput:{
		format:"CompassMetricDefinitionFormatInput"
	},
	CompassCreateMetricSourceInput:{
		externalConfiguration:"CompassExternalMetricSourceConfigurationInput"
	},
	CompassCreatePushEventInput:{
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		url:"URL",
		pushEventProperties:"CompassPushEventInputProperties"
	},
	CompassCreateTeamCheckinActionInput:{

	},
	CompassCreateTeamCheckinInput:{
		response1RichText:"CompassCreateTeamCheckinResponseRichText",
		response2RichText:"CompassCreateTeamCheckinResponseRichText",
		response3RichText:"CompassCreateTeamCheckinResponseRichText",
		actions:"CompassCreateTeamCheckinActionInput"
	},
	CompassCreateTeamCheckinResponseRichText:{

	},
	CompassCriteriaBooleanComparatorOptions: "enum" as const,
	CompassCriteriaNumberComparatorOptions: "enum" as const,
	CompassCustomBooleanFieldInput:{

	},
	CompassCustomEventIcon: "enum" as const,
	CompassCustomEventPropertiesInput:{
		icon:"CompassCustomEventIcon"
	},
	CompassCustomFieldDefinitionsQuery:{
		componentTypes:"CompassComponentType"
	},
	CompassCustomFieldInput:{
		booleanField:"CompassCustomBooleanFieldInput",
		textField:"CompassCustomTextFieldInput",
		numberField:"CompassCustomNumberFieldInput"
	},
	CompassCustomFieldScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassCustomNumberFieldInput:{

	},
	CompassCustomTextFieldInput:{

	},
	CompassDeleteAnnouncementInput:{

	},
	CompassDeleteComponentSubscriptionInput:{

	},
	CompassDeleteCustomFieldDefinitionInput:{

	},
	CompassDeleteMetricDefinitionInput:{

	},
	CompassDeleteMetricSourceInput:{

	},
	CompassDeleteTeamCheckinActionInput:{

	},
	CompassDeleteTeamCheckinInput:{

	},
	CompassDeploymentEventEnvironmentCategory: "enum" as const,
	CompassDeploymentEventEnvironmentInput:{
		category:"CompassDeploymentEventEnvironmentCategory"
	},
	CompassDeploymentEventPipelineInput:{

	},
	CompassDeploymentEventState: "enum" as const,
	CompassEnumFieldValueInput:{

	},
	CompassEventInput:{
		deployment:"CompassCreateDeploymentEventInput",
		build:"CompassCreateBuildEventInput",
		incident:"CompassCreateIncidentEventInput",
		flag:"CompassCreateFlagEventInput",
		alert:"CompassCreateAlertEventInput",
		lifecycle:"CompassCreateLifecycleEventInput",
		custom:"CompassCreateCustomEventInput",
		push:"CompassCreatePushEventInput"
	},
	CompassEventTimeParameters:{
		startFrom:"DateTime",
		endAt:"DateTime"
	},
	CompassEventType: "enum" as const,
	CompassEventsInEventSourceQuery:{
		timeParameters:"CompassEventTimeParameters"
	},
	CompassEventsQuery:{
		eventTypes:"CompassEventType",
		timeParameters:"CompassEventTimeParameters"
	},
	CompassExternalAliasInput:{

	},
	CompassExternalMetricSourceConfigurationInput:{
		slo:"CompassSloMetricSourceConfigurationInput",
		plain:"CompassPlainMetricSourceConfigurationInput"
	},
	CompassFieldType: "enum" as const,
	CompassFieldValueInput:{
		enum:"CompassEnumFieldValueInput"
	},
	CompassHasCustomBooleanFieldScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasCustomNumberFieldScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasCustomTextFieldScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasDescriptionScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasFieldScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasLinkScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasMetricValueScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassHasOwnerScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassIncidentEventSeverityInput:{
		level:"CompassIncidentEventSeverityLevel"
	},
	CompassIncidentEventSeverityLevel: "enum" as const,
	CompassIncidentEventState: "enum" as const,
	CompassInsertMetricValueByExternalIdInput:{
		value:"CompassMetricValueInput"
	},
	CompassInsertMetricValueInput:{
		value:"CompassMetricValueInput"
	},
	CompassLifecycleEventInputProperties:{
		stage:"CompassLifecycleEventStage"
	},
	CompassLifecycleEventStage: "enum" as const,
	CompassLinkType: "enum" as const,
	CompassMetricDefinition:{
		metricSources:{
			query:"CompassMetricSourcesQuery"
		}
	},
	CompassMetricDefinitionFormatInput:{
		suffix:"CompassMetricDefinitionFormatSuffixInput"
	},
	CompassMetricDefinitionFormatSuffixInput:{

	},
	CompassMetricDefinitionType: "enum" as const,
	CompassMetricDefinitionsQuery:{

	},
	CompassMetricSource:{
		values:{
			query:"CompassMetricSourceValuesQuery"
		}
	},
	CompassMetricSourceValuesQuery:{

	},
	CompassMetricSourcesQuery:{

	},
	CompassMetricValueInput:{
		timestamp:"DateTime"
	},
	CompassPlainMetricSourceConfigurationInput:{

	},
	CompassPushEventAuthorInput:{

	},
	CompassPushEventInputProperties:{
		author:"CompassPushEventAuthorInput"
	},
	CompassQueryFieldFilter:{
		filter:"CompassQueryFilter"
	},
	CompassQueryFilter:{

	},
	CompassQuerySort:{
		order:"CompassQuerySortOrder"
	},
	CompassQuerySortOrder: "enum" as const,
	CompassRelationshipDirection: "enum" as const,
	CompassRelationshipQuery:{
		direction:"CompassRelationshipDirection",
		filters:"CompassRelationshipQueryFilters"
	},
	CompassRelationshipQueryFilters:{
		types:"CompassRelationshipType"
	},
	CompassRelationshipType: "enum" as const,
	CompassRemoveTeamLabelsInput:{

	},
	CompassScorecard:{
		scorecardScore:{
			query:"CompassScorecardScoreQuery"
		},
		appliedToComponents:{
			query:"CompassScorecardAppliedToComponentsQuery"
		}
	},
	CompassScorecardAppliedToComponentsQuery:{
		filter:"CompassScorecardAppliedToComponentsQueryFilter"
	},
	CompassScorecardAppliedToComponentsQueryFilter:{
		score:"CompassScorecardAppliedToComponentsThresholdFilter"
	},
	CompassScorecardAppliedToComponentsThresholdFilter:{

	},
	CompassScorecardCriteria:{
		scorecardCriteriaScore:{
			query:"CompassScorecardCriteriaScoreQuery"
		}
	},
	CompassScorecardCriteriaScoreQuery:{

	},
	CompassScorecardImportance: "enum" as const,
	CompassScorecardScoreQuery:{

	},
	CompassScorecardsQuery:{

	},
	CompassSearchComponentLabelsQuery:{
		sort:"CompassQuerySort"
	},
	CompassSearchComponentQuery:{
		fieldFilters:"CompassQueryFieldFilter",
		sort:"CompassQuerySort"
	},
	CompassSearchTeamLabelsInput:{

	},
	CompassSearchTeamsInput:{

	},
	CompassSloMetricSourceConfigurationInput:{

	},
	CompassStarredComponentQuery:{

	},
	CompassSynchronizeLinkAssociationsInput:{

	},
	CompassTeamCheckinActionInput:{
		create:"CompassCreateTeamCheckinActionInput",
		update:"CompassUpdateTeamCheckinActionInput",
		delete:"CompassDeleteTeamCheckinActionInput"
	},
	CompassTeamCheckinsInput:{

	},
	CompassTeamDataInput:{

	},
	CompassUpdateAnnouncementInput:{
		targetDate:"DateTime"
	},
	CompassUpdateCustomBooleanFieldDefinitionInput:{
		componentTypes:"CompassComponentType"
	},
	CompassUpdateCustomFieldDefinitionInput:{
		booleanFieldDefinition:"CompassUpdateCustomBooleanFieldDefinitionInput",
		textFieldDefinition:"CompassUpdateCustomTextFieldDefinitionInput",
		numberFieldDefinition:"CompassUpdateCustomNumberFieldDefinitionInput"
	},
	CompassUpdateCustomNumberFieldDefinitionInput:{
		componentTypes:"CompassComponentType"
	},
	CompassUpdateCustomTextFieldDefinitionInput:{
		componentTypes:"CompassComponentType"
	},
	CompassUpdateHasCustomBooleanFieldScorecardCriteriaInput:{
		booleanComparator:"CompassCriteriaBooleanComparatorOptions"
	},
	CompassUpdateHasCustomNumberFieldScorecardCriteriaInput:{
		numberComparator:"CompassCriteriaNumberComparatorOptions"
	},
	CompassUpdateHasCustomTextFieldScorecardCriteriaInput:{

	},
	CompassUpdateMetricDefinitionInput:{
		format:"CompassMetricDefinitionFormatInput"
	},
	CompassUpdateTeamCheckinActionInput:{

	},
	CompassUpdateTeamCheckinInput:{
		response1RichText:"CompassUpdateTeamCheckinResponseRichText",
		response2RichText:"CompassUpdateTeamCheckinResponseRichText",
		response3RichText:"CompassUpdateTeamCheckinResponseRichText",
		actions:"CompassTeamCheckinActionInput"
	},
	CompassUpdateTeamCheckinResponseRichText:{

	},
	CompleteSprintInput:{
		incompleteCardsDestination:"SoftwareCardsDestination"
	},
	ComponentSyncEventInput:{
		status:"ComponentSyncEventStatus"
	},
	ComponentSyncEventStatus: "enum" as const,
	ConfigurePolarisRefreshInput:{
		setError:"PolarisRefreshError"
	},
	ConfluenceBlogPost:{
		comments:{
			commentType:"ConfluenceCommentType"
		},
		properties:{

		}
	},
	ConfluenceBlogPostStatus: "enum" as const,
	ConfluenceBodyRepresentation: "enum" as const,
	ConfluenceCollaborativeEditingService: "enum" as const,
	ConfluenceCommentStatus: "enum" as const,
	ConfluenceCommentType: "enum" as const,
	ConfluenceContentBodyInput:{
		representation:"ConfluenceContentRepresentation"
	},
	ConfluenceContentRepresentation: "enum" as const,
	ConfluenceContentType: "enum" as const,
	ConfluenceContributionStatus: "enum" as const,
	ConfluenceCreateBlogPostInput:{
		body:"ConfluenceContentBodyInput",
		status:"ConfluenceMutationContentStatus"
	},
	ConfluenceCreateBlogPostPropertyInput:{

	},
	ConfluenceCreateFooterCommentOnBlogPostInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceCreateFooterCommentOnPageInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceCreatePageInput:{
		body:"ConfluenceContentBodyInput",
		status:"ConfluenceMutationContentStatus"
	},
	ConfluenceCreatePagePropertyInput:{

	},
	ConfluenceCreateSpaceInput:{
		type:"ConfluenceSpaceType"
	},
	ConfluenceCreateUserPropertyInput:{

	},
	ConfluenceDeleteBlogPostPropertyInput:{

	},
	ConfluenceDeleteCommentInput:{

	},
	ConfluenceDeleteDraftBlogPostInput:{

	},
	ConfluenceDeleteDraftPageInput:{

	},
	ConfluenceDeletePagePropertyInput:{

	},
	ConfluenceDeleteUserPropertyInput:{

	},
	ConfluenceInlineCommentResolutionStatus: "enum" as const,
	ConfluenceInlineTaskStatus: "enum" as const,
	ConfluenceMutationApi:{
		createBlogPost:{
			input:"ConfluenceCreateBlogPostInput"
		},
		createBlogPostProperty:{
			input:"ConfluenceCreateBlogPostPropertyInput"
		},
		createFooterCommentOnBlogPost:{
			input:"ConfluenceCreateFooterCommentOnBlogPostInput"
		},
		createFooterCommentOnPage:{
			input:"ConfluenceCreateFooterCommentOnPageInput"
		},
		createPage:{
			input:"ConfluenceCreatePageInput"
		},
		createPageProperty:{
			input:"ConfluenceCreatePagePropertyInput"
		},
		createSpace:{
			input:"ConfluenceCreateSpaceInput"
		},
		deleteBlogPostProperty:{
			input:"ConfluenceDeleteBlogPostPropertyInput"
		},
		deleteComment:{
			input:"ConfluenceDeleteCommentInput"
		},
		deleteDraftBlogPost:{
			input:"ConfluenceDeleteDraftBlogPostInput"
		},
		deleteDraftPage:{
			input:"ConfluenceDeleteDraftPageInput"
		},
		deletePageProperty:{
			input:"ConfluenceDeletePagePropertyInput"
		},
		publishBlogPost:{
			input:"ConfluencePublishBlogPostInput"
		},
		publishPage:{
			input:"ConfluencePublishPageInput"
		},
		purgeBlogPost:{
			input:"ConfluencePurgeBlogPostInput"
		},
		purgePage:{
			input:"ConfluencePurgePageInput"
		},
		reopenInlineComment:{
			input:"ConfluenceReopenInlineCommentInput"
		},
		replyToComment:{
			input:"ConfluenceReplyToCommentInput"
		},
		resolveInlineComment:{
			input:"ConfluenceResolveInlineCommentInput"
		},
		trashBlogPost:{
			input:"ConfluenceTrashBlogPostInput"
		},
		trashPage:{
			input:"ConfluenceTrashPageInput"
		},
		updateComment:{
			input:"ConfluenceUpdateCommentInput"
		},
		updateCurrentBlogPost:{
			input:"ConfluenceUpdateCurrentBlogPostInput"
		},
		updateCurrentPage:{
			input:"ConfluenceUpdateCurrentPageInput"
		},
		updateDraftBlogPost:{
			input:"ConfluenceUpdateDraftBlogPostInput"
		},
		updateDraftPage:{
			input:"ConfluenceUpdateDraftPageInput"
		},
		updateSpace:{
			input:"ConfluenceUpdateSpaceInput"
		},
		updateSpaceSettings:{
			input:"ConfluenceUpdateSpaceSettingsInput"
		},
		updateValueBlogPostProperty:{
			input:"ConfluenceUpdateValueBlogPostPropertyInput"
		},
		updateValuePageProperty:{
			input:"ConfluenceUpdateValuePagePropertyInput"
		},
		createUserProperty:{
			input:"ConfluenceCreateUserPropertyInput"
		},
		updateValueUserProperty:{
			input:"ConfluenceUpdateValueUserPropertyInput"
		},
		deleteUserProperty:{
			input:"ConfluenceDeleteUserPropertyInput"
		}
	},
	ConfluenceMutationContentStatus: "enum" as const,
	ConfluenceOperationName: "enum" as const,
	ConfluenceOperationTarget: "enum" as const,
	ConfluencePage:{
		comments:{
			commentType:"ConfluenceCommentType"
		},
		properties:{

		}
	},
	ConfluencePageStatus: "enum" as const,
	ConfluencePublishBlogPostInput:{

	},
	ConfluencePublishPageInput:{

	},
	ConfluencePurgeBlogPostInput:{

	},
	ConfluencePurgePageInput:{

	},
	ConfluenceQueryApi:{
		blogPost:{

		},
		blogPosts:{

		},
		comment:{

		},
		comments:{

		},
		inlineTask:{

		},
		longTask:{

		},
		findSpaces:{
			filters:"ConfluenceSpaceFilters"
		},
		page:{

		},
		pages:{

		},
		space:{

		},
		spaces:{

		},
		userProperty:{

		},
		userProperties:{

		}
	},
	ConfluenceReopenInlineCommentInput:{

	},
	ConfluenceReplyToCommentInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceResolveInlineCommentInput:{

	},
	ConfluenceSpaceFilters:{
		type:"ConfluenceSpaceType"
	},
	ConfluenceSpaceSettingEditorVersion: "enum" as const,
	ConfluenceSpaceStatus: "enum" as const,
	ConfluenceSpaceType: "enum" as const,
	ConfluenceTrashBlogPostInput:{

	},
	ConfluenceTrashPageInput:{

	},
	ConfluenceUpdateCommentInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceUpdateCurrentBlogPostInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceUpdateCurrentPageInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceUpdateDraftBlogPostInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceUpdateDraftPageInput:{
		body:"ConfluenceContentBodyInput"
	},
	ConfluenceUpdateSpaceInput:{

	},
	ConfluenceUpdateSpaceSettingsInput:{

	},
	ConfluenceUpdateValueBlogPostPropertyInput:{

	},
	ConfluenceUpdateValuePagePropertyInput:{

	},
	ConfluenceUpdateValueUserPropertyInput:{

	},
	ConfluenceUserType: "enum" as const,
	ContentPlatformBooleanOperators: "enum" as const,
	ContentPlatformDateRangeFilter:{
		before:"DateTime",
		after:"DateTime"
	},
	ContentPlatformField:{
		field:"ContentPlatformFieldNames"
	},
	ContentPlatformFieldNames: "enum" as const,
	ContentPlatformOperators: "enum" as const,
	ContentPlatformReleaseNoteFilterOptions:{
		productFeatureFlags:"JSON",
		updatedAt:"ContentPlatformDateRangeFilter"
	},
	ContentPlatformSearchOptions:{
		queries:"ContentPlatformSearchQuery",
		operator:"ContentPlatformBooleanOperators"
	},
	ContentPlatformSearchQuery:{
		searchType:"ContentPlatformSearchTypes",
		termOperator:"ContentPlatformOperators",
		fields:"ContentPlatformField",
		fieldOperator:"ContentPlatformOperators"
	},
	ContentPlatformSearchTypes: "enum" as const,
	CopyPolarisInsightsContainerInput:{

	},
	CopyPolarisInsightsInput:{
		source:"CopyPolarisInsightsContainerInput",
		destination:"CopyPolarisInsightsContainerInput"
	},
	CreateAppDeploymentInput:{
		artifactUrl:"URL"
	},
	CreateAppDeploymentUrlInput:{

	},
	CreateAppInput:{

	},
	CreateAppTunnelsInput:{
		tunnelDefinitions:"TunnelDefinitionsInput"
	},
	CreateColumnInput:{

	},
	CreateCompassComponentExternalAliasInput:{
		externalAlias:"CompassExternalAliasInput"
	},
	CreateCompassComponentInput:{
		type:"CompassComponentType",
		fields:"CreateCompassFieldInput",
		customFields:"CompassCustomFieldInput"
	},
	CreateCompassComponentLinkInput:{
		link:"CreateCompassLinkInput"
	},
	CreateCompassFieldInput:{
		value:"CompassFieldValueInput"
	},
	CreateCompassHasDescriptionScorecardCriteriaInput:{

	},
	CreateCompassHasFieldScorecardCriteriaInput:{

	},
	CreateCompassHasLinkScorecardCriteriaInput:{
		linkType:"CompassLinkType"
	},
	CreateCompassHasMetricValueCriteriaInput:{
		comparator:"CompassCriteriaNumberComparatorOptions"
	},
	CreateCompassHasOwnerScorecardCriteriaInput:{

	},
	CreateCompassLinkInput:{
		type:"CompassLinkType",
		url:"URL"
	},
	CreateCompassRelationshipInput:{
		type:"CompassRelationshipType"
	},
	CreateCompassScorecardCriteriaInput:{
		hasLink:"CreateCompassHasLinkScorecardCriteriaInput",
		hasField:"CreateCompassHasFieldScorecardCriteriaInput",
		hasDescription:"CreateCompassHasDescriptionScorecardCriteriaInput",
		hasOwner:"CreateCompassHasOwnerScorecardCriteriaInput",
		hasMetricValue:"CreateCompassHasMetricValueCriteriaInput",
		hasCustomTextValue:"CompassCreateHasCustomTextFieldScorecardCriteriaInput",
		hasCustomBooleanValue:"CompassCreateHasCustomBooleanFieldScorecardCriteriaInput",
		hasCustomNumberValue:"CompassCreateHasCustomNumberFieldScorecardCriteriaInput"
	},
	CreateCompassScorecardCriteriasInput:{
		criterias:"CreateCompassScorecardCriteriaInput"
	},
	CreateCompassScorecardInput:{
		componentType:"CompassComponentType",
		importance:"CompassScorecardImportance",
		criterias:"CreateCompassScorecardCriteriaInput"
	},
	CreateCompassStarredComponentInput:{

	},
	CreateCustomFilterInput:{

	},
	CreateDevOpsServiceAndJiraProjectRelationshipInput:{
		relationshipType:"DevOpsServiceAndJiraProjectRelationshipType",
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	CreateDevOpsServiceAndOpsgenieTeamRelationshipInput:{
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	CreateDevOpsServiceAndRepositoryRelationshipInput:{
		thirdPartyRepository:"ThirdPartyRepositoryInput",
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	CreateDevOpsServiceInput:{
		properties:"DevOpsServiceEntityPropertyInput",
		serviceTier:"DevOpsServiceTierInput"
	},
	CreateDevOpsServiceRelationshipInput:{
		type:"DevOpsServiceRelationshipType",
		properties:"DevOpsServiceEntityPropertyInput"
	},
	CreateEventSourceInput:{
		eventType:"CompassEventType"
	},
	CreateHostedResourceUploadUrlInput:{

	},
	CreateJiraProjectAndOpsgenieTeamRelationshipInput:{
		jiraProjectType:"DevOpsJiraProjectType",
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	CreateJiraProjectAndRepositoryRelationshipInput:{
		thirdPartyRepository:"ThirdPartyRepositoryInput",
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	CreatePolarisCalculatedField:{
		formula:"JSON",
		presentation:"PolarisPresentationInput"
	},
	CreatePolarisCommentInput:{
		kind:"PolarisCommentKind",
		content:"JSON"
	},
	CreatePolarisDecorationInput:{
		update:"UpdatePolarisDecorationInput"
	},
	CreatePolarisIdeaTemplateInput:{
		template:"JSON"
	},
	CreatePolarisInsightFromPlayContributionInput:{

	},
	CreatePolarisInsightInput:{
		data:"JSON",
		snippets:"CreatePolarisSnippetInput",
		description:"JSON"
	},
	CreatePolarisPlayContribution:{
		comment:"JSON"
	},
	CreatePolarisPlayInput:{
		kind:"PolarisPlayKind",
		parameters:"JSON",
		description:"JSON"
	},
	CreatePolarisProjectInput:{

	},
	CreatePolarisSnippetInput:{
		data:"JSON",
		properties:"JSON"
	},
	CreatePolarisStandardFieldInput:{
		fieldType:"PolarisFieldType",
		presentation:"PolarisPresentationInput"
	},
	CreatePolarisViewInput:{
		visualizationType:"PolarisVisualizationType",
		update:"UpdatePolarisViewInput"
	},
	CreatePolarisViewSetInput:{

	},
	CreateRankingListInput:{

	},
	CreateSprintInput:{

	},
	CumulativeFlowDiagram:{
		chart:{

		}
	},
	CustomUITunnelDefinitionInput:{
		tunnelUrl:"URL"
	},
	Date: `scalar.Date` as const,
	DateSearchInput:{

	},
	DateTime: `scalar.DateTime` as const,
	DeleteAppEnvironmentVariableInput:{
		environment:"AppEnvironmentInput"
	},
	DeleteAppInput:{

	},
	DeleteAppStoredEntityMutationInput:{

	},
	DeleteAppTunnelInput:{

	},
	DeleteCardInput:{

	},
	DeleteColumnInput:{

	},
	DeleteCompassComponentExternalAliasInput:{
		externalAlias:"CompassExternalAliasInput"
	},
	DeleteCompassComponentInput:{

	},
	DeleteCompassComponentLinkInput:{

	},
	DeleteCompassRelationshipInput:{
		type:"CompassRelationshipType"
	},
	DeleteCompassScorecardCriteriaInput:{

	},
	DeleteCompassScorecardCriteriasInput:{
		criterias:"DeleteCompassScorecardCriteriaInput"
	},
	DeleteCompassStarredComponentInput:{

	},
	DeleteCustomFilterInput:{

	},
	DeleteDevOpsContainerRelationshipEntityPropertiesInput:{

	},
	DeleteDevOpsServiceAndJiraProjectRelationshipInput:{

	},
	DeleteDevOpsServiceAndOpsgenieTeamRelationshipInput:{

	},
	DeleteDevOpsServiceAndRepositoryRelationshipInput:{

	},
	DeleteDevOpsServiceEntityPropertiesInput:{

	},
	DeleteDevOpsServiceInput:{

	},
	DeleteDevOpsServiceRelationshipInput:{

	},
	DeleteEventSourceInput:{
		eventType:"CompassEventType"
	},
	DeleteJiraProjectAndOpsgenieTeamRelationshipInput:{

	},
	DeleteJiraProjectAndRepositoryRelationshipInput:{

	},
	DeletePolarisDecorationInput:{

	},
	DeletePolarisFieldOptionInput:{

	},
	DeletePolarisIdeaTemplateInput:{

	},
	DeleteSprintInput:{

	},
	DeleteUserGrantInput:{

	},
	DeploymentState: "enum" as const,
	DetachCompassComponentDataManagerInput:{

	},
	DetachEventSourceInput:{

	},
	DevOps:{
		entitiesByAssociations:{

		},
		summarisedDeployments:{

		},
		pullRequestEntityDetails:{

		},
		summarisedEntities:{

		},
		dataDepotProviders:{
			providerTypes:"DevOpsDataDepotProviderType"
		},
		securityVulnerabilityEntityDetails:{

		}
	},
	DevOpsContainerRelationshipEntityPropertyInput:{
		value:"JSON"
	},
	DevOpsDataDepotProviderType: "enum" as const,
	DevOpsDataDepotSecurityProvider:{
		linkedSecurityWorkspaces:{

		}
	},
	DevOpsEntities:{
		featureFlagEntities:{

		}
	},
	DevOpsEnvironmentCategory: "enum" as const,
	DevOpsFeatureFlag:{
		details:{

		}
	},
	DevOpsJiraProjectType: "enum" as const,
	DevOpsMetrics:{
		deploymentFrequency:{
			filter:"DevOpsMetricsFilterInput",
			environmentCategory:"DevOpsEnvironmentCategory",
			rollupType:"DevOpsMetricsRollupType"
		},
		deploymentSize:{
			filter:"DevOpsMetricsFilterInput",
			environmentCategory:"DevOpsEnvironmentCategory",
			rollupType:"DevOpsMetricsRollupType"
		},
		cycleTime:{
			filter:"DevOpsMetricsFilterInput"
		},
		perIssueMetrics:{
			filter:"DevOpsMetricsPerIssueMetricsFilter"
		},
		perDeploymentMetrics:{
			filter:"DevOpsMetricsPerDeploymentMetricsFilter"
		}
	},
	DevOpsMetricsCycleTimePhase: "enum" as const,
	DevOpsMetricsFilterInput:{
		startFromInclusive:"DateTime",
		endAtExclusive:"DateTime",
		resolution:"DevOpsMetricsResolutionInput",
		issueFilters:"DevOpsMetricsIssueFilters"
	},
	DevOpsMetricsIssueFilters:{

	},
	DevOpsMetricsPerDeploymentMetricsFilter:{
		startFromInclusive:"DateTime",
		endAtExclusive:"DateTime",
		environmentCategories:"DevOpsEnvironmentCategory"
	},
	DevOpsMetricsPerIssueMetricsFilter:{
		startFromInclusive:"DateTime",
		endAtExclusive:"DateTime",
		issueFilters:"DevOpsMetricsIssueFilters"
	},
	DevOpsMetricsResolutionInput:{
		unit:"DevOpsMetricsResolutionUnit"
	},
	DevOpsMetricsResolutionUnit: "enum" as const,
	DevOpsMetricsRollupOption: "enum" as const,
	DevOpsMetricsRollupType:{
		type:"DevOpsMetricsRollupOption"
	},
	DevOpsPullRequestApprovalStatus: "enum" as const,
	DevOpsPullRequestStatus: "enum" as const,
	DevOpsRelationshipCertainty: "enum" as const,
	DevOpsRelationshipCertaintyFilter: "enum" as const,
	DevOpsRepositoryHostingProviderFilter: "enum" as const,
	DevOpsSecurityVulnerabilitySeverity: "enum" as const,
	DevOpsSecurityVulnerabilityStatus: "enum" as const,
	DevOpsService:{
		properties:{

		},
		jiraProjects:{
			filter:"DevOpsServiceAndJiraProjectRelationshipFilter"
		},
		repositoryRelationships:{
			filter:"DevOpsServiceAndRepositoryRelationshipFilter",
			sort:"DevOpsServiceAndRepositoryRelationshipSort"
		},
		containsDevOpsServiceRelationships:{

		},
		dependedOnByDevOpsServiceRelationships:{

		},
		dependsOnDevOpsServiceRelationships:{

		},
		servicesAvailableToLinkWith:{
			filter:"DevOpsServicesFilterInput"
		},
		opsgenieTeamsAvailableToLinkWith:{

		},
		bitbucketRepositoriesAvailableToLinkWith:{

		}
	},
	DevOpsServiceAndJiraProjectRelationship:{
		properties:{

		}
	},
	DevOpsServiceAndJiraProjectRelationshipFilter:{
		certainty:"DevOpsRelationshipCertaintyFilter",
		relationshipTypeIn:"DevOpsServiceAndJiraProjectRelationshipType"
	},
	DevOpsServiceAndJiraProjectRelationshipType: "enum" as const,
	DevOpsServiceAndOpsgenieTeamRelationship:{
		properties:{

		}
	},
	DevOpsServiceAndRepositoryRelationship:{
		properties:{

		}
	},
	DevOpsServiceAndRepositoryRelationshipFilter:{
		certainty:"DevOpsRelationshipCertaintyFilter",
		hostingProvider:"DevOpsRepositoryHostingProviderFilter"
	},
	DevOpsServiceAndRepositoryRelationshipSort:{
		by:"DevOpsServiceAndRepositoryRelationshipSortBy",
		order:"SortDirection"
	},
	DevOpsServiceAndRepositoryRelationshipSortBy: "enum" as const,
	DevOpsServiceEntityPropertyInput:{
		value:"JSON"
	},
	DevOpsServiceRelationship:{
		properties:{

		}
	},
	DevOpsServiceRelationshipType: "enum" as const,
	DevOpsServiceTierInput:{

	},
	DevOpsServicesFilterInput:{

	},
	DevOpsTool:{
		namespaces:{

		},
		containerRelationships:{
			filter:"AriGraphRelationshipsFilter",
			sort:"AriGraphRelationshipsSort"
		},
		jiraProjectRelationships:{
			filter:"JiraProjectAndDevOpsToolRelationshipFilter"
		}
	},
	DevOpsToolConnectionState: "enum" as const,
	DevOpsToolGroup:{
		categories:{

		}
	},
	DevOpsToolIntegrationType: "enum" as const,
	DevOpsToolNamespace:{
		containers:{

		}
	},
	DevOpsToolNavbarConnectionStateTab: "enum" as const,
	DevOpsToolSort:{
		name:"DevOpsToolSortOrder",
		supportsContainers:"DevOpsToolSortOrder",
		integration:"DevOpsToolSortOrder",
		recommended:"DevOpsToolSortOrder"
	},
	DevOpsToolSortOrder: "enum" as const,
	DevOpsToolUpdateNavbarConnectionStateTabSeenInput:{
		tab:"DevOpsToolNavbarConnectionStateTab"
	},
	DevOpsTools:{
		tools:{
			integrationType:"DevOpsToolIntegrationType",
			sort:"DevOpsToolSort"
		},
		tool:{

		},
		namespace:{

		},
		container:{

		},
		navbarConnectionState:{

		},
		canContainerBeCreated:{

		},
		groups:{

		}
	},
	DevStatusActivity: "enum" as const,
	DirectoryMutation:{
		removeUserFromOrganization:{
			input:"DirectoryRemoveUserInput"
		}
	},
	DirectoryRemoveUserInput:{

	},
	DvcsQuery:{
		bitbucketWorkspacesLinkedToSite:{

		}
	},
	EcosystemMutation:{
		updateAppHostServiceScopes:{
			input:"UpdateAppHostServiceScopesInput"
		},
		addAppContributor:{
			input:"AddAppContributorInput"
		},
		deleteUserGrant:{
			input:"DeleteUserGrantInput"
		},
		updateUserInstallationRules:{
			input:"UpdateUserInstallationRulesInput"
		},
		forgeAlerts:{

		}
	},
	EcosystemQuery:{
		userGrants:{

		},
		checkConsentPermissionByOAuthClientId:{
			input:"CheckConsentPermissionByOAuthClientIdInput"
		},
		userInstallationRules:{

		},
		appInstallationsByContext:{
			filter:"AppInstallationsByContextFilter"
		},
		appInstallationsByApp:{
			filter:"AppInstallationsByAppFilter"
		},
		fortifiedMetrics:{

		},
		forgeMetrics:{

		},
		forgeAlerts:{

		}
	},
	EditSprintInput:{

	},
	EventKnownAVIs: "enum" as const,
	EventMatchingStrategies: "enum" as const,
	EventSource:{
		events:{
			query:"CompassEventsInEventSourceQuery"
		}
	},
	ExtensionContext:{
		extensionsByType:{

		},
		appAuditLogs:{

		},
		installations:{
			filter:"AppInstallationsFilter"
		}
	},
	ExtensionDetailsInput:{

	},
	ExternalAuthCredentialsInput:{

	},
	ForgeAlertsActivitiesQueryInput:{

	},
	ForgeAlertsActivityType: "enum" as const,
	ForgeAlertsConfigQueryInput:{

	},
	ForgeAlertsCreateConfigInput:{

	},
	ForgeAlertsDeleteAlertConfigsInput:{

	},
	ForgeAlertsFixAlertConfigsInput:{

	},
	ForgeAlertsMutation:{
		createAlertConfig:{
			input:"ForgeAlertsCreateConfigInput"
		},
		deleteAlertConfigs:{
			input:"ForgeAlertsDeleteAlertConfigsInput"
		},
		fixAlertConfigs:{
			input:"ForgeAlertsFixAlertConfigsInput"
		},
		modifyAlertConfig:{
			input:"ForgeAlertsUpdateConfigInput"
		}
	},
	ForgeAlertsQuery:{
		alertConfig:{
			input:"ForgeAlertsConfigQueryInput"
		},
		alertActivities:{
			input:"ForgeAlertsActivitiesQueryInput"
		}
	},
	ForgeAlertsStatus: "enum" as const,
	ForgeAlertsUpdateConfigInput:{

	},
	ForgeMetricsDataType: "enum" as const,
	ForgeMetricsGroupByDimensions: "enum" as const,
	ForgeMetricsIntervalInput:{
		start:"DateTime",
		end:"DateTime"
	},
	ForgeMetricsQuery:{
		successRate:{
			query:"ForgeMetricsQueryInput"
		},
		successRateValue:{
			query:"ForgeMetricsQueryInput"
		},
		invocations:{
			query:"ForgeMetricsQueryInput"
		},
		invocationsValue:{
			query:"ForgeMetricsQueryInput"
		},
		errors:{
			query:"ForgeMetricsQueryInput"
		},
		errorsValue:{
			query:"ForgeMetricsQueryInput"
		},
		sites:{
			query:"ForgeMetricsQueryInput"
		}
	},
	ForgeMetricsQueryFilters:{
		interval:"ForgeMetricsIntervalInput"
	},
	ForgeMetricsQueryInput:{
		filters:"ForgeMetricsQueryFilters",
		groupBy:"ForgeMetricsGroupByDimensions"
	},
	ForgeMetricsResolutionUnit: "enum" as const,
	ForgeMetricsSiteFilterCategory: "enum" as const,
	FortifiedMetricsIntervalInput:{
		start:"DateTime",
		end:"DateTime"
	},
	FortifiedMetricsQueryFilters:{
		interval:"FortifiedMetricsIntervalInput"
	},
	FortifiedMetricsQueryInput:{
		filters:"FortifiedMetricsQueryFilters"
	},
	FortifiedMetricsResolutionUnit: "enum" as const,
	FortifiedSuccessRateMetricQuery:{
		successRate:{
			query:"FortifiedMetricsQueryInput"
		},
		alertConditionSuccessRate:{
			query:"FortifiedMetricsQueryInput"
		},
		serviceLevelObjectiveSuccessRate:{
			query:"FortifiedMetricsQueryInput"
		}
	},
	FunctionTriggerType: "enum" as const,
	GrantCheckProduct: "enum" as const,
	HelpCenterBulkCreateTopicsInput:{
		helpCenterCreateTopicInputItem:"HelpCenterCreateTopicInput"
	},
	HelpCenterBulkDeleteTopicInput:{
		helpCenterTopicDeleteInput:"HelpCenterTopicDeleteInput"
	},
	HelpCenterBulkUpdateTopicInput:{
		helpCenterUpdateTopicInputItem:"HelpCenterUpdateTopicInput"
	},
	HelpCenterCreateTopicInput:{
		items:"HelpCenterTopicItemInput",
		properties:"JSON"
	},
	HelpCenterMutationApi:{
		createTopic:{
			input:"HelpCenterBulkCreateTopicsInput"
		},
		updateTopic:{
			input:"HelpCenterBulkUpdateTopicInput"
		},
		updateTopicsOrder:{
			input:"HelpCenterUpdateTopicsOrderInput"
		},
		deleteTopic:{
			input:"HelpCenterBulkDeleteTopicInput"
		}
	},
	HelpCenterQueryApi:{
		helpCenterFromProductName:{

		},
		helpCenterTopicFromProductName:{

		}
	},
	HelpCenterTopic:{
		items:{

		}
	},
	HelpCenterTopicDeleteInput:{

	},
	HelpCenterTopicItemInput:{

	},
	HelpCenterUpdateTopicInput:{
		items:"HelpCenterTopicItemInput",
		properties:"JSON"
	},
	HelpCenterUpdateTopicsOrderInput:{

	},
	HelpObjectStoreBulkCreateEntityMappingInput:{
		helpObjectStoreCreateEntityMappingInputItems:"HelpObjectStoreCreateEntityMappingInput"
	},
	HelpObjectStoreCreateEntityMappingInput:{
		type:"HelpObjectStoreJSMEntityType"
	},
	HelpObjectStoreHelpObjectType: "enum" as const,
	HelpObjectStoreJSMEntityType: "enum" as const,
	HelpObjectStoreMutationApi:{
		createEntityMapping:{
			input:"HelpObjectStoreBulkCreateEntityMappingInput"
		}
	},
	HelpObjectStoreQueryApi:{
		requestForms:{

		},
		articles:{

		}
	},
	InstallationsListFilterByAppEnvironments:{
		types:"AppEnvironmentType"
	},
	InstallationsListFilterByAppInstallations:{

	},
	InstallationsListFilterByAppInstallationsWithCompulsoryContexts:{

	},
	InstallationsListFilterByApps:{

	},
	InvokeAuxEffectsInput:{
		extensionDetails:"ExtensionDetailsInput",
		payload:"AuxEffectsInvocationPayload"
	},
	InvokeExtensionInput:{
		extensionDetails:"ExtensionDetailsInput",
		payload:"JSON"
	},
	InvokePolarisObjectInput:{
		data:"JSON",
		action:"JSON"
	},
	IssueDevOpsCommitChangeType: "enum" as const,
	IssueDevOpsDeploymentEnvironmentType: "enum" as const,
	IssueDevOpsDeploymentState: "enum" as const,
	IssueDevOpsDevelopmentInformation:{
		details:{

		}
	},
	IssueDevOpsPullRequestStatus: "enum" as const,
	JSDependency: `scalar.JSDependency` as const,
	JSON: `scalar.JSON` as const,
	JiraAddIssuesToFixVersionInput:{

	},
	JiraAddRelatedWorkToVersionInput:{
		url:"URL"
	},
	JiraAffectedServicesField:{
		selectedAffectedServicesConnection:{

		},
		affectedServices:{

		}
	},
	JiraAssetField:{
		selectedAssetsConnection:{

		}
	},
	JiraAssignRelatedWorkInput:{
		relatedWorkType:"JiraVersionRelatedWorkType"
	},
	JiraAtlassianTeamField:{
		teams:{

		}
	},
	JiraAttachmentsField:{
		attachments:{
			orderField:"JiraAttachmentsOrderField",
			orderDirection:"JiraOrderDirection"
		}
	},
	JiraAttachmentsOrderField:{

	},
	JiraAttachmentsPermissions: "enum" as const,
	JiraCMDBField:{
		selectedCmdbObjectsConnection:{

		}
	},
	JiraCascadingSelectField:{
		cascadingOptions:{

		}
	},
	JiraCascadingSelectOptionType: "enum" as const,
	JiraCascadingSelectOptionsFilter:{
		optionType:"JiraCascadingSelectOptionType"
	},
	JiraCheckboxesField:{
		selectedOptions:{

		},
		fieldOptions:{

		}
	},
	JiraChildIssuesWithinLimit:{
		issues:{

		}
	},
	JiraCmdbAttribute:{
		objectAttributeValues:{

		}
	},
	JiraCmdbAttributeType: "enum" as const,
	JiraCmdbFieldConfig:{
		attributesDisplayedOnIssue:{

		},
		attributesIncludedInAutoCompleteSearch:{

		}
	},
	JiraCmdbObject:{
		attributes:{

		}
	},
	JiraComponentsField:{
		selectedComponentsConnection:{

		},
		components:{

		}
	},
	JiraConnectMultipleSelectField:{
		selectedOptions:{

		},
		fieldOptions:{

		}
	},
	JiraConnectSingleSelectField:{
		fieldOptions:{

		}
	},
	JiraCreateCustomFilterInput:{
		shareGrants:"JiraShareableEntityShareGrantInput",
		editGrants:"JiraShareableEntityEditGrantInput"
	},
	JiraCreateReleaseNoteConfluencePageInput:{

	},
	JiraCustomFilter:{
		emailSubscriptions:{

		},
		shareGrants:{

		},
		editGrants:{

		}
	},
	JiraDateFieldOperationInput:{
		operation:"JiraSingleValueFieldOperations",
		date:"Date"
	},
	JiraDateTimeFieldOperationInput:{
		operation:"JiraSingleValueFieldOperations",
		datetime:"DateTime"
	},
	JiraDeploymentsFeaturePrecondition: "enum" as const,
	JiraDevInfoConfigErrorType: "enum" as const,
	JiraDevOpsCapability: "enum" as const,
	JiraDevOpsIssuePanelBannerType: "enum" as const,
	JiraDevOpsIssuePanelState: "enum" as const,
	JiraDevOpsMutation:{
		optoutOfDevOpsIssuePanelNotConnectedState:{
			input:"JiraOptoutDevOpsIssuePanelNotConnectedInput"
		},
		dismissDevOpsIssuePanelBanner:{
			input:"JiraDismissDevOpsIssuePanelBannerInput"
		}
	},
	JiraDevOpsQuery:{
		devOpsIssuePanel:{

		}
	},
	JiraDismissDevOpsIssuePanelBannerInput:{
		bannerType:"JiraDevOpsIssuePanelBannerType"
	},
	JiraEpicLinkField:{
		epics:{

		}
	},
	JiraFavouriteFilter:{
		type:"JiraFavouriteType"
	},
	JiraFavouriteType: "enum" as const,
	JiraFilterMutation:{
		createJiraCustomFilter:{
			input:"JiraCreateCustomFilterInput"
		},
		updateJiraCustomFilterDetails:{
			input:"JiraUpdateCustomFilterDetailsInput"
		},
		updateJiraCustomFilterJql:{
			input:"JiraUpdateCustomFilterJqlInput"
		}
	},
	JiraForgeGroupField:{
		groups:{

		}
	},
	JiraForgeGroupsField:{
		selectedGroupsConnection:{

		},
		groups:{

		}
	},
	JiraForgeStringsField:{
		selectedLabelsConnection:{

		},
		labels:{

		}
	},
	JiraForgeUserField:{
		users:{

		}
	},
	JiraForgeUsersField:{
		selectedUsersConnection:{

		},
		users:{

		}
	},
	JiraGrantTypeKeyEnum: "enum" as const,
	JiraInstallDeploymentsBannerPrecondition: "enum" as const,
	JiraIssue:{
		fields:{

		},
		fieldsById:{

		},
		comments:{

		},
		worklogs:{

		},
		attachments:{

		},
		fieldSets:{

		},
		fieldSetsForIssueSearchView:{

		},
		fieldSetsById:{

		},
		issueLinks:{

		}
	},
	JiraIssueConnection:{
		pageCursors:{

		}
	},
	JiraIssueDeploymentEnvironmentState: "enum" as const,
	JiraIssueFieldSet:{
		fields:{

		}
	},
	JiraIssueHierarchyConfigData:{
		cmpIssueTypes:{

		}
	},
	JiraIssueHierarchyConfigInput:{

	},
	JiraIssueHierarchyConfigurationMutationInput:{
		issueHierarchyConfig:"JiraIssueHierarchyConfigInput"
	},
	JiraIssueItemLayoutItemLocationRuleType: "enum" as const,
	JiraIssueItemSystemContainerType: "enum" as const,
	JiraIssueItemSystemContainerTypeWithIdInput:{
		systemContainerTypes:"JiraIssueItemSystemContainerType"
	},
	JiraIssueItemSystemContainerTypeWithKeyInput:{
		systemContainerTypes:"JiraIssueItemSystemContainerType"
	},
	JiraIssueLifecycleState: "enum" as const,
	JiraIssueLinkDirection: "enum" as const,
	JiraIssueLinkField:{
		issueLinkConnection:{

		},
		issueLinkTypeRelations:{

		},
		issues:{

		}
	},
	JiraIssueRestrictionField:{
		selectedRolesConnection:{

		},
		roles:{

		}
	},
	JiraIssueSearchByFilter:{
		content:{

		},
		contentByFieldSetIds:{

		}
	},
	JiraIssueSearchByHydration:{
		content:{

		},
		contentByFieldSetIds:{

		}
	},
	JiraIssueSearchByJql:{
		content:{

		},
		contentByFieldSetIds:{

		}
	},
	JiraIssueSearchContextlessContent:{
		issues:{

		}
	},
	JiraIssueSearchContextualContent:{
		issues:{

		}
	},
	JiraIssueSearchFieldSetSelectedState: "enum" as const,
	JiraIssueSearchFieldSetsFilter:{
		fieldSetSelectedState:"JiraIssueSearchFieldSetSelectedState"
	},
	JiraIssueSearchInput:{

	},
	JiraIssueSearchOptions:{

	},
	JiraIssueSearchResult:{
		content:{

		},
		contentByFieldSetIds:{

		}
	},
	JiraIssueSearchResultContent:{
		issues:{

		}
	},
	JiraIssueSearchView:{
		fieldSets:{
			filter:"JiraIssueSearchFieldSetsFilter"
		}
	},
	JiraIssueTypeField:{
		issueTypes:{

		}
	},
	JiraJqlAutocompleteType: "enum" as const,
	JiraJqlBuilder:{
		hydrateJqlQuery:{

		},
		hydrateJqlQueryForFilter:{

		},
		fields:{
			forClause:"JiraJqlClauseType"
		},
		recentFields:{
			forClause:"JiraJqlClauseType"
		},
		fieldValues:{

		},
		recentlyUsedUsers:{

		},
		suggestedGroups:{

		},
		recentlyUsedProjects:{

		},
		recentlyUsedSprints:{

		},
		issueTypes:{

		},
		cascadingSelectOptions:{
			filter:"JiraCascadingSelectOptionsFilter"
		},
		versions:{

		}
	},
	JiraJqlBuilderMode: "enum" as const,
	JiraJqlClauseType: "enum" as const,
	JiraJqlIssueTypes:{
		aboveBaseLevel:{

		},
		baseLevel:{

		},
		belowBaseLevel:{

		}
	},
	JiraJqlOperator: "enum" as const,
	JiraJqlSyntaxError: "enum" as const,
	JiraJqlVersions:{
		released:{

		},
		unreleased:{

		},
		archived:{

		}
	},
	JiraLabelsField:{
		selectedLabelsConnection:{

		},
		labels:{

		}
	},
	JiraLabelsFieldOperationInput:{
		operation:"JiraMultiValueFieldOperations"
	},
	JiraLongRunningTaskStatus: "enum" as const,
	JiraMoveIssuesToFixVersionInput:{

	},
	JiraMultiValueFieldOperations: "enum" as const,
	JiraMultipleGroupPickerField:{
		selectedGroupsConnection:{

		},
		groups:{

		}
	},
	JiraMultipleSelectField:{
		selectedOptions:{

		},
		fieldOptions:{

		}
	},
	JiraMultipleSelectUserPickerField:{
		selectedUsersConnection:{

		},
		users:{

		}
	},
	JiraMultipleVersionPickerField:{
		selectedVersionsConnection:{

		},
		versions:{

		}
	},
	JiraMutation:{
		updateReleaseNotesConfiguration:{
			input:"JiraUpdateReleaseNotesConfigurationInput"
		},
		createReleaseNoteConfluencePage:{
			input:"JiraCreateReleaseNoteConfluencePageInput"
		},
		addRelatedWorkToVersion:{
			input:"JiraAddRelatedWorkToVersionInput"
		},
		removeRelatedWorkFromVersion:{
			input:"JiraRemoveRelatedWorkFromVersionInput"
		},
		assignRelatedWorkToUser:{
			input:"JiraAssignRelatedWorkInput"
		},
		setApplicationProperties:{
			input:"JiraSetApplicationPropertyInput"
		},
		updateLabelsField:{
			input:"JiraUpdateLabelsFieldInput"
		},
		updateDateField:{
			input:"JiraUpdateDateFieldInput"
		},
		updateDateTimeField:{
			input:"JiraUpdateDateTimeFieldInput"
		},
		updateNumberField:{
			input:"JiraUpdateNumberFieldInput"
		},
		updateStoryPointEstimateField:{
			input:"JiraUpdateStoryPointEstimateFieldInput"
		},
		updateSingleSelectField:{
			input:"JiraUpdateSingleSelectFieldInput"
		},
		addPermissionSchemeGrants:{
			input:"JiraPermissionSchemeAddGrantInput"
		},
		removePermissionSchemeGrants:{
			input:"JiraPermissionSchemeRemoveGrantInput"
		},
		updateIssueHierarchyConfig:{
			input:"JiraIssueHierarchyConfigurationMutationInput"
		},
		addIssuesToFixVersion:{
			input:"JiraAddIssuesToFixVersionInput"
		},
		moveIssuesToFixVersion:{
			input:"JiraMoveIssuesToFixVersionInput"
		},
		removeIssuesFromFixVersion:{
			input:"JiraRemoveIssuesFromFixVersionInput"
		},
		updateVersionWarningConfig:{
			input:"JiraUpdateVersionWarningConfigInput"
		},
		updateVersionName:{
			input:"JiraUpdateVersionNameInput"
		},
		updateVersionDescription:{
			input:"JiraUpdateVersionDescriptionInput"
		},
		updateVersionStartDate:{
			input:"JiraUpdateVersionStartDateInput"
		},
		updateVersionReleaseDate:{
			input:"JiraUpdateVersionReleaseDateInput"
		},
		replaceIssueSearchViewFieldSets:{
			input:"JiraReplaceIssueSearchViewFieldSetsInput"
		}
	},
	JiraNumberFieldOperationInput:{
		operation:"JiraSingleValueFieldOperations"
	},
	JiraOAuthAppsAppInput:{
		buildsModule:"JiraOAuthAppsBuildsModuleInput",
		featureFlagsModule:"JiraOAuthAppsFeatureFlagsModuleInput",
		deploymentsModule:"JiraOAuthAppsDeploymentsModuleInput",
		devInfoModule:"JiraOAuthAppsDevInfoModuleInput",
		remoteLinksModule:"JiraOAuthAppsRemoteLinksModuleInput"
	},
	JiraOAuthAppsAppUpdateInput:{
		buildsModule:"JiraOAuthAppsBuildsModuleInput",
		featureFlagsModule:"JiraOAuthAppsFeatureFlagsModuleInput",
		deploymentsModule:"JiraOAuthAppsDeploymentsModuleInput",
		devInfoModule:"JiraOAuthAppsDevInfoModuleInput",
		remoteLinksModule:"JiraOAuthAppsRemoteLinksModuleInput"
	},
	JiraOAuthAppsApps:{
		apps:{

		}
	},
	JiraOAuthAppsBuildsModuleInput:{

	},
	JiraOAuthAppsCreateAppInput:{
		app:"JiraOAuthAppsAppInput"
	},
	JiraOAuthAppsDeleteAppInput:{

	},
	JiraOAuthAppsDeploymentsModuleActionsInput:{
		listDeployments:"JiraOAuthAppsUrlTemplateInput"
	},
	JiraOAuthAppsDeploymentsModuleInput:{
		actions:"JiraOAuthAppsDeploymentsModuleActionsInput"
	},
	JiraOAuthAppsDevInfoModuleActionsInput:{
		createBranch:"JiraOAuthAppsUrlTemplateInput"
	},
	JiraOAuthAppsDevInfoModuleInput:{
		actions:"JiraOAuthAppsDevInfoModuleActionsInput"
	},
	JiraOAuthAppsFeatureFlagsModuleActionsInput:{
		createFlag:"JiraOAuthAppsUrlTemplateInput",
		linkFlag:"JiraOAuthAppsUrlTemplateInput",
		listFlag:"JiraOAuthAppsUrlTemplateInput"
	},
	JiraOAuthAppsFeatureFlagsModuleInput:{
		actions:"JiraOAuthAppsFeatureFlagsModuleActionsInput"
	},
	JiraOAuthAppsMutation:{
		createJiraOAuthApp:{
			input:"JiraOAuthAppsCreateAppInput"
		},
		updateJiraOAuthApp:{
			input:"JiraOAuthAppsUpdateAppInput"
		},
		deleteJiraOAuthApp:{
			input:"JiraOAuthAppsDeleteAppInput"
		}
	},
	JiraOAuthAppsRemoteLinksModuleActionInput:{
		label:"JiraOAuthAppsRemoteLinksModuleActionLabelInput"
	},
	JiraOAuthAppsRemoteLinksModuleActionLabelInput:{

	},
	JiraOAuthAppsRemoteLinksModuleInput:{
		actions:"JiraOAuthAppsRemoteLinksModuleActionInput"
	},
	JiraOAuthAppsUpdateAppInput:{
		app:"JiraOAuthAppsAppUpdateInput"
	},
	JiraOAuthAppsUrlTemplateInput:{

	},
	JiraOptoutDevOpsIssuePanelNotConnectedInput:{

	},
	JiraOrderDirection:{

	},
	JiraPeopleField:{
		selectedUsersConnection:{

		},
		users:{

		}
	},
	JiraPermissionMessageTypeEnum: "enum" as const,
	JiraPermissionSchemeAddGrantInput:{
		grants:"JiraPermissionSchemeGrantInput"
	},
	JiraPermissionSchemeGrantInput:{
		grantType:"JiraGrantTypeKeyEnum"
	},
	JiraPermissionSchemeRemoveGrantInput:{
		grantIds:"Long"
	},
	JiraPermissionTagEnum: "enum" as const,
	JiraPriorityField:{
		priorities:{

		}
	},
	JiraProject:{
		action:{
			type:"JiraProjectActionType"
		},
		devOpsToolRelationships:{
			filter:"JiraProjectAndDevOpsToolRelationshipFilter"
		},
		devOpsEntityRelationships:{
			filter:"AriGraphRelationshipsFilter",
			sort:"AriGraphRelationshipsSort"
		},
		linkedSecurityContainers:{

		},
		linkedSecurityVulnerabilities:{

		},
		repositoryRelationships:{
			filter:"JiraProjectAndRepositoryRelationshipFilter",
			sort:"JiraProjectAndRepositoryRelationshipSort"
		},
		devOpsServiceRelationships:{
			filter:"DevOpsServiceAndJiraProjectRelationshipFilter"
		},
		opsgenieTeamRelationships:{

		},
		servicesAvailableToLinkWith:{
			filter:"DevOpsServicesFilterInput"
		},
		opsgenieTeamsAvailableToLinkWith:{

		},
		confluenceSpaceRelationships:{

		}
	},
	JiraProjectActionType: "enum" as const,
	JiraProjectAndConfluenceSpaceDeleteRelationshipForJiraProjectInput:{

	},
	JiraProjectAndDevOpsToolRelationship:{
		properties:{

		}
	},
	JiraProjectAndDevOpsToolRelationshipCreateInput:{
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	JiraProjectAndDevOpsToolRelationshipDeleteForJiraProjectInput:{

	},
	JiraProjectAndDevOpsToolRelationshipDeleteInput:{

	},
	JiraProjectAndDevOpsToolRelationshipFilter:{
		hasPropertyEqualTo:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	JiraProjectAndOpsgenieTeamRelationship:{
		properties:{

		}
	},
	JiraProjectAndRepositoryRelationship:{
		properties:{

		}
	},
	JiraProjectAndRepositoryRelationshipFilter:{
		certainty:"DevOpsRelationshipCertaintyFilter",
		hostingProvider:"DevOpsRepositoryHostingProviderFilter"
	},
	JiraProjectAndRepositoryRelationshipSort:{
		by:"JiraProjectAndRepositoryRelationshipSortBy",
		order:"SortDirection"
	},
	JiraProjectAndRepositoryRelationshipSortBy: "enum" as const,
	JiraProjectField:{
		projects:{

		}
	},
	JiraProjectFilterInput:{
		types:"JiraProjectType",
		sortBy:"JiraProjectSortInput"
	},
	JiraProjectPermissionCategoryEnum: "enum" as const,
	JiraProjectSortField: "enum" as const,
	JiraProjectSortInput:{
		sortBy:"JiraProjectSortField",
		order:"SortDirection"
	},
	JiraProjectStatus: "enum" as const,
	JiraProjectStyle: "enum" as const,
	JiraProjectType: "enum" as const,
	JiraPullRequestState: "enum" as const,
	JiraQuery:{
		jiraProject:{

		},
		allJiraProjects:{
			filter:"JiraProjectFilterInput"
		},
		allJiraProjectCategories:{

		},
		globalTimeTrackingSettings:{

		},
		timeTrackingSettings:{

		},
		filter:{

		},
		favouriteFilters:{

		},
		systemFilters:{

		},
		devOpsProviders:{
			filter:"JiraDevOpsCapability"
		},
		applicationPropertiesByKey:{

		},
		issueContainersByType:{
			input:"JiraIssueItemSystemContainerTypeWithIdInput"
		},
		issueContainersByTypeByKey:{
			input:"JiraIssueItemSystemContainerTypeWithKeyInput"
		},
		favourites:{
			filter:"JiraFavouriteFilter"
		},
		issueByKey:{

		},
		issueById:{

		},
		issue:{

		},
		screenIdByIssueId:{

		},
		screenIdByIssueKey:{

		},
		allGrantTypeKeys:{

		},
		grantTypeValues:{
			grantTypeKey:"JiraGrantTypeKeyEnum"
		},
		viewPermissionScheme:{

		},
		getProjectsByPermissionScheme:{

		},
		permissionSchemeGrants:{

		},
		getPermissionSchemeGrants:{
			grantTypeKey:"JiraGrantTypeKeyEnum"
		},
		getPermissionSchemeGrantsHierarchy:{

		},
		issueHierarchyConfig:{

		},
		issueHierarchyLimits:{

		},
		lockedIssueTypeIds:{

		},
		issueHierarchyConfigUpdateTask:{

		},
		jiraProjects:{

		},
		jiraProjectByKey:{

		},
		version:{

		},
		versionsForProject:{
			filter:"JiraVersionStatus"
		},
		versionDetailPage:{

		},
		labelsFieldOptions:{

		},
		jqlBuilder:{

		},
		issueSearchByJql:{

		},
		issueSearchByFilterId:{

		},
		issueHydrateByIssueIds:{

		},
		issueSearchView:{

		},
		issueSearchViewByNamespaceAndViewId:{

		},
		issueSearchStable:{
			issueSearchInput:"JiraIssueSearchInput",
			options:"JiraIssueSearchOptions"
		},
		deploymentsFeaturePrecondition:{

		},
		deploymentsFeaturePreconditionByProjectKey:{

		},
		installDeploymentsBannerPrecondition:{

		}
	},
	JiraRadioSelectField:{
		fieldOptions:{

		}
	},
	JiraReleaseNotesIssueKeyConfig: "enum" as const,
	JiraReleases:{
		issues:{
			filter:"JiraReleasesIssueFilter"
		},
		epics:{
			filter:"JiraReleasesEpicFilter"
		},
		deployments:{
			filter:"JiraReleasesDeploymentFilter"
		},
		deploymentsById:{

		}
	},
	JiraReleasesDeploymentFilter:{
		timeWindow:"JiraReleasesTimeWindowInput",
		environmentCategories:"DevOpsEnvironmentCategory"
	},
	JiraReleasesEpicFilter:{
		releaseStatusFilter:"JiraReleasesEpicReleaseStatusFilter"
	},
	JiraReleasesEpicReleaseStatusFilter: "enum" as const,
	JiraReleasesIssueFilter:{
		environmentCategories:"DevOpsEnvironmentCategory",
		releaseStatusFilter:"JiraReleasesIssueReleaseStatusFilter",
		timeWindow:"JiraReleasesTimeWindowInput"
	},
	JiraReleasesIssueReleaseStatusFilter: "enum" as const,
	JiraReleasesTimeWindowInput:{
		after:"DateTime",
		before:"DateTime"
	},
	JiraRemoveIssuesFromFixVersionInput:{

	},
	JiraRemoveRelatedWorkFromVersionInput:{

	},
	JiraReplaceIssueSearchViewFieldSetsInput:{

	},
	JiraResolutionField:{
		resolutions:{

		}
	},
	JiraReviewState: "enum" as const,
	JiraSecurityLevelField:{
		securityLevels:{

		}
	},
	JiraServiceManagementActiveApproval:{
		approvers:{

		},
		excludedApprovers:{

		},
		decisions:{

		},
		approverPrincipals:{

		}
	},
	JiraServiceManagementApprovalDecisionResponseType: "enum" as const,
	JiraServiceManagementApprovalField:{
		completedApprovalsConnection:{

		}
	},
	JiraServiceManagementApprovalState: "enum" as const,
	JiraServiceManagementCommentVisibility: "enum" as const,
	JiraServiceManagementCompletedApproval:{
		approvers:{

		}
	},
	JiraServiceManagementMajorIncident: "enum" as const,
	JiraServiceManagementMultipleSelectUserPickerField:{
		selectedUsersConnection:{

		},
		users:{

		}
	},
	JiraServiceManagementOrganizationField:{
		selectedOrganizationsConnection:{

		},
		organizations:{

		}
	},
	JiraServiceManagementPeopleField:{
		selectedUsersConnection:{

		},
		users:{

		}
	},
	JiraServiceManagementPractice: "enum" as const,
	JiraServiceManagementRequestTypeField:{
		requestTypes:{

		}
	},
	JiraServiceManagementRespondersField:{
		respondersConnection:{

		}
	},
	JiraSetApplicationPropertyInput:{

	},
	JiraShareableEntityAnonymousAccessGrantInput:{

	},
	JiraShareableEntityAnyLoggedInUserGrantInput:{

	},
	JiraShareableEntityEditGrantInput:{
		group:"JiraShareableEntityGroupGrantInput",
		project:"JiraShareableEntityProjectGrantInput",
		projectRole:"JiraShareableEntityProjectRoleGrantInput",
		user:"JiraShareableEntityUserGrantInput"
	},
	JiraShareableEntityGrant: "enum" as const,
	JiraShareableEntityGroupGrantInput:{

	},
	JiraShareableEntityProjectGrantInput:{

	},
	JiraShareableEntityProjectRoleGrantInput:{

	},
	JiraShareableEntityShareGrantInput:{
		group:"JiraShareableEntityGroupGrantInput",
		project:"JiraShareableEntityProjectGrantInput",
		projectRole:"JiraShareableEntityProjectRoleGrantInput",
		anonymousAccess:"JiraShareableEntityAnonymousAccessGrantInput",
		anyLoggedInUser:"JiraShareableEntityAnyLoggedInUserGrantInput"
	},
	JiraShareableEntityUserGrantInput:{

	},
	JiraSingleGroupPickerField:{
		groups:{

		}
	},
	JiraSingleSelectField:{
		fieldOptions:{

		}
	},
	JiraSingleSelectOperationInput:{
		operation:"JiraSingleValueFieldOperations"
	},
	JiraSingleSelectUserPickerField:{
		users:{

		}
	},
	JiraSingleValueFieldOperations: "enum" as const,
	JiraSingleVersionPickerField:{
		versions:{

		}
	},
	JiraSprintField:{
		selectedSprintsConnection:{

		},
		sprints:{
			state:"JiraSprintState"
		}
	},
	JiraSprintState: "enum" as const,
	JiraStatusCategoryColor: "enum" as const,
	JiraStoryPointEstimateFieldOperationInput:{
		operation:"JiraSingleValueFieldOperations"
	},
	JiraSubtasksField:{
		subtasks:{

		}
	},
	JiraTeamField:{
		teams:{

		}
	},
	JiraTimeFormat: "enum" as const,
	JiraTimeUnit: "enum" as const,
	JiraUpdateCustomFilterDetailsInput:{
		shareGrants:"JiraShareableEntityShareGrantInput",
		editGrants:"JiraShareableEntityEditGrantInput"
	},
	JiraUpdateCustomFilterJqlInput:{

	},
	JiraUpdateDateFieldInput:{
		operation:"JiraDateFieldOperationInput"
	},
	JiraUpdateDateTimeFieldInput:{
		operation:"JiraDateTimeFieldOperationInput"
	},
	JiraUpdateLabelsFieldInput:{
		operations:"JiraLabelsFieldOperationInput"
	},
	JiraUpdateNumberFieldInput:{
		operation:"JiraNumberFieldOperationInput"
	},
	JiraUpdateReleaseNotesConfigurationInput:{
		issueKeyConfig:"JiraReleaseNotesIssueKeyConfig"
	},
	JiraUpdateSingleSelectFieldInput:{
		operation:"JiraSingleSelectOperationInput"
	},
	JiraUpdateStoryPointEstimateFieldInput:{
		operation:"JiraStoryPointEstimateFieldOperationInput"
	},
	JiraUpdateVersionDescriptionInput:{

	},
	JiraUpdateVersionNameInput:{

	},
	JiraUpdateVersionReleaseDateInput:{
		releaseDate:"DateTime"
	},
	JiraUpdateVersionStartDateInput:{
		startDate:"DateTime"
	},
	JiraUpdateVersionWarningConfigInput:{
		updatedVersionWarningConfig:"JiraVersionUpdatedWarningConfigInput"
	},
	JiraVersion:{
		issues:{
			filter:"JiraVersionIssuesFilter",
			sortBy:"JiraVersionIssuesSortInput"
		},
		releaseNotesOptionsIssueTypes:{

		},
		releaseNotesOptionsIssueFields:{

		},
		nativeReleaseNotesOptionsIssueFields:{

		},
		releaseNotes:{
			releaseNoteConfiguration:"JiraVersionReleaseNotesConfigurationInput"
		},
		availableSites:{

		},
		relatedWork:{

		},
		relatedWorkV2:{

		}
	},
	JiraVersionDetailPageIssues:{
		issues:{

		}
	},
	JiraVersionIssuesFilter: "enum" as const,
	JiraVersionIssuesSortField: "enum" as const,
	JiraVersionIssuesSortInput:{
		sortByField:"JiraVersionIssuesSortField",
		order:"SortDirection"
	},
	JiraVersionRelatedWorkType: "enum" as const,
	JiraVersionReleaseNotesConfigurationInput:{
		issueKeyConfig:"JiraReleaseNotesIssueKeyConfig"
	},
	JiraVersionStatus: "enum" as const,
	JiraVersionUpdatedWarningConfigInput:{

	},
	JiraVersionWarningConfigState: "enum" as const,
	JswMutation:{
		deleteCard:{
			input:"DeleteCardInput"
		}
	},
	JswQuery:{
		boardScope:{

		}
	},
	LicenseOverrideState: "enum" as const,
	LifecycleStage: "enum" as const,
	LogQueryInput:{
		dates:"DateSearchInput"
	},
	Long: `scalar.Long` as const,
	MarketplaceApp:{
		productHostingOptions:{
			excludeHiddenIn:"MarketplaceLocation"
		},
		versions:{
			filter:"MarketplaceAppVersionFilter"
		}
	},
	MarketplaceAppPaymentModel: "enum" as const,
	MarketplaceAppPermission: "enum" as const,
	MarketplaceAppVersionFilter:{
		productHostingOptions:"AtlassianProductHostingType",
		visibility:"MarketplaceAppVersionVisibility",
		excludeHiddenIn:"MarketplaceLocation"
	},
	MarketplaceAppVersionVisibility: "enum" as const,
	MarketplaceAppsFilter:{
		productHostingOptions:"AtlassianProductHostingType",
		cloudFortifiedStatus:"MarketplaceProgramStatus"
	},
	MarketplaceBillingCycle: "enum" as const,
	MarketplaceCloudFortifiedStatus: "enum" as const,
	MarketplaceEntityStatus: "enum" as const,
	MarketplaceListingStatus: "enum" as const,
	MarketplaceLocation: "enum" as const,
	MarketplacePartnerSupportHolidayFrequency: "enum" as const,
	MarketplacePartnerTierType: "enum" as const,
	MarketplacePartnerType: "enum" as const,
	MarketplacePricingPlanOptions:{
		billingCycle:"MarketplaceBillingCycle",
		planStatus:"MarketplacePricingPlanStatus"
	},
	MarketplacePricingPlanStatus: "enum" as const,
	MarketplacePricingTierMode: "enum" as const,
	MarketplacePricingTierPolicy: "enum" as const,
	MarketplacePricingTierType: "enum" as const,
	MarketplaceProgramStatus: "enum" as const,
	MarketplaceUser:{
		appPermissions:{

		}
	},
	MembershipRole: "enum" as const,
	MembershipSetting: "enum" as const,
	MembershipState: "enum" as const,
	MoveSprintDownInput:{

	},
	MoveSprintUpInput:{

	},
	Mutation:{
		createJiraProjectAndDevOpsToolRelationship:{
			input:"JiraProjectAndDevOpsToolRelationshipCreateInput"
		},
		deleteJiraProjectAndDevOpsToolRelationship:{
			input:"JiraProjectAndDevOpsToolRelationshipDeleteInput"
		},
		deleteDevOpsToolRelationshipsForJiraProject:{
			input:"JiraProjectAndDevOpsToolRelationshipDeleteForJiraProjectInput"
		},
		createReleaseNote:{
			featureRolloutDate:"DateTime",
			description:"JSON",
			benefitsList:"JSON",
			featureRolloutEndDate:"DateTime"
		},
		publishReleaseNote:{

		},
		updateReleaseNote:{
			featureRolloutDate:"DateTime",
			featureRolloutEndDate:"DateTime"
		},
		createDevOpsServiceAndOpsgenieTeamRelationship:{
			input:"CreateDevOpsServiceAndOpsgenieTeamRelationshipInput"
		},
		updateDevOpsServiceAndOpsgenieTeamRelationship:{
			input:"UpdateDevOpsServiceAndOpsgenieTeamRelationshipInput"
		},
		deleteDevOpsServiceAndOpsgenieTeamRelationship:{
			input:"DeleteDevOpsServiceAndOpsgenieTeamRelationshipInput"
		},
		updateDevOpsContainerRelationshipEntityProperties:{
			input:"UpdateDevOpsContainerRelationshipEntityPropertiesInput"
		},
		deleteDevOpsContainerRelationshipEntityProperties:{
			input:"DeleteDevOpsContainerRelationshipEntityPropertiesInput"
		},
		createDevOpsServiceAndJiraProjectRelationship:{
			input:"CreateDevOpsServiceAndJiraProjectRelationshipInput"
		},
		updateDevOpsServiceAndJiraProjectRelationship:{
			input:"UpdateDevOpsServiceAndJiraProjectRelationshipInput"
		},
		deleteDevOpsServiceAndJiraProjectRelationship:{
			input:"DeleteDevOpsServiceAndJiraProjectRelationshipInput"
		},
		createDevOpsServiceAndRepositoryRelationship:{
			input:"CreateDevOpsServiceAndRepositoryRelationshipInput"
		},
		updateDevOpsServiceAndRepositoryRelationship:{
			input:"UpdateDevOpsServiceAndRepositoryRelationshipInput"
		},
		deleteDevOpsServiceAndRepositoryRelationship:{
			input:"DeleteDevOpsServiceAndRepositoryRelationshipInput"
		},
		createJiraProjectAndOpsgenieTeamRelationship:{
			input:"CreateJiraProjectAndOpsgenieTeamRelationshipInput"
		},
		updateJiraProjectAndOpsgenieTeamRelationship:{
			input:"UpdateJiraProjectAndOpsgenieTeamRelationshipInput"
		},
		deleteJiraProjectAndOpsgenieTeamRelationship:{
			input:"DeleteJiraProjectAndOpsgenieTeamRelationshipInput"
		},
		createJiraProjectAndRepositoryRelationship:{
			input:"CreateJiraProjectAndRepositoryRelationshipInput"
		},
		updateJiraProjectAndRepositoryRelationship:{
			input:"UpdateJiraProjectAndRepositoryRelationshipInput"
		},
		deleteJiraProjectAndRepositoryRelationship:{
			input:"DeleteJiraProjectAndRepositoryRelationshipInput"
		},
		updatePolarisTermsConsent:{
			input:"UpdatePolarisTermsConsentInput"
		},
		createPolarisAnonymousVisitorHash:{

		},
		deletePolarisAnonymousVisitorHash:{

		},
		resolvePolarisObject:{
			input:"ResolvePolarisObjectInput"
		},
		invokePolarisObject:{
			input:"InvokePolarisObjectInput"
		},
		createPolarisComment:{
			input:"CreatePolarisCommentInput"
		},
		updatePolarisComment:{
			input:"UpdatePolarisCommentInput"
		},
		createPolarisStandardField:{
			input:"CreatePolarisStandardFieldInput"
		},
		createPolarisCalculatedField:{
			input:"CreatePolarisCalculatedField"
		},
		updatePolarisCalculatedField:{
			input:"UpdatePolarisCalculatedFieldInput"
		},
		updatePolarisFieldDescription:{
			input:"UpdatePolarisFieldDescriptionInput"
		},
		updatePolarisFieldEmoji:{
			input:"UpdatePolarisFieldEmojiInput"
		},
		deletePolarisField:{

		},
		updatePolarisFieldOptionWeight:{
			input:"UpdatePolarisFieldOptionWeightInput"
		},
		deletePolarisFieldOption:{
			input:"DeletePolarisFieldOptionInput"
		},
		createPolarisDecoration:{
			input:"CreatePolarisDecorationInput"
		},
		updatePolarisDecoration:{
			update:"UpdatePolarisDecorationInput",
			delete:"DeletePolarisDecorationInput"
		},
		deletePolarisDecoration:{

		},
		createPolarisIdeaTemplate:{
			input:"CreatePolarisIdeaTemplateInput"
		},
		updatePolarisIdeaTemplate:{
			input:"UpdatePolarisIdeaTemplateInput"
		},
		deletePolarisIdeaTemplate:{
			input:"DeletePolarisIdeaTemplateInput"
		},
		updatePolarisIdea:{
			update:"UpdatePolarisIdeaInput"
		},
		createPolarisInsight:{
			input:"CreatePolarisInsightInput"
		},
		updatePolarisInsight:{
			update:"UpdatePolarisInsightInput"
		},
		deletePolarisInsight:{

		},
		copyPolarisInsights:{
			input:"CopyPolarisInsightsInput"
		},
		archivePolarisInsights:{

		},
		unarchivePolarisInsights:{

		},
		createPolarisPlay:{
			input:"CreatePolarisPlayInput"
		},
		updatePolarisPlay:{
			input:"UpdatePolarisPlayInput"
		},
		createPolarisPlayContribution:{
			input:"CreatePolarisPlayContribution"
		},
		updatePolarisPlayContribution:{
			input:"UpdatePolarisPlayContribution"
		},
		deletePolarisPlayContribution:{

		},
		createPolarisInsightFromPlayContribution:{
			input:"CreatePolarisInsightFromPlayContributionInput"
		},
		configurePolarisRefresh:{
			input:"ConfigurePolarisRefreshInput"
		},
		applyPolarisProjectTemplate:{
			input:"ApplyPolarisProjectTemplateInput"
		},
		setPolarisProjectOnboarded:{
			input:"SetPolarisProjectOnboardedInput"
		},
		setPolarisSelectedDeliveryProject:{
			input:"SetPolarisSelectedDeliveryProjectInput"
		},
		refreshPolarisSnippets:{
			input:"RefreshPolarisSnippetsInput"
		},
		setPolarisSnippetPropertiesConfig:{
			input:"SetPolarisSnippetPropertiesConfigInput"
		},
		createPolarisView:{
			input:"CreatePolarisViewInput"
		},
		updatePolarisView:{
			input:"UpdatePolarisViewInput"
		},
		updatePolarisViewRankV2:{
			input:"UpdatePolarisViewRankInput"
		},
		updatePolarisViewArrangementInfo:{
			input:"JSON"
		},
		deletePolarisView:{

		},
		updatePolarisViewLastViewedTimestamp:{

		},
		createPolarisViewSet:{
			input:"CreatePolarisViewSetInput"
		},
		updatePolarisViewSet:{
			input:"UpdatePolarisViewSetInput"
		},
		deletePolarisViewSet:{

		},
		createAppTunnels:{
			input:"CreateAppTunnelsInput"
		},
		deleteAppTunnels:{
			input:"DeleteAppTunnelInput"
		},
		invokeExtension:{
			input:"InvokeExtensionInput"
		},
		invokeAuxEffects:{
			input:"InvokeAuxEffectsInput"
		},
		userAuthTokenForExtension:{
			input:"UserAuthTokenForExtensionInput"
		},
		createWebTriggerUrl:{
			input:"WebTriggerUrlInput"
		},
		deleteWebTriggerUrl:{

		},
		watchMarketplaceApp:{

		},
		unwatchMarketplaceApp:{

		},
		helpObjectStore:{

		},
		createColumn:{
			input:"CreateColumnInput"
		},
		setColumnName:{
			input:"SetColumnNameInput"
		},
		rankColumn:{
			input:"RankColumnInput"
		},
		setColumnLimit:{
			input:"SetColumnLimitInput"
		},
		deleteColumn:{
			input:"DeleteColumnInput"
		},
		startSprint:{
			input:"StartSprintInput"
		},
		createSprint:{
			input:"CreateSprintInput"
		},
		completeSprint:{
			input:"CompleteSprintInput"
		},
		deleteSprint:{
			input:"DeleteSprintInput"
		},
		moveSprintUp:{
			input:"MoveSprintUpInput"
		},
		moveSprintDown:{
			input:"MoveSprintDownInput"
		},
		editSprint:{
			input:"EditSprintInput"
		},
		setUserSwimlaneStrategy:{
			input:"SetSwimlaneStrategyInput"
		},
		setSwimlaneStrategy:{
			input:"SetSwimlaneStrategyInput"
		},
		setEstimationType:{
			input:"SetEstimationTypeInput"
		},
		createCustomFilter:{
			input:"CreateCustomFilterInput"
		},
		updateCustomFilter:{
			input:"UpdateCustomFilterInput"
		},
		deleteCustomFilter:{
			input:"DeleteCustomFilterInput"
		},
		boardCardMove:{
			input:"BoardCardMoveInput"
		},
		assignIssueParent:{
			input:"AssignIssueParentInput"
		},
		unassignIssueParent:{
			input:"UnassignIssueParentInput"
		},
		createCardParent:{
			input:"CardParentCreateInput"
		},
		rankCardParent:{
			input:"CardParentRankInput"
		},
		setIssueMediaVisibility:{
			input:"SetIssueMediaVisibilityInput"
		},
		toggleBoardFeature:{
			input:"ToggleBoardFeatureInput"
		},
		setBoardEstimationType:{
			input:"SetBoardEstimationTypeInput"
		},
		planModeCardMove:{
			input:"PlanModeCardMoveInput"
		},
		createApp:{
			input:"CreateAppInput"
		},
		updateAppDetails:{
			input:"UpdateAppDetailsInput"
		},
		deleteApp:{
			input:"DeleteAppInput"
		},
		updateAtlassianOAuthClient:{
			input:"UpdateAtlassianOAuthClientInput"
		},
		updateNavbarConnectionStateTabSeen:{
			input:"DevOpsToolUpdateNavbarConnectionStateTabSeenInput"
		},
		createDevOpsService:{
			input:"CreateDevOpsServiceInput"
		},
		updateDevOpsService:{
			input:"UpdateDevOpsServiceInput"
		},
		deleteDevOpsService:{
			input:"DeleteDevOpsServiceInput"
		},
		createDevOpsServiceRelationship:{
			input:"CreateDevOpsServiceRelationshipInput"
		},
		updateDevOpsServiceRelationship:{
			input:"UpdateDevOpsServiceRelationshipInput"
		},
		deleteDevOpsServiceRelationship:{
			input:"DeleteDevOpsServiceRelationshipInput"
		},
		updateDevOpsServiceEntityProperties:{
			input:"UpdateDevOpsServiceEntityPropertiesInput"
		},
		deleteDevOpsServiceEntityProperties:{
			input:"DeleteDevOpsServiceEntityPropertiesInput"
		},
		updateDeveloperLogAccess:{
			input:"UpdateDeveloperLogAccessInput"
		},
		installApp:{
			input:"AppInstallationInput"
		},
		uninstallApp:{
			input:"AppUninstallationInput"
		},
		upgradeApp:{
			input:"AppInstallationUpgradeInput"
		},
		subscribeToApp:{
			input:"AppSubscribeInput"
		},
		unsubscribeFromApp:{
			input:"AppUnsubscribeInput"
		},
		createAppDeploymentUrl:{
			input:"CreateAppDeploymentUrlInput"
		},
		createHostedResourceUploadUrl:{
			input:"CreateHostedResourceUploadUrlInput"
		},
		setExternalAuthCredentials:{
			input:"SetExternalAuthCredentialsInput"
		},
		setAppEnvironmentVariable:{
			input:"SetAppEnvironmentVariableInput"
		},
		deleteAppEnvironmentVariable:{
			input:"DeleteAppEnvironmentVariableInput"
		},
		createAppDeployment:{
			input:"CreateAppDeploymentInput"
		},
		helpCenter:{

		},
		deleteConfluenceSpaceRelationshipsForJiraProject:{
			input:"JiraProjectAndConfluenceSpaceDeleteRelationshipForJiraProjectInput"
		}
	},
	MyActivities:{
		all:{
			filters:"ActivitiesFilter"
		},
		workedOn:{
			filters:"ActivitiesFilter"
		},
		viewed:{
			filters:"ActivitiesFilter"
		}
	},
	MyActivity:{
		all:{
			filter:"MyActivityFilter"
		},
		workedOn:{
			filter:"MyActivityFilter"
		},
		viewed:{
			filter:"MyActivityFilter"
		}
	},
	MyActivityFilter:{
		type:"ActivitiesFilterType",
		arguments:"ActivityFilterArgs"
	},
	NadelBatchObjectIdentifiedBy:{

	},
	NadelHydrationArgument:{

	},
	NadelHydrationFromArgument:{

	},
	NadelHydrationTemplate: "enum" as const,
	NewCardParent:{

	},
	OAuthClientsQuery:{
		allAccountGrantsForUser:{

		}
	},
	OpsgenieQuery:{
		opsgenieTeam:{

		},
		opsgenieTeams:{

		},
		opsgenieSchedule:{

		},
		allOpsgenieTeams:{

		},
		myOpsgenieSchedules:{

		},
		opsgenieTeamsWithServiceModificationPermissions:{

		}
	},
	OpsgenieSchedule:{
		finalTimeline:{
			startTime:"DateTime",
			endTime:"DateTime"
		}
	},
	OpsgenieTeam:{
		members:{

		},
		alertCounts:{
			startTime:"DateTime",
			endTime:"DateTime"
		},
		devOpsServiceRelationships:{

		},
		jiraProjectRelationships:{

		}
	},
	PlanModeCardMoveInput:{
		destination:"PlanModeDestination",
		rankBeforeCardId:"Long",
		rankAfterCardId:"Long"
	},
	PlanModeDestination: "enum" as const,
	PolarisCommentKind: "enum" as const,
	PolarisFieldType: "enum" as const,
	PolarisFilterInput:{

	},
	PolarisGroupValueInput:{

	},
	PolarisPlay:{
		contribution:{

		}
	},
	PolarisPlayKind: "enum" as const,
	PolarisPresentationInput:{
		parameters:"JSON"
	},
	PolarisProject:{
		play:{

		}
	},
	PolarisRankingMutationNamespace:{
		createList:{
			input:"CreateRankingListInput"
		},
		deleteList:{

		},
		makeFirst:{

		},
		makeLast:{

		},
		makeBefore:{

		},
		makeAfter:{

		},
		makeUnranked:{

		}
	},
	PolarisRankingQueryNamespace:{
		list:{

		}
	},
	PolarisRefreshError: "enum" as const,
	PolarisResolvedObjectAuthType: "enum" as const,
	PolarisSnippetPropertyKind: "enum" as const,
	PolarisSortFieldInput:{
		order:"PolarisSortOrder"
	},
	PolarisSortOrder: "enum" as const,
	PolarisTimelineMode: "enum" as const,
	PolarisValueDecorationInput:{

	},
	PolarisValueOperator: "enum" as const,
	PolarisValueRuleInput:{
		operator:"PolarisValueOperator"
	},
	PolarisView:{
		jql:{
			filter:"PolarisFilterInput"
		},
		comments:{

		}
	},
	PolarisViewFilterInput:{
		kind:"PolarisViewFilterKind",
		values:"PolarisViewFilterValueInput"
	},
	PolarisViewFilterKind: "enum" as const,
	PolarisViewFilterOperator: "enum" as const,
	PolarisViewFilterValueInput:{
		operator:"PolarisViewFilterOperator"
	},
	PolarisViewSetType: "enum" as const,
	PolarisViewSortMode: "enum" as const,
	PolarisViewTableColumnSizeInput:{

	},
	PolarisVisualizationType: "enum" as const,
	Query:{
		jiraProjectAndDevOpsToolRelationship:{

		},
		devOpsToolRelationshipsForJiraProject:{
			filter:"JiraProjectAndDevOpsToolRelationshipFilter"
		},
		jiraProjectRelationshipsForDevOpsTool:{
			filter:"JiraProjectAndDevOpsToolRelationshipFilter"
		},
		releaseNotes:{
			search:"ContentPlatformSearchOptions",
			filter:"ContentPlatformReleaseNoteFilterOptions",
			productFeatureFlags:"JSON"
		},
		releaseNote:{

		},
		jiraProjectRelationshipsForRepository:{
			filter:"JiraProjectAndRepositoryRelationshipFilter",
			sort:"JiraProjectAndRepositoryRelationshipSort"
		},
		repositoryRelationshipsForJiraProject:{
			filter:"JiraProjectAndRepositoryRelationshipFilter",
			sort:"JiraProjectAndRepositoryRelationshipSort"
		},
		jiraProjectAndRepositoryRelationship:{

		},
		opsgenieTeamRelationshipForDevOpsService:{

		},
		devOpsServiceRelationshipsForOpsgenieTeam:{

		},
		devOpsServiceAndOpsgenieTeamRelationship:{

		},
		devOpsServiceRelationshipsForJiraProject:{
			filter:"DevOpsServiceAndJiraProjectRelationshipFilter"
		},
		jiraProjectRelationshipsForService:{
			filter:"DevOpsServiceAndJiraProjectRelationshipFilter"
		},
		devOpsServiceAndJiraProjectRelationship:{

		},
		devOpsServiceAndRepositoryRelationship:{

		},
		devOpsServiceRelationshipsForRepository:{
			filter:"DevOpsServiceAndRepositoryRelationshipFilter",
			sort:"DevOpsServiceAndRepositoryRelationshipSort"
		},
		repositoryRelationshipsForDevOpsService:{
			filter:"DevOpsServiceAndRepositoryRelationshipFilter",
			sort:"DevOpsServiceAndRepositoryRelationshipSort"
		},
		jiraProjectRelationshipsForOpsgenieTeam:{

		},
		opsgenieTeamRelationshipsForJiraProject:{

		},
		jiraProjectAndOpsgenieTeamRelationship:{

		},
		codeInJira:{

		},
		appStoredEntity:{

		},
		appStoredEntities:{
			where:"AppStoredEntityFilter"
		},
		appStoredEntitiesForCleanup:{
			where:"AppStoredEntityFilter"
		},
		polarisProject:{

		},
		polarisView:{

		},
		polarisInsights:{

		},
		polarisInsight:{

		},
		polarisInsightsWithErrors:{

		},
		polarisConnectAppByClientID:{

		},
		polarisLabels:{

		},
		polarisTermsConsent:{

		},
		polarisSnippetPropertiesConfig:{

		},
		polarisIdeas:{

		},
		polarisAnonymousVisitorHash:{

		},
		polarisCollabToken:{

		},
		polarisAnonymousVisitorHashByID:{

		},
		polarisLinkedDeliveryTickets:{

		},
		polarisIdeaTemplates:{

		},
		polarisViewArrangementInfo:{

		},
		appActiveTunnels:{

		},
		webTriggerUrlsByAppContext:{

		},
		marketplacePartner:{

		},
		marketplaceApp:{

		},
		marketplaceAppByKey:{

		},
		marketplaceAppByCloudAppId:{

		},
		myMarketplaceApps:{
			filter:"MarketplaceAppsFilter"
		},
		marketplacePricingPlan:{
			hostingType:"AtlassianProductHostingType",
			pricingPlanOptions:"MarketplacePricingPlanOptions"
		},
		extensionsEcho:{

		},
		extensionContexts:{

		},
		extensionByKey:{

		},
		node:{

		},
		boardScope:{

		},
		developmentInformation:{

		},
		softwareBoards:{

		},
		apps:{
			filter:"AppsFilter"
		},
		app:{

		},
		appHostServices:{
			filter:"AppServicesFilter"
		},
		user:{

		},
		users:{

		},
		devOpsService:{

		},
		devOpsServiceTiers:{

		},
		devOpsServices:{
			filter:"DevOpsServicesFilterInput"
		},
		devOpsServicesById:{

		},
		devOpsServiceRelationship:{

		},
		bitbucketRepositoriesAvailableToLinkWithNewDevOpsService:{

		},
		appLogs:{
			query:"LogQueryInput"
		},
		appLogLines:{

		},
		developerLogAccess:{
			environmentType:"AppEnvironmentType"
		},
		installationContextsWithLogAccess:{

		},
		tenantContexts:{

		},
		appInstallationTask:{

		},
		appDeployment:{

		},
		helpCenter:{

		}
	},
	RankColumnInput:{

	},
	RateLimitingCurrency: "enum" as const,
	RefreshPolarisSnippetsInput:{

	},
	RefreshTokenInput:{

	},
	RemoveCompassComponentLabelsInput:{

	},
	RemovePolarisColumnInput:{

	},
	ResolvePolarisObjectInput:{

	},
	RoadmapAddItemInput:{
		dueDate:"Date",
		startDate:"Date",
		color:"RoadmapPaletteColor",
		rank:"RoadmapAddItemRank"
	},
	RoadmapAddItemRank:{

	},
	RoadmapAddLevelOneIssueTypeHealthcheckResolution:{
		create:"RoadmapCreateLevelOneIssueType",
		promote:"RoadmapPromoteLevelOneIssueType"
	},
	RoadmapCreateLevelOneIssueType:{

	},
	RoadmapEpicView: "enum" as const,
	RoadmapItemRankInput:{
		position:"RoadmapRankPosition"
	},
	RoadmapLevelOneView: "enum" as const,
	RoadmapPaletteColor: "enum" as const,
	RoadmapPromoteLevelOneIssueType:{

	},
	RoadmapRankPosition: "enum" as const,
	RoadmapResolveHealthcheckInput:{
		addLevelOneIssueType:"RoadmapAddLevelOneIssueTypeHealthcheckResolution"
	},
	RoadmapScheduleItemInput:{
		dueDate:"Date",
		startDate:"Date"
	},
	RoadmapScheduleItemsInput:{
		scheduleRequests:"RoadmapScheduleItemInput"
	},
	RoadmapSprintState: "enum" as const,
	RoadmapTimelineMode: "enum" as const,
	RoadmapToggleDependencyInput:{

	},
	RoadmapUpdateItemInput:{
		dueDate:"Date",
		startDate:"Date",
		color:"RoadmapPaletteColor",
		rank:"RoadmapItemRankInput"
	},
	RoadmapUpdateSettingsInput:{

	},
	RoadmapVersionStatus: "enum" as const,
	RoadmapsMutation:{
		resolveRoadmapHealthcheck:{
			input:"RoadmapResolveHealthcheckInput"
		},
		updateRoadmapSettings:{
			input:"RoadmapUpdateSettingsInput"
		},
		addRoadmapItem:{
			input:"RoadmapAddItemInput"
		},
		updateRoadmapItem:{
			input:"RoadmapUpdateItemInput"
		},
		scheduleRoadmapItems:{
			input:"RoadmapScheduleItemsInput"
		},
		addRoadmapDependency:{
			input:"RoadmapToggleDependencyInput"
		},
		removeRoadmapDependency:{
			input:"RoadmapToggleDependencyInput"
		}
	},
	RoadmapsQuery:{
		roadmapForSource:{

		},
		roadmapItemByIds:{

		},
		roadmapFilterItems:{

		},
		roadmapFilterConfiguration:{

		}
	},
	ScanPolarisProjectInput:{

	},
	Scope: "enum" as const,
	SearchAnalyticsInput:{

	},
	SearchBoardFilter:{

	},
	SearchBoardProductType: "enum" as const,
	SearchConfluenceFilter:{
		range:"SearchConfluenceRangeFilter",
		containerStatus:"SearchContainerStatus"
	},
	SearchConfluenceRangeField: "enum" as const,
	SearchConfluenceRangeFilter:{
		field:"SearchConfluenceRangeField"
	},
	SearchContainerStatus: "enum" as const,
	SearchFilterInput:{
		confluenceFilters:"SearchConfluenceFilter",
		jiraFilters:"SearchJiraFilter"
	},
	SearchJiraFilter:{
		boardFilter:"SearchBoardFilter",
		projectFilter:"SearchJiraProjectFilter"
	},
	SearchJiraProjectFilter:{
		projectType:"SearchProjectType"
	},
	SearchProjectType: "enum" as const,
	SearchQueryAPI:{
		search:{
			filters:"SearchFilterInput",
			analytics:"SearchAnalyticsInput"
		},
		recent:{
			filters:"SearchRecentFilterInput",
			analytics:"SearchAnalyticsInput"
		}
	},
	SearchRecentFilterInput:{

	},
	SearchResultType: "enum" as const,
	SetAppEnvironmentVariableInput:{
		environment:"AppEnvironmentInput",
		environmentVariable:"AppEnvironmentVariableInput"
	},
	SetAppStoredEntityMutationInput:{
		value:"JSON"
	},
	SetBoardEstimationTypeInput:{

	},
	SetColumnLimitInput:{

	},
	SetColumnNameInput:{

	},
	SetEstimationTypeInput:{

	},
	SetExternalAuthCredentialsInput:{
		environment:"AppEnvironmentInput",
		credentials:"ExternalAuthCredentialsInput"
	},
	SetIssueMediaVisibilityInput:{

	},
	SetPolarisProjectOnboardedInput:{

	},
	SetPolarisSelectedDeliveryProjectInput:{

	},
	SetPolarisSnippetPropertiesConfigInput:{
		config:"JSON"
	},
	SetSwimlaneStrategyInput:{
		strategy:"SwimlaneStrategy"
	},
	ShepherdActionType: "enum" as const,
	ShepherdActivityHighlightInput:{
		action:"ShepherdActionType",
		subject:"ShepherdSubjectInput",
		time:"ShepherdTimeInput"
	},
	ShepherdAlertDescriptionType: "enum" as const,
	ShepherdAlertSeverity: "enum" as const,
	ShepherdAlertStatus: "enum" as const,
	ShepherdAlertTemplateType: "enum" as const,
	ShepherdCreateAlertInput:{
		highlight:"ShepherdHighlightInput",
		status:"ShepherdAlertStatus",
		template:"ShepherdAlertTemplateType"
	},
	ShepherdCreateEmailInput:{
		status:"ShepherdSubscriptionStatus"
	},
	ShepherdCreateExampleAlertInput:{

	},
	ShepherdCreateOrganizationInput:{

	},
	ShepherdCreateSlackInput:{
		callbackURL:"URL",
		status:"ShepherdSubscriptionStatus"
	},
	ShepherdCreateSubscriptionInput:{
		email:"ShepherdCreateEmailInput",
		slack:"ShepherdCreateSlackInput",
		webhook:"ShepherdCreateWebhookInput"
	},
	ShepherdCreateWebhookInput:{
		callbackURL:"URL",
		status:"ShepherdSubscriptionStatus",
		type:"ShepherdWebhookType"
	},
	ShepherdHighlightInput:{
		activityHighlight:"ShepherdActivityHighlightInput"
	},
	ShepherdMutation:{
		createAlert:{
			input:"ShepherdCreateAlertInput"
		},
		createExampleAlert:{
			input:"ShepherdCreateExampleAlertInput"
		},
		createOrganization:{
			input:"ShepherdCreateOrganizationInput"
		},
		createSubscription:{
			input:"ShepherdCreateSubscriptionInput"
		},
		deleteSubscription:{

		},
		testSubscription:{

		},
		updateAlert:{
			input:"ShepherdUpdateAlertInput"
		},
		updateOrganization:{
			input:"ShepherdUpdateOrganizationInput"
		},
		updateSubscription:{
			input:"ShepherdUpdateSubscriptionInput"
		}
	},
	ShepherdQuery:{
		shepherdActivity:{
			actions:"ShepherdActionType",
			endTime:"DateTime",
			startTime:"DateTime",
			subject:"ShepherdSubjectInput"
		},
		shepherdAlert:{

		},
		shepherdAlerts:{

		},
		shepherdOrganization:{

		},
		shepherdSubscriptions:{

		},
		shepherdUser:{

		}
	},
	ShepherdQueryErrorType: "enum" as const,
	ShepherdSubjectInput:{

	},
	ShepherdSubscriptionStatus: "enum" as const,
	ShepherdTimeInput:{
		end:"DateTime",
		start:"DateTime"
	},
	ShepherdUpdateAlertInput:{
		status:"ShepherdAlertStatus"
	},
	ShepherdUpdateEmailInput:{
		email:"ShepherdCreateEmailInput",
		status:"ShepherdSubscriptionStatus"
	},
	ShepherdUpdateOrganizationInput:{

	},
	ShepherdUpdateSlackInput:{
		callbackURL:"URL",
		status:"ShepherdSubscriptionStatus"
	},
	ShepherdUpdateSubscriptionInput:{
		email:"ShepherdUpdateEmailInput",
		slack:"ShepherdUpdateSlackInput",
		webhook:"ShepherdUpdateWebhookInput"
	},
	ShepherdUpdateWebhookInput:{
		callbackURL:"URL",
		status:"ShepherdSubscriptionStatus",
		type:"ShepherdWebhookType"
	},
	ShepherdWebhookType: "enum" as const,
	SmartsContext:{
		additionalContextList:"SmartsKeyValue"
	},
	SmartsKeyValue:{

	},
	SmartsModelRequestParams:{

	},
	SmartsQueryApi:{
		recommendedContainer:{
			recommendationsQuery:"SmartsRecommendationsQuery"
		},
		recommendedUser:{
			recommendationsQuery:"SmartsRecommendationsQuery"
		},
		recommendedObject:{
			recommendationsQuery:"SmartsRecommendationsQuery"
		}
	},
	SmartsRecommendationsQuery:{
		context:"SmartsContext",
		modelRequestParams:"SmartsModelRequestParams"
	},
	SoftwareBoard:{
		cards:{

		}
	},
	SoftwareBoardFeatureKey: `scalar.SoftwareBoardFeatureKey` as const,
	SoftwareBoardPermission: `scalar.SoftwareBoardPermission` as const,
	SoftwareCardsDestination:{
		destination:"SoftwareCardsDestinationEnum"
	},
	SoftwareCardsDestinationEnum: "enum" as const,
	SoftwareProject:{
		cardTypes:{
			hierarchyLevelType:"CardHierarchyLevelEnumType"
		}
	},
	SortDirection: "enum" as const,
	Sprint:{
		cards:{

		}
	},
	SprintReportsEstimationStatisticType: "enum" as const,
	SprintScopeChangeEventType: `scalar.SprintScopeChangeEventType` as const,
	SprintState: "enum" as const,
	StartSprintInput:{

	},
	Subscription:{
		onJiraIssueCreatedForUser:{
			projectType:"JiraProjectType",
			filter:"JiraProjectFilterInput"
		}
	},
	SupportRequest:{
		comments:{

		},
		statuses:{

		},
		transitions:{

		},
		lastComment:{

		},
		activities:{

		}
	},
	SupportRequestAddCommentInput:{

	},
	SupportRequestCatalogMutationApi:{
		addComment:{
			input:"SupportRequestAddCommentInput"
		},
		updateMigrationTask:{
			input:"SupportRequestMigrationTaskInput"
		},
		statusTransition:{
			input:"SupportRequestTransitionInput"
		},
		removeRequestParticipants:{
			input:"SupportRequestParticipantsInput"
		},
		addRequestParticipants:{
			input:"SupportRequestParticipantsInput"
		},
		removeSupportRequestOrganizations:{
			input:"SupportRequestOrganizationsInput"
		},
		addSupportRequestOrganizations:{
			input:"SupportRequestOrganizationsInput"
		},
		createNamedContactOperationRequest:{
			operation:"SupportRequestNamedContactOperation"
		},
		updateSupportRequest:{
			input:"SupportRequestUpdateInput"
		}
	},
	SupportRequestCatalogQueryApi:{
		supportRequest:{

		}
	},
	SupportRequestContextMutationApi:{
		setNotifications:{
			input:"SupportRequestContextSetNotificationInput"
		}
	},
	SupportRequestContextQueryApi:{
		getNotificationStatus:{

		}
	},
	SupportRequestContextSetNotificationInput:{

	},
	SupportRequestFieldDataType: "enum" as const,
	SupportRequestMigrationTaskInput:{

	},
	SupportRequestNamedContactOperation: "enum" as const,
	SupportRequestOrganizationsInput:{

	},
	SupportRequestPage:{
		requests:{
			ownership:"SupportRequestQueryOwnership",
			status:"SupportRequestQueryStatusCategory"
		},
		migrationRequests:{
			ownership:"SupportRequestQueryOwnership",
			status:"SupportRequestQueryStatusCategory"
		}
	},
	SupportRequestParticipantsInput:{

	},
	SupportRequestQueryOwnership: "enum" as const,
	SupportRequestQueryStatusCategory: "enum" as const,
	SupportRequestStatusCategory: "enum" as const,
	SupportRequestTransitionInput:{

	},
	SupportRequestUpdateFieldInput:{

	},
	SupportRequestUpdateInput:{
		experienceFields:"SupportRequestUpdateFieldInput"
	},
	SupportRequestUserType: "enum" as const,
	SupportRequestUsers:{
		searchUsers:{

		},
		searchOrganizations:{

		}
	},
	SwimlaneStrategy: "enum" as const,
	Team:{
		members:{
			state:"MembershipState"
		}
	},
	TeamQuery:{
		team:{

		}
	},
	TeamState: "enum" as const,
	ThirdPartyRepositoryInput:{
		avatar:"AvatarInput"
	},
	ToggleBoardFeatureInput:{

	},
	Toolchain:{
		containers:{

		}
	},
	TownsquareGoalSortEnum: "enum" as const,
	TownsquareGoalStateValue: "enum" as const,
	TownsquareHelpPointer:{
		tags:{

		}
	},
	TownsquareHelpPointerType: "enum" as const,
	TownsquareProjectSortEnum: "enum" as const,
	TownsquareProjectStateValue: "enum" as const,
	TownsquareQueryApi:{
		projectsByAri:{

		},
		projectByKey:{

		},
		goalsByAri:{

		},
		goalByKey:{

		},
		commentsByAri:{

		},
		projectSearch:{
			sort:"TownsquareProjectSortEnum"
		},
		goalSearch:{
			sort:"TownsquareGoalSortEnum"
		},
		helpPointerSearch:{

		},
		helpPointersByCloudIds:{

		},
		helpPointersByTeam:{

		}
	},
	TownsquareTargetDateType: "enum" as const,
	TransitionFilter:{

	},
	TunnelDefinitionsInput:{
		faasTunnelUrl:"URL",
		customUI:"CustomUITunnelDefinitionInput"
	},
	URL: `scalar.URL` as const,
	UnassignIssueParentInput:{

	},
	UnlinkExternalSourceInput:{

	},
	UpdateAppDetailsInput:{

	},
	UpdateAppHostServiceScopesInput:{

	},
	UpdateAtlassianOAuthClientInput:{
		refreshToken:"RefreshTokenInput"
	},
	UpdateCompassComponentDataManagerMetadataInput:{
		externalSourceURL:"URL",
		lastSyncEvent:"ComponentSyncEventInput"
	},
	UpdateCompassComponentInput:{
		fields:"UpdateCompassFieldInput",
		customFields:"CompassCustomFieldInput"
	},
	UpdateCompassComponentLinkInput:{
		link:"UpdateCompassLinkInput"
	},
	UpdateCompassComponentTypeInput:{
		type:"CompassComponentType"
	},
	UpdateCompassFieldInput:{
		value:"CompassFieldValueInput"
	},
	UpdateCompassHasDescriptionScorecardCriteriaInput:{

	},
	UpdateCompassHasFieldScorecardCriteriaInput:{

	},
	UpdateCompassHasLinkScorecardCriteriaInput:{
		linkType:"CompassLinkType"
	},
	UpdateCompassHasMetricValueCriteriaInput:{
		comparator:"CompassCriteriaNumberComparatorOptions"
	},
	UpdateCompassHasOwnerScorecardCriteriaInput:{

	},
	UpdateCompassLinkInput:{
		type:"CompassLinkType",
		url:"URL"
	},
	UpdateCompassScorecardCriteriaInput:{
		hasLink:"UpdateCompassHasLinkScorecardCriteriaInput",
		hasField:"UpdateCompassHasFieldScorecardCriteriaInput",
		hasDescription:"UpdateCompassHasDescriptionScorecardCriteriaInput",
		hasOwner:"UpdateCompassHasOwnerScorecardCriteriaInput",
		hasMetricValue:"UpdateCompassHasMetricValueCriteriaInput",
		hasCustomTextValue:"CompassUpdateHasCustomTextFieldScorecardCriteriaInput",
		hasCustomBooleanValue:"CompassUpdateHasCustomBooleanFieldScorecardCriteriaInput",
		hasCustomNumberValue:"CompassUpdateHasCustomNumberFieldScorecardCriteriaInput"
	},
	UpdateCompassScorecardCriteriasInput:{
		criterias:"UpdateCompassScorecardCriteriaInput"
	},
	UpdateCompassScorecardInput:{
		componentType:"CompassComponentType",
		importance:"CompassScorecardImportance"
	},
	UpdateCustomFilterInput:{

	},
	UpdateDevOpsContainerRelationshipEntityPropertiesInput:{
		properties:"DevOpsContainerRelationshipEntityPropertyInput"
	},
	UpdateDevOpsContainerRelationshipEntityPropertiesPayload:{
		properties:{

		}
	},
	UpdateDevOpsServiceAndJiraProjectRelationshipInput:{

	},
	UpdateDevOpsServiceAndOpsgenieTeamRelationshipInput:{

	},
	UpdateDevOpsServiceAndRepositoryRelationshipInput:{

	},
	UpdateDevOpsServiceEntityPropertiesInput:{
		properties:"DevOpsServiceEntityPropertyInput"
	},
	UpdateDevOpsServiceEntityPropertiesPayload:{
		properties:{

		}
	},
	UpdateDevOpsServiceInput:{
		properties:"DevOpsServiceEntityPropertyInput"
	},
	UpdateDevOpsServiceRelationshipInput:{

	},
	UpdateDeveloperLogAccessInput:{
		environmentType:"AppEnvironmentType"
	},
	UpdateJiraProjectAndOpsgenieTeamRelationshipInput:{

	},
	UpdateJiraProjectAndRepositoryRelationshipInput:{
		thirdPartyRepository:"ThirdPartyRepositoryInput"
	},
	UpdatePolarisCalculatedFieldInput:{
		formula:"JSON",
		presentation:"PolarisPresentationInput"
	},
	UpdatePolarisCommentInput:{
		content:"JSON"
	},
	UpdatePolarisDecorationInput:{
		valueRules:"PolarisValueRuleInput",
		valueDecoration:"PolarisValueDecorationInput"
	},
	UpdatePolarisFieldDescriptionInput:{

	},
	UpdatePolarisFieldEmojiInput:{

	},
	UpdatePolarisFieldOptionWeightInput:{

	},
	UpdatePolarisIdeaInput:{

	},
	UpdatePolarisIdeaTemplateInput:{
		template:"JSON"
	},
	UpdatePolarisInsightInput:{
		description:"JSON",
		snippets:"UpdatePolarisSnippetInput"
	},
	UpdatePolarisMatrixAxis:{
		fieldOptions:"PolarisGroupValueInput"
	},
	UpdatePolarisMatrixConfig:{
		axes:"UpdatePolarisMatrixAxis"
	},
	UpdatePolarisPlayContribution:{
		content:"JSON"
	},
	UpdatePolarisPlayInput:{
		parameters:"JSON"
	},
	UpdatePolarisSnippetInput:{
		data:"JSON",
		setProperties:"JSON"
	},
	UpdatePolarisTermsConsentInput:{
		url:"URL"
	},
	UpdatePolarisTimelineConfig:{
		mode:"PolarisTimelineMode"
	},
	UpdatePolarisViewInput:{
		description:"JSON",
		tableColumnSizes:"PolarisViewTableColumnSizeInput",
		groupValues:"PolarisGroupValueInput",
		verticalGroupValues:"PolarisGroupValueInput",
		sort:"PolarisSortFieldInput",
		filter:"PolarisViewFilterInput",
		timelineConfig:"UpdatePolarisTimelineConfig",
		matrixConfig:"UpdatePolarisMatrixConfig",
		sortMode:"PolarisViewSortMode"
	},
	UpdatePolarisViewRankInput:{

	},
	UpdatePolarisViewSetInput:{

	},
	UpdateUserInstallationRulesInput:{
		rule:"UserInstallationRuleValue"
	},
	UserAuthTokenForExtensionInput:{

	},
	UserInstallationRuleValue: "enum" as const,
	VirtualAgentConfiguration:{
		intentRuleProjections:{

		},
		intentRuleProjection:{

		}
	},
	VirtualAgentIntentProjection:{
		questionProjections:{

		}
	},
	VirtualAgentIntentRuleProjectionsFilter:{

	},
	VirtualAgentMutationApi:{
		updateVirtualAgentConfiguration:{
			input:"VirtualAgentUpdateConfigurationInput"
		}
	},
	VirtualAgentQueryApi:{
		virtualAgentConfigurationByProjectId:{

		},
		intentRuleProjections:{
			filter:"VirtualAgentIntentRuleProjectionsFilter"
		}
	},
	VirtualAgentUpdateConfigurationInput:{

	},
	WebTriggerUrlInput:{

	},
	sourceBillingType: "enum" as const
}

export const ReturnTypes: Record<string,any> = {
	scopes:{
		required:"Scope",
		product:"GrantCheckProduct"
	},
	beta:{
		name:"String"
	},
	value:{
		val:"String"
	},
	apiGroup:{
		name:"ApiGroup"
	},
	namespaced:{

	},
	notDocumented:{

	},
	lifecycle:{
		name:"String",
		stage:"LifecycleStage",
		allowThirdParties:"Boolean"
	},
	optIn:{
		to:"String"
	},
	Activities:{
		all:"ActivitiesConnection",
		workedOn:"ActivitiesConnection",
		myActivities:"MyActivities"
	},
	ActivitiesCommentedEvent:{
		commentId:"ID"
	},
	ActivitiesConnection:{
		edges:"ActivityEdge",
		nodes:"ActivitiesItem",
		pageInfo:"ActivityPageInfo"
	},
	ActivitiesContainer:{
		id:"ID",
		localResourceId:"ID",
		name:"String",
		type:"ActivitiesContainerType",
		product:"ActivityProduct",
		cloudId:"String",
		url:"URL",
		iconUrl:"URL"
	},
	ActivitiesContributor:{
		profile:"User",
		lastAccessedDate:"DateTime",
		count:"Int"
	},
	ActivitiesEvent:{
		id:"ID",
		timestamp:"DateTime",
		eventType:"ActivityEventType",
		user:"ActivitiesUser",
		extension:"ActivitiesEventExtension"
	},
	ActivitiesEventExtension:{
		"...on ActivitiesTransitionedEvent":"ActivitiesTransitionedEvent",
		"...on ActivitiesCommentedEvent":"ActivitiesCommentedEvent"
	},
	ActivitiesItem:{
		id:"ID",
		timestamp:"DateTime",
		object:"ActivitiesObject"
	},
	ActivitiesJiraIssue:{
		issueKey:"String"
	},
	ActivitiesObject:{
		id:"ID",
		localResourceId:"ID",
		name:"String",
		type:"ActivityObjectType",
		product:"ActivityProduct",
		cloudId:"String",
		url:"URL",
		iconUrl:"URL",
		containers:"ActivitiesContainer",
		contributors:"ActivitiesContributor",
		parent:"ActivitiesObjectParent",
		events:"ActivitiesEvent",
		extension:"ActivitiesObjectExtension"
	},
	ActivitiesObjectExtension:{
		"...on ActivitiesJiraIssue":"ActivitiesJiraIssue"
	},
	ActivitiesObjectParent:{
		id:"ID",
		type:"ActivityObjectType"
	},
	ActivitiesTransitionedEvent:{
		from:"String",
		to:"String"
	},
	ActivitiesUser:{
		profile:"User"
	},
	Activity:{
		all:"ActivityConnection",
		workedOn:"ActivityConnection",
		myActivity:"MyActivity"
	},
	ActivityConnection:{
		edges:"ActivityItemEdge",
		pageInfo:"ActivityPageInfo"
	},
	ActivityContributor:{
		profile:"User",
		lastAccessedDate:"DateTime",
		count:"Int"
	},
	ActivityEdge:{
		cursor:"String",
		node:"ActivitiesItem"
	},
	ActivityEvent:{
		id:"ID",
		timestamp:"DateTime",
		eventType:"String",
		actor:"User",
		extension:"ActivitiesEventExtension"
	},
	ActivityItemEdge:{
		cursor:"String",
		node:"ActivityNode"
	},
	ActivityNode:{
		id:"ID",
		object:"ActivityObject",
		event:"ActivityEvent"
	},
	ActivityObject:{
		id:"ID",
		rootContainerId:"ID",
		type:"String",
		product:"String",
		subProduct:"String",
		contributors:"ActivityContributor",
		data:"ActivityObjectData"
	},
	ActivityObjectData:{
		"...on AvocadoQuestion":"AvocadoQuestion",
		"...on AvocadoAnswer":"AvocadoAnswer",
		"...on TownsquareProject":"TownsquareProject",
		"...on TownsquareGoal":"TownsquareGoal",
		"...on TownsquareComment":"TownsquareComment",
		"...on ConfluencePage":"ConfluencePage",
		"...on ConfluenceBlogPost":"ConfluenceBlogPost",
		"...on ConfluenceFooterComment":"ConfluenceFooterComment",
		"...on ConfluenceInlineComment":"ConfluenceInlineComment",
		"...on JiraIssue":"JiraIssue",
		"...on JiraPlatformComment":"JiraPlatformComment",
		"...on JiraServiceManagementComment":"JiraServiceManagementComment"
	},
	ActivityPageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean"
	},
	ActivityUser:{
		accountId:"ID"
	},
	AddAppContributorResponsePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	AddCompassComponentLabelsPayload:{
		addedLabels:"CompassComponentLabel",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	Admin:{
		"...on JiraUser":"JiraUser",
		"...on JiraUserGroup":"JiraUserGroup"
	},
	App:{
		id:"ID",
		name:"String",
		description:"String",
		distributionStatus:"String",
		avatarFileId:"String",
		createdBy:"User",
		storesPersonalData:"Boolean",
		privacyPolicy:"String",
		termsOfService:"String",
		contactLink:"String",
		vendorName:"String",
		environments:"AppEnvironment",
		environmentByKey:"AppEnvironment",
		tags:"String",
		marketplaceApp:"MarketplaceApp"
	},
	AppAuditConnection:{
		edges:"AuditEventEdge",
		nodes:"AuditEvent",
		pageInfo:"AuditsPageInfo"
	},
	AppConnection:{
		edges:"AppEdge",
		nodes:"App",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	AppDeployment:{
		id:"ID",
		appId:"ID",
		environmentKey:"String",
		status:"AppDeploymentStatus",
		errorDetails:"ErrorDetails",
		createdBy:"User",
		createdAt:"String",
		stages:"AppDeploymentStage"
	},
	AppDeploymentEvent:{
		"...on AppDeploymentLogEvent": "AppDeploymentLogEvent",
		"...on AppDeploymentSnapshotLogEvent": "AppDeploymentSnapshotLogEvent",
		"...on AppDeploymentTransitionEvent": "AppDeploymentTransitionEvent",
		createdAt:"String",
		stepName:"String"
	},
	AppDeploymentLogEvent:{
		stepName:"String",
		message:"String",
		level:"AppDeploymentEventLogLevel",
		createdAt:"String"
	},
	AppDeploymentSnapshotLogEvent:{
		stepName:"String",
		message:"String",
		level:"AppDeploymentEventLogLevel",
		createdAt:"String"
	},
	AppDeploymentStage:{
		key:"String",
		description:"String",
		progress:"AppDeploymentStageProgress",
		events:"AppDeploymentEvent"
	},
	AppDeploymentStageProgress:{
		totalSteps:"Int",
		doneSteps:"Int"
	},
	AppDeploymentTransitionEvent:{
		stepName:"String",
		newStatus:"AppDeploymentStepStatus",
		createdAt:"String"
	},
	AppEdge:{
		cursor:"String",
		node:"App"
	},
	AppEnvironment:{
		id:"ID",
		appId:"ID",
		key:"String",
		type:"AppEnvironmentType",
		createdBy:"User",
		createdAt:"String",
		scopes:"String",
		versions:"AppEnvironmentVersionConnection",
		oauthClient:"AtlassianOAuthClient",
		variables:"AppEnvironmentVariable",
		installations:"AppInstallation",
		deployments:"AppDeployment"
	},
	AppEnvironmentVariable:{
		key:"String",
		value:"String",
		encrypt:"Boolean"
	},
	AppEnvironmentVersion:{
		id:"ID",
		version:"String",
		isLatest:"Boolean",
		requiresLicense:"Boolean",
		permissions:"AppPermission",
		migrationKeys:"MigrationKeys",
		storage:"Storage"
	},
	AppEnvironmentVersionConnection:{
		edges:"AppEnvironmentVersionEdge",
		nodes:"AppEnvironmentVersion",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	AppEnvironmentVersionEdge:{
		cursor:"String",
		node:"AppEnvironmentVersion"
	},
	AppHostService:{
		serviceId:"ID",
		name:"String",
		description:"String",
		scopes:"AppHostServiceScope"
	},
	AppHostServiceScope:{
		key:"String",
		name:"String",
		description:"String",
		service:"AppHostService"
	},
	AppInstallation:{
		id:"ID",
		installationContext:"ID",
		createdAt:"DateTime",
		createdBy:"User",
		version:"AppVersion",
		app:"App",
		appEnvironmentVersion:"AppEnvironmentVersion",
		appEnvironment:"AppEnvironment",
		license:"AppInstallationLicense"
	},
	AppInstallationByIndexConnection:{
		edges:"AppInstallationByIndexEdge",
		nodes:"AppInstallation",
		pageInfo:"AppInstallationPageInfo",
		totalCount:"Int"
	},
	AppInstallationByIndexEdge:{
		cursor:"String",
		node:"AppInstallation"
	},
	AppInstallationConnection:{
		edges:"AppInstallationEdge",
		nodes:"AppInstallation",
		pageInfo:"PageInfo"
	},
	AppInstallationContext:{
		id:"ID"
	},
	AppInstallationCreationTask:{
		id:"ID",
		appId:"ID",
		appEnvironmentId:"ID",
		appVersionId:"ID",
		context:"ID",
		state:"AppTaskState",
		errors:"MutationError"
	},
	AppInstallationDeletionTask:{
		id:"ID",
		appId:"ID",
		appEnvironmentId:"ID",
		context:"ID",
		state:"AppTaskState",
		errors:"MutationError"
	},
	AppInstallationEdge:{
		cursor:"String",
		node:"AppInstallation"
	},
	AppInstallationLicense:{
		active:"Boolean",
		type:"String",
		supportEntitlementNumber:"String",
		trialEndDate:"DateTime",
		subscriptionEndDate:"DateTime",
		isEvaluation:"Boolean",
		billingPeriod:"String",
		ccpEntitlementId:"String",
		ccpEntitlementSlug:"String"
	},
	AppInstallationPageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String",
		endCursor:"String"
	},
	AppInstallationResponse:{
		installationId:"ID",
		taskId:"ID",
		success:"Boolean",
		errors:"MutationError"
	},
	AppInstallationSubscribeTask:{
		id:"ID",
		appId:"ID",
		appEnvironmentId:"ID",
		context:"ID",
		state:"AppTaskState",
		errors:"MutationError"
	},
	AppInstallationTask:{
		"...on AppInstallationCreationTask": "AppInstallationCreationTask",
		"...on AppInstallationDeletionTask": "AppInstallationDeletionTask",
		"...on AppInstallationSubscribeTask": "AppInstallationSubscribeTask",
		"...on AppInstallationUnsubscribeTask": "AppInstallationUnsubscribeTask",
		"...on AppInstallationUpgradeTask": "AppInstallationUpgradeTask",
		id:"ID",
		appId:"ID",
		appEnvironmentId:"ID",
		state:"AppTaskState",
		errors:"MutationError"
	},
	AppInstallationUnsubscribeTask:{
		id:"ID",
		appId:"ID",
		appEnvironmentId:"ID",
		context:"ID",
		state:"AppTaskState",
		errors:"MutationError"
	},
	AppInstallationUpgradeResponse:{
		installationId:"ID",
		taskId:"ID",
		success:"Boolean",
		errors:"MutationError"
	},
	AppInstallationUpgradeTask:{
		id:"ID",
		appId:"ID",
		appEnvironmentId:"ID",
		appVersionId:"ID",
		context:"ID",
		state:"AppTaskState",
		errors:"MutationError"
	},
	AppLog:{
		id:"ID",
		appVersion:"String",
		installationContext:"AppInstallationContext",
		function:"FunctionDescription",
		trigger:"FunctionTrigger",
		moduleType:"String",
		startTime:"String",
		appLogLines:"AppLogLines"
	},
	AppLogConnection:{
		edges:"AppLogEdge",
		nodes:"AppLog",
		pageInfo:"PageInfo"
	},
	AppLogEdge:{
		node:"AppLog",
		cursor:"String"
	},
	AppLogLine:{
		timestamp:"String",
		level:"String",
		message:"String",
		other:"JSON"
	},
	AppLogLineConnection:{
		edges:"AppLogLineEdge",
		nodes:"AppLogLine",
		pageInfo:"PageInfo",
		metadata:"FunctionInvocationMetadata"
	},
	AppLogLineEdge:{
		node:"AppLogLine",
		cursor:"String"
	},
	AppLogLines:{
		edges:"AppLogLineEdge",
		nodes:"AppLogLine",
		pageInfo:"PageInfo"
	},
	AppNetworkEgressPermission:{
		type:"AppNetworkPermissionType",
		addresses:"String"
	},
	AppNetworkEgressPermissionExtension:{
		type:"AppNetworkPermissionTypeExtension",
		addresses:"String"
	},
	AppPermission:{
		scopes:"AppHostServiceScope",
		egress:"AppNetworkEgressPermission",
		securityPolicies:"AppSecurityPoliciesPermission"
	},
	AppPrincipal:{
		id:"ID"
	},
	AppSecurityPoliciesPermission:{
		type:"AppSecurityPoliciesPermissionType",
		policies:"String"
	},
	AppSecurityPoliciesPermissionExtension:{
		type:"AppSecurityPoliciesPermissionTypeExtension",
		policies:"String"
	},
	AppStorageMutation:{
		setAppStoredEntity:"SetAppStoredEntityPayload",
		deleteAppStoredEntity:"DeleteAppStoredEntityPayload"
	},
	AppStoredEntity:{
		value:"JSON",
		key:"ID"
	},
	AppStoredEntityConnection:{
		edges:"AppStoredEntityEdge",
		nodes:"AppStoredEntity",
		pageInfo:"AppStoredEntityPageInfo",
		totalCount:"Int"
	},
	AppStoredEntityEdge:{
		cursor:"String",
		node:"AppStoredEntity"
	},
	AppStoredEntityFieldValue: `scalar.AppStoredEntityFieldValue` as const,
	AppStoredEntityPageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean"
	},
	AppSubscribePayload:{
		taskId:"ID",
		installation:"AppInstallation",
		success:"Boolean",
		errors:"MutationError"
	},
	AppTunnelDefinitions:{
		faasTunnelUrl:"URL",
		customUI:"CustomUITunnelDefinition"
	},
	AppUninstallationResponse:{
		taskId:"ID",
		success:"Boolean",
		errors:"MutationError"
	},
	AppUnsubscribePayload:{
		taskId:"ID",
		installation:"AppInstallation",
		success:"Boolean",
		errors:"MutationError"
	},
	AppUser:{
		id:"ID",
		accountId:"ID",
		canonicalAccountId:"ID",
		accountStatus:"AccountStatus",
		name:"String",
		picture:"URL"
	},
	AppVersion:{
		isLatest:"Boolean"
	},
	ApplyCompassScorecardToComponentPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	ApplyPolarisProjectTemplatePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	ArchivePolarisInsightsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	AriGraph:{
		relationship:"AriGraphRelationship",
		relationships:"AriGraphRelationshipConnection"
	},
	AriGraphCreateRelationshipsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	AriGraphDeleteRelationshipsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	AriGraphMutation:{
		createRelationships:"AriGraphCreateRelationshipsPayload",
		replaceRelationships:"AriGraphReplaceRelationshipsPayload",
		deleteRelationships:"AriGraphDeleteRelationshipsPayload"
	},
	AriGraphRelationship:{
		from:"AriGraphRelationshipNode",
		type:"ID",
		to:"AriGraphRelationshipNode",
		lastUpdated:"DateTime"
	},
	AriGraphRelationshipConnection:{
		nodes:"AriGraphRelationship",
		edges:"AriGraphRelationshipEdge",
		pageInfo:"PageInfo"
	},
	AriGraphRelationshipEdge:{
		cursor:"String",
		node:"AriGraphRelationship"
	},
	AriGraphRelationshipNode:{
		id:"ID",
		data:"AriGraphRelationshipNodeData"
	},
	AriGraphRelationshipNodeData:{
		"...on DeploymentSummary":"DeploymentSummary",
		"...on ConfluencePage":"ConfluencePage",
		"...on ConfluenceSpace":"ConfluenceSpace",
		"...on ThirdPartySecurityWorkspace":"ThirdPartySecurityWorkspace",
		"...on ThirdPartySecurityContainer":"ThirdPartySecurityContainer",
		"...on DevOpsPullRequestDetails":"DevOpsPullRequestDetails",
		"...on DevOpsSecurityVulnerabilityDetails":"DevOpsSecurityVulnerabilityDetails",
		"...on JiraIssue":"JiraIssue"
	},
	AriGraphRelationshipsErrorReference:{
		from:"ID",
		to:"ID",
		type:"ID"
	},
	AriGraphRelationshipsMutationErrorExtension:{
		statusCode:"Int",
		errorType:"String",
		reference:"AriGraphRelationshipsErrorReference"
	},
	AriGraphReplaceRelationshipsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	ArjConfiguration:{
		parentCustomFieldId:"String",
		epicLinkCustomFieldId:"String"
	},
	ArjHierarchyConfigurationLevel:{
		issueTypes:"String",
		title:"String"
	},
	AssignIssueParentOutput:{
		boardScope:"BoardScope",
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	AtlassianAccountUser:{
		id:"ID",
		accountId:"ID",
		canonicalAccountId:"ID",
		accountStatus:"AccountStatus",
		name:"String",
		picture:"URL",
		email:"String",
		zoneinfo:"String",
		locale:"String",
		nickname:"String",
		orgId:"ID",
		extendedProfile:"AtlassianAccountUserExtendedProfile"
	},
	AtlassianAccountUserExtendedProfile:{
		jobTitle:"String",
		organization:"String",
		department:"String",
		location:"String"
	},
	AtlassianOAuthClient:{
		clientID:"ID",
		callbacks:"String",
		refreshToken:"RefreshToken"
	},
	AttachCompassComponentDataManagerPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	AttachEventSourcePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	AuditEvent:{
		id:"ID",
		attributes:"AuditEventAttributes",
		message:"AuditMessageObject"
	},
	AuditEventAttributes:{
		actor:"User",
		action:"String",
		time:"String",
		context:"ContextEventObject",
		container:"ContainerEventObject"
	},
	AuditEventEdge:{
		cursor:"String",
		node:"AuditEvent"
	},
	AuditMessageObject:{
		content:"String",
		format:"String"
	},
	AuditsPageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String",
		endCursor:"String"
	},
	AuthToken:{
		token:"String",
		ttl:"Int"
	},
	AuthenticationContext:{
		user:"User"
	},
	AuxEffectsResult:{
		effects:"JSON",
		contextToken:"ForgeContextToken"
	},
	AvailableEstimations:{
		statisticFieldId:"String",
		name:"String"
	},
	Avocado:{
		questionsByAri:"AvocadoQuestion",
		answersByAri:"AvocadoAnswer"
	},
	AvocadoAnswer:{
		id:"ID",
		text:"String",
		siteName:"String",
		url:"String",
		iconUrl:"String"
	},
	AvocadoQuestion:{
		id:"ID",
		text:"String",
		siteName:"String",
		url:"String",
		iconUrl:"String",
		isAnswered:"Boolean"
	},
	Backlog:{
		boardIssueListKey:"String",
		requestColumnMigration:"Boolean",
		extension:"BacklogExtension",
		cards:"SoftwareCard",
		assignees:"User",
		cardTypes:"CardType",
		labels:"String"
	},
	BacklogExtension:{
		operations:"SoftwareOperation"
	},
	BasicBoardFeatureView:{
		id:"ID",
		title:"String",
		description:"String",
		status:"String",
		canEnable:"Boolean",
		learnMoreLink:"String",
		learnMoreArticleId:"String",
		imageUri:"String",
		dependents:"BoardFeatureView",
		prerequisites:"BoardFeatureView"
	},
	BitbucketQuery:{
		bitbucketRepository:"BitbucketRepository",
		bitbucketRepositories:"BitbucketRepository",
		bitbucketWorkspace:"BitbucketWorkspace"
	},
	BitbucketRepository:{
		id:"ID",
		name:"String",
		webUrl:"URL",
		href:"URL",
		avatar:"BitbucketRepositoryAvatar",
		workspace:"BitbucketWorkspace",
		jiraProjectRelationships:"JiraProjectAndRepositoryRelationshipConnection",
		devOpsServiceRelationships:"DevOpsServiceAndRepositoryRelationshipConnection"
	},
	BitbucketRepositoryAvatar:{
		url:"URL"
	},
	BitbucketRepositoryConnection:{
		edges:"BitbucketRepositoryEdge",
		nodes:"BitbucketRepository",
		pageInfo:"PageInfo"
	},
	BitbucketRepositoryEdge:{
		cursor:"String",
		node:"BitbucketRepository"
	},
	BitbucketRepositoryIdConnection:{
		edges:"BitbucketRepositoryIdEdge",
		pageInfo:"PageInfo"
	},
	BitbucketRepositoryIdEdge:{
		cursor:"String",
		node:"BitbucketRepository"
	},
	BitbucketWorkspace:{
		id:"ID",
		name:"String",
		repositories:"BitbucketRepositoryConnection"
	},
	BoardEditConfig:{
		inlineCardCreate:"InlineCardCreateConfig",
		inlineColumnEdit:"InlineColumnEditConfig"
	},
	BoardFeature:{
		key:"SoftwareBoardFeatureKey",
		status:"BoardFeatureStatus",
		toggle:"BoardFeatureToggleStatus",
		category:"String",
		prerequisites:"BoardFeature"
	},
	BoardFeatureConnection:{
		pageInfo:"PageInfo",
		edges:"BoardFeatureEdge"
	},
	BoardFeatureEdge:{
		cursor:"String",
		node:"BoardFeatureView"
	},
	BoardFeatureGroup:{
		id:"ID",
		name:"String",
		features:"BoardFeatureConnection"
	},
	BoardFeatureGroupConnection:{
		pageInfo:"PageInfo",
		edges:"BoardFeatureGroupEdge"
	},
	BoardFeatureGroupEdge:{
		cursor:"String",
		node:"BoardFeatureGroup"
	},
	BoardFeatureView:{
		"...on BasicBoardFeatureView":"BasicBoardFeatureView",
		"...on EstimationBoardFeatureView":"EstimationBoardFeatureView"
	},
	BoardScope:{
		id:"ID",
		board:"SoftwareBoard",
		userSwimlaneStrategy:"SwimlaneStrategy",
		backlog:"Backlog",
		sprints:"Sprint",
		projectLocation:"SoftwareProject",
		cardParents:"CardParent",
		features:"BoardFeature",
		featureGroups:"BoardFeatureGroupConnection",
		reports:"SoftwareReports",
		cards:"SoftwareCard",
		estimation:"EstimationConfig",
		currentUser:"CurrentUser",
		sprint:"Sprint",
		startSprintPrototype:"Sprint",
		customFilters:"CustomFilter",
		filteredCardIds:"ID",
		globalCardCreateAdditionalFields:"GlobalCardCreateAdditionalFields",
		name:"String",
		admins:"Admin",
		canAdministerBoard:"Boolean",
		jql:"String"
	},
	BoardScopeConnection:{
		edges:"BoardScopeEdge",
		pageInfo:"PageInfo"
	},
	BoardScopeEdge:{
		node:"BoardScope",
		cursor:"String"
	},
	BurndownChart:{
		chart:"BurndownChartData",
		filters:"SprintReportsFilters"
	},
	BurndownChartData:{
		startTime:"DateTime",
		endTime:"DateTime",
		sprintStartEvent:"SprintStartData",
		scopeChangeEvents:"SprintScopeChangeData",
		sprintEndEvent:"SprintEndData",
		table:"BurndownChartDataTable",
		timeZone:"String"
	},
	BurndownChartDataTable:{
		scopeChanges:"BurndownChartDataTableScopeChangeRow",
		incompleteIssues:"BurndownChartDataTableIssueRow",
		completedIssues:"BurndownChartDataTableIssueRow",
		completedIssuesOutsideOfSprint:"BurndownChartDataTableIssueRow",
		issuesRemovedFromSprint:"BurndownChartDataTableIssueRow"
	},
	BurndownChartDataTableIssueRow:{
		issueKey:"String",
		issueSummary:"String",
		cardType:"CardType",
		cardParent:"CardParent",
		cardStatus:"CardStatus",
		assignee:"User",
		estimate:"Float"
	},
	BurndownChartDataTableScopeChangeRow:{
		timestamp:"DateTime",
		sprintScopeChange:"SprintScopeChangeData",
		cardType:"CardType",
		cardParent:"CardParent"
	},
	CFDChartConnection:{
		edges:"CFDChartEdge",
		pageInfo:"PageInfo"
	},
	CFDChartData:{
		timestamp:"DateTime",
		changes:"CFDIssueColumnChangeEntry",
		columnCounts:"CFDColumnCount"
	},
	CFDChartEdge:{
		cursor:"String",
		node:"CFDChartData"
	},
	CFDColumn:{
		name:"String"
	},
	CFDColumnCount:{
		columnIndex:"Int",
		count:"Int"
	},
	CFDFilters:{
		columns:"CFDColumn"
	},
	CFDIssueColumnChangeEntry:{
		key:"ID",
		timestamp:"String",
		columnFrom:"Int",
		columnTo:"Int",
		statusTo:"ID",
		point:"TimeSeriesPoint"
	},
	CardCoverMedia:{
		attachmentMediaApiId:"ID",
		attachmentId:"Long",
		token:"String",
		clientId:"String",
		endpointUrl:"String",
		hiddenByUser:"Boolean"
	},
	CardMediaConfig:{
		enabled:"Boolean"
	},
	CardPaletteColor: `scalar.CardPaletteColor` as const,
	CardParent:{
		id:"ID",
		key:"String",
		summary:"String",
		cardType:"CardType",
		color:"CardPaletteColor",
		status:"CardStatus",
		childrenInfo:"SoftwareCardChildrenInfo",
		startDate:"String",
		dueDate:"String"
	},
	CardParentCreateOutput:{
		newCardParents:"CardParent",
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	CardPriority:{
		name:"String",
		iconUrl:"String"
	},
	CardStatus:{
		id:"ID",
		name:"String",
		category:"String"
	},
	CardType:{
		id:"ID",
		externalId:"ID",
		name:"String",
		iconUrl:"String",
		inlineCardCreate:"InlineCardCreateConfig",
		hierarchyLevelType:"CardTypeHierarchyLevelType",
		hasRequiredFields:"Boolean"
	},
	CardTypeHierarchyLevelType: `scalar.CardTypeHierarchyLevelType` as const,
	ChildCardsMetadata:{
		complete:"Int",
		total:"Int"
	},
	CloudAppScope:{
		id:"ID",
		name:"String",
		capability:"String"
	},
	CodeInJira:{
		siteConfiguration:"CodeInJiraSiteConfiguration",
		userConfiguration:"CodeInJiraUserConfiguration"
	},
	CodeInJiraBitbucketWorkspace:{
		uuid:"ID",
		name:"String",
		slug:"String"
	},
	CodeInJiraSiteConfiguration:{
		connectedVcsProviders:"CodeInJiraVcsProvider"
	},
	CodeInJiraUserConfiguration:{
		ownedBitbucketWorkspaces:"CodeInJiraBitbucketWorkspace"
	},
	CodeInJiraVcsProvider:{
		id:"ID",
		name:"String",
		providerNamespace:"String",
		providerId:"String",
		baseUrl:"String"
	},
	CodeRepository:{
		"...on BitbucketRepository": "BitbucketRepository",
		"...on DevOpsThirdPartyRepository": "DevOpsThirdPartyRepository",
		name:"String",
		href:"URL"
	},
	Column:{
		id:"ID",
		name:"String",
		cards:"SoftwareCard",
		maxCardCount:"Int",
		columnStatus:"ColumnStatus",
		isInitial:"Boolean",
		isDone:"Boolean"
	},
	ColumnConfigSwimlane:{
		id:"ID",
		issueTypes:"CardType",
		uniqueStatuses:"RawStatus",
		sharedStatuses:"RawStatus"
	},
	ColumnInSwimlane:{
		columnDetails:"Column",
		cards:"SoftwareCard"
	},
	ColumnStatus:{
		transitions:"SoftwareCardTransition",
		status:"CardStatus",
		cardTypeTransitions:"SoftwareCardTypeTransition"
	},
	ColumnsConfig:{
		columnConfigSwimlanes:"ColumnConfigSwimlane",
		unmappedStatuses:"RawStatus",
		isUpdating:"Boolean"
	},
	CompassAcknowledgeAnnouncementPayload:{
		acknowledgement:"CompassAnnouncementAcknowledgement",
		success:"Boolean",
		errors:"MutationError"
	},
	CompassAddTeamLabelsPayload:{
		success:"Boolean",
		errors:"MutationError",
		addedLabels:"CompassTeamLabel"
	},
	CompassAlertEvent:{
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL",
		alertProperties:"CompassAlertEventProperties"
	},
	CompassAlertEventProperties:{
		id:"ID"
	},
	CompassAnnouncement:{
		id:"ID",
		component:"CompassComponent",
		title:"String",
		description:"String",
		targetDate:"DateTime",
		acknowledgements:"CompassAnnouncementAcknowledgement"
	},
	CompassAnnouncementAcknowledgement:{
		component:"CompassComponent",
		hasAcknowledged:"Boolean"
	},
	CompassBuildEvent:{
		eventType:"CompassEventType",
		lastUpdated:"DateTime",
		displayName:"String",
		updateSequenceNumber:"Long",
		url:"URL",
		description:"String",
		buildProperties:"CompassBuildEventProperties"
	},
	CompassBuildEventPipeline:{
		pipelineId:"String",
		url:"String",
		displayName:"String"
	},
	CompassBuildEventProperties:{
		state:"CompassBuildEventState",
		pipeline:"CompassBuildEventPipeline",
		startedAt:"DateTime",
		completedAt:"DateTime"
	},
	CompassCatalogMutationApi:{
		createComponent:"CreateCompassComponentPayload",
		updateComponent:"UpdateCompassComponentPayload",
		updateComponentType:"UpdateCompassComponentTypePayload",
		deleteComponent:"DeleteCompassComponentPayload",
		createComponentLink:"CreateCompassComponentLinkPayload",
		updateComponentLink:"UpdateCompassComponentLinkPayload",
		deleteComponentLink:"DeleteCompassComponentLinkPayload",
		attachComponentDataManager:"AttachCompassComponentDataManagerPayload",
		detachComponentDataManager:"DetachCompassComponentDataManagerPayload",
		updateComponentDataManagerMetadata:"UpdateCompassComponentDataManagerMetadataPayload",
		createComponentExternalAlias:"CreateCompassComponentExternalAliasPayload",
		deleteComponentExternalAlias:"DeleteCompassComponentExternalAliasPayload",
		createComponentSubscription:"CompassCreateComponentSubscriptionPayload",
		deleteComponentSubscription:"CompassDeleteComponentSubscriptionPayload",
		unlinkExternalSource:"UnlinkExternalSourcePayload",
		createRelationship:"CreateCompassRelationshipPayload",
		deleteRelationship:"DeleteCompassRelationshipPayload",
		addComponentLabels:"AddCompassComponentLabelsPayload",
		removeComponentLabels:"RemoveCompassComponentLabelsPayload",
		createScorecard:"CreateCompassScorecardPayload",
		updateScorecard:"UpdateCompassScorecardPayload",
		deleteScorecard:"DeleteCompassScorecardPayload",
		applyScorecardToComponent:"ApplyCompassScorecardToComponentPayload",
		removeScorecardFromComponent:"RemoveCompassScorecardFromComponentPayload",
		createScorecardCriterias:"CreateCompassScorecardCriteriasPayload",
		updateScorecardCriterias:"UpdateCompassScorecardCriteriasPayload",
		deleteScorecardCriterias:"DeleteCompassScorecardCriteriasPayload",
		createAnnouncement:"CompassCreateAnnouncementPayload",
		updateAnnouncement:"CompassUpdateAnnouncementPayload",
		deleteAnnouncement:"CompassDeleteAnnouncementPayload",
		acknowledgeAnnouncement:"CompassAcknowledgeAnnouncementPayload",
		createEventSource:"CreateEventSourcePayload",
		deleteEventSource:"DeleteEventSourcePayload",
		createCompassEvent:"CompassCreateEventsPayload",
		attachEventSource:"AttachEventSourcePayload",
		detachEventSource:"DetachEventSourcePayload",
		createStarredComponent:"CreateCompassStarredComponentPayload",
		deleteStarredComponent:"DeleteCompassStarredComponentPayload",
		createTeamCheckin:"CompassCreateTeamCheckinPayload",
		updateTeamCheckin:"CompassUpdateTeamCheckinPayload",
		deleteTeamCheckin:"CompassDeleteTeamCheckinPayload",
		addTeamLabels:"CompassAddTeamLabelsPayload",
		removeTeamLabels:"CompassRemoveTeamLabelsPayload",
		createMetricDefinition:"CompassCreateMetricDefinitionPayload",
		updateMetricDefinition:"CompassUpdateMetricDefinitionPayload",
		deleteMetricDefinition:"CompassDeleteMetricDefinitionPayload",
		createMetricSource:"CompassCreateMetricSourcePayload",
		deleteMetricSource:"CompassDeleteMetricSourcePayload",
		insertMetricValue:"CompassInsertMetricValuePayload",
		insertMetricValueByExternalId:"CompassInsertMetricValueByExternalIdPayload",
		synchronizeLinkAssociations:"CompassSynchronizeLinkAssociationsPayload",
		createCustomFieldDefinition:"CompassCreateCustomFieldDefinitionPayload",
		updateCustomFieldDefinition:"CompassUpdateCustomFieldDefinitionPayload",
		deleteCustomFieldDefinition:"CompassDeleteCustomFieldDefinitionPayload"
	},
	CompassCatalogQueryApi:{
		component:"CompassComponentResult",
		componentByExternalAlias:"CompassComponentResult",
		componentType:"CompassComponentTypeResult",
		componentTypes:"CompassComponentTypesQueryResult",
		fieldDefinitionsByComponentType:"CompassFieldDefinitionsResult",
		searchComponents:"CompassComponentQueryResult",
		searchComponentLabels:"CompassComponentLabelsQueryResult",
		scorecard:"CompassScorecardResult",
		scorecards:"CompassScorecardsQueryResult",
		starredComponents:"CompassStarredComponentQueryResult",
		teamCheckins:"CompassTeamCheckin",
		teamData:"CompassTeamDataResult",
		searchTeams:"CompassSearchTeamsConnectionResult",
		searchTeamLabels:"CompassSearchTeamLabelsConnectionResult",
		metricDefinitions:"CompassMetricDefinitionsQueryResult",
		metricDefinition:"CompassMetricDefinitionResult",
		eventSource:"CompassEventSourceResult",
		customFieldDefinitions:"CompassCustomFieldDefinitionsResult",
		metricValuesTimeSeries:"CompassMetricValuesTimeseriesResult"
	},
	CompassChangeMetadata:{
		createdAt:"DateTime",
		createdBy:"User",
		lastUserModificationAt:"DateTime",
		lastUserModificationBy:"User"
	},
	CompassComponent:{
		id:"ID",
		type:"CompassComponentType",
		typeId:"ID",
		name:"String",
		description:"String",
		ownerId:"ID",
		dataManager:"CompassComponentDataManager",
		changeMetadata:"CompassChangeMetadata",
		fields:"CompassField",
		links:"CompassLink",
		relationships:"CompassRelationshipConnectionResult",
		externalAliases:"CompassExternalAlias",
		labels:"CompassComponentLabel",
		scorecards:"CompassScorecard",
		scorecardScores:"CompassScorecardScore",
		applicableScorecards:"CompassScorecard",
		announcements:"CompassAnnouncement",
		events:"CompassEventsQueryResult",
		eventSources:"EventSource",
		scorecardScore:"CompassScorecardScore",
		metricSources:"CompassComponentMetricSourcesQueryResult",
		viewerSubscription:"CompassViewerSubscription",
		customFields:"CompassCustomField"
	},
	CompassComponentDataManager:{
		ecosystemAppId:"ID",
		externalSourceURL:"URL",
		lastSyncEvent:"ComponentSyncEvent"
	},
	CompassComponentLabel:{
		name:"String"
	},
	CompassComponentLabelsQueryResult:{
		"...on CompassSearchComponentLabelsConnection":"CompassSearchComponentLabelsConnection",
		"...on QueryError":"QueryError"
	},
	CompassComponentMetricSourcesConnection:{
		edges:"CompassMetricSourceEdge",
		nodes:"CompassMetricSource",
		pageInfo:"PageInfo"
	},
	CompassComponentMetricSourcesQueryResult:{
		"...on CompassComponentMetricSourcesConnection":"CompassComponentMetricSourcesConnection",
		"...on QueryError":"QueryError"
	},
	CompassComponentQueryResult:{
		"...on CompassSearchComponentConnection":"CompassSearchComponentConnection",
		"...on QueryError":"QueryError"
	},
	CompassComponentResult:{
		"...on CompassComponent":"CompassComponent",
		"...on QueryError":"QueryError"
	},
	CompassComponentTypeConnection:{
		edges:"CompassComponentTypeEdge",
		nodes:"CompassComponentTypeObject",
		totalCount:"Int",
		pageInfo:"PageInfo"
	},
	CompassComponentTypeEdge:{
		cursor:"String",
		node:"CompassComponentTypeObject"
	},
	CompassComponentTypeObject:{
		id:"ID",
		fieldDefinitions:"CompassFieldDefinitionsResult"
	},
	CompassComponentTypeResult:{
		"...on CompassComponentTypeObject":"CompassComponentTypeObject",
		"...on QueryError":"QueryError"
	},
	CompassComponentTypesQueryResult:{
		"...on CompassComponentTypeConnection":"CompassComponentTypeConnection",
		"...on QueryError":"QueryError"
	},
	CompassCreateAnnouncementPayload:{
		createdAnnouncement:"CompassAnnouncement",
		success:"Boolean",
		errors:"MutationError"
	},
	CompassCreateComponentSubscriptionPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	CompassCreateCustomFieldDefinitionPayload:{
		success:"Boolean",
		errors:"MutationError",
		customFieldDefinition:"CompassCustomFieldDefinition"
	},
	CompassCreateEventsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	CompassCreateMetricDefinitionPayload:{
		success:"Boolean",
		errors:"MutationError",
		createdMetricDefinition:"CompassMetricDefinition"
	},
	CompassCreateMetricSourcePayload:{
		success:"Boolean",
		errors:"MutationError",
		createdMetricSource:"CompassMetricSource"
	},
	CompassCreateTeamCheckinPayload:{
		success:"Boolean",
		errors:"MutationError",
		createdTeamCheckin:"CompassTeamCheckin"
	},
	CompassCustomBooleanField:{
		definition:"CompassCustomBooleanFieldDefinition",
		booleanValue:"Boolean"
	},
	CompassCustomBooleanFieldDefinition:{
		id:"ID",
		name:"String",
		description:"String",
		componentTypes:"CompassComponentType",
		componentTypeIds:"ID"
	},
	CompassCustomEvent:{
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL",
		customEventProperties:"CompassCustomEventProperties"
	},
	CompassCustomEventProperties:{
		id:"ID",
		icon:"CompassCustomEventIcon"
	},
	CompassCustomField:{
		"...on CompassCustomBooleanField": "CompassCustomBooleanField",
		"...on CompassCustomNumberField": "CompassCustomNumberField",
		"...on CompassCustomTextField": "CompassCustomTextField",
		definition:"CompassCustomFieldDefinition"
	},
	CompassCustomFieldDefinition:{
		"...on CompassCustomBooleanFieldDefinition": "CompassCustomBooleanFieldDefinition",
		"...on CompassCustomNumberFieldDefinition": "CompassCustomNumberFieldDefinition",
		"...on CompassCustomTextFieldDefinition": "CompassCustomTextFieldDefinition",
		id:"ID",
		name:"String",
		description:"String",
		componentTypes:"CompassComponentType",
		componentTypeIds:"ID"
	},
	CompassCustomFieldDefinitionEdge:{
		cursor:"String",
		node:"CompassCustomFieldDefinition"
	},
	CompassCustomFieldDefinitionsConnection:{
		edges:"CompassCustomFieldDefinitionEdge",
		nodes:"CompassCustomFieldDefinition",
		pageInfo:"PageInfo"
	},
	CompassCustomFieldDefinitionsResult:{
		"...on CompassCustomFieldDefinitionsConnection":"CompassCustomFieldDefinitionsConnection",
		"...on QueryError":"QueryError"
	},
	CompassCustomFieldScorecardCriteria:{
		"...on CompassHasCustomBooleanFieldScorecardCriteria": "CompassHasCustomBooleanFieldScorecardCriteria",
		"...on CompassHasCustomNumberFieldScorecardCriteria": "CompassHasCustomNumberFieldScorecardCriteria",
		"...on CompassHasCustomTextFieldScorecardCriteria": "CompassHasCustomTextFieldScorecardCriteria",
		id:"ID",
		weight:"Int",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassCustomNumberField:{
		definition:"CompassCustomNumberFieldDefinition",
		numberValue:"Float"
	},
	CompassCustomNumberFieldDefinition:{
		id:"ID",
		name:"String",
		description:"String",
		componentTypes:"CompassComponentType",
		componentTypeIds:"ID"
	},
	CompassCustomTextField:{
		definition:"CompassCustomTextFieldDefinition",
		textValue:"String"
	},
	CompassCustomTextFieldDefinition:{
		id:"ID",
		name:"String",
		description:"String",
		componentTypes:"CompassComponentType",
		componentTypeIds:"ID"
	},
	CompassDeleteAnnouncementPayload:{
		deletedAnnouncementId:"ID",
		success:"Boolean",
		errors:"MutationError"
	},
	CompassDeleteComponentSubscriptionPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	CompassDeleteCustomFieldDefinitionPayload:{
		success:"Boolean",
		errors:"MutationError",
		customFieldDefinitionId:"ID"
	},
	CompassDeleteMetricDefinitionPayload:{
		success:"Boolean",
		errors:"MutationError",
		deletedMetricDefinitionId:"ID"
	},
	CompassDeleteMetricSourcePayload:{
		success:"Boolean",
		errors:"MutationError",
		deletedMetricSourceId:"ID"
	},
	CompassDeleteTeamCheckinPayload:{
		success:"Boolean",
		errors:"MutationError",
		deletedTeamCheckinId:"ID"
	},
	CompassDeploymentEvent:{
		eventType:"CompassEventType",
		lastUpdated:"DateTime",
		displayName:"String",
		deploymentSequenceNumber:"Long",
		updateSequenceNumber:"Long",
		url:"URL",
		description:"String",
		state:"CompassDeploymentEventState",
		pipeline:"CompassDeploymentEventPipeline",
		environment:"CompassDeploymentEventEnvironment",
		deploymentProperties:"CompassDeploymentEventProperties"
	},
	CompassDeploymentEventEnvironment:{
		category:"CompassDeploymentEventEnvironmentCategory",
		displayName:"String",
		environmentId:"String"
	},
	CompassDeploymentEventPipeline:{
		pipelineId:"String",
		url:"String",
		displayName:"String"
	},
	CompassDeploymentEventProperties:{
		sequenceNumber:"Long",
		state:"CompassDeploymentEventState",
		pipeline:"CompassDeploymentEventPipeline",
		environment:"CompassDeploymentEventEnvironment",
		startedAt:"DateTime",
		completedAt:"DateTime"
	},
	CompassEnumField:{
		definition:"CompassFieldDefinition",
		value:"String"
	},
	CompassEnumFieldDefinitionOptions:{
		values:"String",
		default:"String"
	},
	CompassEvent:{
		"...on CompassAlertEvent": "CompassAlertEvent",
		"...on CompassBuildEvent": "CompassBuildEvent",
		"...on CompassCustomEvent": "CompassCustomEvent",
		"...on CompassDeploymentEvent": "CompassDeploymentEvent",
		"...on CompassFlagEvent": "CompassFlagEvent",
		"...on CompassIncidentEvent": "CompassIncidentEvent",
		"...on CompassLifecycleEvent": "CompassLifecycleEvent",
		"...on CompassPushEvent": "CompassPushEvent",
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL"
	},
	CompassEventConnection:{
		edges:"CompassEventEdge",
		nodes:"CompassEvent",
		pageInfo:"PageInfo"
	},
	CompassEventEdge:{
		cursor:"String",
		node:"CompassEvent"
	},
	CompassEventSourceResult:{
		"...on EventSource":"EventSource",
		"...on QueryError":"QueryError"
	},
	CompassEventsQueryResult:{
		"...on CompassEventConnection":"CompassEventConnection",
		"...on QueryError":"QueryError"
	},
	CompassExternalAlias:{
		externalSource:"ID",
		externalAliasId:"ID"
	},
	CompassField:{
		"...on CompassEnumField": "CompassEnumField",
		definition:"CompassFieldDefinition"
	},
	CompassFieldDefinition:{
		id:"ID",
		name:"String",
		options:"CompassFieldDefinitionOptions",
		description:"String",
		type:"CompassFieldType"
	},
	CompassFieldDefinitionOptions:{
		"...on CompassEnumFieldDefinitionOptions":"CompassEnumFieldDefinitionOptions"
	},
	CompassFieldDefinitions:{
		definitions:"CompassFieldDefinition"
	},
	CompassFieldDefinitionsResult:{
		"...on CompassFieldDefinitions":"CompassFieldDefinitions",
		"...on QueryError":"QueryError"
	},
	CompassFlagEvent:{
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL",
		flagProperties:"CompassFlagEventProperties"
	},
	CompassFlagEventProperties:{
		id:"ID",
		status:"String"
	},
	CompassHasCustomBooleanFieldScorecardCriteria:{
		id:"ID",
		weight:"Int",
		customFieldDefinition:"CompassCustomBooleanFieldDefinition",
		booleanComparator:"CompassCriteriaBooleanComparatorOptions",
		booleanComparatorValue:"Boolean",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasCustomNumberFieldScorecardCriteria:{
		id:"ID",
		weight:"Int",
		customFieldDefinition:"CompassCustomNumberFieldDefinition",
		numberComparator:"CompassCriteriaNumberComparatorOptions",
		numberComparatorValue:"Float",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasCustomTextFieldScorecardCriteria:{
		id:"ID",
		weight:"Int",
		customFieldDefinition:"CompassCustomTextFieldDefinition",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasDescriptionScorecardCriteria:{
		id:"ID",
		weight:"Int",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasFieldScorecardCriteria:{
		id:"ID",
		weight:"Int",
		fieldDefinition:"CompassFieldDefinition",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasLinkScorecardCriteria:{
		id:"ID",
		weight:"Int",
		linkType:"CompassLinkType",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasMetricValueScorecardCriteria:{
		id:"ID",
		weight:"Int",
		comparatorValue:"Float",
		metricDefinitionId:"ID",
		metricDefinition:"CompassMetricDefinition",
		comparator:"CompassCriteriaNumberComparatorOptions",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassHasOwnerScorecardCriteria:{
		id:"ID",
		weight:"Int",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassIncidentEvent:{
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL",
		incidentProperties:"CompassIncidentEventProperties"
	},
	CompassIncidentEventProperties:{
		id:"ID",
		state:"CompassIncidentEventState",
		severity:"CompassIncidentEventSeverity",
		startTime:"DateTime",
		endTime:"DateTime"
	},
	CompassIncidentEventSeverity:{
		label:"String",
		level:"CompassIncidentEventSeverityLevel"
	},
	CompassInsertMetricValueByExternalIdPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	CompassInsertMetricValuePayload:{
		success:"Boolean",
		errors:"MutationError",
		metricSource:"CompassMetricSource"
	},
	CompassLifecycleEvent:{
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL",
		lifecycleProperties:"CompassLifecycleEventProperties"
	},
	CompassLifecycleEventProperties:{
		id:"ID",
		stage:"CompassLifecycleEventStage"
	},
	CompassLink:{
		id:"ID",
		type:"CompassLinkType",
		url:"URL",
		name:"String"
	},
	CompassMetricDefinition:{
		id:"ID",
		name:"String",
		description:"String",
		format:"CompassMetricDefinitionFormat",
		type:"CompassMetricDefinitionType",
		metricSources:"CompassMetricSourcesQueryResult",
		derivedEventTypes:"CompassEventType"
	},
	CompassMetricDefinitionEdge:{
		cursor:"String",
		node:"CompassMetricDefinition"
	},
	CompassMetricDefinitionFormat:{
		"...on CompassMetricDefinitionFormatSuffix":"CompassMetricDefinitionFormatSuffix"
	},
	CompassMetricDefinitionFormatSuffix:{
		suffix:"String"
	},
	CompassMetricDefinitionResult:{
		"...on CompassMetricDefinition":"CompassMetricDefinition",
		"...on QueryError":"QueryError"
	},
	CompassMetricDefinitionsConnection:{
		edges:"CompassMetricDefinitionEdge",
		nodes:"CompassMetricDefinition",
		pageInfo:"PageInfo"
	},
	CompassMetricDefinitionsQueryResult:{
		"...on CompassMetricDefinitionsConnection":"CompassMetricDefinitionsConnection",
		"...on QueryError":"QueryError"
	},
	CompassMetricSource:{
		id:"ID",
		metricDefinition:"CompassMetricDefinition",
		externalMetricSourceId:"ID",
		url:"String",
		forgeAppId:"ID",
		values:"CompassMetricSourceValuesQueryResult",
		component:"CompassComponent",
		derivedFrom:"EventSource"
	},
	CompassMetricSourceEdge:{
		cursor:"String",
		node:"CompassMetricSource"
	},
	CompassMetricSourceValuesConnection:{
		edges:"CompassMetricValueEdge",
		nodes:"CompassMetricValue",
		pageInfo:"PageInfo"
	},
	CompassMetricSourceValuesQueryResult:{
		"...on CompassMetricSourceValuesConnection":"CompassMetricSourceValuesConnection",
		"...on QueryError":"QueryError"
	},
	CompassMetricSourcesConnection:{
		edges:"CompassMetricSourceEdge",
		nodes:"CompassMetricSource",
		pageInfo:"PageInfo"
	},
	CompassMetricSourcesQueryResult:{
		"...on CompassMetricSourcesConnection":"CompassMetricSourcesConnection",
		"...on QueryError":"QueryError"
	},
	CompassMetricValue:{
		timestamp:"DateTime",
		value:"Float"
	},
	CompassMetricValueEdge:{
		cursor:"String",
		node:"CompassMetricValue"
	},
	CompassMetricValuesTimeseries:{
		values:"CompassMetricValue"
	},
	CompassMetricValuesTimeseriesResult:{
		"...on CompassMetricValuesTimeseries":"CompassMetricValuesTimeseries",
		"...on QueryError":"QueryError"
	},
	CompassPushEvent:{
		eventType:"CompassEventType",
		displayName:"String",
		lastUpdated:"DateTime",
		updateSequenceNumber:"Long",
		description:"String",
		url:"URL",
		pushEventProperties:"CompassPushEventProperties"
	},
	CompassPushEventProperties:{
		id:"ID",
		branchName:"String"
	},
	CompassRelationship:{
		type:"CompassRelationshipType",
		startNode:"CompassComponent",
		endNode:"CompassComponent",
		changeMetadata:"CompassChangeMetadata"
	},
	CompassRelationshipConnection:{
		edges:"CompassRelationshipEdge",
		nodes:"CompassRelationship",
		pageInfo:"PageInfo"
	},
	CompassRelationshipConnectionResult:{
		"...on CompassRelationshipConnection":"CompassRelationshipConnection",
		"...on QueryError":"QueryError"
	},
	CompassRelationshipEdge:{
		cursor:"String",
		node:"CompassRelationship"
	},
	CompassRemoveTeamLabelsPayload:{
		success:"Boolean",
		errors:"MutationError",
		removedLabels:"CompassTeamLabel"
	},
	CompassRichTextObject:{
		adf:"String"
	},
	CompassScorecard:{
		id:"ID",
		name:"String",
		description:"String",
		criterias:"CompassScorecardCriteria",
		owner:"User",
		componentType:"CompassComponentType",
		componentTypeId:"ID",
		importance:"CompassScorecardImportance",
		scorecardScore:"CompassScorecardScore",
		appliedToComponents:"CompassScorecardAppliedToComponentsQueryResult",
		componentLabels:"CompassComponentLabel",
		changeMetadata:"CompassChangeMetadata"
	},
	CompassScorecardAppliedToComponentsConnection:{
		edges:"CompassScorecardAppliedToComponentsEdge",
		nodes:"CompassComponent",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	CompassScorecardAppliedToComponentsEdge:{
		cursor:"String",
		node:"CompassComponent"
	},
	CompassScorecardAppliedToComponentsQueryResult:{
		"...on CompassScorecardAppliedToComponentsConnection":"CompassScorecardAppliedToComponentsConnection",
		"...on QueryError":"QueryError"
	},
	CompassScorecardConnection:{
		edges:"CompassScorecardEdge",
		nodes:"CompassScorecard",
		pageInfo:"PageInfo"
	},
	CompassScorecardCriteria:{
		"...on CompassCustomFieldScorecardCriteria": "CompassCustomFieldScorecardCriteria",
		"...on CompassHasCustomBooleanFieldScorecardCriteria": "CompassHasCustomBooleanFieldScorecardCriteria",
		"...on CompassHasCustomNumberFieldScorecardCriteria": "CompassHasCustomNumberFieldScorecardCriteria",
		"...on CompassHasCustomTextFieldScorecardCriteria": "CompassHasCustomTextFieldScorecardCriteria",
		"...on CompassHasDescriptionScorecardCriteria": "CompassHasDescriptionScorecardCriteria",
		"...on CompassHasFieldScorecardCriteria": "CompassHasFieldScorecardCriteria",
		"...on CompassHasLinkScorecardCriteria": "CompassHasLinkScorecardCriteria",
		"...on CompassHasMetricValueScorecardCriteria": "CompassHasMetricValueScorecardCriteria",
		"...on CompassHasOwnerScorecardCriteria": "CompassHasOwnerScorecardCriteria",
		id:"ID",
		weight:"Int",
		scorecardCriteriaScore:"CompassScorecardCriteriaScore"
	},
	CompassScorecardCriteriaScore:{
		score:"Int",
		maxScore:"Int"
	},
	CompassScorecardEdge:{
		cursor:"String",
		node:"CompassScorecard"
	},
	CompassScorecardResult:{
		"...on CompassScorecard":"CompassScorecard",
		"...on QueryError":"QueryError"
	},
	CompassScorecardScore:{
		totalScore:"Int",
		maxTotalScore:"Int",
		criteriaScores:"CompassScorecardCriteriaScore"
	},
	CompassScorecardsQueryResult:{
		"...on CompassScorecardConnection":"CompassScorecardConnection",
		"...on QueryError":"QueryError"
	},
	CompassSearchComponentConnection:{
		edges:"CompassSearchComponentEdge",
		totalCount:"Int",
		nodes:"CompassSearchComponentResult",
		pageInfo:"PageInfo"
	},
	CompassSearchComponentEdge:{
		cursor:"String",
		node:"CompassSearchComponentResult"
	},
	CompassSearchComponentLabelsConnection:{
		edges:"CompassSearchComponentLabelsEdge",
		nodes:"CompassComponentLabel",
		pageInfo:"PageInfo"
	},
	CompassSearchComponentLabelsEdge:{
		cursor:"String",
		node:"CompassComponentLabel"
	},
	CompassSearchComponentResult:{
		component:"CompassComponent",
		link:"URL"
	},
	CompassSearchTeamLabelsConnection:{
		edges:"CompassSearchTeamLabelsEdge",
		nodes:"CompassTeamLabel",
		pageInfo:"PageInfo"
	},
	CompassSearchTeamLabelsConnectionResult:{
		"...on CompassSearchTeamLabelsConnection":"CompassSearchTeamLabelsConnection",
		"...on QueryError":"QueryError"
	},
	CompassSearchTeamLabelsEdge:{
		cursor:"String",
		node:"CompassTeamLabel"
	},
	CompassSearchTeamsConnection:{
		edges:"CompassSearchTeamsEdge",
		nodes:"CompassTeamData",
		pageInfo:"PageInfo"
	},
	CompassSearchTeamsConnectionResult:{
		"...on CompassSearchTeamsConnection":"CompassSearchTeamsConnection",
		"...on QueryError":"QueryError"
	},
	CompassSearchTeamsEdge:{
		cursor:"String",
		node:"CompassTeamData"
	},
	CompassStarredComponentConnection:{
		nodes:"CompassComponent",
		edges:"CompassStarredComponentEdge",
		pageInfo:"PageInfo"
	},
	CompassStarredComponentEdge:{
		cursor:"String",
		node:"CompassComponent"
	},
	CompassStarredComponentQueryResult:{
		"...on CompassStarredComponentConnection":"CompassStarredComponentConnection",
		"...on QueryError":"QueryError"
	},
	CompassSynchronizeLinkAssociationsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	CompassTeamCheckin:{
		teamId:"ID",
		id:"ID",
		mood:"Int",
		response1:"String",
		response2:"String",
		response3:"String",
		response1RichText:"CompassRichTextObject",
		response2RichText:"CompassRichTextObject",
		response3RichText:"CompassRichTextObject",
		changeMetadata:"CompassChangeMetadata",
		actions:"CompassTeamCheckinAction"
	},
	CompassTeamCheckinAction:{
		id:"ID",
		actionText:"String",
		completed:"Boolean",
		completedBy:"User",
		completedAt:"DateTime",
		changeMetadata:"CompassChangeMetadata"
	},
	CompassTeamData:{
		teamId:"ID",
		labels:"CompassTeamLabel",
		currentCheckin:"CompassTeamCheckin"
	},
	CompassTeamDataResult:{
		"...on CompassTeamData":"CompassTeamData",
		"...on QueryError":"QueryError"
	},
	CompassTeamLabel:{
		name:"String"
	},
	CompassUpdateAnnouncementPayload:{
		updatedAnnouncement:"CompassAnnouncement",
		success:"Boolean",
		errors:"MutationError"
	},
	CompassUpdateCustomFieldDefinitionPayload:{
		success:"Boolean",
		errors:"MutationError",
		customFieldDefinition:"CompassCustomFieldDefinition"
	},
	CompassUpdateMetricDefinitionPayload:{
		success:"Boolean",
		errors:"MutationError",
		updatedMetricDefinition:"CompassMetricDefinition"
	},
	CompassUpdateTeamCheckinPayload:{
		success:"Boolean",
		errors:"MutationError",
		updatedTeamCheckin:"CompassTeamCheckin"
	},
	CompassViewerSubscription:{
		subscribed:"Boolean"
	},
	CompatibleAtlassianCloudProduct:{
		id:"ID",
		name:"String",
		atlassianProduct:"MarketplaceSupportedAtlassianProduct"
	},
	CompatibleAtlassianDataCenterProduct:{
		id:"ID",
		name:"String",
		atlassianProduct:"MarketplaceSupportedAtlassianProduct",
		minimumVersion:"String",
		maximumVersion:"String"
	},
	CompatibleAtlassianProduct:{
		"...on CompatibleAtlassianCloudProduct": "CompatibleAtlassianCloudProduct",
		"...on CompatibleAtlassianDataCenterProduct": "CompatibleAtlassianDataCenterProduct",
		"...on CompatibleAtlassianServerProduct": "CompatibleAtlassianServerProduct",
		id:"ID",
		name:"String",
		atlassianProduct:"MarketplaceSupportedAtlassianProduct"
	},
	CompatibleAtlassianServerProduct:{
		id:"ID",
		name:"String",
		atlassianProduct:"MarketplaceSupportedAtlassianProduct",
		minimumVersion:"String",
		maximumVersion:"String"
	},
	CompleteSprintResponse:{
		boardScope:"BoardScope",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	ComponentSyncEvent:{
		time:"DateTime",
		status:"ComponentSyncEventStatus",
		lastSyncErrors:"String"
	},
	ConfigurePolarisRefreshPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"Int"
	},
	ConfluenceBlogPost:{
		author:"ConfluenceUserInfo",
		blogPostId:"ID",
		body:"ConfluenceBodies",
		comments:"ConfluenceComment",
		id:"ID",
		latestVersion:"ConfluenceBlogPostVersion",
		links:"ConfluenceBlogPostLinks",
		metadata:"ConfluenceContentMetadata",
		properties:"ConfluenceBlogPostProperty",
		space:"ConfluenceSpace",
		status:"ConfluenceBlogPostStatus",
		title:"String",
		type:"ConfluenceContentType",
		viewer:"ConfluenceBlogPostViewerSummary"
	},
	ConfluenceBlogPostLinks:{
		base:"String",
		webUi:"String"
	},
	ConfluenceBlogPostProperty:{
		key:"String",
		value:"String"
	},
	ConfluenceBlogPostVersion:{
		author:"ConfluenceUserInfo",
		createdAt:"DateTime",
		number:"Int"
	},
	ConfluenceBlogPostViewerSummary:{
		lastContribution:"ConfluenceContribution",
		lastSeenAt:"DateTime"
	},
	ConfluenceBodies:{
		anonymousExportView:"ConfluenceBody",
		atlasDocFormat:"ConfluenceBody",
		dynamic:"ConfluenceBody",
		editor:"ConfluenceBody",
		editor2:"ConfluenceBody",
		exportView:"ConfluenceBody",
		storage:"ConfluenceBody",
		styledView:"ConfluenceBody",
		view:"ConfluenceBody"
	},
	ConfluenceBody:{
		representation:"ConfluenceBodyRepresentation",
		value:"String"
	},
	ConfluenceComment:{
		"...on ConfluenceFooterComment": "ConfluenceFooterComment",
		"...on ConfluenceInlineComment": "ConfluenceInlineComment",
		author:"ConfluenceUserInfo",
		body:"ConfluenceBodies",
		commentId:"ID",
		container:"ConfluenceCommentContainer",
		id:"ID",
		links:"ConfluenceCommentLinks",
		name:"String",
		status:"ConfluenceCommentStatus"
	},
	ConfluenceCommentContainer:{
		"...on ConfluenceBlogPost":"ConfluenceBlogPost",
		"...on ConfluencePage":"ConfluencePage"
	},
	ConfluenceCommentLinks:{
		base:"String",
		webUi:"String"
	},
	ConfluenceContentBody:{
		adf:"String",
		editor:"String",
		editor2:"String",
		exportView:"String",
		storage:"String",
		styledView:"String",
		view:"String"
	},
	ConfluenceContentMetadata:{
		collaborativeEditingService:"ConfluenceCollaborativeEditingService",
		titleEmojiDraft:"ConfluenceContentTitleEmoji",
		titleEmojiPublished:"ConfluenceContentTitleEmoji"
	},
	ConfluenceContentTitleEmoji:{
		id:"String",
		key:"String",
		value:"String"
	},
	ConfluenceContribution:{
		status:"ConfluenceContributionStatus"
	},
	ConfluenceCopyPageTaskResult:{
		page:"ConfluencePage"
	},
	ConfluenceCreateBlogPostPayload:{
		blogPost:"ConfluenceBlogPost",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceCreateBlogPostPropertyPayload:{
		blogPostProperty:"ConfluenceBlogPostProperty",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceCreateFooterCommentOnBlogPostPayload:{
		comment:"ConfluenceFooterComment",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceCreateFooterCommentOnPagePayload:{
		comment:"ConfluenceFooterComment",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceCreatePagePayload:{
		page:"ConfluencePage",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceCreatePagePropertyPayload:{
		errors:"MutationError",
		pageProperty:"ConfluencePageProperty",
		success:"Boolean"
	},
	ConfluenceCreateSpacePayload:{
		space:"ConfluenceSpace",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceCreateUserPropertyPayload:{
		userProperty:"ConfluenceUserProperty",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceDeleteBlogPostPropertyPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceDeleteCommentPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceDeleteDraftBlogPostPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceDeleteDraftPagePayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceDeletePagePropertyPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceDeleteUserPropertyPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceFooterComment:{
		author:"ConfluenceUserInfo",
		body:"ConfluenceBodies",
		commentId:"ID",
		container:"ConfluenceCommentContainer",
		id:"ID",
		links:"ConfluenceCommentLinks",
		name:"String",
		status:"ConfluenceCommentStatus"
	},
	ConfluenceInlineComment:{
		author:"ConfluenceUserInfo",
		body:"ConfluenceBodies",
		commentId:"ID",
		container:"ConfluenceCommentContainer",
		id:"ID",
		links:"ConfluenceCommentLinks",
		name:"String",
		resolutionStatus:"ConfluenceInlineCommentResolutionStatus",
		status:"ConfluenceCommentStatus"
	},
	ConfluenceInlineTask:{
		assignedTo:"ConfluenceUserInfo",
		body:"ConfluenceContentBody",
		completedBy:"ConfluenceUserInfo",
		container:"ConfluenceInlineTaskContainer",
		createdBy:"ConfluenceUserInfo",
		createdAt:"DateTime",
		dueAt:"DateTime",
		globalId:"ID",
		id:"ID",
		status:"ConfluenceInlineTaskStatus",
		taskId:"ID",
		updatedAt:"DateTime"
	},
	ConfluenceInlineTaskContainer:{
		"...on ConfluenceBlogPost":"ConfluenceBlogPost",
		"...on ConfluencePage":"ConfluencePage"
	},
	ConfluenceLabel:{
		id:"ID",
		label:"String",
		prefix:"String"
	},
	ConfluenceLongTask:{
		id:"ID",
		state:"ConfluenceLongTaskState",
		taskId:"ID"
	},
	ConfluenceLongTaskFailed:{
		elapsedTime:"Long",
		errorMessages:"String",
		name:"String"
	},
	ConfluenceLongTaskInProgress:{
		elapsedTime:"Long",
		name:"String",
		percentageComplete:"Int"
	},
	ConfluenceLongTaskResult:{
		"...on ConfluenceCopyPageTaskResult":"ConfluenceCopyPageTaskResult"
	},
	ConfluenceLongTaskState:{
		"...on ConfluenceLongTaskFailed": "ConfluenceLongTaskFailed",
		"...on ConfluenceLongTaskInProgress": "ConfluenceLongTaskInProgress",
		"...on ConfluenceLongTaskSuccess": "ConfluenceLongTaskSuccess",
		elapsedTime:"Long",
		name:"String"
	},
	ConfluenceLongTaskSuccess:{
		elapsedTime:"Long",
		name:"String",
		result:"ConfluenceLongTaskResult"
	},
	ConfluenceMutationApi:{
		createBlogPost:"ConfluenceCreateBlogPostPayload",
		createBlogPostProperty:"ConfluenceCreateBlogPostPropertyPayload",
		createFooterCommentOnBlogPost:"ConfluenceCreateFooterCommentOnBlogPostPayload",
		createFooterCommentOnPage:"ConfluenceCreateFooterCommentOnPagePayload",
		createPage:"ConfluenceCreatePagePayload",
		createPageProperty:"ConfluenceCreatePagePropertyPayload",
		createSpace:"ConfluenceCreateSpacePayload",
		deleteBlogPostProperty:"ConfluenceDeleteBlogPostPropertyPayload",
		deleteComment:"ConfluenceDeleteCommentPayload",
		deleteDraftBlogPost:"ConfluenceDeleteDraftBlogPostPayload",
		deleteDraftPage:"ConfluenceDeleteDraftPagePayload",
		deletePageProperty:"ConfluenceDeletePagePropertyPayload",
		publishBlogPost:"ConfluencePublishBlogPostPayload",
		publishPage:"ConfluencePublishPagePayload",
		purgeBlogPost:"ConfluencePurgeBlogPostPayload",
		purgePage:"ConfluencePurgePagePayload",
		reopenInlineComment:"ConfluenceReopenInlineCommentPayload",
		replyToComment:"ConfluenceReplyToCommentPayload",
		resolveInlineComment:"ConfluenceResolveInlineCommentPayload",
		trashBlogPost:"ConfluenceTrashBlogPostPayload",
		trashPage:"ConfluenceTrashPagePayload",
		updateComment:"ConfluenceUpdateCommentPayload",
		updateCurrentBlogPost:"ConfluenceUpdateCurrentBlogPostPayload",
		updateCurrentPage:"ConfluenceUpdateCurrentPagePayload",
		updateDraftBlogPost:"ConfluenceUpdateDraftBlogPostPayload",
		updateDraftPage:"ConfluenceUpdateDraftPagePayload",
		updateSpace:"ConfluenceUpdateSpacePayload",
		updateSpaceSettings:"ConfluenceUpdateSpaceSettingsPayload",
		updateValueBlogPostProperty:"ConfluenceUpdateValueBlogPostPropertyPayload",
		updateValuePageProperty:"ConfluenceUpdateValuePagePropertyPayload",
		createUserProperty:"ConfluenceCreateUserPropertyPayload",
		updateValueUserProperty:"ConfluenceUpdateValueUserPropertyPayload",
		deleteUserProperty:"ConfluenceDeleteUserPropertyPayload"
	},
	ConfluenceOperationCheck:{
		operation:"ConfluenceOperationName",
		target:"ConfluenceOperationTarget"
	},
	ConfluencePage:{
		author:"ConfluenceUserInfo",
		body:"ConfluenceBodies",
		comments:"ConfluenceComment",
		id:"ID",
		latestVersion:"ConfluencePageVersion",
		links:"ConfluencePageLinks",
		metadata:"ConfluenceContentMetadata",
		properties:"ConfluencePageProperty",
		pageId:"ID",
		space:"ConfluenceSpace",
		status:"ConfluencePageStatus",
		title:"String",
		type:"ConfluenceContentType",
		viewer:"ConfluencePageViewerSummary"
	},
	ConfluencePageInfo:{
		endCursor:"String",
		hasNextPage:"Boolean"
	},
	ConfluencePageLinks:{
		base:"String",
		webUi:"String"
	},
	ConfluencePageProperty:{
		key:"String",
		value:"String"
	},
	ConfluencePageVersion:{
		author:"ConfluenceUserInfo",
		createdAt:"DateTime",
		number:"Int"
	},
	ConfluencePageViewerSummary:{
		lastContribution:"ConfluenceContribution",
		lastSeenAt:"DateTime"
	},
	ConfluencePublishBlogPostPayload:{
		blogPost:"ConfluenceBlogPost",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluencePublishPagePayload:{
		page:"ConfluencePage",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluencePurgeBlogPostPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluencePurgePagePayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceQueryApi:{
		blogPost:"ConfluenceBlogPost",
		blogPosts:"ConfluenceBlogPost",
		comment:"ConfluenceComment",
		comments:"ConfluenceComment",
		inlineTask:"ConfluenceInlineTask",
		longTask:"ConfluenceLongTask",
		findSpaces:"ConfluenceSpaceConnection",
		page:"ConfluencePage",
		pages:"ConfluencePage",
		space:"ConfluenceSpace",
		spaces:"ConfluenceSpace",
		userProperty:"ConfluenceUserProperty",
		userProperties:"ConfluenceUserProperty"
	},
	ConfluenceReopenInlineCommentPayload:{
		comment:"ConfluenceInlineComment",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceReplyToCommentPayload:{
		comment:"ConfluenceComment",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceResolveInlineCommentPayload:{
		comment:"ConfluenceInlineComment",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceSpace:{
		createdBy:"ConfluenceUserInfo",
		createdDate:"String",
		description:"ConfluenceSpaceDescription",
		homepage:"ConfluencePage",
		icon:"ConfluenceSpaceIcon",
		id:"ID",
		key:"String",
		links:"ConfluenceSpaceLinks",
		metadata:"ConfluenceSpaceMetadata",
		name:"String",
		operations:"ConfluenceOperationCheck",
		spaceId:"ID",
		settings:"ConfluenceSpaceSettings",
		status:"ConfluenceSpaceStatus",
		type:"ConfluenceSpaceType"
	},
	ConfluenceSpaceConnection:{
		edges:"ConfluenceSpaceEdge",
		nodes:"ConfluenceSpace",
		pageInfo:"ConfluencePageInfo"
	},
	ConfluenceSpaceDescription:{
		plain:"String",
		view:"String"
	},
	ConfluenceSpaceEdge:{
		cursor:"String",
		node:"ConfluenceSpace"
	},
	ConfluenceSpaceIcon:{
		height:"Int",
		isDefault:"Boolean",
		path:"String",
		width:"Int"
	},
	ConfluenceSpaceLinks:{
		base:"String",
		webUi:"String"
	},
	ConfluenceSpaceMetadata:{
		labels:"ConfluenceLabel",
		recentCommenters:"ConfluenceUserInfo",
		recentWatchers:"ConfluenceUserInfo",
		totalCommenters:"Int",
		totalCurrentPages:"Int",
		totalWatchers:"Int"
	},
	ConfluenceSpaceSettings:{
		editorVersions:"ConfluenceSpaceSettingsEditorVersions",
		routeOverrideEnabled:"Boolean"
	},
	ConfluenceSpaceSettingsEditorVersions:{
		blogPost:"ConfluenceSpaceSettingEditorVersion",
		default:"ConfluenceSpaceSettingEditorVersion",
		page:"ConfluenceSpaceSettingEditorVersion"
	},
	ConfluenceTrashBlogPostPayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceTrashPagePayload:{
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateCommentPayload:{
		comment:"ConfluenceComment",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateCurrentBlogPostPayload:{
		blogPost:"ConfluenceBlogPost",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateCurrentPagePayload:{
		page:"ConfluencePage",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateDraftBlogPostPayload:{
		blogPost:"ConfluenceBlogPost",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateDraftPagePayload:{
		page:"ConfluencePage",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateSpacePayload:{
		space:"ConfluenceSpace",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateSpaceSettingsPayload:{
		confluenceSpaceSettings:"ConfluenceSpaceSettings",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateValueBlogPostPropertyPayload:{
		blogPostProperty:"ConfluenceBlogPostProperty",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUpdateValuePagePropertyPayload:{
		errors:"MutationError",
		pageProperty:"ConfluencePageProperty",
		success:"Boolean"
	},
	ConfluenceUpdateValueUserPropertyPayload:{
		userProperty:"ConfluenceUserProperty",
		errors:"MutationError",
		success:"Boolean"
	},
	ConfluenceUserInfo:{
		user:"User",
		type:"ConfluenceUserType"
	},
	ConfluenceUserProperty:{
		createdDate:"String",
		id:"ID",
		key:"String",
		lastModifiedDate:"String",
		propertyId:"ID",
		value:"String"
	},
	ConnectAppScope:{
		scopeId:"ID",
		id:"ID",
		name:"String",
		capability:"String",
		atlassianProductName:"String"
	},
	ContainerEventObject:{
		id:"ID",
		type:"String",
		attributes:"JSON"
	},
	ContentPlatformAnyContext:{
		"...on ContentPlatformContextProduct":"ContentPlatformContextProduct",
		"...on ContentPlatformContextApp":"ContentPlatformContextApp",
		"...on ContentPlatformContextTheme":"ContentPlatformContextTheme"
	},
	ContentPlatformContextApp:{
		contextId:"String",
		title:"String",
		preventProdPublishing:"Boolean",
		appName:"String",
		parentProductContext:"ContentPlatformContextProduct",
		icon:"ContentPlatformImageAsset",
		url:"String"
	},
	ContentPlatformContextProduct:{
		contextId:"String",
		title:"String",
		preventProdPublishing:"Boolean",
		productName:"String",
		deployment:"String",
		version:"String",
		icon:"ContentPlatformImageAsset",
		productBlurb:"String",
		url:"String",
		supportTitle:"String",
		customSupportFormAuthenticated:"String",
		customSupportFormUnauthenticated:"String"
	},
	ContentPlatformContextProductEntry:{
		contextId:"String",
		title:"String",
		preventProdPublishing:"Boolean",
		productName:"String",
		deployment:"String",
		version:"String",
		icon:"ContentPlatformImageAssetEntry",
		productBlurb:"String",
		url:"String",
		supportTitle:"String",
		customSupportFormAuthenticated:"String",
		customSupportFormUnauthenticated:"String"
	},
	ContentPlatformContextTheme:{
		contextId:"String",
		title:"String",
		preventProdPublishing:"Boolean",
		hubName:"String",
		icon:"ContentPlatformImageAsset",
		url:"String"
	},
	ContentPlatformFieldType:{
		field:"ContentPlatformFieldNames"
	},
	ContentPlatformImageAsset:{
		title:"String",
		description:"String",
		url:"String",
		details:"JSON",
		fileName:"String",
		contentType:"String"
	},
	ContentPlatformImageAssetEntry:{
		title:"String",
		description:"String",
		url:"String",
		details:"JSON",
		fileName:"String",
		contentType:"String"
	},
	ContentPlatformImageComponent:{
		name:"String",
		altTag:"String",
		image:"ContentPlatformImageAsset",
		contextReference:"ContentPlatformAnyContext"
	},
	ContentPlatformReleaseNote:{
		releaseNoteId:"String",
		updatedAt:"String",
		createdAt:"String",
		url:"String",
		fdIssueLink:"String",
		fdIssueKey:"String",
		title:"String",
		changeTargetSchedule:"String",
		announcementPlan:"ContentPlatformTaxonomyAnnouncementPlan",
		changeType:"ContentPlatformTypeOfChange",
		changeStatus:"ContentPlatformStatusOfChange",
		relatedContexts:"ContentPlatformAnyContext",
		affectedUsers:"ContentPlatformTaxonomyUserRole",
		usersNeedingInformed:"ContentPlatformTaxonomyUserRole",
		description:"JSON",
		featuredImage:"ContentPlatformImageComponent",
		keyChanges:"JSON",
		reasonForChange:"JSON",
		prepareForChange:"JSON",
		supportingVisuals:"ContentPlatformImageComponent",
		relatedContentLinks:"String",
		featureRolloutDate:"String",
		featureRolloutEndDate:"String",
		changeCategory:"ContentPlatformTaxonomyChangeCategory",
		releaseNoteFlag:"String",
		releaseNoteFlagOffValue:"String",
		publishStatus:"String",
		benefitsList:"JSON",
		getStarted:"JSON"
	},
	ContentPlatformReleaseNotesConnection:{
		pageInfo:"PageInfo",
		edges:"ContentPlatformReleaseNotesEdge"
	},
	ContentPlatformReleaseNotesEdge:{
		node:"ContentPlatformReleaseNote",
		cursor:"String"
	},
	ContentPlatformSearchQueryType:{
		searchType:"ContentPlatformSearchTypes",
		terms:"String",
		termOperator:"ContentPlatformOperators",
		fields:"ContentPlatformFieldType",
		fieldOperator:"ContentPlatformOperators"
	},
	ContentPlatformStatusOfChange:{
		label:"String",
		description:"String"
	},
	ContentPlatformTaxonomyAnnouncementPlan:{
		title:"String",
		description:"String"
	},
	ContentPlatformTaxonomyAnnouncementPlanEntry:{
		title:"String",
		description:"String"
	},
	ContentPlatformTaxonomyChangeCategory:{
		title:"String",
		description:"String"
	},
	ContentPlatformTaxonomyUserRole:{
		title:"String",
		description:"String"
	},
	ContentPlatformTypeOfChange:{
		label:"String",
		icon:"ContentPlatformImageAsset"
	},
	ContextEventObject:{
		id:"ID",
		type:"String",
		attributes:"JSON"
	},
	CopyPolarisInsightsPayload:{
		success:"Boolean",
		errors:"MutationError",
		copiedInsights:"PolarisInsight"
	},
	CreateAppDeploymentResponse:{
		success:"Boolean",
		errors:"MutationError",
		deployment:"AppDeployment"
	},
	CreateAppDeploymentUrlResponse:{
		success:"Boolean",
		errors:"MutationError",
		deploymentUrl:"String"
	},
	CreateAppResponse:{
		success:"Boolean",
		errors:"MutationError",
		app:"App"
	},
	CreateAppTunnelResponse:{
		success:"Boolean",
		errors:"MutationError",
		keepAlive:"String",
		expiry:"String"
	},
	CreateColumnOutput:{
		newColumn:"Column",
		columns:"Column",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	CreateCompassComponentExternalAliasPayload:{
		createdCompassExternalAlias:"CompassExternalAlias",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	CreateCompassComponentLinkPayload:{
		createdComponentLink:"CompassLink",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	CreateCompassComponentPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	CreateCompassRelationshipPayload:{
		createdCompassRelationship:"CompassRelationship",
		success:"Boolean",
		errors:"MutationError"
	},
	CreateCompassScorecardCriteriasPayload:{
		success:"Boolean",
		errors:"MutationError",
		scorecard:"CompassScorecard"
	},
	CreateCompassScorecardPayload:{
		success:"Boolean",
		errors:"MutationError",
		scorecardDetails:"CompassScorecard"
	},
	CreateCompassStarredComponentPayload:{
		components:"CompassStarredComponentConnection",
		success:"Boolean",
		errors:"MutationError"
	},
	CreateDevOpsServiceAndJiraProjectRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceAndJiraProjectRelationship:"DevOpsServiceAndJiraProjectRelationship"
	},
	CreateDevOpsServiceAndOpsgenieTeamRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceAndOpsgenieTeamRelationship:"DevOpsServiceAndOpsgenieTeamRelationship"
	},
	CreateDevOpsServiceAndRepositoryRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceAndRepositoryRelationship:"DevOpsServiceAndRepositoryRelationship"
	},
	CreateDevOpsServicePayload:{
		success:"Boolean",
		errors:"MutationError",
		service:"DevOpsService"
	},
	CreateDevOpsServiceRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceRelationship:"DevOpsServiceRelationship"
	},
	CreateEventSourcePayload:{
		eventSource:"EventSource",
		success:"Boolean",
		errors:"MutationError"
	},
	CreateHostedResourceUploadUrlPayload:{
		success:"Boolean",
		errors:"MutationError",
		preSignedUrls:"HostedResourcePreSignedUrl",
		uploadId:"ID"
	},
	CreateJiraProjectAndOpsgenieTeamRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		jiraProjectAndOpsgenieTeamRelationship:"JiraProjectAndOpsgenieTeamRelationship"
	},
	CreateJiraProjectAndRepositoryRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		jiraProjectAndRepositoryRelationship:"JiraProjectAndRepositoryRelationship"
	},
	CreatePolarisAnonymousVisitorHashPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisAnonymousVisitorHash"
	},
	CreatePolarisCalculatedFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdeaField"
	},
	CreatePolarisCommentPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisComment"
	},
	CreatePolarisDecorationPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisDecoration"
	},
	CreatePolarisIdeaTemplatePayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdeaTemplate"
	},
	CreatePolarisInsightPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisInsight"
	},
	CreatePolarisPlayContributionPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisPlayContribution"
	},
	CreatePolarisPlayPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisPlay"
	},
	CreatePolarisStandardFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdeaField"
	},
	CreatePolarisViewPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisView"
	},
	CreatePolarisViewSetPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisViewSet"
	},
	CreateSprintResponse:{
		sprint:"CreatedSprint",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	CreateWebTriggerUrlResponse:{
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		url:"URL",
		id:"ID"
	},
	CreatedSprint:{
		id:"ID",
		name:"String",
		startDate:"DateTime",
		endDate:"DateTime",
		daysRemaining:"Int",
		sprintState:"SprintState",
		canUpdateSprint:"Boolean"
	},
	CumulativeFlowDiagram:{
		chart:"CFDChartConnection",
		filters:"CFDFilters"
	},
	CurrentEstimation:{
		customFieldId:"String",
		name:"String"
	},
	CurrentUser:{
		permissions:"SoftwareBoardPermission"
	},
	CustomFilter:{
		id:"ID",
		name:"String",
		description:"String",
		filterQuery:"FilterQuery"
	},
	CustomFilterCreateOutput:{
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		customFilter:"CustomFilter",
		validationErrors:"CustomFiltersValidationError"
	},
	CustomFiltersValidationError:{
		fieldName:"String",
		errorMessage:"String",
		errorKey:"String"
	},
	CustomUITunnelDefinition:{
		resourceKey:"String",
		tunnelUrl:"URL"
	},
	CustomerUser:{
		id:"ID",
		accountId:"ID",
		canonicalAccountId:"ID",
		accountStatus:"AccountStatus",
		name:"String",
		picture:"URL",
		email:"String",
		zoneinfo:"String",
		locale:"String"
	},
	Date: `scalar.Date` as const,
	DateTime: `scalar.DateTime` as const,
	DeleteAppEnvironmentVariablePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteAppResponse:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteAppStoredEntityPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteCardOutput:{
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	DeleteColumnOutput:{
		columns:"Column",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	DeleteCompassComponentExternalAliasPayload:{
		deletedCompassExternalAlias:"CompassExternalAlias",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	DeleteCompassComponentLinkPayload:{
		deletedCompassLinkId:"ID",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	DeleteCompassComponentPayload:{
		deletedComponentId:"ID",
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteCompassRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteCompassScorecardCriteriasPayload:{
		success:"Boolean",
		errors:"MutationError",
		scorecard:"CompassScorecard"
	},
	DeleteCompassScorecardPayload:{
		success:"Boolean",
		errors:"MutationError",
		scorecardId:"ID"
	},
	DeleteCompassStarredComponentPayload:{
		components:"CompassStarredComponentConnection",
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsContainerRelationshipEntityPropertiesPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsServiceAndJiraProjectRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsServiceAndOpsgenieTeamRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsServiceAndRepositoryRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsServiceEntityPropertiesPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsServicePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteDevOpsServiceRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteEventSourcePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteJiraProjectAndOpsgenieTeamRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteJiraProjectAndRepositoryRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisAnonymousVisitorHashPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisDecorationPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisFieldOptionPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisFieldPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisIdeaTemplatePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisInsightPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisPlayContributionPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisViewPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeletePolarisViewSetPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteUserGrantPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DeleteWebTriggerUrlResponse:{
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	DeploymentPipeline:{
		url:"String",
		displayName:"String"
	},
	DeploymentSummary:{
		id:"ID",
		issueIds:"ID",
		provider:"DevOpsProvider",
		serviceAssociations:"DevOpsService",
		deploymentSequenceNumber:"Long",
		updateSequenceNumber:"Long",
		displayName:"String",
		url:"String",
		description:"String",
		state:"DeploymentState",
		lastUpdated:"DateTime",
		pipeline:"DeploymentPipeline",
		environment:"DevOpsEnvironment"
	},
	DetachCompassComponentDataManagerPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	DetachEventSourcePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DevOps:{
		entitiesByAssociations:"DevOpsEntities",
		summarisedDeployments:"DevOpsSummarisedDeployments",
		pullRequestEntityDetails:"DevOpsPullRequestDetails",
		summarisedEntities:"DevOpsSummarisedEntities",
		dataDepotProviders:"DevOpsDataDepotProviders",
		securityVulnerabilityEntityDetails:"DevOpsSecurityVulnerabilityDetails",
		ariGraph:"AriGraph",
		toolchain:"Toolchain"
	},
	DevOpsAvatar:{
		url:"URL",
		description:"String"
	},
	DevOpsBranchInfo:{
		name:"String",
		url:"String"
	},
	DevOpsDataDepotProvider:{
		"...on DevOpsDataDepotSecurityProvider": "DevOpsDataDepotSecurityProvider",
		id:"ID",
		name:"String",
		homeUrl:"URL",
		logoUrl:"URL",
		documentationUrl:"URL",
		appInstallationId:"ID"
	},
	DevOpsDataDepotProviders:{
		securityProviders:"DevOpsDataDepotSecurityProvider"
	},
	DevOpsDataDepotSecurityProvider:{
		id:"ID",
		name:"String",
		homeUrl:"URL",
		logoUrl:"URL",
		documentationUrl:"URL",
		appInstallationId:"ID",
		linkedSecurityWorkspaces:"AriGraphRelationshipConnection"
	},
	DevOpsEntities:{
		featureFlagEntities:"DevOpsFeatureFlagConnection"
	},
	DevOpsEnvironment:{
		category:"DevOpsEnvironmentCategory",
		displayName:"String"
	},
	DevOpsFeatureFlag:{
		id:"ID",
		flagId:"String",
		key:"String",
		displayName:"String",
		providerId:"String",
		summary:"DevOpsFeatureFlagSummary",
		details:"DevOpsFeatureFlagDetailsConnection"
	},
	DevOpsFeatureFlagConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"DevOpsFeatureFlagEdge"
	},
	DevOpsFeatureFlagDetailEdge:{
		cursor:"String",
		node:"DevOpsFeatureFlagDetails"
	},
	DevOpsFeatureFlagDetails:{
		enabled:"Boolean",
		defaultValue:"String",
		environmentName:"String",
		environmentCategory:"DevOpsEnvironmentCategory",
		lastUpdated:"DateTime",
		rolloutPercentage:"Float",
		rolloutText:"String",
		rolloutRules:"Int",
		url:"URL"
	},
	DevOpsFeatureFlagDetailsConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"DevOpsFeatureFlagDetailEdge"
	},
	DevOpsFeatureFlagEdge:{
		cursor:"String",
		node:"DevOpsFeatureFlag"
	},
	DevOpsFeatureFlagProvider:{
		id:"ID",
		name:"String",
		homeUrl:"URL",
		logoUrl:"URL",
		documentationUrl:"URL",
		createFeatureFlagTemplateUrl:"String",
		connectFeatureFlagTemplateUrl:"String"
	},
	DevOpsFeatureFlagSummary:{
		enabled:"Boolean",
		defaultValue:"String",
		lastUpdated:"DateTime",
		rolloutPercentage:"Float",
		rolloutText:"String",
		rolloutRules:"Int",
		url:"URL"
	},
	DevOpsMetrics:{
		deploymentFrequency:"DevOpsMetricsDeploymentFrequency",
		deploymentSize:"DevOpsMetricsDeploymentSize",
		cycleTime:"DevOpsMetricsCycleTime",
		perIssueMetrics:"DevOpsMetricsPerIssueMetricsConnection",
		perDeploymentMetrics:"DevOpsMetricsPerDeploymentMetricsConnection"
	},
	DevOpsMetricsCycleTime:{
		resolution:"DevOpsMetricsResolution",
		phase:"DevOpsMetricsCycleTimePhase",
		hasPermissionForAllContributingIssues:"Boolean",
		cycleTimeMetrics:"DevOpsMetricsCycleTimeMetrics"
	},
	DevOpsMetricsCycleTimeData:{
		dateTime:"DateTime",
		cycleTimeSeconds:"Long",
		issuesShippedCount:"Int"
	},
	DevOpsMetricsCycleTimeMean:{
		aggregateData:"Long",
		data:"DevOpsMetricsCycleTimeData"
	},
	DevOpsMetricsCycleTimeMetrics:{
		"...on DevOpsMetricsCycleTimeMean": "DevOpsMetricsCycleTimeMean",
		"...on DevOpsMetricsCycleTimePercentile": "DevOpsMetricsCycleTimePercentile",
		aggregateData:"Long",
		data:"DevOpsMetricsCycleTimeData"
	},
	DevOpsMetricsCycleTimePercentile:{
		aggregateData:"Long",
		data:"DevOpsMetricsCycleTimeData",
		percentile:"Int"
	},
	DevOpsMetricsDeploymentFrequency:{
		resolution:"DevOpsMetricsResolution",
		state:"DeploymentState",
		environmentType:"DevOpsEnvironmentCategory",
		aggregateData:"Float",
		data:"DevOpsMetricsDeploymentFrequencyData"
	},
	DevOpsMetricsDeploymentFrequencyData:{
		dateTime:"DateTime",
		count:"Int"
	},
	DevOpsMetricsDeploymentMetrics:{
		deploymentSize:"Long",
		deployment:"DeploymentSummary"
	},
	DevOpsMetricsDeploymentMetricsEdge:{
		cursor:"String",
		node:"DevOpsMetricsDeploymentMetrics"
	},
	DevOpsMetricsDeploymentSize:{
		aggregateData:"Float",
		data:"DevOpsMetricsDeploymentSizeData"
	},
	DevOpsMetricsDeploymentSizeData:{
		dateTime:"DateTime",
		deploymentSize:"Float"
	},
	DevOpsMetricsIssueMetrics:{
		id:"ID",
		totalCycleTimeSeconds:"Long",
		meanReviewTimeSeconds:"Long",
		commitsCount:"Int",
		pullRequestsCount:"Int",
		lastSuccessfulProductionDeployment:"DateTime"
	},
	DevOpsMetricsIssueMetricsEdge:{
		cursor:"String",
		node:"DevOpsMetricsIssueMetrics"
	},
	DevOpsMetricsPerDeploymentMetricsConnection:{
		edges:"DevOpsMetricsDeploymentMetricsEdge",
		nodes:"DevOpsMetricsDeploymentMetrics",
		pageInfo:"PageInfo"
	},
	DevOpsMetricsPerIssueMetricsConnection:{
		edges:"DevOpsMetricsIssueMetricsEdge",
		nodes:"DevOpsMetricsIssueMetrics",
		pageInfo:"PageInfo"
	},
	DevOpsMetricsResolution:{
		value:"Int",
		unit:"DevOpsMetricsResolutionUnit"
	},
	DevOpsMutation:{
		_empty:"String",
		ariGraph:"AriGraphMutation"
	},
	DevOpsProvider:{
		name:"String",
		links:"DevOpsProviderLinks",
		logo:"URL"
	},
	DevOpsProviderLinks:{
		documentation:"URL",
		home:"URL",
		listDeploymentsTemplate:"URL"
	},
	DevOpsProviders:{
		featureFlagProviders:"DevOpsFeatureFlagProvider"
	},
	DevOpsPullRequestDetails:{
		id:"ID",
		repositoryId:"ID",
		repositoryInternalId:"String",
		repositoryName:"String",
		repositoryUrl:"String",
		title:"String",
		commentCount:"Int",
		authorId:"ID",
		author:"User",
		reviewers:"DevOpsReviewer",
		lastUpdated:"DateTime",
		status:"DevOpsPullRequestStatus",
		sourceBranch:"DevOpsBranchInfo",
		destinationBranch:"DevOpsBranchInfo",
		url:"String",
		pullRequestInternalId:"String"
	},
	DevOpsReviewer:{
		approvalStatus:"DevOpsPullRequestApprovalStatus",
		userId:"ID",
		user:"User"
	},
	DevOpsSecurityVulnerabilityAdditionalInfo:{
		content:"String",
		url:"String"
	},
	DevOpsSecurityVulnerabilityDetails:{
		id:"ID",
		title:"String",
		description:"String",
		url:"String",
		severity:"DevOpsSecurityVulnerabilitySeverity",
		status:"DevOpsSecurityVulnerabilityStatus",
		identifiers:"DevOpsSecurityVulnerabilityIdentifier",
		introducedDate:"DateTime",
		securityContainerId:"ID",
		additionalInfo:"DevOpsSecurityVulnerabilityAdditionalInfo"
	},
	DevOpsSecurityVulnerabilityIdentifier:{
		id:"String",
		url:"String"
	},
	DevOpsService:{
		id:"ID",
		revision:"ID",
		name:"String",
		description:"String",
		organizationId:"String",
		cloudId:"String",
		serviceTier:"DevOpsServiceTier",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON",
		opsgenieTeamRelationship:"DevOpsServiceAndOpsgenieTeamRelationship",
		jiraProjects:"DevOpsServiceAndJiraProjectRelationshipConnection",
		repositoryRelationships:"DevOpsServiceAndRepositoryRelationshipConnection",
		containedByDevOpsServiceRelationship:"DevOpsServiceRelationship",
		containsDevOpsServiceRelationships:"DevOpsServiceRelationshipConnection",
		dependedOnByDevOpsServiceRelationships:"DevOpsServiceRelationshipConnection",
		dependsOnDevOpsServiceRelationships:"DevOpsServiceRelationshipConnection",
		servicesAvailableToLinkWith:"DevOpsServiceConnection",
		opsgenieTeamsAvailableToLinkWith:"OpsgenieTeamConnection",
		bitbucketRepositoriesAvailableToLinkWith:"BitbucketRepositoryIdConnection"
	},
	DevOpsServiceAndJiraProjectRelationship:{
		id:"ID",
		revision:"ID",
		devOpsService:"DevOpsService",
		jiraProject:"JiraProject",
		relationshipType:"DevOpsServiceAndJiraProjectRelationshipType",
		description:"String",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON"
	},
	DevOpsServiceAndJiraProjectRelationshipConnection:{
		edges:"DevOpsServiceAndJiraProjectRelationshipEdge",
		nodes:"DevOpsServiceAndJiraProjectRelationship",
		pageInfo:"PageInfo"
	},
	DevOpsServiceAndJiraProjectRelationshipEdge:{
		cursor:"String",
		node:"DevOpsServiceAndJiraProjectRelationship"
	},
	DevOpsServiceAndOpsgenieTeamRelationship:{
		id:"ID",
		revision:"ID",
		devOpsService:"DevOpsService",
		opsgenieTeamId:"ID",
		opsgenieTeam:"OpsgenieTeam",
		description:"String",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON"
	},
	DevOpsServiceAndOpsgenieTeamRelationshipConnection:{
		edges:"DevOpsServiceAndOpsgenieTeamRelationshipEdge",
		nodes:"DevOpsServiceAndOpsgenieTeamRelationship",
		pageInfo:"PageInfo"
	},
	DevOpsServiceAndOpsgenieTeamRelationshipEdge:{
		cursor:"String",
		node:"DevOpsServiceAndOpsgenieTeamRelationship"
	},
	DevOpsServiceAndRepositoryRelationship:{
		id:"ID",
		revision:"ID",
		devOpsService:"DevOpsService",
		bitbucketRepository:"BitbucketRepository",
		thirdPartyRepository:"DevOpsThirdPartyRepository",
		description:"String",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON"
	},
	DevOpsServiceAndRepositoryRelationshipConnection:{
		edges:"DevOpsServiceAndRepositoryRelationshipEdge",
		nodes:"DevOpsServiceAndRepositoryRelationship",
		pageInfo:"PageInfo"
	},
	DevOpsServiceAndRepositoryRelationshipEdge:{
		cursor:"String",
		node:"DevOpsServiceAndRepositoryRelationship"
	},
	DevOpsServiceConnection:{
		edges:"DevOpsServiceEdge",
		nodes:"DevOpsService",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DevOpsServiceEdge:{
		cursor:"String",
		node:"DevOpsService"
	},
	DevOpsServiceRelationship:{
		id:"ID",
		revision:"ID",
		organizationId:"String",
		cloudId:"String",
		type:"DevOpsServiceRelationshipType",
		startService:"DevOpsService",
		endService:"DevOpsService",
		description:"String",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON"
	},
	DevOpsServiceRelationshipConnection:{
		edges:"DevOpsServiceRelationshipEdge",
		nodes:"DevOpsServiceRelationship",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	DevOpsServiceRelationshipEdge:{
		cursor:"String",
		node:"DevOpsServiceRelationship"
	},
	DevOpsServiceTier:{
		id:"ID",
		level:"Int",
		nameKey:"String",
		name:"String",
		description:"String"
	},
	DevOpsSummarisedDeployments:{
		entityId:"ID",
		count:"Int",
		mostRelevantCount:"Int",
		deploymentState:"DeploymentState",
		lastUpdated:"DateTime",
		mostRelevantLastUpdated:"DateTime",
		deploymentEnvironment:"DevOpsEnvironment"
	},
	DevOpsSummarisedEntities:{
		entityId:"ID",
		providers:"DevOpsProviders",
		summarisedDeployments:"DevOpsSummarisedDeployments",
		summarisedFeatureFlags:"DevOpsSummarisedFeatureFlags"
	},
	DevOpsSummarisedFeatureFlags:{
		entityUrl:"URL",
		lastUpdated:"DateTime",
		mostRelevantDisplayName:"String",
		mostRelevantEnabled:"Boolean",
		mostRelevantRolloutPercentage:"Float",
		totalCount:"Int",
		totalDisabledCount:"Int",
		totalEnabledCount:"Int",
		totalRolledOutCount:"Int"
	},
	DevOpsThirdPartyRepository:{
		id:"ID",
		webUrl:"URL",
		href:"URL",
		name:"String",
		avatar:"DevOpsAvatar"
	},
	DevOpsTool:{
		id:"ID",
		name:"String",
		productKey:"String",
		avatar:"DevOpsToolAvatar",
		group:"DevOpsToolGroup",
		category:"DevOpsToolCategory",
		supportsContainers:"Boolean",
		containerRelationshipType:"ID",
		recommended:"Boolean",
		integration:"DevOpsToolIntegration",
		namespaces:"DevOpsToolNamespaceConnection",
		auth:"DevOpsToolAuth",
		containerRelationships:"AriGraphRelationshipConnection",
		jiraProjectRelationships:"JiraProjectAndDevOpsToolRelationshipConnection"
	},
	DevOpsToolAppLinks:{
		self:"String",
		manage:"String",
		configure:"String",
		getStarted:"String",
		support:"String"
	},
	DevOpsToolAuth:{
		"...on DevOpsToolDefaultAuth": "DevOpsToolDefaultAuth",
		"...on DevOpsToolOAuth": "DevOpsToolOAuth",
		authenticated:"Boolean"
	},
	DevOpsToolAvatar:{
		url:"URL"
	},
	DevOpsToolBitbucketCreate:{
		requestId:"String",
		workspace:"String",
		slug:"String",
		name:"String"
	},
	DevOpsToolCanContainerBeCreated:{
		"...on DevOpsToolContainerCanBeCreated":"DevOpsToolContainerCanBeCreated",
		"...on DevOpsToolContainerNameConflict":"DevOpsToolContainerNameConflict",
		"...on DevOpsToolContainerKeyConflict":"DevOpsToolContainerKeyConflict",
		"...on DevOpsToolContainerKeyCannotBeGenerated":"DevOpsToolContainerKeyCannotBeGenerated",
		"...on DevOpsToolUnknownTool":"DevOpsToolUnknownTool"
	},
	DevOpsToolCategory:{
		id:"String",
		name:"String",
		groupId:"String"
	},
	DevOpsToolCategoryConnection:{
		edges:"DevOpsToolCategoryEdge",
		nodes:"DevOpsToolCategory",
		pageInfo:"PageInfo"
	},
	DevOpsToolCategoryEdge:{
		cursor:"String",
		node:"DevOpsToolCategory"
	},
	DevOpsToolConfluenceCreate:{
		requestId:"String",
		key:"String",
		name:"String"
	},
	DevOpsToolConnection:{
		edges:"DevOpsToolEdge",
		nodes:"DevOpsTool",
		pageInfo:"PageInfo"
	},
	DevOpsToolContainer:{
		id:"ID",
		displayName:"String",
		productKey:"String",
		url:"String",
		underlyingId:"String"
	},
	DevOpsToolContainerCanBeCreated:{
		containerCreationSpecification:"DevOpsToolContainerCreationSpecification"
	},
	DevOpsToolContainerConnection:{
		edges:"DevOpsToolContainerEdge",
		nodes:"DevOpsToolContainer",
		pageInfo:"PageInfo"
	},
	DevOpsToolContainerCreationSpecification:{
		"...on DevOpsToolBitbucketCreate": "DevOpsToolBitbucketCreate",
		"...on DevOpsToolConfluenceCreate": "DevOpsToolConfluenceCreate",
		"...on DevOpsToolGitHubCreate": "DevOpsToolGitHubCreate",
		"...on DevOpsToolGitLabCreate": "DevOpsToolGitLabCreate",
		"...on DevOpsToolOpsgenieCreate": "DevOpsToolOpsgenieCreate",
		requestId:"String"
	},
	DevOpsToolContainerEdge:{
		cursor:"String",
		node:"DevOpsToolContainer"
	},
	DevOpsToolContainerKeyCannotBeGenerated:{
		name:"String"
	},
	DevOpsToolContainerKeyConflict:{
		name:"String",
		key:"String"
	},
	DevOpsToolContainerNameConflict:{
		name:"String"
	},
	DevOpsToolDefaultAuth:{
		authenticated:"Boolean"
	},
	DevOpsToolEdge:{
		cursor:"String",
		node:"DevOpsTool"
	},
	DevOpsToolGitHubCreate:{
		requestId:"String",
		organizationName:"String",
		repositoryName:"String"
	},
	DevOpsToolGitLabCreate:{
		requestId:"String",
		organizationName:"String",
		repositoryName:"String"
	},
	DevOpsToolGroup:{
		groupId:"String",
		groupName:"String",
		categories:"DevOpsToolCategoryConnection"
	},
	DevOpsToolGroupConnection:{
		edges:"DevOpsToolGroupEdge",
		nodes:"DevOpsToolGroup",
		pageInfo:"PageInfo"
	},
	DevOpsToolGroupEdge:{
		cursor:"String",
		node:"DevOpsToolGroup"
	},
	DevOpsToolIntegration:{
		"...on DevOpsToolIntegrationApp": "DevOpsToolIntegrationApp",
		"...on DevOpsToolIntegrationProduct": "DevOpsToolIntegrationProduct",
		key:"String",
		name:"String",
		installed:"Boolean",
		iconUrl:"String"
	},
	DevOpsToolIntegrationApp:{
		appKey:"String",
		key:"String",
		appName:"String",
		name:"String",
		marketplaceType:"String",
		installed:"Boolean",
		iconUrl:"String",
		links:"DevOpsToolAppLinks"
	},
	DevOpsToolIntegrationProduct:{
		productKey:"String",
		key:"String",
		productName:"String",
		name:"String",
		available:"Boolean",
		installed:"Boolean",
		iconUrl:"String"
	},
	DevOpsToolNamespace:{
		id:"ID",
		displayName:"String",
		productKey:"String",
		canCreateContainer:"Boolean",
		underlyingId:"String",
		containers:"DevOpsToolContainerConnection"
	},
	DevOpsToolNamespaceConnection:{
		edges:"DevOpsToolNamespaceEdge",
		nodes:"DevOpsToolNamespace",
		pageInfo:"PageInfo"
	},
	DevOpsToolNamespaceEdge:{
		cursor:"String",
		node:"DevOpsToolNamespace"
	},
	DevOpsToolNavbarConnectionState:{
		codeTab:"DevOpsToolConnectionState",
		oncallTab:"DevOpsToolConnectionState",
		pagesTab:"DevOpsToolConnectionState"
	},
	DevOpsToolOAuth:{
		authenticated:"Boolean",
		oauthUrl:"String"
	},
	DevOpsToolOpsgenieCreate:{
		requestId:"String",
		name:"String"
	},
	DevOpsToolUnknownTool:{
		toolId:"String"
	},
	DevOpsToolUpdateNavbarConnectionStateTabSeenPayload:{
		success:"Boolean",
		errors:"MutationError",
		updatedNavbarConnectionState:"DevOpsToolNavbarConnectionState"
	},
	DevOpsTools:{
		tools:"DevOpsToolConnection",
		tool:"DevOpsTool",
		namespace:"DevOpsToolNamespace",
		container:"DevOpsToolContainer",
		navbarConnectionState:"DevOpsToolNavbarConnectionState",
		canContainerBeCreated:"DevOpsToolCanContainerBeCreated",
		groups:"DevOpsToolGroupConnection"
	},
	DevStatus:{
		activity:"DevStatusActivity",
		count:"Int"
	},
	DeveloperLogAccessResult:{
		developerHasAccess:"Boolean",
		contextId:"ID"
	},
	DirectoryMutation:{
		removeUserFromOrganization:"DirectoryRemoveUserPayload"
	},
	DirectoryQuery:{
		_version:"String"
	},
	DirectoryRemoveUserPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	DvcsBitbucketWorkspaceConnection:{
		edges:"DvcsBitbucketWorkspaceEdge",
		nodes:"BitbucketWorkspace",
		pageInfo:"PageInfo"
	},
	DvcsBitbucketWorkspaceEdge:{
		cursor:"String",
		node:"BitbucketWorkspace"
	},
	DvcsQuery:{
		bitbucketWorkspacesLinkedToSite:"DvcsBitbucketWorkspaceConnection"
	},
	EcosystemMutation:{
		updateAppHostServiceScopes:"UpdateAppHostServiceScopesResponsePayload",
		addAppContributor:"AddAppContributorResponsePayload",
		deleteUserGrant:"DeleteUserGrantPayload",
		updateUserInstallationRules:"UserInstallationRulesPayload",
		forgeAlerts:"ForgeAlertsMutation"
	},
	EcosystemQuery:{
		userGrants:"UserGrantConnection",
		checkConsentPermissionByOAuthClientId:"PermissionToConsentByOauthId",
		userInstallationRules:"UserInstallationRules",
		appInstallationsByContext:"AppInstallationByIndexConnection",
		appInstallationsByApp:"AppInstallationByIndexConnection",
		fortifiedMetrics:"FortifiedMetricsQuery",
		forgeMetrics:"ForgeMetricsQuery",
		forgeAlerts:"ForgeAlertsQuery"
	},
	ErrorDetails:{
		code:"String",
		fields:"JSON",
		message:"String"
	},
	Estimate:{
		storyPoints:"Float",
		originalEstimate:"OriginalEstimate"
	},
	EstimationBoardFeatureView:{
		id:"ID",
		title:"String",
		description:"String",
		status:"String",
		canEnable:"Boolean",
		learnMoreLink:"String",
		learnMoreArticleId:"String",
		imageUri:"String",
		permissibleEstimationTypes:"PermissibleEstimationType",
		selectedEstimationType:"PermissibleEstimationType"
	},
	EstimationConfig:{
		current:"CurrentEstimation",
		available:"AvailableEstimations"
	},
	EventSource:{
		id:"ID",
		externalEventSourceId:"ID",
		eventType:"CompassEventType",
		forgeAppId:"ID",
		events:"CompassEventsQueryResult"
	},
	Extension:{
		id:"ID",
		appId:"ID",
		definitionId:"ID",
		environmentId:"ID",
		versionId:"ID",
		environmentKey:"String",
		environmentType:"String",
		installationId:"String",
		type:"String",
		key:"String",
		appOwner:"User",
		appVersion:"String",
		properties:"JSON",
		oauthClientId:"ID",
		scopes:"String",
		principal:"AppPrincipal",
		migrationKey:"String",
		license:"AppInstallationLicense",
		egress:"AppNetworkEgressPermissionExtension",
		securityPolicies:"AppSecurityPoliciesPermissionExtension",
		consentUrl:"String",
		currentUserConsent:"UserConsentExtension",
		requiresUserConsent:"Boolean"
	},
	ExtensionContext:{
		id:"ID",
		extensionsByType:"Extension",
		installationsSummary:"InstallationSummary",
		appAuditLogs:"AppAuditConnection",
		installations:"AppInstallationConnection"
	},
	ExternalAuthProvider:{
		key:"String",
		displayName:"String",
		url:"URL"
	},
	FilterQuery:{
		sanitisedJql:"String",
		errors:"String"
	},
	ForgeAlertsActivitiesResult:{
		"...on ForgeAlertsActivityConnection":"ForgeAlertsActivityConnection",
		"...on QueryError":"QueryError"
	},
	ForgeAlertsActivity:{
		activityMessage:"String",
		timestamp:"String",
		type:"ForgeAlertsActivityType",
		isMuted:"Boolean",
		status:"ForgeAlertsStatus"
	},
	ForgeAlertsActivityConnection:{
		edges:"ForgeAlertsActivityEdge",
		nodes:"ForgeAlertsActivity",
		pageInfo:"PageInfo"
	},
	ForgeAlertsActivityEdge:{
		cursor:"String",
		node:"ForgeAlertsActivity"
	},
	ForgeAlertsConfigData:{
		alertName:"String",
		alertId:"String",
		description:"String",
		environment:"String",
		isMuted:"Boolean",
		lastTriggeredAt:"Int",
		metricName:"String",
		status:"ForgeAlertsStatus",
		triggerValue:"Float"
	},
	ForgeAlertsConfigResult:{
		"...on ForgeAlertsConfigData":"ForgeAlertsConfigData",
		"...on QueryError":"QueryError"
	},
	ForgeAlertsCreateAlertPayload:{
		alertConfig:"ForgeAlertsConfigData",
		errors:"MutationError",
		success:"Boolean"
	},
	ForgeAlertsFixAlertPayload:{
		alertConfigs:"ForgeAlertsConfigData",
		errors:"MutationError",
		success:"Boolean"
	},
	ForgeAlertsMutation:{
		appId:"ID",
		createAlertConfig:"ForgeAlertsCreateAlertPayload",
		deleteAlertConfigs:"Payload",
		fixAlertConfigs:"ForgeAlertsFixAlertPayload",
		modifyAlertConfig:"ForgeAlertsUpdateAlertPayload"
	},
	ForgeAlertsQuery:{
		alertConfig:"ForgeAlertsConfigResult",
		alertActivities:"ForgeAlertsActivitiesResult",
		appId:"ID"
	},
	ForgeAlertsUpdateAlertPayload:{
		alertConfig:"ForgeAlertsConfigData",
		errors:"MutationError",
		success:"Boolean"
	},
	ForgeContextToken:{
		jwt:"String",
		expiresAt:"String"
	},
	ForgeMetricsData:{
		"...on ForgeMetricsErrorsData": "ForgeMetricsErrorsData",
		"...on ForgeMetricsErrorsValueData": "ForgeMetricsErrorsValueData",
		"...on ForgeMetricsInvocationData": "ForgeMetricsInvocationData",
		"...on ForgeMetricsInvocationsValueData": "ForgeMetricsInvocationsValueData",
		"...on ForgeMetricsSuccessRateData": "ForgeMetricsSuccessRateData",
		"...on ForgeMetricsSuccessRateValueData": "ForgeMetricsSuccessRateValueData",
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsSeries"
	},
	ForgeMetricsErrorsData:{
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsErrorsSeries",
		resolution:"ForgeMetricsResolution",
		interval:"ForgeMetricsIntervalRange"
	},
	ForgeMetricsErrorsDataPoint:{
		timestamp:"DateTime",
		count:"Int"
	},
	ForgeMetricsErrorsResult:{
		"...on ForgeMetricsErrorsData":"ForgeMetricsErrorsData",
		"...on QueryError":"QueryError"
	},
	ForgeMetricsErrorsSeries:{
		groups:"ForgeMetricsLabelGroup",
		data:"ForgeMetricsErrorsDataPoint"
	},
	ForgeMetricsErrorsValueData:{
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsErrorsSeries"
	},
	ForgeMetricsErrorsValueResult:{
		"...on ForgeMetricsErrorsValueData":"ForgeMetricsErrorsValueData",
		"...on QueryError":"QueryError"
	},
	ForgeMetricsInstallationContext:{
		tenantContext:"TenantContext",
		contextAri:"ID"
	},
	ForgeMetricsIntervalRange:{
		start:"DateTime",
		end:"DateTime"
	},
	ForgeMetricsInvocationData:{
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsInvocationSeries",
		resolution:"ForgeMetricsResolution",
		interval:"ForgeMetricsIntervalRange"
	},
	ForgeMetricsInvocationDataPoint:{
		timestamp:"DateTime",
		count:"Int"
	},
	ForgeMetricsInvocationSeries:{
		groups:"ForgeMetricsLabelGroup",
		data:"ForgeMetricsInvocationDataPoint"
	},
	ForgeMetricsInvocationsResult:{
		"...on ForgeMetricsInvocationData":"ForgeMetricsInvocationData",
		"...on QueryError":"QueryError"
	},
	ForgeMetricsInvocationsValueData:{
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsInvocationSeries"
	},
	ForgeMetricsInvocationsValueResult:{
		"...on ForgeMetricsInvocationsValueData":"ForgeMetricsInvocationsValueData",
		"...on QueryError":"QueryError"
	},
	ForgeMetricsLabelGroup:{
		key:"String",
		value:"String"
	},
	ForgeMetricsQuery:{
		appId:"ID",
		successRate:"ForgeMetricsSuccessRateResult",
		successRateValue:"ForgeMetricsSuccessRateValueResult",
		invocations:"ForgeMetricsInvocationsResult",
		invocationsValue:"ForgeMetricsInvocationsValueResult",
		errors:"ForgeMetricsErrorsResult",
		errorsValue:"ForgeMetricsErrorsValueResult",
		sites:"ForgeMetricsSitesResult"
	},
	ForgeMetricsResolution:{
		size:"Int",
		units:"ForgeMetricsResolutionUnit"
	},
	ForgeMetricsSeries:{
		"...on ForgeMetricsErrorsSeries": "ForgeMetricsErrorsSeries",
		"...on ForgeMetricsInvocationSeries": "ForgeMetricsInvocationSeries",
		"...on ForgeMetricsSuccessRateSeries": "ForgeMetricsSuccessRateSeries",
		groups:"ForgeMetricsLabelGroup"
	},
	ForgeMetricsSitesByCategory:{
		category:"ForgeMetricsSiteFilterCategory",
		installationContexts:"ForgeMetricsInstallationContext"
	},
	ForgeMetricsSitesData:{
		data:"ForgeMetricsSitesByCategory"
	},
	ForgeMetricsSitesResult:{
		"...on ForgeMetricsSitesData":"ForgeMetricsSitesData",
		"...on QueryError":"QueryError"
	},
	ForgeMetricsSuccessRateData:{
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsSuccessRateSeries",
		resolution:"ForgeMetricsResolution",
		interval:"ForgeMetricsIntervalRange"
	},
	ForgeMetricsSuccessRateDataPoint:{
		timestamp:"DateTime",
		value:"Float"
	},
	ForgeMetricsSuccessRateResult:{
		"...on ForgeMetricsSuccessRateData":"ForgeMetricsSuccessRateData",
		"...on QueryError":"QueryError"
	},
	ForgeMetricsSuccessRateSeries:{
		groups:"ForgeMetricsLabelGroup",
		data:"ForgeMetricsSuccessRateDataPoint"
	},
	ForgeMetricsSuccessRateValueData:{
		name:"String",
		type:"ForgeMetricsDataType",
		series:"ForgeMetricsSuccessRateSeries"
	},
	ForgeMetricsSuccessRateValueResult:{
		"...on ForgeMetricsSuccessRateValueData":"ForgeMetricsSuccessRateValueData",
		"...on QueryError":"QueryError"
	},
	FortifiedMetricsIntervalRange:{
		start:"DateTime",
		end:"DateTime"
	},
	FortifiedMetricsQuery:{
		appKey:"ID",
		appAvailability:"FortifiedSuccessRateMetricQuery",
		installationCallbacks:"FortifiedSuccessRateMetricQuery",
		webhooks:"FortifiedSuccessRateMetricQuery"
	},
	FortifiedMetricsResolution:{
		size:"Int",
		units:"FortifiedMetricsResolutionUnit"
	},
	FortifiedMetricsSuccessRateData:{
		name:"String",
		series:"FortifiedMetricsSuccessRateSeries",
		resolution:"FortifiedMetricsResolution",
		interval:"FortifiedMetricsIntervalRange"
	},
	FortifiedMetricsSuccessRateDataPoint:{
		timestamp:"DateTime",
		value:"Float"
	},
	FortifiedMetricsSuccessRateResult:{
		"...on FortifiedMetricsSuccessRateData":"FortifiedMetricsSuccessRateData",
		"...on QueryError":"QueryError"
	},
	FortifiedMetricsSuccessRateSeries:{
		data:"FortifiedMetricsSuccessRateDataPoint"
	},
	FortifiedSuccessRateMetricQuery:{
		successRate:"FortifiedMetricsSuccessRateResult",
		alertConditionSuccessRate:"FortifiedMetricsSuccessRateResult",
		serviceLevelObjectiveSuccessRate:"FortifiedMetricsSuccessRateResult"
	},
	FunctionDescription:{
		key:"String"
	},
	FunctionInvocationMetadata:{
		"...on AppLog": "AppLog",
		id:"ID",
		appVersion:"String",
		installationContext:"AppInstallationContext",
		function:"FunctionDescription",
		trigger:"FunctionTrigger",
		moduleType:"String"
	},
	FunctionTrigger:{
		type:"FunctionTriggerType",
		key:"String"
	},
	GenericMutationErrorExtension:{
		statusCode:"Int",
		errorType:"String"
	},
	GenericMutationResponse:{
		success:"Boolean",
		errors:"MutationError"
	},
	GenericQueryErrorExtension:{
		statusCode:"Int",
		errorType:"String"
	},
	GlobalCardCreateAdditionalFields:{
		sprintCustomFieldId:"String",
		rankCustomFieldId:"String",
		boardIssueListKey:"String"
	},
	HelpCenter:{
		id:"ID",
		topics:"HelpCenterTopic"
	},
	HelpCenterCreateTopicPayload:{
		success:"Boolean",
		errors:"MutationError",
		successfullyCreatedTopicIds:"HelpCenterSuccessfullyCreatedTopicIds"
	},
	HelpCenterDeleteUpdateTopicPayload:{
		success:"Boolean",
		errors:"MutationError",
		topicIds:"HelpCenterSuccessfullyDeletedUpdatedTopicIds"
	},
	HelpCenterHelpObject:{
		"...on HelpObjectStoreRequestForm":"HelpObjectStoreRequestForm",
		"...on HelpObjectStoreArticle":"HelpObjectStoreArticle",
		"...on HelpObjectStoreQueryError":"HelpObjectStoreQueryError"
	},
	HelpCenterMutationApi:{
		createTopic:"HelpCenterCreateTopicPayload",
		updateTopic:"HelpCenterDeleteUpdateTopicPayload",
		updateTopicsOrder:"HelpCenterUpdateTopicsOrderPayload",
		deleteTopic:"HelpCenterDeleteUpdateTopicPayload"
	},
	HelpCenterQueryApi:{
		helpCenterFromProductName:"HelpCenterQueryResult",
		helpCenterTopicFromProductName:"HelpCenterTopicResult"
	},
	HelpCenterQueryResult:{
		"...on HelpCenter":"HelpCenter",
		"...on QueryError":"QueryError"
	},
	HelpCenterSuccessfullyCreatedTopicIds:{
		helpCenterId:"ID",
		topicIds:"ID"
	},
	HelpCenterSuccessfullyDeletedUpdatedTopicIds:{
		helpCenterId:"ID",
		topicIds:"ID"
	},
	HelpCenterTopic:{
		topicId:"ID",
		items:"HelpCenterTopicItemConnection",
		name:"String",
		description:"String",
		properties:"JSON"
	},
	HelpCenterTopicItem:{
		ari:"ID",
		data:"HelpCenterHelpObject"
	},
	HelpCenterTopicItemConnection:{
		edges:"HelpCenterTopicItemEdge",
		nodes:"HelpCenterTopicItem",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	HelpCenterTopicItemEdge:{
		cursor:"String",
		node:"HelpCenterTopicItem"
	},
	HelpCenterTopicResult:{
		"...on HelpCenterTopic":"HelpCenterTopic",
		"...on QueryError":"QueryError"
	},
	HelpCenterUpdateTopicsOrderPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	HelpObjectStoreArticle:{
		id:"ID",
		ari:"ID",
		title:"String",
		description:"String",
		icon:"HelpObjectStoreIcon",
		displayLink:"URL",
		entityId:"String",
		entityProjectId:"String"
	},
	HelpObjectStoreArticleResult:{
		"...on HelpObjectStoreArticle":"HelpObjectStoreArticle",
		"...on HelpObjectStoreQueryError":"HelpObjectStoreQueryError"
	},
	HelpObjectStoreCreateEntityMappingPayload:{
		success:"Boolean",
		errors:"MutationError",
		entityMappingDetails:"HelpObjectStoreSuccessfullyCreatedEntityMappingDetail"
	},
	HelpObjectStoreHelpObject:{
		"...on HelpObjectStoreArticle": "HelpObjectStoreArticle",
		"...on HelpObjectStoreRequestForm": "HelpObjectStoreRequestForm",
		id:"ID",
		ari:"ID",
		title:"String",
		description:"String",
		icon:"HelpObjectStoreIcon",
		displayLink:"URL"
	},
	HelpObjectStoreIcon:{
		iconUrl:"URL"
	},
	HelpObjectStoreMutationApi:{
		createEntityMapping:"HelpObjectStoreCreateEntityMappingPayload"
	},
	HelpObjectStoreQueryApi:{
		requestForms:"HelpObjectStoreRequestFormResult",
		articles:"HelpObjectStoreArticleResult"
	},
	HelpObjectStoreQueryError:{
		ari:"ID",
		message:"String",
		extensions:"QueryErrorExtension"
	},
	HelpObjectStoreRequestForm:{
		id:"ID",
		ari:"ID",
		title:"String",
		description:"String",
		icon:"HelpObjectStoreIcon",
		displayLink:"URL",
		entityId:"String",
		entityProjectId:"String"
	},
	HelpObjectStoreRequestFormResult:{
		"...on HelpObjectStoreRequestForm":"HelpObjectStoreRequestForm",
		"...on HelpObjectStoreQueryError":"HelpObjectStoreQueryError"
	},
	HelpObjectStoreSuccessfullyCreatedEntityMappingDetail:{
		ari:"ID",
		entityId:"String",
		projectId:"String"
	},
	HostedResourcePreSignedUrl:{
		uploadUrl:"String",
		uploadFormData:"JSON"
	},
	HostedStorage:{
		classifications:"Classification",
		locations:"String"
	},
	Icon:{
		url:"String"
	},
	InlineCardCreateConfig:{
		enabled:"Boolean",
		useGlobalCreate:"Boolean"
	},
	InlineColumnEditConfig:{
		enabled:"Boolean"
	},
	InstallationContextWithLogAccess:{
		installationContext:"ID",
		tenantContext:"TenantContext"
	},
	InstallationSummary:{
		licenseId:"String",
		app:"InstallationSummaryApp"
	},
	InstallationSummaryApp:{
		id:"ID",
		name:"String",
		description:"String",
		environment:"InstallationSummaryAppEnvironment"
	},
	InstallationSummaryAppEnvironment:{
		id:"ID",
		key:"String",
		type:"String",
		version:"InstallationSummaryAppEnvironmentVersion"
	},
	InstallationSummaryAppEnvironmentVersion:{
		id:"ID",
		version:"String"
	},
	InvocationResponsePayload:{
		body:"JSON"
	},
	InvokeAuxEffectsResponse:{
		success:"Boolean",
		errors:"MutationError",
		result:"AuxEffectsResult"
	},
	InvokeExtensionPayloadErrorExtension:{
		errorType:"String",
		statusCode:"Int",
		fields:"InvokeExtensionPayloadErrorExtensionFields"
	},
	InvokeExtensionPayloadErrorExtensionFields:{
		authInfoUrl:"String"
	},
	InvokeExtensionResponse:{
		success:"Boolean",
		errors:"MutationError",
		response:"InvocationResponsePayload",
		externalAuth:"ExternalAuthProvider",
		contextToken:"ForgeContextToken"
	},
	InvokePolarisObjectPayload:{
		success:"Boolean",
		errors:"MutationError",
		response:"ResolvedPolarisObject"
	},
	IssueDevOpsBranchDetails:{
		name:"String",
		url:"String",
		createReviewUrl:"String",
		createPullRequestUrl:"String",
		lastCommit:"IssueDevOpsHeadCommit",
		pullRequests:"IssueDevOpsBranchPullRequestStatesSummary",
		reviews:"IssueDevOpsReview"
	},
	IssueDevOpsBranchPullRequestStatesSummary:{
		name:"String",
		url:"String",
		status:"IssueDevOpsPullRequestStatus",
		lastUpdate:"DateTime"
	},
	IssueDevOpsBuildDetail:{
		id:"String",
		buildNumber:"Int",
		name:"String",
		description:"String",
		url:"String",
		state:"String",
		testSummary:"IssueDevOpsTestSummary",
		lastUpdated:"DateTime",
		references:"IssueDevOpsBuildReference"
	},
	IssueDevOpsBuildProvider:{
		id:"String",
		name:"String",
		url:"String",
		description:"String",
		avatarUrl:"String",
		builds:"IssueDevOpsBuildDetail"
	},
	IssueDevOpsBuildReference:{
		name:"String",
		uri:"String"
	},
	IssueDevOpsCommitDetails:{
		id:"String",
		isMerge:"Boolean",
		timestamp:"DateTime",
		url:"String",
		createReviewUrl:"String",
		displayId:"String",
		message:"String",
		author:"IssueDevOpsPullRequestAuthor",
		files:"IssueDevOpsCommitFile",
		reviews:"IssueDevOpsReview"
	},
	IssueDevOpsCommitFile:{
		linesAdded:"Int",
		linesRemoved:"Int",
		changeType:"IssueDevOpsCommitChangeType",
		url:"String",
		path:"String"
	},
	IssueDevOpsDeploymentDetails:{
		displayName:"String",
		url:"String",
		state:"IssueDevOpsDeploymentState",
		lastUpdated:"DateTime",
		environment:"IssueDevOpsDeploymentEnvironment",
		pipelineId:"String",
		pipelineDisplayName:"String",
		pipelineUrl:"String"
	},
	IssueDevOpsDeploymentEnvironment:{
		id:"String",
		type:"IssueDevOpsDeploymentEnvironmentType",
		displayName:"String"
	},
	IssueDevOpsDeploymentProviderDetails:{
		id:"String",
		name:"String",
		homeUrl:"String",
		logoUrl:"String",
		deployments:"IssueDevOpsDeploymentDetails"
	},
	IssueDevOpsDetails:{
		instanceTypes:"IssueDevOpsProviderInstance",
		featureFlagProviders:"IssueDevOpsFeatureFlagProvider",
		deploymentProviders:"IssueDevOpsDeploymentProviderDetails",
		remoteLinksByType:"IssueDevOpsRemoteLinksByType",
		embeddedMarketplace:"IssueDevOpsEmbeddedMarketplace"
	},
	IssueDevOpsDevelopmentInformation:{
		details:"IssueDevOpsDetails"
	},
	IssueDevOpsEmbeddedMarketplace:{
		shouldDisplayForFeatureFlags:"Boolean",
		shouldDisplayForBuilds:"Boolean",
		shouldDisplayForDeployments:"Boolean"
	},
	IssueDevOpsFeatureFlag:{
		providerId:"String",
		id:"String",
		key:"String",
		displayName:"String",
		summary:"IssueDevOpsFeatureFlagSummary",
		details:"IssueDevOpsFeatureFlagDetails"
	},
	IssueDevOpsFeatureFlagDetails:{
		url:"String",
		lastUpdated:"String",
		environment:"IssueDevOpsFeatureFlagEnvironment",
		status:"IssueDevOpsFeatureFlagStatus"
	},
	IssueDevOpsFeatureFlagEnvironment:{
		name:"String",
		type:"String"
	},
	IssueDevOpsFeatureFlagProvider:{
		id:"String",
		createFlagTemplateUrl:"String",
		linkFlagTemplateUrl:"String",
		featureFlags:"IssueDevOpsFeatureFlag"
	},
	IssueDevOpsFeatureFlagRollout:{
		percentage:"Float",
		text:"String",
		rules:"Int"
	},
	IssueDevOpsFeatureFlagStatus:{
		enabled:"Boolean",
		defaultValue:"String",
		rollout:"IssueDevOpsFeatureFlagRollout"
	},
	IssueDevOpsFeatureFlagSummary:{
		url:"String",
		status:"IssueDevOpsFeatureFlagStatus",
		lastUpdated:"String"
	},
	IssueDevOpsHeadCommit:{
		url:"String",
		displayId:"String",
		timestamp:"DateTime"
	},
	IssueDevOpsProviderInstance:{
		id:"String",
		name:"String",
		type:"String",
		repository:"IssueDevOpsRepositoryDetails",
		buildProviders:"IssueDevOpsBuildProvider",
		typeName:"String",
		isSingleInstance:"Boolean",
		baseUrl:"String",
		devStatusErrorMessage:"String",
		devStatusErrorMessages:"String",
		danglingPullRequests:"IssueDevOpsPullRequestDetails"
	},
	IssueDevOpsPullRequestAuthor:{
		avatarUrl:"String",
		name:"String"
	},
	IssueDevOpsPullRequestDetails:{
		id:"String",
		url:"String",
		name:"String",
		branchName:"String",
		branchUrl:"String",
		lastUpdate:"DateTime",
		commentCount:"Int",
		status:"IssueDevOpsPullRequestStatus",
		author:"IssueDevOpsPullRequestAuthor",
		reviewers:"IssueDevOpsPullRequestReviewer"
	},
	IssueDevOpsPullRequestReviewer:{
		avatarUrl:"String",
		name:"String",
		isApproved:"Boolean"
	},
	IssueDevOpsRemoteLink:{
		id:"String",
		providerId:"String",
		displayName:"String",
		url:"String",
		type:"String",
		description:"String",
		status:"IssueDevOpsRemoteLinkStatus",
		actionIds:"String",
		attributeMap:"IssueDevOpsRemoteLinkAttributeTuple"
	},
	IssueDevOpsRemoteLinkAttributeTuple:{
		key:"String",
		value:"String"
	},
	IssueDevOpsRemoteLinkLabel:{
		value:"String"
	},
	IssueDevOpsRemoteLinkProvider:{
		id:"String",
		name:"String",
		homeUrl:"String",
		logoUrl:"String",
		documentationUrl:"String",
		actions:"IssueDevOpsRemoteLinkProviderAction"
	},
	IssueDevOpsRemoteLinkProviderAction:{
		id:"String",
		label:"IssueDevOpsRemoteLinkLabel",
		templateUrl:"String"
	},
	IssueDevOpsRemoteLinkStatus:{
		appearance:"String",
		label:"String"
	},
	IssueDevOpsRemoteLinkType:{
		type:"String",
		remoteLinks:"IssueDevOpsRemoteLink"
	},
	IssueDevOpsRemoteLinksByType:{
		providers:"IssueDevOpsRemoteLinkProvider",
		types:"IssueDevOpsRemoteLinkType"
	},
	IssueDevOpsRepositoryDetails:{
		avatarUrl:"String",
		description:"String",
		name:"String",
		url:"String",
		parent:"IssueDevOpsRepositoryParent",
		pullRequests:"IssueDevOpsPullRequestDetails",
		branches:"IssueDevOpsBranchDetails",
		commits:"IssueDevOpsCommitDetails"
	},
	IssueDevOpsRepositoryParent:{
		name:"String",
		url:"String"
	},
	IssueDevOpsReview:{
		state:"String",
		url:"String",
		id:"String"
	},
	IssueDevOpsTestSummary:{
		totalNumber:"Int",
		numberPassed:"Int",
		numberFailed:"Int",
		numberSkipped:"Int"
	},
	JSDependency: `scalar.JSDependency` as const,
	JSON: `scalar.JSON` as const,
	JiraADF:{
		json:"JSON"
	},
	JiraAddIssuesToFixVersionPayload:{
		version:"JiraVersion",
		success:"Boolean",
		errors:"MutationError"
	},
	JiraAddRelatedWorkToVersionPayload:{
		success:"Boolean",
		errors:"MutationError",
		relatedWorkEdge:"JiraVersionRelatedWorkEdge",
		relatedWorkV2Edge:"JiraVersionRelatedWorkV2Edge"
	},
	JiraAffectedService:{
		serviceId:"ID",
		name:"String"
	},
	JiraAffectedServiceConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraAffectedServiceEdge"
	},
	JiraAffectedServiceEdge:{
		node:"JiraAffectedService",
		cursor:"String"
	},
	JiraAffectedServicesField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedAffectedServices:"JiraAffectedService",
		selectedAffectedServicesConnection:"JiraAffectedServiceConnection",
		affectedServices:"JiraAffectedServiceConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraApplicationProperty:{
		id:"ID",
		key:"String",
		type:"String",
		value:"String",
		defaultValue:"String",
		name:"String",
		description:"String",
		example:"String",
		allowedValues:"String",
		isEditable:"Boolean"
	},
	JiraAsset:{
		appKey:"String",
		originId:"String",
		serializedOrigin:"String",
		value:"String"
	},
	JiraAssetConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraAssetEdge"
	},
	JiraAssetEdge:{
		node:"JiraAsset",
		cursor:"String"
	},
	JiraAssetField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedAssets:"JiraAsset",
		selectedAssetsConnection:"JiraAssetConnection",
		fieldConfig:"JiraFieldConfig",
		searchUrl:"String",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraAssignRelatedWorkPayload:{
		success:"Boolean",
		errors:"MutationError",
		relatedWork:"JiraVersionRelatedWorkV2"
	},
	JiraAtlassianTeam:{
		teamId:"String",
		name:"String",
		avatar:"JiraAvatar"
	},
	JiraAtlassianTeamConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraAtlassianTeamEdge"
	},
	JiraAtlassianTeamEdge:{
		node:"JiraAtlassianTeam",
		cursor:"String"
	},
	JiraAtlassianTeamField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedTeam:"JiraAtlassianTeam",
		teams:"JiraAtlassianTeamConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraAttachment:{
		"...on JiraPlatformAttachment": "JiraPlatformAttachment",
		"...on JiraServiceManagementAttachment": "JiraServiceManagementAttachment",
		attachmentId:"String",
		author:"User",
		created:"DateTime",
		mediaApiFileId:"String",
		mimeType:"String",
		fileName:"String",
		fileSize:"Long",
		parentName:"String",
		parentId:"String",
		hasRestrictedParent:"Boolean"
	},
	JiraAttachmentConnection:{
		indicativeCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraAttachmentEdge"
	},
	JiraAttachmentEdge:{
		node:"JiraAttachment",
		cursor:"String"
	},
	JiraAttachmentsField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		permissions:"JiraAttachmentsPermissions",
		attachments:"JiraAttachmentConnection",
		maxAllowedTotalAttachmentsSize:"Long",
		mediaContext:"JiraMediaContext",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraAvatar:{
		xsmall:"String",
		small:"String",
		medium:"String",
		large:"String"
	},
	JiraBitbucketDevOpsProvider:{
		displayName:"String",
		webUrl:"URL",
		capabilities:"JiraDevOpsCapability"
	},
	JiraBooleanField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		value:"Boolean",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraCMDBField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		isMulti:"Boolean",
		searchUrl:"String",
		selectedCmdbObjects:"JiraCmdbObject",
		selectedCmdbObjectsConnection:"JiraCmdbObjectConnection",
		wasInsightRequestSuccessful:"Boolean",
		isInsightAvailable:"Boolean",
		cmdbFieldConfig:"JiraCmdbFieldConfig",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		attributesIncludedInAutoCompleteSearch:"String"
	},
	JiraCascadingOption:{
		parentOptionValue:"JiraOption",
		childOptionValue:"JiraOption"
	},
	JiraCascadingOptions:{
		parentOptionValue:"JiraOption",
		childOptionValues:"JiraOption"
	},
	JiraCascadingOptionsConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraCascadingOptionsEdge"
	},
	JiraCascadingOptionsEdge:{
		node:"JiraCascadingOptions",
		cursor:"String"
	},
	JiraCascadingSelectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		cascadingOption:"JiraCascadingOption",
		cascadingOptions:"JiraCascadingOptionsConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraCheckboxesField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedFieldOptions:"JiraOption",
		selectedOptions:"JiraOptionConnection",
		fieldOptions:"JiraOptionConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraChildIssues:{
		"...on JiraChildIssuesWithinLimit":"JiraChildIssuesWithinLimit",
		"...on JiraChildIssuesExceedingLimit":"JiraChildIssuesExceedingLimit"
	},
	JiraChildIssuesExceedingLimit:{
		search:"String"
	},
	JiraChildIssuesWithinLimit:{
		issues:"JiraIssueConnection"
	},
	JiraClassicConnectDevOpsProvider:{
		displayName:"String",
		webUrl:"URL",
		capabilities:"JiraDevOpsCapability",
		iconUrl:"URL",
		connectAppId:"ID",
		marketplaceApp:"MarketplaceApp"
	},
	JiraCmdbAttribute:{
		attributeId:"String",
		objectTypeAttributeId:"String",
		objectTypeAttribute:"JiraCmdbObjectTypeAttribute",
		objectAttributeValues:"JiraCmdbObjectAttributeValueConnection"
	},
	JiraCmdbAttributeConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraCmdbAttributeEdge"
	},
	JiraCmdbAttributeEdge:{
		node:"JiraCmdbAttribute",
		cursor:"String"
	},
	JiraCmdbAvatar:{
		id:"String",
		avatarUUID:"String",
		url16:"String",
		url48:"String",
		url72:"String",
		url144:"String",
		url288:"String",
		mediaClientConfig:"JiraCmdbMediaClientConfig"
	},
	JiraCmdbBitbucketRepository:{
		uuid:"String",
		name:"String",
		url:"URL",
		avatarUrl:"URL",
		bitbucketWorkspaceId:"String"
	},
	JiraCmdbConfigAttributeConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraCmdbConfigAttributeEdge"
	},
	JiraCmdbConfigAttributeEdge:{
		node:"String",
		cursor:"String"
	},
	JiraCmdbDefaultType:{
		id:"String",
		name:"String"
	},
	JiraCmdbFieldConfig:{
		objectSchemaId:"String",
		objectFilterQuery:"String",
		issueScopeFilterQuery:"String",
		multiple:"Boolean",
		attributesDisplayedOnIssue:"JiraCmdbConfigAttributeConnection",
		attributesIncludedInAutoCompleteSearch:"JiraCmdbConfigAttributeConnection"
	},
	JiraCmdbIcon:{
		id:"String",
		name:"String",
		url16:"String",
		url48:"String"
	},
	JiraCmdbMediaClientConfig:{
		clientId:"String",
		issuer:"String",
		fileId:"String",
		mediaBaseUrl:"URL",
		mediaJwtToken:"String"
	},
	JiraCmdbObject:{
		id:"ID",
		objectGlobalId:"String",
		objectId:"String",
		workspaceId:"String",
		label:"String",
		objectKey:"String",
		avatar:"JiraCmdbAvatar",
		objectType:"JiraCmdbObjectType",
		attributes:"JiraCmdbAttributeConnection",
		webUrl:"String"
	},
	JiraCmdbObjectAttributeValue:{
		referencedObject:"JiraCmdbObject",
		user:"User",
		group:"JiraGroup",
		status:"JiraCmdbStatusType",
		project:"JiraProject",
		bitbucketRepo:"JiraCmdbBitbucketRepository",
		value:"String",
		displayValue:"String",
		searchValue:"String",
		additionalValue:"String"
	},
	JiraCmdbObjectAttributeValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraCmdbObjectAttributeValueEdge"
	},
	JiraCmdbObjectAttributeValueEdge:{
		node:"JiraCmdbObjectAttributeValue",
		cursor:"String"
	},
	JiraCmdbObjectConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraCmdbObjectEdge"
	},
	JiraCmdbObjectEdge:{
		node:"JiraCmdbObject",
		cursor:"String"
	},
	JiraCmdbObjectType:{
		objectTypeId:"String",
		name:"String",
		description:"String",
		icon:"JiraCmdbIcon",
		objectSchemaId:"String"
	},
	JiraCmdbObjectTypeAttribute:{
		name:"String",
		label:"Boolean",
		type:"JiraCmdbAttributeType",
		description:"String",
		objectType:"JiraCmdbObjectType",
		defaultType:"JiraCmdbDefaultType",
		referenceType:"JiraCmdbReferenceType",
		referenceObjectTypeId:"String",
		referenceObjectType:"JiraCmdbObjectType",
		additionalValue:"String",
		suffix:"String"
	},
	JiraCmdbReferenceType:{
		id:"String",
		name:"String",
		description:"String",
		color:"String",
		webUrl:"String",
		objectSchemaId:"String"
	},
	JiraCmdbStatusType:{
		id:"String",
		name:"String",
		description:"String",
		category:"Int",
		objectSchemaId:"String"
	},
	JiraColor:{
		id:"ID",
		colorKey:"String"
	},
	JiraColorField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		color:"JiraColor",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraComment:{
		"...on JiraPlatformComment": "JiraPlatformComment",
		"...on JiraServiceManagementComment": "JiraServiceManagementComment",
		commentId:"ID",
		issue:"JiraIssue",
		webUrl:"URL",
		author:"User",
		updateAuthor:"User",
		richText:"JiraRichText",
		created:"DateTime",
		updated:"DateTime",
		permissionLevel:"JiraPermissionLevel"
	},
	JiraCommentConnection:{
		indicativeCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraCommentEdge"
	},
	JiraCommentEdge:{
		node:"JiraComment",
		cursor:"String"
	},
	JiraComponent:{
		id:"ID",
		componentId:"String",
		name:"String",
		description:"String"
	},
	JiraComponentConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraComponentEdge"
	},
	JiraComponentEdge:{
		node:"JiraComponent",
		cursor:"String"
	},
	JiraComponentsField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedComponents:"JiraComponent",
		selectedComponentsConnection:"JiraComponentConnection",
		components:"JiraComponentConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraConnectMultipleSelectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedFieldOptions:"JiraOption",
		selectedOptions:"JiraOptionConnection",
		fieldOptions:"JiraOptionConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraConnectNumberField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		number:"Float",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraConnectReadOnlyField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		text:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraConnectRichTextField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		richText:"JiraRichText",
		renderer:"String",
		mediaContext:"JiraMediaContext",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraConnectSingleSelectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		fieldOption:"JiraOption",
		fieldOptions:"JiraOptionConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraConnectTextField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		text:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraCreateCustomFilterPayload:{
		success:"Boolean",
		errors:"MutationError",
		filter:"JiraCustomFilter"
	},
	JiraCreateReleaseNoteConfluencePagePayload:{
		success:"Boolean",
		errors:"MutationError",
		releaseNotePageViewUrl:"URL",
		releaseNotePageEditUrl:"URL",
		addToRelatedWorkSuccess:"Boolean",
		version:"JiraVersion",
		relatedWorkV2Edge:"JiraVersionRelatedWorkV2Edge"
	},
	JiraCustomFilter:{
		id:"ID",
		filterId:"String",
		jql:"String",
		owner:"User",
		name:"String",
		description:"String",
		isFavourite:"Boolean",
		isEditable:"Boolean",
		emailSubscriptions:"JiraFilterEmailSubscriptionConnection",
		shareGrants:"JiraShareableEntityShareGrantConnection",
		editGrants:"JiraShareableEntityEditGrantConnection"
	},
	JiraDateFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		field:"JiraDatePickerField"
	},
	JiraDatePickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		date:"Date",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraDateTimeFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		field:"JiraDateTimePickerField"
	},
	JiraDateTimePickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		dateTime:"DateTime",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraDefaultGrantTypeValue:{
		id:"ID",
		name:"String"
	},
	JiraDevInfoConfigError:{
		errorType:"JiraDevInfoConfigErrorType",
		dataProviderId:"String"
	},
	JiraDevOpsBranchDetails:{
		providerBranchId:"String",
		entityUrl:"URL",
		name:"String",
		scmRepository:"JiraScmRepository"
	},
	JiraDevOpsCommitDetails:{
		providerCommitId:"String",
		displayCommitId:"String",
		entityUrl:"URL",
		name:"String",
		created:"DateTime",
		author:"JiraDevOpsEntityAuthor",
		isMergeCommit:"Boolean",
		scmRepository:"JiraScmRepository"
	},
	JiraDevOpsEntityAuthor:{
		avatar:"JiraAvatar",
		name:"String"
	},
	JiraDevOpsIssuePanel:{
		panelState:"JiraDevOpsIssuePanelState",
		devOpsIssuePanelBanner:"JiraDevOpsIssuePanelBannerType",
		devSummaryResult:"JiraIssueDevSummaryResult",
		hasBranchCapabilities:"Boolean"
	},
	JiraDevOpsMutation:{
		optoutOfDevOpsIssuePanelNotConnectedState:"JiraOptoutDevOpsIssuePanelNotConnectedPayload",
		dismissDevOpsIssuePanelBanner:"JiraDismissDevOpsIssuePanelBannerPayload"
	},
	JiraDevOpsProvider:{
		"...on JiraBitbucketDevOpsProvider": "JiraBitbucketDevOpsProvider",
		"...on JiraClassicConnectDevOpsProvider": "JiraClassicConnectDevOpsProvider",
		"...on JiraOAuthDevOpsProvider": "JiraOAuthDevOpsProvider",
		displayName:"String",
		webUrl:"URL",
		capabilities:"JiraDevOpsCapability"
	},
	JiraDevOpsPullRequestDetails:{
		providerPullRequestId:"String",
		entityUrl:"URL",
		name:"String",
		branchName:"String",
		lastUpdated:"DateTime",
		status:"JiraPullRequestState",
		author:"JiraDevOpsEntityAuthor",
		reviewers:"JiraPullRequestReviewer"
	},
	JiraDevOpsQuery:{
		devOpsIssuePanel:"JiraDevOpsIssuePanel"
	},
	JiraDevSummaryField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		devSummaryCache:"JiraIssueDevSummaryResult"
	},
	JiraDismissDevOpsIssuePanelBannerPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraEpic:{
		id:"ID",
		issueId:"String",
		name:"String",
		key:"String",
		summary:"String",
		color:"String",
		done:"Boolean"
	},
	JiraEpicConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraEpicEdge"
	},
	JiraEpicEdge:{
		node:"JiraEpic",
		cursor:"String"
	},
	JiraEpicLinkField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		epic:"JiraEpic",
		epics:"JiraEpicConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraEstimate:{
		timeInSeconds:"Long"
	},
	JiraFavourite:{
		"...on JiraProject":"JiraProject"
	},
	JiraFavouriteConnection:{
		edges:"JiraFavouriteEdge",
		pageInfo:"PageInfo"
	},
	JiraFavouriteEdge:{
		node:"JiraFavourite",
		cursor:"String"
	},
	JiraFieldConfig:{
		isRequired:"Boolean",
		isEditable:"Boolean",
		nonEditableReason:"JiraFieldNonEditableReason"
	},
	JiraFieldNonEditableReason:{
		message:"String"
	},
	JiraFilter:{
		"...on JiraCustomFilter": "JiraCustomFilter",
		"...on JiraSystemFilter": "JiraSystemFilter",
		id:"ID",
		filterId:"String",
		jql:"String",
		name:"String",
		isFavourite:"Boolean"
	},
	JiraFilterConnection:{
		pageInfo:"PageInfo",
		edges:"JiraFilterEdge"
	},
	JiraFilterEdge:{
		node:"JiraFilter",
		cursor:"String"
	},
	JiraFilterEmailSubscription:{
		id:"ID",
		user:"User",
		group:"JiraGroup"
	},
	JiraFilterEmailSubscriptionConnection:{
		pageInfo:"PageInfo",
		edges:"JiraFilterEmailSubscriptionEdge"
	},
	JiraFilterEmailSubscriptionEdge:{
		node:"JiraFilterEmailSubscription",
		cursor:"String"
	},
	JiraFilterMutation:{
		createJiraCustomFilter:"JiraCreateCustomFilterPayload",
		updateJiraCustomFilterDetails:"JiraUpdateCustomFilterPayload",
		updateJiraCustomFilterJql:"JiraUpdateCustomFilterJqlPayload"
	},
	JiraFilterNameMutationErrorExtension:{
		statusCode:"Int",
		errorType:"String"
	},
	JiraFilterResult:{
		"...on JiraCustomFilter":"JiraCustomFilter",
		"...on JiraSystemFilter":"JiraSystemFilter",
		"...on QueryError":"QueryError"
	},
	JiraFlag:{
		isFlagged:"Boolean"
	},
	JiraFlagField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		flag:"JiraFlag",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraForgeDatetimeField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		dateTime:"DateTime",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeGroupField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedGroup:"JiraGroup",
		groups:"JiraGroupConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeGroupsField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedGroups:"JiraGroup",
		selectedGroupsConnection:"JiraGroupConnection",
		groups:"JiraGroupConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeNumberField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		number:"Float",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeObjectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		object:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeStringField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		text:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeStringsField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedLabels:"JiraLabel",
		selectedLabelsConnection:"JiraLabelConnection",
		labels:"JiraLabelConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeUserField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		user:"User",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraForgeUsersField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedUsers:"User",
		selectedUsersConnection:"JiraUserConnection",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		renderer:"String"
	},
	JiraGlobalTimeTrackingSettings:{
		isTimeTrackingEnabled:"Boolean",
		daysPerWeek:"Float",
		hoursPerDay:"Float",
		defaultUnit:"JiraTimeUnit",
		format:"JiraTimeFormat"
	},
	JiraGrantTypeKey:{
		key:"JiraGrantTypeKeyEnum",
		name:"String"
	},
	JiraGrantTypeValue:{
		"...on JiraDefaultGrantTypeValue":"JiraDefaultGrantTypeValue",
		"...on JiraUserGrantTypeValue":"JiraUserGrantTypeValue",
		"...on JiraProjectRoleGrantTypeValue":"JiraProjectRoleGrantTypeValue",
		"...on JiraGroupGrantTypeValue":"JiraGroupGrantTypeValue",
		"...on JiraIssueFieldGrantTypeValue":"JiraIssueFieldGrantTypeValue"
	},
	JiraGrantTypeValueConnection:{
		edges:"JiraGrantTypeValueEdge",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	JiraGrantTypeValueEdge:{
		node:"JiraGrantTypeValue",
		cursor:"String"
	},
	JiraGroup:{
		id:"ID",
		groupId:"String",
		name:"String"
	},
	JiraGroupConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraGroupEdge"
	},
	JiraGroupEdge:{
		node:"JiraGroup",
		cursor:"String"
	},
	JiraGroupGrantTypeValue:{
		id:"ID",
		group:"JiraGroup"
	},
	JiraHierarchyConfigError:{
		code:"String",
		message:"String"
	},
	JiraHierarchyConfigTask:{
		taskProgress:"JiraLongRunningTaskProgress",
		issueHierarchyConfig:"JiraIssueHierarchyConfigData",
		errors:"JiraHierarchyConfigError"
	},
	JiraInvalidJqlError:{
		messages:"String"
	},
	JiraInvalidSyntaxError:{
		message:"String",
		errorType:"JiraJqlSyntaxError",
		line:"Int",
		column:"Int"
	},
	JiraIssue:{
		id:"ID",
		issueId:"String",
		key:"String",
		webUrl:"URL",
		lifecycleState:"JiraIssueLifecycleState",
		fields:"JiraIssueFieldConnection",
		fieldsById:"JiraIssueFieldConnection",
		comments:"JiraCommentConnection",
		worklogs:"JiraWorkLogConnection",
		attachments:"JiraAttachmentConnection",
		fieldSets:"JiraIssueFieldSetConnection",
		fieldSetsForIssueSearchView:"JiraIssueFieldSetConnection",
		fieldSetsById:"JiraIssueFieldSetConnection",
		issueLinks:"JiraIssueLinkConnection",
		childIssues:"JiraChildIssues",
		devSummaryCache:"JiraIssueDevSummaryResult",
		deploymentsSummary:"DevOpsSummarisedDeployments",
		devInfoDetails:"JiraIssueDevInfoDetails",
		devOpsSummarisedEntities:"DevOpsSummarisedEntities",
		hierarchyLevelBelow:"JiraIssueTypeHierarchyLevel",
		hierarchyLevelAbove:"JiraIssueTypeHierarchyLevel",
		issueTypesForHierarchyBelow:"JiraIssueTypeConnection",
		issueTypesForHierarchyAbove:"JiraIssueTypeConnection",
		issueTypesForHierarchySame:"JiraIssueTypeConnection",
		errorRetrievingData:"Boolean",
		storyPointsField:"JiraNumberField",
		storyPointEstimateField:"JiraNumberField",
		screenId:"Long"
	},
	JiraIssueAndProject:{
		issueId:"ID",
		projectId:"ID"
	},
	JiraIssueBranchDevSummary:{
		count:"Int",
		lastUpdated:"DateTime"
	},
	JiraIssueBranchDevSummaryContainer:{
		overall:"JiraIssueBranchDevSummary",
		summaryByProvider:"JiraIssueDevSummaryByProvider"
	},
	JiraIssueBranches:{
		details:"JiraDevOpsBranchDetails",
		configErrors:"JiraDevInfoConfigError"
	},
	JiraIssueBuildDevSummary:{
		count:"Int",
		lastUpdated:"DateTime",
		failedBuildCount:"Int",
		successfulBuildCount:"Int",
		unknownBuildCount:"Int"
	},
	JiraIssueBuildDevSummaryContainer:{
		overall:"JiraIssueBuildDevSummary",
		summaryByProvider:"JiraIssueDevSummaryByProvider"
	},
	JiraIssueCommitDevSummary:{
		count:"Int",
		lastUpdated:"DateTime"
	},
	JiraIssueCommitDevSummaryContainer:{
		overall:"JiraIssueCommitDevSummary",
		summaryByProvider:"JiraIssueDevSummaryByProvider"
	},
	JiraIssueCommits:{
		details:"JiraDevOpsCommitDetails",
		configErrors:"JiraDevInfoConfigError"
	},
	JiraIssueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		jql:"String",
		edges:"JiraIssueEdge",
		issueSearchError:"JiraIssueSearchError",
		totalIssueSearchResultCount:"Int",
		isCappingIssueSearchResult:"Boolean",
		issueNavigatorPageInfo:"JiraIssueNavigatorPageInfo",
		pageCursors:"JiraPageCursors"
	},
	JiraIssueDeploymentEnvironment:{
		title:"String",
		status:"JiraIssueDeploymentEnvironmentState"
	},
	JiraIssueDeploymentEnvironmentDevSummary:{
		count:"Int",
		lastUpdated:"DateTime",
		topEnvironments:"JiraIssueDeploymentEnvironment"
	},
	JiraIssueDeploymentEnvironmentDevSummaryContainer:{
		overall:"JiraIssueDeploymentEnvironmentDevSummary",
		summaryByProvider:"JiraIssueDevSummaryByProvider"
	},
	JiraIssueDevInfoDetails:{
		pullRequests:"JiraIssuePullRequests",
		branches:"JiraIssueBranches",
		commits:"JiraIssueCommits"
	},
	JiraIssueDevSummary:{
		branch:"JiraIssueBranchDevSummaryContainer",
		commit:"JiraIssueCommitDevSummaryContainer",
		pullrequest:"JiraIssuePullRequestDevSummaryContainer",
		build:"JiraIssueBuildDevSummaryContainer",
		review:"JiraIssueReviewDevSummaryContainer",
		deploymentEnvironments:"JiraIssueDeploymentEnvironmentDevSummaryContainer"
	},
	JiraIssueDevSummaryByProvider:{
		providerId:"String",
		name:"String",
		count:"Int"
	},
	JiraIssueDevSummaryError:{
		message:"String",
		instance:"JiraIssueDevSummaryErrorProviderInstance"
	},
	JiraIssueDevSummaryErrorProviderInstance:{
		name:"String",
		type:"String",
		baseUrl:"String"
	},
	JiraIssueDevSummaryResult:{
		devSummary:"JiraIssueDevSummary",
		errors:"JiraIssueDevSummaryError",
		configErrors:"JiraIssueDevSummaryError"
	},
	JiraIssueEdge:{
		node:"JiraIssue",
		cursor:"String"
	},
	JiraIssueField:{
		"...on JiraAffectedServicesField": "JiraAffectedServicesField",
		"...on JiraAssetField": "JiraAssetField",
		"...on JiraAtlassianTeamField": "JiraAtlassianTeamField",
		"...on JiraAttachmentsField": "JiraAttachmentsField",
		"...on JiraBooleanField": "JiraBooleanField",
		"...on JiraCMDBField": "JiraCMDBField",
		"...on JiraCascadingSelectField": "JiraCascadingSelectField",
		"...on JiraCheckboxesField": "JiraCheckboxesField",
		"...on JiraColorField": "JiraColorField",
		"...on JiraComponentsField": "JiraComponentsField",
		"...on JiraConnectMultipleSelectField": "JiraConnectMultipleSelectField",
		"...on JiraConnectNumberField": "JiraConnectNumberField",
		"...on JiraConnectReadOnlyField": "JiraConnectReadOnlyField",
		"...on JiraConnectRichTextField": "JiraConnectRichTextField",
		"...on JiraConnectSingleSelectField": "JiraConnectSingleSelectField",
		"...on JiraConnectTextField": "JiraConnectTextField",
		"...on JiraDatePickerField": "JiraDatePickerField",
		"...on JiraDateTimePickerField": "JiraDateTimePickerField",
		"...on JiraDevSummaryField": "JiraDevSummaryField",
		"...on JiraEpicLinkField": "JiraEpicLinkField",
		"...on JiraFlagField": "JiraFlagField",
		"...on JiraForgeDatetimeField": "JiraForgeDatetimeField",
		"...on JiraForgeGroupField": "JiraForgeGroupField",
		"...on JiraForgeGroupsField": "JiraForgeGroupsField",
		"...on JiraForgeNumberField": "JiraForgeNumberField",
		"...on JiraForgeObjectField": "JiraForgeObjectField",
		"...on JiraForgeStringField": "JiraForgeStringField",
		"...on JiraForgeStringsField": "JiraForgeStringsField",
		"...on JiraForgeUserField": "JiraForgeUserField",
		"...on JiraForgeUsersField": "JiraForgeUsersField",
		"...on JiraIssueLinkField": "JiraIssueLinkField",
		"...on JiraIssueRestrictionField": "JiraIssueRestrictionField",
		"...on JiraIssueTypeField": "JiraIssueTypeField",
		"...on JiraLabelsField": "JiraLabelsField",
		"...on JiraMultipleGroupPickerField": "JiraMultipleGroupPickerField",
		"...on JiraMultipleSelectField": "JiraMultipleSelectField",
		"...on JiraMultipleSelectUserPickerField": "JiraMultipleSelectUserPickerField",
		"...on JiraMultipleVersionPickerField": "JiraMultipleVersionPickerField",
		"...on JiraNumberField": "JiraNumberField",
		"...on JiraOriginalTimeEstimateField": "JiraOriginalTimeEstimateField",
		"...on JiraParentIssueField": "JiraParentIssueField",
		"...on JiraPeopleField": "JiraPeopleField",
		"...on JiraPriorityField": "JiraPriorityField",
		"...on JiraProformaFormsField": "JiraProformaFormsField",
		"...on JiraProjectField": "JiraProjectField",
		"...on JiraRadioSelectField": "JiraRadioSelectField",
		"...on JiraResolutionField": "JiraResolutionField",
		"...on JiraRichTextField": "JiraRichTextField",
		"...on JiraSecurityLevelField": "JiraSecurityLevelField",
		"...on JiraServiceManagementApprovalField": "JiraServiceManagementApprovalField",
		"...on JiraServiceManagementDateTimeField": "JiraServiceManagementDateTimeField",
		"...on JiraServiceManagementIncidentLinkingField": "JiraServiceManagementIncidentLinkingField",
		"...on JiraServiceManagementMajorIncidentField": "JiraServiceManagementMajorIncidentField",
		"...on JiraServiceManagementMultipleSelectUserPickerField": "JiraServiceManagementMultipleSelectUserPickerField",
		"...on JiraServiceManagementOrganizationField": "JiraServiceManagementOrganizationField",
		"...on JiraServiceManagementPeopleField": "JiraServiceManagementPeopleField",
		"...on JiraServiceManagementRequestFeedbackField": "JiraServiceManagementRequestFeedbackField",
		"...on JiraServiceManagementRequestLanguageField": "JiraServiceManagementRequestLanguageField",
		"...on JiraServiceManagementRequestTypeField": "JiraServiceManagementRequestTypeField",
		"...on JiraServiceManagementRespondersField": "JiraServiceManagementRespondersField",
		"...on JiraSingleGroupPickerField": "JiraSingleGroupPickerField",
		"...on JiraSingleLineTextField": "JiraSingleLineTextField",
		"...on JiraSingleSelectField": "JiraSingleSelectField",
		"...on JiraSingleSelectUserPickerField": "JiraSingleSelectUserPickerField",
		"...on JiraSingleVersionPickerField": "JiraSingleVersionPickerField",
		"...on JiraSprintField": "JiraSprintField",
		"...on JiraStatusCategoryField": "JiraStatusCategoryField",
		"...on JiraStatusField": "JiraStatusField",
		"...on JiraSubtasksField": "JiraSubtasksField",
		"...on JiraTeamField": "JiraTeamField",
		"...on JiraTeamViewField": "JiraTeamViewField",
		"...on JiraTimeTrackingField": "JiraTimeTrackingField",
		"...on JiraUrlField": "JiraUrlField",
		"...on JiraVotesField": "JiraVotesField",
		"...on JiraWatchesField": "JiraWatchesField",
		"...on JiraWorkCategoryField": "JiraWorkCategoryField",
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String"
	},
	JiraIssueFieldConfiguration:{
		"...on JiraAffectedServicesField": "JiraAffectedServicesField",
		"...on JiraAssetField": "JiraAssetField",
		"...on JiraAtlassianTeamField": "JiraAtlassianTeamField",
		"...on JiraAttachmentsField": "JiraAttachmentsField",
		"...on JiraBooleanField": "JiraBooleanField",
		"...on JiraCMDBField": "JiraCMDBField",
		"...on JiraCascadingSelectField": "JiraCascadingSelectField",
		"...on JiraCheckboxesField": "JiraCheckboxesField",
		"...on JiraColorField": "JiraColorField",
		"...on JiraComponentsField": "JiraComponentsField",
		"...on JiraConnectMultipleSelectField": "JiraConnectMultipleSelectField",
		"...on JiraConnectNumberField": "JiraConnectNumberField",
		"...on JiraConnectReadOnlyField": "JiraConnectReadOnlyField",
		"...on JiraConnectRichTextField": "JiraConnectRichTextField",
		"...on JiraConnectSingleSelectField": "JiraConnectSingleSelectField",
		"...on JiraConnectTextField": "JiraConnectTextField",
		"...on JiraDatePickerField": "JiraDatePickerField",
		"...on JiraDateTimePickerField": "JiraDateTimePickerField",
		"...on JiraEpicLinkField": "JiraEpicLinkField",
		"...on JiraFlagField": "JiraFlagField",
		"...on JiraForgeDatetimeField": "JiraForgeDatetimeField",
		"...on JiraForgeGroupField": "JiraForgeGroupField",
		"...on JiraForgeGroupsField": "JiraForgeGroupsField",
		"...on JiraForgeNumberField": "JiraForgeNumberField",
		"...on JiraForgeObjectField": "JiraForgeObjectField",
		"...on JiraForgeStringField": "JiraForgeStringField",
		"...on JiraForgeStringsField": "JiraForgeStringsField",
		"...on JiraForgeUserField": "JiraForgeUserField",
		"...on JiraForgeUsersField": "JiraForgeUsersField",
		"...on JiraIssueLinkField": "JiraIssueLinkField",
		"...on JiraIssueRestrictionField": "JiraIssueRestrictionField",
		"...on JiraIssueTypeField": "JiraIssueTypeField",
		"...on JiraLabelsField": "JiraLabelsField",
		"...on JiraMultipleGroupPickerField": "JiraMultipleGroupPickerField",
		"...on JiraMultipleSelectField": "JiraMultipleSelectField",
		"...on JiraMultipleSelectUserPickerField": "JiraMultipleSelectUserPickerField",
		"...on JiraMultipleVersionPickerField": "JiraMultipleVersionPickerField",
		"...on JiraNumberField": "JiraNumberField",
		"...on JiraOriginalTimeEstimateField": "JiraOriginalTimeEstimateField",
		"...on JiraParentIssueField": "JiraParentIssueField",
		"...on JiraPeopleField": "JiraPeopleField",
		"...on JiraPriorityField": "JiraPriorityField",
		"...on JiraProformaFormsField": "JiraProformaFormsField",
		"...on JiraProjectField": "JiraProjectField",
		"...on JiraRadioSelectField": "JiraRadioSelectField",
		"...on JiraResolutionField": "JiraResolutionField",
		"...on JiraRichTextField": "JiraRichTextField",
		"...on JiraSecurityLevelField": "JiraSecurityLevelField",
		"...on JiraServiceManagementApprovalField": "JiraServiceManagementApprovalField",
		"...on JiraServiceManagementDateTimeField": "JiraServiceManagementDateTimeField",
		"...on JiraServiceManagementIncidentLinkingField": "JiraServiceManagementIncidentLinkingField",
		"...on JiraServiceManagementMajorIncidentField": "JiraServiceManagementMajorIncidentField",
		"...on JiraServiceManagementMultipleSelectUserPickerField": "JiraServiceManagementMultipleSelectUserPickerField",
		"...on JiraServiceManagementOrganizationField": "JiraServiceManagementOrganizationField",
		"...on JiraServiceManagementPeopleField": "JiraServiceManagementPeopleField",
		"...on JiraServiceManagementRequestFeedbackField": "JiraServiceManagementRequestFeedbackField",
		"...on JiraServiceManagementRequestLanguageField": "JiraServiceManagementRequestLanguageField",
		"...on JiraServiceManagementRequestTypeField": "JiraServiceManagementRequestTypeField",
		"...on JiraServiceManagementRespondersField": "JiraServiceManagementRespondersField",
		"...on JiraSingleGroupPickerField": "JiraSingleGroupPickerField",
		"...on JiraSingleLineTextField": "JiraSingleLineTextField",
		"...on JiraSingleSelectField": "JiraSingleSelectField",
		"...on JiraSingleSelectUserPickerField": "JiraSingleSelectUserPickerField",
		"...on JiraSingleVersionPickerField": "JiraSingleVersionPickerField",
		"...on JiraSprintField": "JiraSprintField",
		"...on JiraStatusCategoryField": "JiraStatusCategoryField",
		"...on JiraStatusField": "JiraStatusField",
		"...on JiraSubtasksField": "JiraSubtasksField",
		"...on JiraTeamField": "JiraTeamField",
		"...on JiraTeamViewField": "JiraTeamViewField",
		"...on JiraTimeTrackingField": "JiraTimeTrackingField",
		"...on JiraUrlField": "JiraUrlField",
		"...on JiraVotesField": "JiraVotesField",
		"...on JiraWatchesField": "JiraWatchesField",
		"...on JiraWorkCategoryField": "JiraWorkCategoryField",
		fieldConfig:"JiraFieldConfig"
	},
	JiraIssueFieldConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraIssueFieldEdge"
	},
	JiraIssueFieldConnectionResult:{
		"...on JiraIssueFieldConnection":"JiraIssueFieldConnection",
		"...on QueryError":"QueryError"
	},
	JiraIssueFieldEdge:{
		node:"JiraIssueField",
		cursor:"String"
	},
	JiraIssueFieldGrantTypeValue:{
		id:"ID",
		field:"JiraIssueField"
	},
	JiraIssueFieldSet:{
		fieldSetId:"String",
		type:"String",
		fields:"JiraIssueFieldConnection"
	},
	JiraIssueFieldSetConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraIssueFieldSetEdge"
	},
	JiraIssueFieldSetEdge:{
		node:"JiraIssueFieldSet",
		cursor:"String"
	},
	JiraIssueHierarchyConfigData:{
		hierarchyLevel:"JiraIssueTypeHierarchyLevel",
		cmpIssueTypes:"JiraIssueTypeConnection"
	},
	JiraIssueHierarchyConfigurationMutationResult:{
		updateInitiated:"Boolean",
		updateIssuesCount:"Long",
		success:"Boolean",
		errors:"JiraHierarchyConfigError"
	},
	JiraIssueHierarchyConfigurationQuery:{
		data:"JiraIssueHierarchyConfigData",
		success:"Boolean",
		errors:"JiraHierarchyConfigError"
	},
	JiraIssueHierarchyLimits:{
		maxLevels:"Int",
		nameLength:"Int"
	},
	JiraIssueItemContainer:{
		containerType:"JiraIssueItemSystemContainerType",
		items:"JiraIssueItemContainerItemConnection"
	},
	JiraIssueItemContainerItem:{
		"...on JiraIssueItemFieldItem":"JiraIssueItemFieldItem",
		"...on JiraIssueItemPanelItem":"JiraIssueItemPanelItem",
		"...on JiraIssueItemGroupContainer":"JiraIssueItemGroupContainer",
		"...on JiraIssueItemTabContainer":"JiraIssueItemTabContainer"
	},
	JiraIssueItemContainerItemConnection:{
		pageInfo:"PageInfo",
		nodes:"JiraIssueItemContainerItem",
		edges:"JiraIssueItemContainerItemEdge",
		totalCount:"Int"
	},
	JiraIssueItemContainerItemEdge:{
		node:"JiraIssueItemContainerItem",
		cursor:"String"
	},
	JiraIssueItemContainers:{
		containers:"JiraIssueItemContainer",
		defaultItemLocations:"JiraIssueItemLayoutDefaultItemLocation"
	},
	JiraIssueItemContainersResult:{
		"...on JiraIssueItemContainers":"JiraIssueItemContainers",
		"...on QueryError":"QueryError"
	},
	JiraIssueItemFieldItem:{
		fieldItemId:"String",
		containerPosition:"Int"
	},
	JiraIssueItemGroupContainer:{
		groupContainerId:"String",
		name:"String",
		minimised:"Boolean",
		items:"JiraIssueItemGroupContainerItemConnection"
	},
	JiraIssueItemGroupContainerItem:{
		"...on JiraIssueItemFieldItem":"JiraIssueItemFieldItem",
		"...on JiraIssueItemPanelItem":"JiraIssueItemPanelItem"
	},
	JiraIssueItemGroupContainerItemConnection:{
		pageInfo:"PageInfo",
		nodes:"JiraIssueItemGroupContainerItem",
		edges:"JiraIssueItemGroupContainerItemEdge",
		totalCount:"Int"
	},
	JiraIssueItemGroupContainerItemEdge:{
		node:"JiraIssueItemGroupContainerItem",
		cursor:"String"
	},
	JiraIssueItemLayoutDefaultItemLocation:{
		containerLocation:"String",
		itemLocationRuleType:"JiraIssueItemLayoutItemLocationRuleType"
	},
	JiraIssueItemPanelItem:{
		panelItemId:"String"
	},
	JiraIssueItemTabContainer:{
		tabContainerId:"String",
		name:"String",
		items:"JiraIssueItemTabContainerItemConnection"
	},
	JiraIssueItemTabContainerItem:{
		"...on JiraIssueItemFieldItem":"JiraIssueItemFieldItem"
	},
	JiraIssueItemTabContainerItemConnection:{
		pageInfo:"PageInfo",
		nodes:"JiraIssueItemTabContainerItem",
		edges:"JiraIssueItemTabContainerItemEdge",
		totalCount:"Int"
	},
	JiraIssueItemTabContainerItemEdge:{
		node:"JiraIssueItemTabContainerItem",
		cursor:"String"
	},
	JiraIssueLink:{
		id:"ID",
		issueLinkId:"ID",
		relatedBy:"JiraIssueLinkTypeRelation",
		issue:"JiraIssue"
	},
	JiraIssueLinkConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraIssueLinkEdge"
	},
	JiraIssueLinkEdge:{
		node:"JiraIssueLink",
		cursor:"String"
	},
	JiraIssueLinkField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		issueLinks:"JiraIssueLink",
		issueLinkConnection:"JiraIssueLinkConnection",
		issueLinkTypeRelations:"JiraIssueLinkTypeRelationConnection",
		issues:"JiraIssueConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraIssueLinkTypeRelation:{
		id:"ID",
		relationName:"String",
		linkTypeId:"String",
		linkTypeName:"String",
		direction:"JiraIssueLinkDirection"
	},
	JiraIssueLinkTypeRelationConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraIssueLinkTypeRelationEdge"
	},
	JiraIssueLinkTypeRelationEdge:{
		node:"JiraIssueLinkTypeRelation",
		cursor:"String"
	},
	JiraIssueNavigatorPageInfo:{
		firstIssuePosition:"Int",
		lastIssuePosition:"Int",
		firstIssueKeyFromNextPage:"String",
		lastIssueKeyFromPreviousPage:"String"
	},
	JiraIssuePullRequestDevSummary:{
		count:"Int",
		lastUpdated:"DateTime",
		state:"JiraPullRequestState",
		stateCount:"Int",
		open:"Boolean"
	},
	JiraIssuePullRequestDevSummaryContainer:{
		overall:"JiraIssuePullRequestDevSummary",
		summaryByProvider:"JiraIssueDevSummaryByProvider"
	},
	JiraIssuePullRequests:{
		details:"JiraDevOpsPullRequestDetails",
		configErrors:"JiraDevInfoConfigError"
	},
	JiraIssueRestrictionField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedRoles:"JiraRole",
		selectedRolesConnection:"JiraRoleConnection",
		roles:"JiraRoleConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraIssueReviewDevSummary:{
		count:"Int",
		lastUpdated:"DateTime",
		state:"JiraReviewState",
		stateCount:"Int"
	},
	JiraIssueReviewDevSummaryContainer:{
		overall:"JiraIssueReviewDevSummary",
		summaryByProvider:"JiraIssueDevSummaryByProvider"
	},
	JiraIssueSearchByFilter:{
		content:"JiraIssueSearchContextualContent",
		contentByFieldSetIds:"JiraIssueSearchContextlessContent",
		filter:"JiraFilter"
	},
	JiraIssueSearchByFilterResult:{
		"...on JiraIssueSearchByFilter":"JiraIssueSearchByFilter",
		"...on QueryError":"QueryError"
	},
	JiraIssueSearchByHydration:{
		content:"JiraIssueSearchContextualContent",
		contentByFieldSetIds:"JiraIssueSearchContextlessContent"
	},
	JiraIssueSearchByJql:{
		content:"JiraIssueSearchContextualContent",
		contentByFieldSetIds:"JiraIssueSearchContextlessContent",
		jql:"String"
	},
	JiraIssueSearchByJqlResult:{
		"...on JiraIssueSearchByJql":"JiraIssueSearchByJql",
		"...on QueryError":"QueryError"
	},
	JiraIssueSearchContextlessContent:{
		issues:"JiraIssueConnection"
	},
	JiraIssueSearchContextualContent:{
		view:"JiraIssueSearchView",
		issues:"JiraIssueConnection"
	},
	JiraIssueSearchError:{
		"...on JiraInvalidJqlError":"JiraInvalidJqlError",
		"...on JiraInvalidSyntaxError":"JiraInvalidSyntaxError",
		"...on JiraServerError":"JiraServerError"
	},
	JiraIssueSearchFieldSet:{
		fieldSetId:"String",
		displayName:"String",
		type:"String",
		jqlTerm:"String",
		isSortable:"Boolean",
		isSelected:"Boolean"
	},
	JiraIssueSearchFieldSetConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraIssueSearchFieldSetEdge",
		isWithholdingUnsupportedSelectedFields:"Boolean"
	},
	JiraIssueSearchFieldSetEdge:{
		node:"JiraIssueSearchFieldSet",
		cursor:"String"
	},
	JiraIssueSearchResult:{
		"...on JiraIssueSearchByFilter": "JiraIssueSearchByFilter",
		"...on JiraIssueSearchByHydration": "JiraIssueSearchByHydration",
		"...on JiraIssueSearchByJql": "JiraIssueSearchByJql",
		content:"JiraIssueSearchContextualContent",
		contentByFieldSetIds:"JiraIssueSearchContextlessContent"
	},
	JiraIssueSearchResultContent:{
		"...on JiraIssueSearchContextlessContent": "JiraIssueSearchContextlessContent",
		"...on JiraIssueSearchContextualContent": "JiraIssueSearchContextualContent",
		issues:"JiraIssueConnection"
	},
	JiraIssueSearchView:{
		id:"ID",
		namespace:"String",
		viewId:"String",
		fieldSets:"JiraIssueSearchFieldSetConnection"
	},
	JiraIssueSearchViewPayload:{
		success:"Boolean",
		errors:"MutationError",
		view:"JiraIssueSearchView"
	},
	JiraIssueType:{
		id:"ID",
		issueTypeId:"String",
		name:"String",
		description:"String",
		avatar:"JiraAvatar",
		hierarchy:"JiraIssueTypeHierarchyLevel"
	},
	JiraIssueTypeConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraIssueTypeEdge"
	},
	JiraIssueTypeEdge:{
		node:"JiraIssueType",
		cursor:"String"
	},
	JiraIssueTypeField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		issueType:"JiraIssueType",
		issueTypes:"JiraIssueTypeConnection",
		fieldConfig:"JiraFieldConfig"
	},
	JiraIssueTypeHierarchyLevel:{
		level:"Int",
		name:"String"
	},
	JiraJqlBuilder:{
		functions:"JiraJqlFunction",
		lastUsedMode:"JiraJqlBuilderMode",
		hydrateJqlQuery:"JiraJqlHydratedQueryResult",
		hydrateJqlQueryForFilter:"JiraJqlHydratedQueryResult",
		fields:"JiraJqlFieldConnectionResult",
		recentFields:"JiraJqlFieldConnectionResult",
		fieldValues:"JiraJqlFieldValueConnection",
		recentlyUsedUsers:"JiraJqlUserFieldValueConnection",
		suggestedGroups:"JiraJqlGroupFieldValueConnection",
		recentlyUsedProjects:"JiraJqlProjectFieldValueConnection",
		recentlyUsedSprints:"JiraJqlSprintFieldValueConnection",
		issueTypes:"JiraJqlIssueTypes",
		cascadingSelectOptions:"JiraJqlOptionFieldValueConnection",
		versions:"JiraJqlVersions"
	},
	JiraJqlCascadingOptionFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		parentOption:"JiraJqlOptionFieldValue"
	},
	JiraJqlComponentFieldValue:{
		jqlTerm:"String",
		displayName:"String"
	},
	JiraJqlField:{
		jqlTerm:"ID",
		displayName:"String",
		dataTypes:"String",
		allowedClauseTypes:"JiraJqlClauseType",
		operators:"JiraJqlOperator",
		searchTemplate:"JiraJqlSearchTemplate",
		autoCompleteTemplate:"JiraJqlAutocompleteType",
		jqlFieldType:"JiraJqlFieldType",
		shouldShowInContext:"Boolean"
	},
	JiraJqlFieldConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlFieldEdge"
	},
	JiraJqlFieldConnectionResult:{
		"...on JiraJqlFieldConnection":"JiraJqlFieldConnection",
		"...on QueryError":"QueryError"
	},
	JiraJqlFieldEdge:{
		node:"JiraJqlField",
		cursor:"String"
	},
	JiraJqlFieldType:{
		jqlTerm:"String",
		displayName:"String"
	},
	JiraJqlFieldValue:{
		"...on JiraJqlCascadingOptionFieldValue": "JiraJqlCascadingOptionFieldValue",
		"...on JiraJqlComponentFieldValue": "JiraJqlComponentFieldValue",
		"...on JiraJqlGroupFieldValue": "JiraJqlGroupFieldValue",
		"...on JiraJqlIssueFieldValue": "JiraJqlIssueFieldValue",
		"...on JiraJqlIssueTypeFieldValue": "JiraJqlIssueTypeFieldValue",
		"...on JiraJqlLabelFieldValue": "JiraJqlLabelFieldValue",
		"...on JiraJqlOptionFieldValue": "JiraJqlOptionFieldValue",
		"...on JiraJqlPriorityFieldValue": "JiraJqlPriorityFieldValue",
		"...on JiraJqlProjectFieldValue": "JiraJqlProjectFieldValue",
		"...on JiraJqlResolutionFieldValue": "JiraJqlResolutionFieldValue",
		"...on JiraJqlSprintFieldValue": "JiraJqlSprintFieldValue",
		"...on JiraJqlStatusCategoryFieldValue": "JiraJqlStatusCategoryFieldValue",
		"...on JiraJqlStatusFieldValue": "JiraJqlStatusFieldValue",
		"...on JiraJqlUserFieldValue": "JiraJqlUserFieldValue",
		"...on JiraJqlVersionFieldValue": "JiraJqlVersionFieldValue",
		jqlTerm:"String",
		displayName:"String"
	},
	JiraJqlFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlFieldValueEdge"
	},
	JiraJqlFieldValueEdge:{
		node:"JiraJqlFieldValue",
		cursor:"String"
	},
	JiraJqlFunction:{
		displayName:"String",
		value:"String",
		isList:"Boolean",
		dataTypes:"String"
	},
	JiraJqlGroupFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		group:"JiraGroup"
	},
	JiraJqlGroupFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlGroupFieldValueEdge"
	},
	JiraJqlGroupFieldValueEdge:{
		node:"JiraJqlGroupFieldValue",
		cursor:"String"
	},
	JiraJqlHydratedQuery:{
		jql:"String",
		fields:"JiraJqlQueryHydratedFieldResult"
	},
	JiraJqlHydratedQueryResult:{
		"...on JiraJqlHydratedQuery":"JiraJqlHydratedQuery",
		"...on QueryError":"QueryError"
	},
	JiraJqlIssueFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		issue:"JiraIssue"
	},
	JiraJqlIssueTypeFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		issueTypes:"JiraIssueType"
	},
	JiraJqlIssueTypeFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlIssueTypeFieldValueEdge"
	},
	JiraJqlIssueTypeFieldValueEdge:{
		node:"JiraJqlIssueTypeFieldValue",
		cursor:"String"
	},
	JiraJqlIssueTypes:{
		aboveBaseLevel:"JiraJqlIssueTypeFieldValueConnection",
		baseLevel:"JiraJqlIssueTypeFieldValueConnection",
		belowBaseLevel:"JiraJqlIssueTypeFieldValueConnection"
	},
	JiraJqlLabelFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		label:"JiraLabel"
	},
	JiraJqlOptionFieldValue:{
		jqlTerm:"String",
		displayName:"String"
	},
	JiraJqlOptionFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlOptionFieldValueEdge"
	},
	JiraJqlOptionFieldValueEdge:{
		node:"JiraJqlOptionFieldValue",
		cursor:"String"
	},
	JiraJqlPriorityFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		priority:"JiraPriority"
	},
	JiraJqlProjectFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		project:"JiraProject"
	},
	JiraJqlProjectFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlProjectFieldValueEdge"
	},
	JiraJqlProjectFieldValueEdge:{
		node:"JiraJqlProjectFieldValue",
		cursor:"String"
	},
	JiraJqlQueryHydratedError:{
		jqlTerm:"String",
		error:"QueryError"
	},
	JiraJqlQueryHydratedField:{
		jqlTerm:"String",
		field:"JiraJqlField",
		values:"JiraJqlQueryHydratedValueResult"
	},
	JiraJqlQueryHydratedFieldResult:{
		"...on JiraJqlQueryHydratedField":"JiraJqlQueryHydratedField",
		"...on JiraJqlQueryHydratedError":"JiraJqlQueryHydratedError"
	},
	JiraJqlQueryHydratedValue:{
		jqlTerm:"String",
		values:"JiraJqlFieldValue"
	},
	JiraJqlQueryHydratedValueResult:{
		"...on JiraJqlQueryHydratedValue":"JiraJqlQueryHydratedValue",
		"...on JiraJqlQueryHydratedError":"JiraJqlQueryHydratedError"
	},
	JiraJqlResolutionFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		resolution:"JiraResolution"
	},
	JiraJqlSearchTemplate:{
		key:"String"
	},
	JiraJqlSprintFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		sprint:"JiraSprint"
	},
	JiraJqlSprintFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlSprintFieldValueEdge"
	},
	JiraJqlSprintFieldValueEdge:{
		node:"JiraJqlSprintFieldValue",
		cursor:"String"
	},
	JiraJqlStatusCategoryFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		statusCategory:"JiraStatusCategory"
	},
	JiraJqlStatusFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		statusCategory:"JiraStatusCategory"
	},
	JiraJqlUserFieldValue:{
		jqlTerm:"String",
		displayName:"String",
		user:"User"
	},
	JiraJqlUserFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlUserFieldValueEdge"
	},
	JiraJqlUserFieldValueEdge:{
		node:"JiraJqlUserFieldValue",
		cursor:"String"
	},
	JiraJqlVersionFieldValue:{
		jqlTerm:"String",
		displayName:"String"
	},
	JiraJqlVersionFieldValueConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraJqlVersionFieldValueEdge"
	},
	JiraJqlVersionFieldValueEdge:{
		node:"JiraJqlVersionFieldValue",
		cursor:"String"
	},
	JiraJqlVersions:{
		released:"JiraJqlVersionFieldValueConnection",
		unreleased:"JiraJqlVersionFieldValueConnection",
		archived:"JiraJqlVersionFieldValueConnection"
	},
	JiraLabel:{
		labelId:"String",
		name:"String"
	},
	JiraLabelConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraLabelEdge"
	},
	JiraLabelEdge:{
		node:"JiraLabel",
		cursor:"String"
	},
	JiraLabelsField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedLabels:"JiraLabel",
		selectedLabelsConnection:"JiraLabelConnection",
		labels:"JiraLabelConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraLabelsFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		field:"JiraLabelsField"
	},
	JiraLongRunningTaskProgress:{
		description:"String",
		message:"String",
		status:"JiraLongRunningTaskStatus",
		progress:"Long",
		startTime:"DateTime",
		result:"String"
	},
	JiraMediaContext:{
		uploadToken:"JiraMediaUploadTokenResult"
	},
	JiraMediaUploadToken:{
		endpointUrl:"URL",
		clientId:"String",
		targetCollection:"String",
		token:"String",
		tokenDurationInMin:"Int"
	},
	JiraMediaUploadTokenResult:{
		"...on JiraMediaUploadToken":"JiraMediaUploadToken",
		"...on QueryError":"QueryError"
	},
	JiraMoveIssuesToFixVersionPayload:{
		originalVersion:"JiraVersion",
		success:"Boolean",
		errors:"MutationError"
	},
	JiraMultipleGroupPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedGroups:"JiraGroup",
		selectedGroupsConnection:"JiraGroupConnection",
		groups:"JiraGroupConnection",
		fieldConfig:"JiraFieldConfig",
		searchUrl:"String",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraMultipleSelectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedFieldOptions:"JiraOption",
		selectedOptions:"JiraOptionConnection",
		fieldOptions:"JiraOptionConnection",
		fieldConfig:"JiraFieldConfig",
		searchUrl:"String",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraMultipleSelectUserPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedUsers:"User",
		selectedUsersConnection:"JiraUserConnection",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraMultipleVersionPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedVersions:"JiraVersion",
		selectedVersionsConnection:"JiraVersionConnection",
		versions:"JiraVersionConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraMutation:{
		updateReleaseNotesConfiguration:"JiraUpdateReleaseNotesConfigurationPayload",
		createReleaseNoteConfluencePage:"JiraCreateReleaseNoteConfluencePagePayload",
		addRelatedWorkToVersion:"JiraAddRelatedWorkToVersionPayload",
		removeRelatedWorkFromVersion:"JiraRemoveRelatedWorkFromVersionPayload",
		assignRelatedWorkToUser:"JiraAssignRelatedWorkPayload",
		jiraFilterMutation:"JiraFilterMutation",
		setApplicationProperties:"JiraSetApplicationPropertiesPayload",
		updateLabelsField:"JiraLabelsFieldPayload",
		updateDateField:"JiraDateFieldPayload",
		updateDateTimeField:"JiraDateTimeFieldPayload",
		updateNumberField:"JiraNumberFieldPayload",
		updateStoryPointEstimateField:"JiraStoryPointEstimateFieldPayload",
		updateSingleSelectField:"JiraSingleSelectFieldPayload",
		addPermissionSchemeGrants:"JiraPermissionSchemeAddGrantPayload",
		removePermissionSchemeGrants:"JiraPermissionSchemeRemoveGrantPayload",
		updateIssueHierarchyConfig:"JiraIssueHierarchyConfigurationMutationResult",
		addIssuesToFixVersion:"JiraAddIssuesToFixVersionPayload",
		moveIssuesToFixVersion:"JiraMoveIssuesToFixVersionPayload",
		removeIssuesFromFixVersion:"JiraRemoveIssuesFromFixVersionPayload",
		updateVersionWarningConfig:"JiraUpdateVersionWarningConfigPayload",
		updateVersionName:"JiraUpdateVersionPayload",
		updateVersionDescription:"JiraUpdateVersionPayload",
		updateVersionStartDate:"JiraUpdateVersionPayload",
		updateVersionReleaseDate:"JiraUpdateVersionPayload",
		replaceIssueSearchViewFieldSets:"JiraIssueSearchViewPayload",
		devOps:"JiraDevOpsMutation"
	},
	JiraNumberField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		number:"Float",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		isStoryPointField:"Boolean"
	},
	JiraNumberFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		field:"JiraNumberField"
	},
	JiraOAuthAppsApp:{
		id:"ID",
		name:"String",
		homeUrl:"String",
		logoUrl:"String",
		clientId:"String",
		secret:"String",
		buildsModule:"JiraOAuthAppsBuildsModule",
		featureFlagsModule:"JiraOAuthAppsFeatureFlagsModule",
		deploymentsModule:"JiraOAuthAppsDeploymentsModule",
		devInfoModule:"JiraOAuthAppsDevInfoModule",
		remoteLinksModule:"JiraOAuthAppsRemoteLinksModule"
	},
	JiraOAuthAppsApps:{
		apps:"JiraOAuthAppsApp"
	},
	JiraOAuthAppsBuildsModule:{
		isEnabled:"Boolean"
	},
	JiraOAuthAppsDeploymentsModule:{
		isEnabled:"Boolean",
		actions:"JiraOAuthAppsDeploymentsModuleActions"
	},
	JiraOAuthAppsDeploymentsModuleActions:{
		listDeployments:"JiraOAuthAppsUrlTemplate"
	},
	JiraOAuthAppsDevInfoModule:{
		isEnabled:"Boolean",
		actions:"JiraOAuthAppsDevInfoModuleActions"
	},
	JiraOAuthAppsDevInfoModuleActions:{
		createBranch:"JiraOAuthAppsUrlTemplate"
	},
	JiraOAuthAppsFeatureFlagsModule:{
		isEnabled:"Boolean",
		actions:"JiraOAuthAppsFeatureFlagsModuleActions"
	},
	JiraOAuthAppsFeatureFlagsModuleActions:{
		createFlag:"JiraOAuthAppsUrlTemplate",
		linkFlag:"JiraOAuthAppsUrlTemplate",
		listFlag:"JiraOAuthAppsUrlTemplate"
	},
	JiraOAuthAppsMutation:{
		createJiraOAuthApp:"JiraOAuthAppsPayload",
		updateJiraOAuthApp:"JiraOAuthAppsPayload",
		deleteJiraOAuthApp:"JiraOAuthAppsPayload"
	},
	JiraOAuthAppsPayload:{
		clientMutationId:"ID",
		app:"JiraOAuthAppsApp",
		success:"Boolean",
		errors:"MutationError"
	},
	JiraOAuthAppsRemoteLinksModule:{
		isEnabled:"Boolean",
		actions:"JiraOAuthAppsRemoteLinksModuleAction"
	},
	JiraOAuthAppsRemoteLinksModuleAction:{
		id:"String",
		label:"JiraOAuthAppsRemoteLinksModuleActionLabel",
		urlTemplate:"String"
	},
	JiraOAuthAppsRemoteLinksModuleActionLabel:{
		value:"String"
	},
	JiraOAuthAppsUrlTemplate:{
		urlTemplate:"String"
	},
	JiraOAuthDevOpsProvider:{
		displayName:"String",
		webUrl:"URL",
		capabilities:"JiraDevOpsCapability",
		iconUrl:"URL",
		oauthAppId:"ID",
		marketplaceAppKey:"String",
		marketplaceApp:"MarketplaceApp"
	},
	JiraOption:{
		id:"ID",
		optionId:"String",
		value:"String",
		isDisabled:"Boolean"
	},
	JiraOptionConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraOptionEdge"
	},
	JiraOptionEdge:{
		node:"JiraOption",
		cursor:"String"
	},
	JiraOptoutDevOpsIssuePanelNotConnectedPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraOriginalTimeEstimateField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		originalEstimate:"JiraEstimate",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraPageCursor:{
		cursor:"String",
		pageNumber:"Int",
		isCurrent:"Boolean"
	},
	JiraPageCursors:{
		first:"JiraPageCursor",
		around:"JiraPageCursor",
		last:"JiraPageCursor",
		previous:"JiraPageCursor"
	},
	JiraParentIssueField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		parentIssue:"JiraIssue",
		parentVisibility:"JiraParentVisibility",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraParentVisibility:{
		hasEpicLinkFieldDependency:"Boolean",
		canUseParentLinkField:"Boolean"
	},
	JiraPeopleField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedUsers:"User",
		selectedUsersConnection:"JiraUserConnection",
		isMulti:"Boolean",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraPermissionConfiguration:{
		tag:"JiraPermissionTagEnum",
		message:"JiraPermissionMessageExtension",
		documentation:"JiraPermissionDocumentationExtension"
	},
	JiraPermissionDocumentationExtension:{
		text:"String",
		url:"String"
	},
	JiraPermissionGrant:{
		grantType:"JiraGrantTypeKey",
		grantValue:"JiraPermissionGrantValue"
	},
	JiraPermissionGrantConnection:{
		pageInfo:"PageInfo",
		edges:"JiraPermissionGrantEdge",
		totalCount:"Int"
	},
	JiraPermissionGrantEdge:{
		node:"JiraPermissionGrant",
		cursor:"String"
	},
	JiraPermissionGrantHolder:{
		permission:"JiraProjectPermission",
		configuration:"JiraPermissionConfiguration",
		grants:"JiraPermissionGrants"
	},
	JiraPermissionGrantValue:{
		id:"ID",
		value:"JiraGrantTypeValue"
	},
	JiraPermissionGrantValueConnection:{
		pageInfo:"PageInfo",
		edges:"JiraPermissionGrantValueEdge",
		totalCount:"Int"
	},
	JiraPermissionGrantValueEdge:{
		node:"JiraPermissionGrantValue",
		cursor:"String"
	},
	JiraPermissionGrants:{
		grantType:"JiraGrantTypeKey",
		grantValues:"JiraPermissionGrantValue",
		totalCount:"Int"
	},
	JiraPermissionLevel:{
		group:"JiraGroup",
		role:"JiraRole"
	},
	JiraPermissionMessageExtension:{
		type:"JiraPermissionMessageTypeEnum",
		text:"String"
	},
	JiraPermissionScheme:{
		id:"ID",
		name:"String",
		description:"String"
	},
	JiraPermissionSchemeAddGrantPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraPermissionSchemeConfiguration:{
		isEditable:"Boolean"
	},
	JiraPermissionSchemeGrantGroup:{
		category:"JiraProjectPermissionCategory",
		grantHolders:"JiraPermissionGrantHolder"
	},
	JiraPermissionSchemeRemoveGrantPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraPermissionSchemeView:{
		scheme:"JiraPermissionScheme",
		configuration:"JiraPermissionSchemeConfiguration",
		grantGroups:"JiraPermissionSchemeGrantGroup"
	},
	JiraPermissionSchemeViewResult:{
		"...on JiraPermissionSchemeView":"JiraPermissionSchemeView",
		"...on QueryError":"QueryError"
	},
	JiraPlatformAttachment:{
		id:"ID",
		attachmentId:"String",
		author:"User",
		created:"DateTime",
		mediaApiFileId:"String",
		mimeType:"String",
		fileName:"String",
		fileSize:"Long",
		parentName:"String",
		parentId:"String",
		hasRestrictedParent:"Boolean"
	},
	JiraPlatformComment:{
		id:"ID",
		commentId:"ID",
		issue:"JiraIssue",
		webUrl:"URL",
		author:"User",
		updateAuthor:"User",
		richText:"JiraRichText",
		created:"DateTime",
		updated:"DateTime",
		permissionLevel:"JiraPermissionLevel"
	},
	JiraPriority:{
		id:"ID",
		priorityId:"String",
		name:"String",
		iconUrl:"URL",
		color:"String"
	},
	JiraPriorityConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraPriorityEdge"
	},
	JiraPriorityEdge:{
		node:"JiraPriority",
		cursor:"String"
	},
	JiraPriorityField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		priority:"JiraPriority",
		priorities:"JiraPriorityConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraProformaForms:{
		hasProjectForms:"Boolean",
		hasIssueForms:"Boolean"
	},
	JiraProformaFormsField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		proformaForms:"JiraProformaForms",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraProject:{
		id:"ID",
		key:"String",
		projectId:"String",
		name:"String",
		cloudId:"ID",
		description:"String",
		leadId:"ID",
		category:"JiraProjectCategory",
		avatar:"JiraAvatar",
		projectUrl:"String",
		projectType:"JiraProjectType",
		projectStyle:"JiraProjectStyle",
		status:"JiraProjectStatus",
		similarIssues:"JiraSimilarIssues",
		canSetIssueRestriction:"Boolean",
		navigationMetadata:"JiraProjectNavigationMetadata",
		action:"JiraProjectAction",
		virtualAgentConfiguration:"VirtualAgentConfigurationResult",
		isFavourite:"Boolean",
		devOpsToolRelationships:"JiraProjectAndDevOpsToolRelationshipConnection",
		devOpsEntityRelationships:"AriGraphRelationshipConnection",
		linkedSecurityContainers:"AriGraphRelationshipConnection",
		linkedSecurityVulnerabilities:"AriGraphRelationshipConnection",
		repositoryRelationships:"JiraProjectAndRepositoryRelationshipConnection",
		devOpsServiceRelationships:"DevOpsServiceAndJiraProjectRelationshipConnection",
		opsgenieTeamRelationships:"JiraProjectAndOpsgenieTeamRelationshipConnection",
		servicesAvailableToLinkWith:"DevOpsServiceConnection",
		opsgenieTeamsAvailableToLinkWith:"OpsgenieTeamConnection",
		softwareBoards:"BoardScopeConnection",
		confluenceSpaceRelationships:"JiraProjectAndConfluenceSpaceRelationshipConnection"
	},
	JiraProjectAction:{
		canPerform:"Boolean",
		type:"JiraProjectActionType"
	},
	JiraProjectAndConfluenceSpaceDeleteRelationshipForJiraProjectPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraProjectAndConfluenceSpaceRelationship:{
		jiraProject:"JiraProject",
		confluenceSpace:"ConfluenceSpace"
	},
	JiraProjectAndConfluenceSpaceRelationshipConnection:{
		edges:"JiraProjectAndConfluenceSpaceRelationshipEdge",
		nodes:"JiraProjectAndConfluenceSpaceRelationship",
		pageInfo:"PageInfo"
	},
	JiraProjectAndConfluenceSpaceRelationshipEdge:{
		cursor:"String",
		node:"JiraProjectAndConfluenceSpaceRelationship"
	},
	JiraProjectAndDevOpsToolRelationship:{
		id:"ID",
		jiraProject:"JiraProject",
		devOpsTool:"DevOpsTool",
		description:"String",
		revision:"ID",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON"
	},
	JiraProjectAndDevOpsToolRelationshipConnection:{
		edges:"JiraProjectAndDevOpsToolRelationshipEdge",
		nodes:"JiraProjectAndDevOpsToolRelationship",
		pageInfo:"PageInfo"
	},
	JiraProjectAndDevOpsToolRelationshipCreatePayload:{
		success:"Boolean",
		errors:"MutationError",
		jiraProjectAndDevOpsToolRelationship:"JiraProjectAndDevOpsToolRelationship"
	},
	JiraProjectAndDevOpsToolRelationshipDeleteForJiraProjectPayload:{
		success:"Boolean",
		errors:"MutationError",
		numberDeleted:"Int"
	},
	JiraProjectAndDevOpsToolRelationshipDeletePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraProjectAndDevOpsToolRelationshipEdge:{
		node:"JiraProjectAndDevOpsToolRelationship",
		cursor:"String"
	},
	JiraProjectAndOpsgenieTeamRelationship:{
		id:"ID",
		revision:"ID",
		jiraProject:"JiraProject",
		jiraProjectType:"DevOpsJiraProjectType",
		opsgenieTeam:"OpsgenieTeam",
		description:"String",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		properties:"JSON"
	},
	JiraProjectAndOpsgenieTeamRelationshipConnection:{
		edges:"JiraProjectAndOpsgenieTeamRelationshipEdge",
		nodes:"JiraProjectAndOpsgenieTeamRelationship",
		pageInfo:"PageInfo"
	},
	JiraProjectAndOpsgenieTeamRelationshipEdge:{
		cursor:"String",
		node:"JiraProjectAndOpsgenieTeamRelationship"
	},
	JiraProjectAndRepositoryRelationship:{
		id:"ID",
		revision:"ID",
		jiraProject:"JiraProject",
		bitbucketRepository:"BitbucketRepository",
		thirdPartyRepository:"DevOpsThirdPartyRepository",
		description:"String",
		certainty:"DevOpsRelationshipCertainty",
		createdBy:"String",
		createdAt:"DateTime",
		lastUpdatedBy:"String",
		lastUpdatedAt:"DateTime",
		lastInferredBy:"String",
		lastInferredAt:"DateTime",
		properties:"JSON"
	},
	JiraProjectAndRepositoryRelationshipConnection:{
		edges:"JiraProjectAndRepositoryRelationshipEdge",
		nodes:"JiraProjectAndRepositoryRelationship",
		pageInfo:"PageInfo"
	},
	JiraProjectAndRepositoryRelationshipEdge:{
		cursor:"String",
		node:"JiraProjectAndRepositoryRelationship"
	},
	JiraProjectCategory:{
		id:"ID",
		name:"String",
		description:"String"
	},
	JiraProjectCategoryConnection:{
		pageInfo:"PageInfo",
		edges:"JiraProjectCategoryEdge"
	},
	JiraProjectCategoryEdge:{
		node:"JiraProjectCategory",
		cursor:"String"
	},
	JiraProjectConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraProjectEdge"
	},
	JiraProjectEdge:{
		node:"JiraProject",
		cursor:"String"
	},
	JiraProjectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		project:"JiraProject",
		projects:"JiraProjectConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraProjectNavigationMetadata:{
		"...on JiraSoftwareProjectNavigationMetadata":"JiraSoftwareProjectNavigationMetadata",
		"...on JiraServiceManagementProjectNavigationMetadata":"JiraServiceManagementProjectNavigationMetadata",
		"...on JiraWorkManagementProjectNavigationMetadata":"JiraWorkManagementProjectNavigationMetadata"
	},
	JiraProjectPermission:{
		key:"String",
		name:"String",
		description:"String",
		type:"JiraProjectPermissionCategory"
	},
	JiraProjectPermissionCategory:{
		key:"JiraProjectPermissionCategoryEnum",
		name:"String"
	},
	JiraProjectRoleGrantTypeValue:{
		id:"ID",
		role:"JiraRole"
	},
	JiraPullRequestReviewer:{
		avatar:"JiraAvatar",
		name:"String",
		hasApproved:"Boolean"
	},
	JiraQuery:{
		jiraProject:"JiraProject",
		allJiraProjects:"JiraProjectConnection",
		allJiraProjectCategories:"JiraProjectCategoryConnection",
		globalTimeTrackingSettings:"JiraTimeTrackingSettings",
		timeTrackingSettings:"JiraGlobalTimeTrackingSettings",
		filter:"JiraFilter",
		favouriteFilters:"JiraFilterConnection",
		systemFilters:"JiraSystemFilterConnection",
		devOpsProviders:"JiraDevOpsProvider",
		applicationPropertiesByKey:"JiraApplicationProperty",
		issueContainersByType:"JiraIssueItemContainersResult",
		issueContainersByTypeByKey:"JiraIssueItemContainersResult",
		favourites:"JiraFavouriteConnection",
		issueByKey:"JiraIssue",
		issueById:"JiraIssue",
		issue:"JiraIssue",
		screenIdByIssueId:"Long",
		screenIdByIssueKey:"Long",
		epicLinkFieldKey:"String",
		childIssuesLimit:"Long",
		allGrantTypeKeys:"JiraGrantTypeKey",
		grantTypeValues:"JiraGrantTypeValueConnection",
		viewPermissionScheme:"JiraPermissionSchemeViewResult",
		getProjectsByPermissionScheme:"JiraProjectConnection",
		permissionSchemeGrants:"JiraPermissionGrantValueConnection",
		getPermissionSchemeGrants:"JiraPermissionGrantConnection",
		getPermissionSchemeGrantsHierarchy:"JiraPermissionGrants",
		issueHierarchyConfig:"JiraIssueHierarchyConfigurationQuery",
		issueHierarchyLimits:"JiraIssueHierarchyLimits",
		lockedIssueTypeIds:"ID",
		issueHierarchyConfigUpdateTask:"JiraHierarchyConfigTask",
		jiraProjects:"JiraProject",
		jiraProjectByKey:"JiraProject",
		version:"JiraVersionResult",
		versionsForProject:"JiraVersionConnection",
		versionDetailPage:"JiraVersionDetailPage",
		labelsFieldOptions:"JiraLabelConnection",
		jqlBuilder:"JiraJqlBuilder",
		issueSearchByJql:"JiraIssueSearchByJqlResult",
		issueSearchByFilterId:"JiraIssueSearchByFilterResult",
		issueHydrateByIssueIds:"JiraIssueSearchByHydration",
		issueSearchView:"JiraIssueSearchView",
		issueSearchViewByNamespaceAndViewId:"JiraIssueSearchView",
		issueSearchStable:"JiraIssueConnection",
		devOps:"JiraDevOpsQuery",
		deploymentsFeaturePrecondition:"JiraDeploymentsFeaturePrecondition",
		deploymentsFeaturePreconditionByProjectKey:"JiraDeploymentsFeaturePrecondition",
		installDeploymentsBannerPrecondition:"JiraInstallDeploymentsBannerPrecondition"
	},
	JiraRadioSelectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedOption:"JiraOption",
		fieldOptions:"JiraOptionConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraReleaseNotesConfiguration:{
		issueFieldIds:"ID",
		issueTypeIds:"ID",
		issueKeyConfig:"JiraReleaseNotesIssueKeyConfig"
	},
	JiraReleaseNotesInConfluenceAvailableSite:{
		siteId:"ID",
		name:"String",
		url:"URL",
		isSystem:"Boolean"
	},
	JiraReleaseNotesInConfluenceAvailableSitesConnection:{
		pageInfo:"PageInfo",
		edges:"JiraReleaseNotesInConfluenceAvailableSitesEdge"
	},
	JiraReleaseNotesInConfluenceAvailableSitesEdge:{
		cursor:"String",
		node:"JiraReleaseNotesInConfluenceAvailableSite"
	},
	JiraReleases:{
		issues:"JiraReleasesIssueConnection",
		epics:"JiraReleasesEpicConnection",
		deployments:"JiraReleasesDeploymentSummaryConnection",
		deploymentsById:"DeploymentSummary"
	},
	JiraReleasesDeploymentSummaryConnection:{
		edges:"JiraReleasesDeploymentSummaryEdge",
		nodes:"DeploymentSummary",
		pageInfo:"PageInfo"
	},
	JiraReleasesDeploymentSummaryEdge:{
		cursor:"String",
		node:"DeploymentSummary"
	},
	JiraReleasesEpic:{
		id:"ID",
		issueKey:"String",
		issueTypeId:"ID",
		assignee:"User",
		summary:"String",
		color:"String",
		lastDeployed:"DateTime"
	},
	JiraReleasesEpicConnection:{
		edges:"JiraReleasesEpicEdge",
		nodes:"JiraReleasesEpic",
		pageInfo:"PageInfo"
	},
	JiraReleasesEpicEdge:{
		cursor:"String",
		node:"JiraReleasesEpic"
	},
	JiraReleasesIssue:{
		id:"ID",
		issueKey:"String",
		issueTypeId:"ID",
		assignee:"User",
		summary:"String",
		lastDeployed:"DateTime",
		epic:"JiraReleasesEpic"
	},
	JiraReleasesIssueConnection:{
		edges:"JiraReleasesIssueEdge",
		nodes:"JiraReleasesIssue",
		pageInfo:"PageInfo"
	},
	JiraReleasesIssueEdge:{
		cursor:"String",
		node:"JiraReleasesIssue"
	},
	JiraRemoveIssuesFromFixVersionPayload:{
		version:"JiraVersion",
		success:"Boolean",
		errors:"MutationError"
	},
	JiraRemoveRelatedWorkFromVersionPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraResolution:{
		id:"ID",
		resolutionId:"String",
		name:"String",
		description:"String"
	},
	JiraResolutionConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraResolutionEdge"
	},
	JiraResolutionEdge:{
		node:"JiraResolution",
		cursor:"String"
	},
	JiraResolutionField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		resolution:"JiraResolution",
		resolutions:"JiraResolutionConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraRichText:{
		adfValue:"JiraADF",
		plainText:"String",
		wikiValue:"String"
	},
	JiraRichTextField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		richText:"JiraRichText",
		renderer:"String",
		mediaContext:"JiraMediaContext",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraRole:{
		id:"ID",
		roleId:"String",
		name:"String",
		description:"String"
	},
	JiraRoleConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraRoleEdge"
	},
	JiraRoleEdge:{
		node:"JiraRole",
		cursor:"String"
	},
	JiraScmRepository:{
		name:"String",
		entityUrl:"URL"
	},
	JiraSecurityLevel:{
		id:"ID",
		securityId:"String",
		name:"String",
		description:"String"
	},
	JiraSecurityLevelConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraSecurityLevelEdge"
	},
	JiraSecurityLevelEdge:{
		node:"JiraSecurityLevel",
		cursor:"String"
	},
	JiraSecurityLevelField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		securityLevel:"JiraSecurityLevel",
		securityLevels:"JiraSecurityLevelConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServerError:{
		message:"String"
	},
	JiraServiceManagementActiveApproval:{
		id:"ID",
		name:"String",
		finalDecision:"JiraServiceManagementApprovalDecisionResponseType",
		approvers:"JiraServiceManagementApproverConnection",
		excludedApprovers:"JiraUserConnection",
		canAnswerApproval:"Boolean",
		decisions:"JiraServiceManagementDecisionConnection",
		createdDate:"DateTime",
		configurations:"JiraServiceManagementApprovalConfiguration",
		status:"JiraServiceManagementApprovalStatus",
		approverPrincipals:"JiraServiceManagementApproverPrincipalConnection",
		pendingApprovalCount:"Int",
		approvalState:"JiraServiceManagementApprovalState"
	},
	JiraServiceManagementApprovalCondition:{
		type:"String",
		value:"String"
	},
	JiraServiceManagementApprovalConfiguration:{
		approversConfigurations:"JiraServiceManagementApproversConfiguration",
		condition:"JiraServiceManagementApprovalCondition"
	},
	JiraServiceManagementApprovalField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		activeApproval:"JiraServiceManagementActiveApproval",
		completedApprovals:"JiraServiceManagementCompletedApproval",
		completedApprovalsConnection:"JiraServiceManagementCompletedApprovalConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementApprovalStatus:{
		id:"String",
		statusId:"String",
		name:"String",
		categoryId:"String"
	},
	JiraServiceManagementApprover:{
		approver:"User",
		approverDecision:"JiraServiceManagementApprovalDecisionResponseType"
	},
	JiraServiceManagementApproverConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementApproverEdge"
	},
	JiraServiceManagementApproverEdge:{
		node:"JiraServiceManagementApprover",
		cursor:"String"
	},
	JiraServiceManagementApproverPrincipal:{
		"...on JiraServiceManagementUserApproverPrincipal":"JiraServiceManagementUserApproverPrincipal",
		"...on JiraServiceManagementGroupApproverPrincipal":"JiraServiceManagementGroupApproverPrincipal"
	},
	JiraServiceManagementApproverPrincipalConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementApproverPrincipalEdge"
	},
	JiraServiceManagementApproverPrincipalEdge:{
		node:"JiraServiceManagementApproverPrincipal",
		cursor:"String"
	},
	JiraServiceManagementApproversConfiguration:{
		type:"String",
		fieldName:"String",
		fieldId:"String"
	},
	JiraServiceManagementAttachment:{
		id:"ID",
		attachmentId:"String",
		author:"User",
		mediaApiFileId:"String",
		created:"DateTime",
		mimeType:"String",
		fileName:"String",
		fileSize:"Long",
		parentName:"String",
		parentId:"String",
		parentCommentVisibility:"JiraServiceManagementCommentVisibility",
		hasRestrictedParent:"Boolean"
	},
	JiraServiceManagementComment:{
		id:"ID",
		commentId:"ID",
		issue:"JiraIssue",
		webUrl:"URL",
		author:"User",
		updateAuthor:"User",
		richText:"JiraRichText",
		created:"DateTime",
		updated:"DateTime",
		permissionLevel:"JiraPermissionLevel",
		visibility:"JiraServiceManagementCommentVisibility",
		authorCanSeeRequest:"Boolean"
	},
	JiraServiceManagementCompletedApproval:{
		id:"ID",
		name:"String",
		finalDecision:"JiraServiceManagementApprovalDecisionResponseType",
		approvers:"JiraServiceManagementApproverConnection",
		createdDate:"DateTime",
		completedDate:"DateTime",
		status:"JiraServiceManagementApprovalStatus"
	},
	JiraServiceManagementCompletedApprovalConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementCompletedApprovalEdge"
	},
	JiraServiceManagementCompletedApprovalEdge:{
		node:"JiraServiceManagementCompletedApproval",
		cursor:"String"
	},
	JiraServiceManagementDateTimeField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		dateTime:"DateTime",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementDecision:{
		approver:"User",
		approverDecision:"JiraServiceManagementApprovalDecisionResponseType"
	},
	JiraServiceManagementDecisionConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementDecisionEdge"
	},
	JiraServiceManagementDecisionEdge:{
		node:"JiraServiceManagementDecision",
		cursor:"String"
	},
	JiraServiceManagementFeedback:{
		rating:"Int"
	},
	JiraServiceManagementGroupApproverPrincipal:{
		groupId:"String",
		name:"String",
		memberCount:"Int",
		approvedCount:"Int"
	},
	JiraServiceManagementIncident:{
		hasLinkedIncidents:"Boolean"
	},
	JiraServiceManagementIncidentLinkingField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		incident:"JiraServiceManagementIncident",
		fieldConfig:"JiraFieldConfig"
	},
	JiraServiceManagementLanguage:{
		languageCode:"String",
		displayName:"String"
	},
	JiraServiceManagementMajorIncidentField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		majorIncident:"JiraServiceManagementMajorIncident",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementMultipleSelectUserPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedUsers:"User",
		selectedUsersConnection:"JiraUserConnection",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementOrganization:{
		organizationId:"ID",
		organizationName:"String",
		domain:"String"
	},
	JiraServiceManagementOrganizationConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementOrganizationEdge"
	},
	JiraServiceManagementOrganizationEdge:{
		node:"JiraServiceManagementOrganization",
		cursor:"String"
	},
	JiraServiceManagementOrganizationField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedOrganizations:"JiraServiceManagementOrganization",
		selectedOrganizationsConnection:"JiraServiceManagementOrganizationConnection",
		organizations:"JiraServiceManagementOrganizationConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementPeopleField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedUsers:"User",
		selectedUsersConnection:"JiraUserConnection",
		isMulti:"Boolean",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementProjectNavigationMetadata:{
		queueId:"ID",
		queueName:"String"
	},
	JiraServiceManagementRequestFeedbackField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		feedback:"JiraServiceManagementFeedback",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementRequestLanguageField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		language:"JiraServiceManagementLanguage",
		languages:"JiraServiceManagementLanguage",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraServiceManagementRequestType:{
		id:"ID",
		requestTypeId:"String",
		name:"String",
		key:"String",
		description:"String",
		helpText:"String",
		issueType:"JiraIssueType",
		portalId:"String",
		avatar:"JiraAvatar",
		practices:"JiraServiceManagementRequestTypePractice"
	},
	JiraServiceManagementRequestTypeConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementRequestTypeEdge"
	},
	JiraServiceManagementRequestTypeEdge:{
		node:"JiraServiceManagementRequestType",
		cursor:"String"
	},
	JiraServiceManagementRequestTypeField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		requestType:"JiraServiceManagementRequestType",
		requestTypes:"JiraServiceManagementRequestTypeConnection",
		fieldConfig:"JiraFieldConfig"
	},
	JiraServiceManagementRequestTypePractice:{
		key:"JiraServiceManagementPractice"
	},
	JiraServiceManagementResponder:{
		"...on JiraServiceManagementUserResponder":"JiraServiceManagementUserResponder",
		"...on JiraServiceManagementTeamResponder":"JiraServiceManagementTeamResponder"
	},
	JiraServiceManagementResponderConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraServiceManagementResponderEdge"
	},
	JiraServiceManagementResponderEdge:{
		node:"JiraServiceManagementResponder",
		cursor:"String"
	},
	JiraServiceManagementRespondersField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		responders:"JiraServiceManagementResponder",
		respondersConnection:"JiraServiceManagementResponderConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig"
	},
	JiraServiceManagementTeamResponder:{
		teamId:"String",
		teamName:"String"
	},
	JiraServiceManagementUserApproverPrincipal:{
		user:"User",
		jiraRest:"URL"
	},
	JiraServiceManagementUserResponder:{
		user:"User"
	},
	JiraSetApplicationPropertiesPayload:{
		success:"Boolean",
		errors:"MutationError",
		applicationProperties:"JiraApplicationProperty"
	},
	JiraShareableEntityAnonymousAccessGrant:{
		type:"JiraShareableEntityGrant"
	},
	JiraShareableEntityAnyLoggedInUserGrant:{
		type:"JiraShareableEntityGrant"
	},
	JiraShareableEntityEditGrant:{
		"...on JiraShareableEntityGroupGrant":"JiraShareableEntityGroupGrant",
		"...on JiraShareableEntityProjectRoleGrant":"JiraShareableEntityProjectRoleGrant",
		"...on JiraShareableEntityUserGrant":"JiraShareableEntityUserGrant",
		"...on JiraShareableEntityProjectGrant":"JiraShareableEntityProjectGrant",
		"...on JiraShareableEntityUnknownProjectGrant":"JiraShareableEntityUnknownProjectGrant"
	},
	JiraShareableEntityEditGrantConnection:{
		pageInfo:"PageInfo",
		edges:"JiraShareableEntityEditGrantEdge"
	},
	JiraShareableEntityEditGrantEdge:{
		node:"JiraShareableEntityEditGrant",
		cursor:"String"
	},
	JiraShareableEntityGroupGrant:{
		type:"JiraShareableEntityGrant",
		group:"JiraGroup"
	},
	JiraShareableEntityProjectGrant:{
		type:"JiraShareableEntityGrant",
		project:"JiraProject"
	},
	JiraShareableEntityProjectRoleGrant:{
		type:"JiraShareableEntityGrant",
		project:"JiraProject",
		role:"JiraRole"
	},
	JiraShareableEntityShareGrant:{
		"...on JiraShareableEntityGroupGrant":"JiraShareableEntityGroupGrant",
		"...on JiraShareableEntityProjectRoleGrant":"JiraShareableEntityProjectRoleGrant",
		"...on JiraShareableEntityProjectGrant":"JiraShareableEntityProjectGrant",
		"...on JiraShareableEntityAnonymousAccessGrant":"JiraShareableEntityAnonymousAccessGrant",
		"...on JiraShareableEntityAnyLoggedInUserGrant":"JiraShareableEntityAnyLoggedInUserGrant",
		"...on JiraShareableEntityUnknownProjectGrant":"JiraShareableEntityUnknownProjectGrant"
	},
	JiraShareableEntityShareGrantConnection:{
		pageInfo:"PageInfo",
		edges:"JiraShareableEntityShareGrantEdge"
	},
	JiraShareableEntityShareGrantEdge:{
		node:"JiraShareableEntityShareGrant",
		cursor:"String"
	},
	JiraShareableEntityUnknownProjectGrant:{
		type:"JiraShareableEntityGrant"
	},
	JiraShareableEntityUserGrant:{
		type:"JiraShareableEntityGrant",
		user:"User"
	},
	JiraSimilarIssues:{
		featureEnabled:"Boolean"
	},
	JiraSingleGroupPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedGroup:"JiraGroup",
		groups:"JiraGroupConnection",
		fieldConfig:"JiraFieldConfig",
		searchUrl:"String",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraSingleLineTextField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		text:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraSingleSelectField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		fieldOption:"JiraOption",
		fieldOptions:"JiraOptionConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraSingleSelectFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		field:"JiraSingleSelectField"
	},
	JiraSingleSelectUserPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		user:"User",
		users:"JiraUserConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraSingleVersionPickerField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		version:"JiraVersion",
		versions:"JiraVersionConnection",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraSoftwareProjectNavigationMetadata:{
		id:"ID",
		boardId:"ID",
		boardName:"String",
		isSimpleBoard:"Boolean",
		totalBoardsInProject:"Long"
	},
	JiraSprint:{
		id:"ID",
		sprintId:"String",
		name:"String",
		state:"JiraSprintState",
		boardName:"String",
		startDate:"DateTime",
		endDate:"DateTime",
		completionDate:"DateTime",
		goal:"String"
	},
	JiraSprintConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraSprintEdge"
	},
	JiraSprintEdge:{
		node:"JiraSprint",
		cursor:"String"
	},
	JiraSprintField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedSprints:"JiraSprint",
		selectedSprintsConnection:"JiraSprintConnection",
		sprints:"JiraSprintConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraStatus:{
		id:"ID",
		statusId:"String",
		name:"String",
		description:"String",
		statusCategory:"JiraStatusCategory"
	},
	JiraStatusCategory:{
		id:"ID",
		statusCategoryId:"String",
		key:"String",
		name:"String",
		colorName:"JiraStatusCategoryColor"
	},
	JiraStatusCategoryField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		statusCategory:"JiraStatusCategory",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraStatusField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		status:"JiraStatus",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraStoryPointEstimateFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		field:"JiraNumberField"
	},
	JiraSubtasksField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		subtasks:"JiraIssueConnection",
		fieldConfig:"JiraFieldConfig"
	},
	JiraSystemFilter:{
		id:"ID",
		filterId:"String",
		jql:"String",
		name:"String",
		isFavourite:"Boolean"
	},
	JiraSystemFilterConnection:{
		pageInfo:"PageInfo",
		edges:"JiraSystemFilterEdge"
	},
	JiraSystemFilterEdge:{
		node:"JiraSystemFilter",
		cursor:"String"
	},
	JiraTeam:{
		id:"ID",
		teamId:"String",
		name:"String",
		description:"String",
		avatar:"JiraAvatar",
		members:"JiraUserConnection",
		isShared:"Boolean"
	},
	JiraTeamConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraTeamEdge"
	},
	JiraTeamEdge:{
		node:"JiraTeam",
		cursor:"String"
	},
	JiraTeamField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedTeam:"JiraTeam",
		teams:"JiraTeamConnection",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraTeamView:{
		jiraSuppliedId:"ID",
		jiraSuppliedTeamId:"String",
		jiraSuppliedVisibility:"Boolean",
		jiraSuppliedName:"String",
		jiraSuppliedAvatar:"JiraAvatar",
		fullTeam:"Team"
	},
	JiraTeamViewField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		selectedTeam:"JiraTeamView",
		searchUrl:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraTimeTrackingField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		originalEstimate:"JiraEstimate",
		remainingEstimate:"JiraEstimate",
		timeSpent:"JiraEstimate",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig",
		timeTrackingSettings:"JiraTimeTrackingSettings"
	},
	JiraTimeTrackingSettings:{
		isJiraConfiguredTimeTrackingEnabled:"Boolean",
		workingHoursPerDay:"Float",
		workingDaysPerWeek:"Float",
		defaultFormat:"JiraTimeFormat",
		defaultUnit:"JiraTimeUnit"
	},
	JiraUpdateCustomFilterJqlPayload:{
		success:"Boolean",
		errors:"MutationError",
		filter:"JiraCustomFilter"
	},
	JiraUpdateCustomFilterPayload:{
		success:"Boolean",
		errors:"MutationError",
		filter:"JiraCustomFilter"
	},
	JiraUpdateReleaseNotesConfigurationPayload:{
		success:"Boolean",
		errors:"MutationError",
		releaseNotesConfiguration:"JiraReleaseNotesConfiguration",
		version:"JiraVersion"
	},
	JiraUpdateVersionPayload:{
		success:"Boolean",
		errors:"MutationError",
		version:"JiraVersion"
	},
	JiraUpdateVersionWarningConfigPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	JiraUrlField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		url:"URL",
		uri:"String",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraUser:{
		accountId:"String",
		displayName:"String",
		avatarUrl:"String",
		email:"String"
	},
	JiraUserConnection:{
		pageInfo:"PageInfo",
		edges:"JiraUserEdge",
		totalCount:"Int"
	},
	JiraUserEdge:{
		node:"User",
		cursor:"String"
	},
	JiraUserFieldConfig:{
		isPinned:"Boolean",
		isSelected:"Boolean"
	},
	JiraUserGrantTypeValue:{
		id:"ID",
		user:"User"
	},
	JiraUserGroup:{
		accountId:"String",
		displayName:"String"
	},
	JiraUserIssueFieldConfiguration:{
		"...on JiraAffectedServicesField": "JiraAffectedServicesField",
		"...on JiraAssetField": "JiraAssetField",
		"...on JiraAtlassianTeamField": "JiraAtlassianTeamField",
		"...on JiraAttachmentsField": "JiraAttachmentsField",
		"...on JiraBooleanField": "JiraBooleanField",
		"...on JiraCascadingSelectField": "JiraCascadingSelectField",
		"...on JiraCheckboxesField": "JiraCheckboxesField",
		"...on JiraColorField": "JiraColorField",
		"...on JiraComponentsField": "JiraComponentsField",
		"...on JiraConnectMultipleSelectField": "JiraConnectMultipleSelectField",
		"...on JiraConnectNumberField": "JiraConnectNumberField",
		"...on JiraConnectReadOnlyField": "JiraConnectReadOnlyField",
		"...on JiraConnectRichTextField": "JiraConnectRichTextField",
		"...on JiraConnectSingleSelectField": "JiraConnectSingleSelectField",
		"...on JiraConnectTextField": "JiraConnectTextField",
		"...on JiraDatePickerField": "JiraDatePickerField",
		"...on JiraDateTimePickerField": "JiraDateTimePickerField",
		"...on JiraEpicLinkField": "JiraEpicLinkField",
		"...on JiraFlagField": "JiraFlagField",
		"...on JiraForgeDatetimeField": "JiraForgeDatetimeField",
		"...on JiraForgeGroupField": "JiraForgeGroupField",
		"...on JiraForgeGroupsField": "JiraForgeGroupsField",
		"...on JiraForgeNumberField": "JiraForgeNumberField",
		"...on JiraForgeObjectField": "JiraForgeObjectField",
		"...on JiraForgeStringField": "JiraForgeStringField",
		"...on JiraForgeStringsField": "JiraForgeStringsField",
		"...on JiraForgeUserField": "JiraForgeUserField",
		"...on JiraForgeUsersField": "JiraForgeUsersField",
		"...on JiraIssueLinkField": "JiraIssueLinkField",
		"...on JiraIssueRestrictionField": "JiraIssueRestrictionField",
		"...on JiraLabelsField": "JiraLabelsField",
		"...on JiraMultipleGroupPickerField": "JiraMultipleGroupPickerField",
		"...on JiraMultipleSelectField": "JiraMultipleSelectField",
		"...on JiraMultipleSelectUserPickerField": "JiraMultipleSelectUserPickerField",
		"...on JiraMultipleVersionPickerField": "JiraMultipleVersionPickerField",
		"...on JiraNumberField": "JiraNumberField",
		"...on JiraOriginalTimeEstimateField": "JiraOriginalTimeEstimateField",
		"...on JiraParentIssueField": "JiraParentIssueField",
		"...on JiraPeopleField": "JiraPeopleField",
		"...on JiraPriorityField": "JiraPriorityField",
		"...on JiraProformaFormsField": "JiraProformaFormsField",
		"...on JiraProjectField": "JiraProjectField",
		"...on JiraRadioSelectField": "JiraRadioSelectField",
		"...on JiraResolutionField": "JiraResolutionField",
		"...on JiraRichTextField": "JiraRichTextField",
		"...on JiraSecurityLevelField": "JiraSecurityLevelField",
		"...on JiraServiceManagementApprovalField": "JiraServiceManagementApprovalField",
		"...on JiraServiceManagementDateTimeField": "JiraServiceManagementDateTimeField",
		"...on JiraServiceManagementMajorIncidentField": "JiraServiceManagementMajorIncidentField",
		"...on JiraServiceManagementMultipleSelectUserPickerField": "JiraServiceManagementMultipleSelectUserPickerField",
		"...on JiraServiceManagementOrganizationField": "JiraServiceManagementOrganizationField",
		"...on JiraServiceManagementPeopleField": "JiraServiceManagementPeopleField",
		"...on JiraServiceManagementRequestFeedbackField": "JiraServiceManagementRequestFeedbackField",
		"...on JiraServiceManagementRequestLanguageField": "JiraServiceManagementRequestLanguageField",
		"...on JiraSingleGroupPickerField": "JiraSingleGroupPickerField",
		"...on JiraSingleLineTextField": "JiraSingleLineTextField",
		"...on JiraSingleSelectField": "JiraSingleSelectField",
		"...on JiraSingleSelectUserPickerField": "JiraSingleSelectUserPickerField",
		"...on JiraSingleVersionPickerField": "JiraSingleVersionPickerField",
		"...on JiraSprintField": "JiraSprintField",
		"...on JiraStatusCategoryField": "JiraStatusCategoryField",
		"...on JiraStatusField": "JiraStatusField",
		"...on JiraTeamField": "JiraTeamField",
		"...on JiraTeamViewField": "JiraTeamViewField",
		"...on JiraTimeTrackingField": "JiraTimeTrackingField",
		"...on JiraUrlField": "JiraUrlField",
		"...on JiraVotesField": "JiraVotesField",
		"...on JiraWatchesField": "JiraWatchesField",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraVersion:{
		id:"ID",
		versionId:"String",
		name:"String",
		iconUrl:"URL",
		status:"JiraVersionStatus",
		description:"String",
		startDate:"DateTime",
		releaseDate:"DateTime",
		warningConfig:"JiraVersionWarningConfig",
		connectAddonIframeData:"JiraVersionConnectAddonIframeData",
		issues:"JiraIssueConnection",
		project:"JiraProject",
		canEdit:"Boolean",
		canAddAndRemoveIssues:"Boolean",
		canViewDevTools:"Boolean",
		releaseNotesOptionsIssueTypes:"JiraIssueTypeConnection",
		releaseNotesOptionsIssueFields:"JiraIssueFieldConnection",
		nativeReleaseNotesOptionsIssueFields:"JiraIssueFieldConnection",
		releaseNotes:"JiraADF",
		devOpsSummarisedEntities:"DevOpsSummarisedEntities",
		releaseNotesConfiguration:"JiraReleaseNotesConfiguration",
		availableSites:"JiraReleaseNotesInConfluenceAvailableSitesConnection",
		relatedWork:"JiraVersionRelatedWorkConnection",
		relatedWorkV2:"JiraVersionRelatedWorkV2Connection",
		suggestedRelatedWorkCategories:"String"
	},
	JiraVersionConnectAddonIframeData:{
		appKey:"String",
		moduleKey:"String",
		appName:"String",
		location:"String",
		options:"JSON"
	},
	JiraVersionConnection:{
		totalCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraVersionEdge"
	},
	JiraVersionDetailPage:{
		warningConfig:"JiraVersionWarningConfig",
		failingBuildIssues:"JiraVersionDetailPageIssues",
		openPullRequestIssues:"JiraVersionDetailPageIssues",
		unreviewedCodeIssues:"JiraVersionDetailPageIssues",
		toDoIssues:"JiraVersionDetailPageIssues",
		inProgressIssues:"JiraVersionDetailPageIssues",
		doneIssues:"JiraVersionDetailPageIssues",
		allIssues:"JiraVersionDetailPageIssues"
	},
	JiraVersionDetailPageIssues:{
		jql:"String",
		issues:"JiraIssueConnection"
	},
	JiraVersionEdge:{
		node:"JiraVersion",
		cursor:"String"
	},
	JiraVersionRelatedWork:{
		relatedWorkId:"ID",
		url:"URL",
		title:"String",
		category:"String",
		addedOn:"DateTime",
		addedBy:"User"
	},
	JiraVersionRelatedWorkConfluenceReleaseNotes:{
		relatedWorkId:"ID",
		url:"URL",
		title:"String",
		category:"String",
		addedOn:"DateTime",
		addedBy:"User",
		assignee:"User"
	},
	JiraVersionRelatedWorkConnection:{
		pageInfo:"PageInfo",
		edges:"JiraVersionRelatedWorkEdge"
	},
	JiraVersionRelatedWorkEdge:{
		cursor:"String",
		node:"JiraVersionRelatedWork"
	},
	JiraVersionRelatedWorkGenericLink:{
		relatedWorkId:"ID",
		url:"URL",
		title:"String",
		category:"String",
		addedOn:"DateTime",
		addedBy:"User",
		assignee:"User"
	},
	JiraVersionRelatedWorkNativeReleaseNotes:{
		addedOn:"DateTime",
		category:"String",
		title:"String",
		assignee:"User"
	},
	JiraVersionRelatedWorkV2:{
		"...on JiraVersionRelatedWorkConfluenceReleaseNotes": "JiraVersionRelatedWorkConfluenceReleaseNotes",
		"...on JiraVersionRelatedWorkGenericLink": "JiraVersionRelatedWorkGenericLink",
		"...on JiraVersionRelatedWorkNativeReleaseNotes": "JiraVersionRelatedWorkNativeReleaseNotes",
		category:"String",
		title:"String",
		assignee:"User"
	},
	JiraVersionRelatedWorkV2Connection:{
		pageInfo:"PageInfo",
		edges:"JiraVersionRelatedWorkV2Edge"
	},
	JiraVersionRelatedWorkV2Edge:{
		cursor:"String",
		node:"JiraVersionRelatedWorkV2"
	},
	JiraVersionResult:{
		"...on JiraVersion":"JiraVersion",
		"...on QueryError":"QueryError"
	},
	JiraVersionWarningConfig:{
		openPullRequest:"JiraVersionWarningConfigState",
		openReview:"JiraVersionWarningConfigState",
		unreviewedCode:"JiraVersionWarningConfigState",
		failingBuild:"JiraVersionWarningConfigState",
		canEdit:"Boolean"
	},
	JiraVote:{
		hasVoted:"Boolean",
		count:"Long"
	},
	JiraVotesField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		vote:"JiraVote",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraWatch:{
		isWatching:"Boolean",
		count:"Long"
	},
	JiraWatchesField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		watch:"JiraWatch",
		fieldConfig:"JiraFieldConfig",
		userFieldConfig:"JiraUserFieldConfig"
	},
	JiraWorkCategory:{
		value:"String"
	},
	JiraWorkCategoryField:{
		id:"ID",
		fieldId:"String",
		aliasFieldId:"ID",
		type:"String",
		name:"String",
		description:"String",
		workCategory:"JiraWorkCategory",
		fieldConfig:"JiraFieldConfig"
	},
	JiraWorkLogConnection:{
		indicativeCount:"Int",
		pageInfo:"PageInfo",
		edges:"JiraWorkLogEdge"
	},
	JiraWorkLogEdge:{
		node:"JiraWorklog",
		cursor:"String"
	},
	JiraWorkManagementProjectNavigationMetadata:{
		boardName:"String"
	},
	JiraWorklog:{
		id:"ID",
		worklogId:"ID",
		author:"User",
		updateAuthor:"User",
		timeSpent:"JiraEstimate",
		remainingEstimate:"JiraEstimate",
		created:"DateTime",
		updated:"DateTime",
		startDate:"DateTime",
		permissionLevel:"JiraPermissionLevel",
		workDescription:"JiraRichText"
	},
	JswMutation:{
		deleteCard:"DeleteCardOutput"
	},
	JswQuery:{
		boardScope:"BoardScope"
	},
	LabelUsage:{
		label:"String",
		count:"Int"
	},
	LocalizationContext:{
		"...on AtlassianAccountUser": "AtlassianAccountUser",
		"...on CustomerUser": "CustomerUser",
		zoneinfo:"String",
		locale:"String"
	},
	Long: `scalar.Long` as const,
	MarketplaceApp:{
		appId:"ID",
		appKey:"String",
		name:"String",
		partnerId:"ID",
		partner:"MarketplacePartner",
		entityStatus:"MarketplaceEntityStatus",
		createdAt:"DateTime",
		listingStatus:"MarketplaceListingStatus",
		productHostingOptions:"AtlassianProductHostingType",
		versions:"MarketplaceAppVersionConnection",
		tagline:"String",
		summary:"String",
		logo:"MarketplaceListingImage",
		privacyPolicyUrl:"URL",
		isAtlassianCommunityEnabled:"Boolean",
		slug:"String",
		reviewSummary:"MarketplaceAppReviewSummary",
		distribution:"MarketplaceAppDistribution",
		watchersInfo:"MarketplaceAppWatchersInfo",
		issueTrackerUrl:"URL",
		supportTicketSystemUrl:"URL",
		statusPageUrl:"URL",
		forumsUrl:"URL",
		wikiUrl:"URL",
		programs:"MarketplaceAppPrograms",
		marketingLabels:"String",
		googleAnalyticsId:"String",
		googleAnalytics4Id:"String",
		segmentWriteKey:"String",
		categories:"MarketplaceAppCategory",
		jsdWidgetKey:"String"
	},
	MarketplaceAppCategory:{
		name:"String"
	},
	MarketplaceAppConnection:{
		edges:"MarketplaceAppConnectionEdge",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	MarketplaceAppConnectionEdge:{
		cursor:"String",
		node:"MarketplaceApp"
	},
	MarketplaceAppDeployment:{
		"...on MarketplaceCloudAppDeployment": "MarketplaceCloudAppDeployment",
		"...on MarketplaceConnectAppDeployment": "MarketplaceConnectAppDeployment",
		"...on MarketplaceInstructionalAppDeployment": "MarketplaceInstructionalAppDeployment",
		"...on MarketplacePlugins1AppDeployment": "MarketplacePlugins1AppDeployment",
		"...on MarketplacePlugins2AppDeployment": "MarketplacePlugins2AppDeployment",
		"...on MarketplaceWorkflowAppDeployment": "MarketplaceWorkflowAppDeployment",
		compatibleProducts:"CompatibleAtlassianProduct"
	},
	MarketplaceAppDeploymentStep:{
		instruction:"String",
		screenshot:"MarketplaceListingImage"
	},
	MarketplaceAppDistribution:{
		downloadCount:"Int",
		installationCount:"Int",
		isPreinstalledInServerDC:"Boolean",
		isPreinstalledInCloud:"Boolean"
	},
	MarketplaceAppPrograms:{
		cloudFortified:"MarketplaceCloudFortified",
		bugBountyParticipant:"MarketplaceBugBountyParticipant"
	},
	MarketplaceAppReviewSummary:{
		score:"Float",
		rating:"Float",
		count:"Int"
	},
	MarketplaceAppVersion:{
		buildNumber:"ID",
		version:"String",
		isSupported:"Boolean",
		moreDetails:"String",
		youtubeId:"String",
		highlights:"MarketplaceListingHighlight",
		screenshots:"MarketplaceListingScreenshot",
		heroImage:"MarketplaceListingImage",
		paymentModel:"MarketplaceAppPaymentModel",
		productHostingOptions:"AtlassianProductHostingType",
		visibility:"MarketplaceAppVersionVisibility",
		deployment:"MarketplaceAppDeployment",
		licenseType:"MarketplaceAppVersionLicenseType",
		sourceCodeLicenseUrl:"URL",
		documentationUrl:"URL",
		endUserLicenseAgreementUrl:"URL",
		purchaseUrl:"URL",
		learnMoreUrl:"URL",
		releaseDate:"DateTime",
		releaseSummary:"String",
		releaseNotes:"String",
		releaseNotesUrl:"URL"
	},
	MarketplaceAppVersionConnection:{
		edges:"MarketplaceAppVersionEdge",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	MarketplaceAppVersionEdge:{
		cursor:"String",
		node:"MarketplaceAppVersion"
	},
	MarketplaceAppVersionLicenseType:{
		id:"ID",
		name:"String",
		link:"URL"
	},
	MarketplaceAppWatchersInfo:{
		isUserWatchingApp:"Boolean",
		watchersCount:"Int"
	},
	MarketplaceBugBountyParticipant:{
		cloud:"MarketplaceBugBountyProgramHostingStatus",
		server:"MarketplaceBugBountyProgramHostingStatus",
		dataCenter:"MarketplaceBugBountyProgramHostingStatus"
	},
	MarketplaceBugBountyProgramHostingStatus:{
		status:"MarketplaceProgramStatus"
	},
	MarketplaceCloudAppDeployment:{
		compatibleProducts:"CompatibleAtlassianProduct",
		cloudAppId:"ID",
		cloudAppEnvironmentId:"ID",
		cloudAppVersionId:"ID",
		scopes:"CloudAppScope"
	},
	MarketplaceCloudFortified:{
		status:"MarketplaceCloudFortifiedStatus",
		programStatus:"MarketplaceProgramStatus"
	},
	MarketplaceConnectAppDeployment:{
		compatibleProducts:"CompatibleAtlassianProduct",
		isDescriptorFileAvailable:"Boolean",
		scopes:"ConnectAppScope"
	},
	MarketplaceImageFile:{
		id:"String",
		width:"Int",
		height:"Int"
	},
	MarketplaceInstructionalAppDeployment:{
		compatibleProducts:"CompatibleAtlassianProduct",
		isBinaryUrlAvailable:"Boolean",
		instructions:"MarketplaceAppDeploymentStep"
	},
	MarketplaceListingHighlight:{
		title:"String",
		summary:"String",
		screenshot:"MarketplaceListingScreenshot",
		croppedScreenshot:"MarketplaceListingImage",
		caption:"String"
	},
	MarketplaceListingImage:{
		original:"MarketplaceImageFile",
		scaled:"MarketplaceImageFile",
		highResolution:"MarketplaceImageFile"
	},
	MarketplaceListingScreenshot:{
		caption:"String",
		image:"MarketplaceListingImage"
	},
	MarketplacePartner:{
		id:"ID",
		name:"String",
		slug:"String",
		contactDetails:"MarketplacePartnerContactDetails",
		address:"MarketplacePartnerAddress",
		support:"MarketplacePartnerSupport",
		programs:"MarketplacePartnerPrograms",
		partnerType:"MarketplacePartnerType",
		partnerTier:"MarketplacePartnerTier",
		logo:"MarketplaceListingImage",
		isUserContact:"Boolean"
	},
	MarketplacePartnerAddress:{
		line1:"String",
		line2:"String",
		city:"String",
		state:"String",
		country:"String",
		postalCode:"String"
	},
	MarketplacePartnerContactDetails:{
		emailId:"String",
		phoneNumber:"String",
		homepageUrl:"String",
		otherContactDetails:"String"
	},
	MarketplacePartnerPrograms:{
		isCloudAppSecuritySelfAssessmentDone:"Boolean"
	},
	MarketplacePartnerSupport:{
		contactDetails:"MarketplacePartnerSupportContact",
		availability:"MarketplacePartnerSupportAvailability"
	},
	MarketplacePartnerSupportAvailability:{
		daysOfWeek:"Int",
		isAvailable24Hours:"Boolean",
		startTime:"String",
		endTime:"String",
		timezone:"String",
		timezoneOffset:"String",
		holidays:"MarketplacePartnerSupportHoliday"
	},
	MarketplacePartnerSupportContact:{
		emailId:"String",
		phoneNumber:"String",
		websiteUrl:"URL"
	},
	MarketplacePartnerSupportHoliday:{
		title:"String",
		holidayFrequency:"MarketplacePartnerSupportHolidayFrequency",
		date:"String"
	},
	MarketplacePartnerTier:{
		type:"MarketplacePartnerTierType",
		updatedDate:"String"
	},
	MarketplacePlugins1AppDeployment:{
		compatibleProducts:"CompatibleAtlassianProduct",
		isDeploymentArtifactAvailable:"Boolean"
	},
	MarketplacePlugins2AppDeployment:{
		compatibleProducts:"CompatibleAtlassianProduct",
		isDeploymentArtifactAvailable:"Boolean"
	},
	MarketplacePricingItem:{
		floor:"Int",
		ceiling:"Int",
		amount:"Float",
		policy:"MarketplacePricingTierPolicy"
	},
	MarketplacePricingPlan:{
		billingCycle:"MarketplaceBillingCycle",
		currency:"String",
		status:"MarketplacePricingPlanStatus",
		tieredPricing:"MarketplaceTieredPricing"
	},
	MarketplaceSupportedAtlassianProduct:{
		id:"ID",
		name:"String",
		hostingOptions:"AtlassianProductHostingType"
	},
	MarketplaceTieredPricing:{
		tierType:"MarketplacePricingTierType",
		tiersMode:"MarketplacePricingTierMode",
		items:"MarketplacePricingItem"
	},
	MarketplaceUser:{
		id:"ID",
		appPermissions:"MarketplaceAppPermission"
	},
	MarketplaceWorkflowAppDeployment:{
		compatibleProducts:"CompatibleAtlassianProduct",
		isWorkflowDataFileAvailable:"Boolean"
	},
	MigrationKeys:{
		jira:"String",
		confluence:"String"
	},
	MoveCardOutput:{
		issuesWereTransitioned:"Boolean",
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	MoveSprintDownResponse:{
		boardScope:"BoardScope",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	MoveSprintUpResponse:{
		boardScope:"BoardScope",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	Mutation:{
		customerSupport:"SupportRequestCatalogMutationApi",
		createJiraProjectAndDevOpsToolRelationship:"JiraProjectAndDevOpsToolRelationshipCreatePayload",
		deleteJiraProjectAndDevOpsToolRelationship:"JiraProjectAndDevOpsToolRelationshipDeletePayload",
		deleteDevOpsToolRelationshipsForJiraProject:"JiraProjectAndDevOpsToolRelationshipDeleteForJiraProjectPayload",
		createReleaseNote:"ContentPlatformReleaseNote",
		publishReleaseNote:"ContentPlatformReleaseNote",
		updateReleaseNote:"ContentPlatformReleaseNote",
		devOps:"DevOpsMutation",
		createDevOpsServiceAndOpsgenieTeamRelationship:"CreateDevOpsServiceAndOpsgenieTeamRelationshipPayload",
		updateDevOpsServiceAndOpsgenieTeamRelationship:"UpdateDevOpsServiceAndOpsgenieTeamRelationshipPayload",
		deleteDevOpsServiceAndOpsgenieTeamRelationship:"DeleteDevOpsServiceAndOpsgenieTeamRelationshipPayload",
		updateDevOpsContainerRelationshipEntityProperties:"UpdateDevOpsContainerRelationshipEntityPropertiesPayload",
		deleteDevOpsContainerRelationshipEntityProperties:"DeleteDevOpsContainerRelationshipEntityPropertiesPayload",
		createDevOpsServiceAndJiraProjectRelationship:"CreateDevOpsServiceAndJiraProjectRelationshipPayload",
		updateDevOpsServiceAndJiraProjectRelationship:"UpdateDevOpsServiceAndJiraProjectRelationshipPayload",
		deleteDevOpsServiceAndJiraProjectRelationship:"DeleteDevOpsServiceAndJiraProjectRelationshipPayload",
		createDevOpsServiceAndRepositoryRelationship:"CreateDevOpsServiceAndRepositoryRelationshipPayload",
		updateDevOpsServiceAndRepositoryRelationship:"UpdateDevOpsServiceAndRepositoryRelationshipPayload",
		deleteDevOpsServiceAndRepositoryRelationship:"DeleteDevOpsServiceAndRepositoryRelationshipPayload",
		createJiraProjectAndOpsgenieTeamRelationship:"CreateJiraProjectAndOpsgenieTeamRelationshipPayload",
		updateJiraProjectAndOpsgenieTeamRelationship:"UpdateJiraProjectAndOpsgenieTeamRelationshipPayload",
		deleteJiraProjectAndOpsgenieTeamRelationship:"DeleteJiraProjectAndOpsgenieTeamRelationshipPayload",
		createJiraProjectAndRepositoryRelationship:"CreateJiraProjectAndRepositoryRelationshipPayload",
		updateJiraProjectAndRepositoryRelationship:"UpdateJiraProjectAndRepositoryRelationshipPayload",
		deleteJiraProjectAndRepositoryRelationship:"DeleteJiraProjectAndRepositoryRelationshipPayload",
		jira:"JiraMutation",
		appStorage:"AppStorageMutation",
		confluence:"ConfluenceMutationApi",
		updatePolarisTermsConsent:"UpdatePolarisTermsConsentPayload",
		polaris:"PolarisMutationNamespace",
		createPolarisAnonymousVisitorHash:"CreatePolarisAnonymousVisitorHashPayload",
		deletePolarisAnonymousVisitorHash:"DeletePolarisAnonymousVisitorHashPayload",
		resolvePolarisObject:"ResolvePolarisObjectPayload",
		invokePolarisObject:"InvokePolarisObjectPayload",
		createPolarisComment:"CreatePolarisCommentPayload",
		updatePolarisComment:"UpdatePolarisCommentPayload",
		createPolarisStandardField:"CreatePolarisStandardFieldPayload",
		createPolarisCalculatedField:"CreatePolarisCalculatedFieldPayload",
		updatePolarisCalculatedField:"UpdatePolarisCalculatedFieldPayload",
		updatePolarisFieldDescription:"UpdatePolarisFieldDescriptionPayload",
		updatePolarisFieldEmoji:"UpdatePolarisFieldEmojiPayload",
		deletePolarisField:"DeletePolarisFieldPayload",
		updatePolarisFieldOptionWeight:"UpdatePolarisFieldOptionWeightPayload",
		deletePolarisFieldOption:"DeletePolarisFieldOptionPayload",
		createPolarisDecoration:"CreatePolarisDecorationPayload",
		updatePolarisDecoration:"UpdatePolarisDecorationPayload",
		deletePolarisDecoration:"DeletePolarisDecorationPayload",
		createPolarisIdeaTemplate:"CreatePolarisIdeaTemplatePayload",
		updatePolarisIdeaTemplate:"UpdatePolarisIdeaTemplatePayload",
		deletePolarisIdeaTemplate:"DeletePolarisIdeaTemplatePayload",
		updatePolarisIdea:"UpdatePolarisIdeaPayload",
		createPolarisInsight:"CreatePolarisInsightPayload",
		updatePolarisInsight:"UpdatePolarisInsightPayload",
		deletePolarisInsight:"DeletePolarisInsightPayload",
		copyPolarisInsights:"CopyPolarisInsightsPayload",
		archivePolarisInsights:"ArchivePolarisInsightsPayload",
		unarchivePolarisInsights:"UnarchivePolarisInsightsPayload",
		createPolarisPlay:"CreatePolarisPlayPayload",
		updatePolarisPlay:"UpdatePolarisPlayPayload",
		createPolarisPlayContribution:"CreatePolarisPlayContributionPayload",
		updatePolarisPlayContribution:"UpdatePolarisPlayContributionPayload",
		deletePolarisPlayContribution:"DeletePolarisPlayContributionPayload",
		createPolarisInsightFromPlayContribution:"CreatePolarisInsightPayload",
		configurePolarisRefresh:"ConfigurePolarisRefreshPayload",
		applyPolarisProjectTemplate:"ApplyPolarisProjectTemplatePayload",
		setPolarisProjectOnboarded:"SetPolarisProjectOnboardedPayload",
		setPolarisSelectedDeliveryProject:"SetPolarisSelectedDeliveryProjectPayload",
		refreshPolarisSnippets:"RefreshPolarisSnippetsPayload",
		setPolarisSnippetPropertiesConfig:"SetPolarisSnippetPropertiesConfigPayload",
		createPolarisView:"CreatePolarisViewPayload",
		updatePolarisView:"UpdatePolarisViewPayload",
		updatePolarisViewRankV2:"UpdatePolarisViewRankV2Payload",
		updatePolarisViewArrangementInfo:"UpdatePolarisViewArrangementInfoPayload",
		deletePolarisView:"DeletePolarisViewPayload",
		updatePolarisViewLastViewedTimestamp:"UpdatePolarisViewTimestampPayload",
		createPolarisViewSet:"CreatePolarisViewSetPayload",
		updatePolarisViewSet:"UpdatePolarisViewSetPayload",
		deletePolarisViewSet:"DeletePolarisViewSetPayload",
		createAppTunnels:"CreateAppTunnelResponse",
		deleteAppTunnels:"GenericMutationResponse",
		invokeExtension:"InvokeExtensionResponse",
		invokeAuxEffects:"InvokeAuxEffectsResponse",
		userAuthTokenForExtension:"UserAuthTokenForExtensionResponse",
		createWebTriggerUrl:"CreateWebTriggerUrlResponse",
		deleteWebTriggerUrl:"DeleteWebTriggerUrlResponse",
		watchMarketplaceApp:"WatchMarketplaceAppPayload",
		unwatchMarketplaceApp:"UnwatchMarketplaceAppPayload",
		compass:"CompassCatalogMutationApi",
		shepherd:"ShepherdMutation",
		directory:"DirectoryMutation",
		helpObjectStore:"HelpObjectStoreMutationApi",
		jsw:"JswMutation",
		createColumn:"CreateColumnOutput",
		setColumnName:"SetColumnNameOutput",
		rankColumn:"RankColumnOutput",
		setColumnLimit:"SetColumnLimitOutput",
		deleteColumn:"DeleteColumnOutput",
		startSprint:"SprintResponse",
		createSprint:"CreateSprintResponse",
		completeSprint:"CompleteSprintResponse",
		deleteSprint:"MutationResponse",
		moveSprintUp:"MoveSprintUpResponse",
		moveSprintDown:"MoveSprintDownResponse",
		editSprint:"SprintResponse",
		setUserSwimlaneStrategy:"SetSwimlaneStrategyResponse",
		setSwimlaneStrategy:"SetSwimlaneStrategyResponse",
		setEstimationType:"GenericMutationResponse",
		createCustomFilter:"CustomFilterCreateOutput",
		updateCustomFilter:"CustomFilterCreateOutput",
		deleteCustomFilter:"GenericMutationResponse",
		boardCardMove:"MoveCardOutput",
		assignIssueParent:"AssignIssueParentOutput",
		unassignIssueParent:"UnassignIssueParentOutput",
		createCardParent:"CardParentCreateOutput",
		rankCardParent:"GenericMutationResponse",
		setIssueMediaVisibility:"SetIssueMediaVisibilityOutput",
		toggleBoardFeature:"ToggleBoardFeatureOutput",
		setBoardEstimationType:"ToggleBoardFeatureOutput",
		planModeCardMove:"MoveCardOutput",
		createApp:"CreateAppResponse",
		updateAppDetails:"UpdateAppDetailsResponse",
		deleteApp:"DeleteAppResponse",
		updateAtlassianOAuthClient:"UpdateAtlassianOAuthClientResponse",
		ecosystem:"EcosystemMutation",
		updateNavbarConnectionStateTabSeen:"DevOpsToolUpdateNavbarConnectionStateTabSeenPayload",
		createDevOpsService:"CreateDevOpsServicePayload",
		updateDevOpsService:"UpdateDevOpsServicePayload",
		deleteDevOpsService:"DeleteDevOpsServicePayload",
		createDevOpsServiceRelationship:"CreateDevOpsServiceRelationshipPayload",
		updateDevOpsServiceRelationship:"UpdateDevOpsServiceRelationshipPayload",
		deleteDevOpsServiceRelationship:"DeleteDevOpsServiceRelationshipPayload",
		updateDevOpsServiceEntityProperties:"UpdateDevOpsServiceEntityPropertiesPayload",
		deleteDevOpsServiceEntityProperties:"DeleteDevOpsServiceEntityPropertiesPayload",
		updateDeveloperLogAccess:"UpdateDeveloperLogAccessPayload",
		roadmaps:"RoadmapsMutation",
		virtualAgent:"VirtualAgentMutationApi",
		installApp:"AppInstallationResponse",
		uninstallApp:"AppUninstallationResponse",
		upgradeApp:"AppInstallationUpgradeResponse",
		subscribeToApp:"AppSubscribePayload",
		unsubscribeFromApp:"AppUnsubscribePayload",
		createAppDeploymentUrl:"CreateAppDeploymentUrlResponse",
		createHostedResourceUploadUrl:"CreateHostedResourceUploadUrlPayload",
		setExternalAuthCredentials:"SetExternalAuthCredentialsPayload",
		setAppEnvironmentVariable:"SetAppEnvironmentVariablePayload",
		deleteAppEnvironmentVariable:"DeleteAppEnvironmentVariablePayload",
		createAppDeployment:"CreateAppDeploymentResponse",
		jiraOAuthApps:"JiraOAuthAppsMutation",
		helpCenter:"HelpCenterMutationApi",
		deleteConfluenceSpaceRelationshipsForJiraProject:"JiraProjectAndConfluenceSpaceDeleteRelationshipForJiraProjectPayload"
	},
	MutationError:{
		message:"String",
		extensions:"MutationErrorExtension"
	},
	MutationErrorExtension:{
		"...on AriGraphRelationshipsMutationErrorExtension": "AriGraphRelationshipsMutationErrorExtension",
		"...on GenericMutationErrorExtension": "GenericMutationErrorExtension",
		"...on InvokeExtensionPayloadErrorExtension": "InvokeExtensionPayloadErrorExtension",
		"...on JiraFilterNameMutationErrorExtension": "JiraFilterNameMutationErrorExtension",
		"...on RoadmapMutationErrorExtension": "RoadmapMutationErrorExtension",
		statusCode:"Int",
		errorType:"String"
	},
	MutationResponse:{
		"...on AssignIssueParentOutput": "AssignIssueParentOutput",
		"...on CardParentCreateOutput": "CardParentCreateOutput",
		"...on CompleteSprintResponse": "CompleteSprintResponse",
		"...on CreateColumnOutput": "CreateColumnOutput",
		"...on CreateSprintResponse": "CreateSprintResponse",
		"...on CreateWebTriggerUrlResponse": "CreateWebTriggerUrlResponse",
		"...on CustomFilterCreateOutput": "CustomFilterCreateOutput",
		"...on DeleteColumnOutput": "DeleteColumnOutput",
		"...on DeleteWebTriggerUrlResponse": "DeleteWebTriggerUrlResponse",
		"...on MoveSprintDownResponse": "MoveSprintDownResponse",
		"...on MoveSprintUpResponse": "MoveSprintUpResponse",
		"...on RankColumnOutput": "RankColumnOutput",
		"...on SetColumnLimitOutput": "SetColumnLimitOutput",
		"...on SetColumnNameOutput": "SetColumnNameOutput",
		"...on SetIssueMediaVisibilityOutput": "SetIssueMediaVisibilityOutput",
		"...on SetSwimlaneStrategyResponse": "SetSwimlaneStrategyResponse",
		"...on SprintResponse": "SprintResponse",
		"...on ToggleBoardFeatureOutput": "ToggleBoardFeatureOutput",
		"...on UnassignIssueParentOutput": "UnassignIssueParentOutput",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	MyActivities:{
		all:"ActivitiesConnection",
		workedOn:"ActivitiesConnection",
		viewed:"ActivitiesConnection"
	},
	MyActivity:{
		all:"ActivityConnection",
		workedOn:"ActivityConnection",
		viewed:"ActivityConnection"
	},
	Node:{
		"...on ActivitiesEvent": "ActivitiesEvent",
		"...on ActivitiesItem": "ActivitiesItem",
		"...on ActivitiesObject": "ActivitiesObject",
		"...on ActivityNode": "ActivityNode",
		"...on AppLog": "AppLog",
		"...on AvocadoAnswer": "AvocadoAnswer",
		"...on AvocadoQuestion": "AvocadoQuestion",
		"...on BasicBoardFeatureView": "BasicBoardFeatureView",
		"...on BitbucketRepository": "BitbucketRepository",
		"...on BitbucketWorkspace": "BitbucketWorkspace",
		"...on BoardFeatureGroup": "BoardFeatureGroup",
		"...on BoardScope": "BoardScope",
		"...on CompassComponent": "CompassComponent",
		"...on CompassCustomBooleanFieldDefinition": "CompassCustomBooleanFieldDefinition",
		"...on CompassCustomFieldDefinition": "CompassCustomFieldDefinition",
		"...on CompassCustomNumberFieldDefinition": "CompassCustomNumberFieldDefinition",
		"...on CompassCustomTextFieldDefinition": "CompassCustomTextFieldDefinition",
		"...on CompassScorecard": "CompassScorecard",
		"...on DeploymentSummary": "DeploymentSummary",
		"...on DevOpsService": "DevOpsService",
		"...on DevOpsServiceAndJiraProjectRelationship": "DevOpsServiceAndJiraProjectRelationship",
		"...on DevOpsServiceAndOpsgenieTeamRelationship": "DevOpsServiceAndOpsgenieTeamRelationship",
		"...on DevOpsServiceAndRepositoryRelationship": "DevOpsServiceAndRepositoryRelationship",
		"...on DevOpsServiceRelationship": "DevOpsServiceRelationship",
		"...on DevOpsTool": "DevOpsTool",
		"...on DevOpsToolContainer": "DevOpsToolContainer",
		"...on DevOpsToolNamespace": "DevOpsToolNamespace",
		"...on EstimationBoardFeatureView": "EstimationBoardFeatureView",
		"...on HelpCenter": "HelpCenter",
		"...on HelpObjectStoreArticle": "HelpObjectStoreArticle",
		"...on HelpObjectStoreHelpObject": "HelpObjectStoreHelpObject",
		"...on HelpObjectStoreRequestForm": "HelpObjectStoreRequestForm",
		"...on JiraAffectedServicesField": "JiraAffectedServicesField",
		"...on JiraApplicationProperty": "JiraApplicationProperty",
		"...on JiraAssetField": "JiraAssetField",
		"...on JiraAtlassianTeamField": "JiraAtlassianTeamField",
		"...on JiraAttachmentsField": "JiraAttachmentsField",
		"...on JiraBooleanField": "JiraBooleanField",
		"...on JiraCMDBField": "JiraCMDBField",
		"...on JiraCascadingSelectField": "JiraCascadingSelectField",
		"...on JiraCheckboxesField": "JiraCheckboxesField",
		"...on JiraCmdbObject": "JiraCmdbObject",
		"...on JiraColorField": "JiraColorField",
		"...on JiraComponent": "JiraComponent",
		"...on JiraComponentsField": "JiraComponentsField",
		"...on JiraConnectMultipleSelectField": "JiraConnectMultipleSelectField",
		"...on JiraConnectNumberField": "JiraConnectNumberField",
		"...on JiraConnectReadOnlyField": "JiraConnectReadOnlyField",
		"...on JiraConnectRichTextField": "JiraConnectRichTextField",
		"...on JiraConnectSingleSelectField": "JiraConnectSingleSelectField",
		"...on JiraConnectTextField": "JiraConnectTextField",
		"...on JiraCustomFilter": "JiraCustomFilter",
		"...on JiraDatePickerField": "JiraDatePickerField",
		"...on JiraDateTimePickerField": "JiraDateTimePickerField",
		"...on JiraDefaultGrantTypeValue": "JiraDefaultGrantTypeValue",
		"...on JiraDevSummaryField": "JiraDevSummaryField",
		"...on JiraEpicLinkField": "JiraEpicLinkField",
		"...on JiraFilter": "JiraFilter",
		"...on JiraFilterEmailSubscription": "JiraFilterEmailSubscription",
		"...on JiraFlagField": "JiraFlagField",
		"...on JiraForgeDatetimeField": "JiraForgeDatetimeField",
		"...on JiraForgeGroupField": "JiraForgeGroupField",
		"...on JiraForgeGroupsField": "JiraForgeGroupsField",
		"...on JiraForgeNumberField": "JiraForgeNumberField",
		"...on JiraForgeObjectField": "JiraForgeObjectField",
		"...on JiraForgeStringField": "JiraForgeStringField",
		"...on JiraForgeStringsField": "JiraForgeStringsField",
		"...on JiraForgeUserField": "JiraForgeUserField",
		"...on JiraForgeUsersField": "JiraForgeUsersField",
		"...on JiraGroup": "JiraGroup",
		"...on JiraGroupGrantTypeValue": "JiraGroupGrantTypeValue",
		"...on JiraIssue": "JiraIssue",
		"...on JiraIssueField": "JiraIssueField",
		"...on JiraIssueFieldGrantTypeValue": "JiraIssueFieldGrantTypeValue",
		"...on JiraIssueLinkField": "JiraIssueLinkField",
		"...on JiraIssueLinkTypeRelation": "JiraIssueLinkTypeRelation",
		"...on JiraIssueRestrictionField": "JiraIssueRestrictionField",
		"...on JiraIssueSearchView": "JiraIssueSearchView",
		"...on JiraIssueType": "JiraIssueType",
		"...on JiraIssueTypeField": "JiraIssueTypeField",
		"...on JiraLabelsField": "JiraLabelsField",
		"...on JiraMultipleGroupPickerField": "JiraMultipleGroupPickerField",
		"...on JiraMultipleSelectField": "JiraMultipleSelectField",
		"...on JiraMultipleSelectUserPickerField": "JiraMultipleSelectUserPickerField",
		"...on JiraMultipleVersionPickerField": "JiraMultipleVersionPickerField",
		"...on JiraNumberField": "JiraNumberField",
		"...on JiraOption": "JiraOption",
		"...on JiraOriginalTimeEstimateField": "JiraOriginalTimeEstimateField",
		"...on JiraParentIssueField": "JiraParentIssueField",
		"...on JiraPeopleField": "JiraPeopleField",
		"...on JiraPermissionScheme": "JiraPermissionScheme",
		"...on JiraPlatformAttachment": "JiraPlatformAttachment",
		"...on JiraPlatformComment": "JiraPlatformComment",
		"...on JiraPriority": "JiraPriority",
		"...on JiraPriorityField": "JiraPriorityField",
		"...on JiraProformaFormsField": "JiraProformaFormsField",
		"...on JiraProject": "JiraProject",
		"...on JiraProjectAndDevOpsToolRelationship": "JiraProjectAndDevOpsToolRelationship",
		"...on JiraProjectAndOpsgenieTeamRelationship": "JiraProjectAndOpsgenieTeamRelationship",
		"...on JiraProjectAndRepositoryRelationship": "JiraProjectAndRepositoryRelationship",
		"...on JiraProjectCategory": "JiraProjectCategory",
		"...on JiraProjectField": "JiraProjectField",
		"...on JiraProjectRoleGrantTypeValue": "JiraProjectRoleGrantTypeValue",
		"...on JiraRadioSelectField": "JiraRadioSelectField",
		"...on JiraResolution": "JiraResolution",
		"...on JiraResolutionField": "JiraResolutionField",
		"...on JiraRichTextField": "JiraRichTextField",
		"...on JiraRole": "JiraRole",
		"...on JiraSecurityLevel": "JiraSecurityLevel",
		"...on JiraSecurityLevelField": "JiraSecurityLevelField",
		"...on JiraServiceManagementActiveApproval": "JiraServiceManagementActiveApproval",
		"...on JiraServiceManagementApprovalField": "JiraServiceManagementApprovalField",
		"...on JiraServiceManagementAttachment": "JiraServiceManagementAttachment",
		"...on JiraServiceManagementComment": "JiraServiceManagementComment",
		"...on JiraServiceManagementCompletedApproval": "JiraServiceManagementCompletedApproval",
		"...on JiraServiceManagementDateTimeField": "JiraServiceManagementDateTimeField",
		"...on JiraServiceManagementIncidentLinkingField": "JiraServiceManagementIncidentLinkingField",
		"...on JiraServiceManagementMajorIncidentField": "JiraServiceManagementMajorIncidentField",
		"...on JiraServiceManagementMultipleSelectUserPickerField": "JiraServiceManagementMultipleSelectUserPickerField",
		"...on JiraServiceManagementOrganizationField": "JiraServiceManagementOrganizationField",
		"...on JiraServiceManagementPeopleField": "JiraServiceManagementPeopleField",
		"...on JiraServiceManagementRequestFeedbackField": "JiraServiceManagementRequestFeedbackField",
		"...on JiraServiceManagementRequestLanguageField": "JiraServiceManagementRequestLanguageField",
		"...on JiraServiceManagementRequestType": "JiraServiceManagementRequestType",
		"...on JiraServiceManagementRequestTypeField": "JiraServiceManagementRequestTypeField",
		"...on JiraServiceManagementRespondersField": "JiraServiceManagementRespondersField",
		"...on JiraSingleGroupPickerField": "JiraSingleGroupPickerField",
		"...on JiraSingleLineTextField": "JiraSingleLineTextField",
		"...on JiraSingleSelectField": "JiraSingleSelectField",
		"...on JiraSingleSelectUserPickerField": "JiraSingleSelectUserPickerField",
		"...on JiraSingleVersionPickerField": "JiraSingleVersionPickerField",
		"...on JiraSprint": "JiraSprint",
		"...on JiraSprintField": "JiraSprintField",
		"...on JiraStatus": "JiraStatus",
		"...on JiraStatusCategory": "JiraStatusCategory",
		"...on JiraStatusCategoryField": "JiraStatusCategoryField",
		"...on JiraStatusField": "JiraStatusField",
		"...on JiraSubtasksField": "JiraSubtasksField",
		"...on JiraSystemFilter": "JiraSystemFilter",
		"...on JiraTeam": "JiraTeam",
		"...on JiraTeamField": "JiraTeamField",
		"...on JiraTeamViewField": "JiraTeamViewField",
		"...on JiraTimeTrackingField": "JiraTimeTrackingField",
		"...on JiraUrlField": "JiraUrlField",
		"...on JiraUserGrantTypeValue": "JiraUserGrantTypeValue",
		"...on JiraVersion": "JiraVersion",
		"...on JiraVotesField": "JiraVotesField",
		"...on JiraWatchesField": "JiraWatchesField",
		"...on JiraWorkCategoryField": "JiraWorkCategoryField",
		"...on JiraWorklog": "JiraWorklog",
		"...on OpsgenieTeam": "OpsgenieTeam",
		"...on ShepherdAlert": "ShepherdAlert",
		"...on ShepherdEmailSubscription": "ShepherdEmailSubscription",
		"...on ShepherdSlackSubscription": "ShepherdSlackSubscription",
		"...on ShepherdSubscription": "ShepherdSubscription",
		"...on ShepherdWebhookSubscription": "ShepherdWebhookSubscription",
		"...on Team": "Team",
		"...on ThirdPartySecurityContainer": "ThirdPartySecurityContainer",
		"...on ThirdPartySecurityWorkspace": "ThirdPartySecurityWorkspace",
		"...on ToolchainContainer": "ToolchainContainer",
		"...on TownsquareComment": "TownsquareComment",
		"...on TownsquareGoal": "TownsquareGoal",
		"...on TownsquareHelpPointer": "TownsquareHelpPointer",
		"...on TownsquareProject": "TownsquareProject",
		"...on TownsquareTag": "TownsquareTag",
		"...on TownsquareTeam": "TownsquareTeam",
		"...on VirtualAgentConfiguration": "VirtualAgentConfiguration",
		"...on VirtualAgentIntentProjection": "VirtualAgentIntentProjection",
		"...on VirtualAgentIntentQuestionProjection": "VirtualAgentIntentQuestionProjection",
		"...on VirtualAgentIntentRuleProjection": "VirtualAgentIntentRuleProjection",
		"...on WebTriggerUrl": "WebTriggerUrl",
		id:"ID"
	},
	OAuthClientsAccountGrant:{
		clientId:"String",
		scopes:"String"
	},
	OAuthClientsAccountGrantConnection:{
		edges:"OAuthClientsAccountGrantEdge",
		nodes:"OAuthClientsAccountGrant",
		pageInfo:"OAuthClientsAccountGrantPageInfo"
	},
	OAuthClientsAccountGrantEdge:{
		cursor:"String",
		node:"OAuthClientsAccountGrant"
	},
	OAuthClientsAccountGrantPageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String",
		endCursor:"String"
	},
	OAuthClientsQuery:{
		allAccountGrantsForUser:"OAuthClientsAccountGrantConnection"
	},
	OnJiraIssueCreatedForUserResponseType:{
		"...on JiraProjectConnection":"JiraProjectConnection",
		"...on JiraIssueAndProject":"JiraIssueAndProject"
	},
	OpsgenieAlertCountByPriority:{
		priority:"String",
		countPerDay:"OpsgenieAlertCountPerDay"
	},
	OpsgenieAlertCountPerDay:{
		day:"String",
		count:"Int"
	},
	OpsgenieQuery:{
		opsgenieTeam:"OpsgenieTeam",
		opsgenieTeams:"OpsgenieTeam",
		opsgenieSchedule:"OpsgenieSchedule",
		allOpsgenieTeams:"OpsgenieTeamConnection",
		myOpsgenieSchedules:"OpsgenieSchedule",
		opsgenieTeamsWithServiceModificationPermissions:"OpsgenieTeamConnection"
	},
	OpsgenieSchedule:{
		id:"ID",
		name:"String",
		enabled:"Boolean",
		timezone:"String",
		finalTimeline:"OpsgenieScheduleTimeline",
		onCallRecipients:"OpsgenieScheduleOnCallRecipient"
	},
	OpsgenieScheduleOnCallRecipient:{
		id:"ID",
		type:"String",
		name:"String",
		accountId:"ID"
	},
	OpsgenieSchedulePeriod:{
		startDate:"DateTime",
		endDate:"DateTime",
		type:"String",
		recipient:"OpsgenieSchedulePeriodRecipient"
	},
	OpsgenieSchedulePeriodRecipient:{
		id:"ID",
		type:"String",
		user:"User"
	},
	OpsgenieScheduleRotation:{
		id:"ID",
		name:"String",
		order:"Int",
		periods:"OpsgenieSchedulePeriod"
	},
	OpsgenieScheduleTimeline:{
		startDate:"DateTime",
		endDate:"DateTime",
		rotations:"OpsgenieScheduleRotation"
	},
	OpsgenieTeam:{
		id:"ID",
		name:"String",
		description:"String",
		createdAt:"DateTime",
		updatedAt:"DateTime",
		baseUrl:"String",
		url:"String",
		members:"OpsgenieTeamMemberConnection",
		schedules:"OpsgenieSchedule",
		alertCounts:"OpsgenieAlertCountByPriority",
		devOpsServiceRelationships:"DevOpsServiceAndOpsgenieTeamRelationshipConnection",
		jiraProjectRelationships:"JiraProjectAndOpsgenieTeamRelationshipConnection"
	},
	OpsgenieTeamConnection:{
		pageInfo:"PageInfo",
		edges:"OpsgenieTeamEdge",
		totalCount:"Int"
	},
	OpsgenieTeamEdge:{
		node:"OpsgenieTeam",
		cursor:"String"
	},
	OpsgenieTeamMember:{
		user:"User"
	},
	OpsgenieTeamMemberConnection:{
		pageInfo:"PageInfo",
		edges:"OpsgenieTeamMemberEdge"
	},
	OpsgenieTeamMemberEdge:{
		node:"OpsgenieTeamMember",
		cursor:"String"
	},
	OriginalEstimate:{
		value:"Float",
		valueAsText:"String"
	},
	PageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String",
		endCursor:"String"
	},
	Payload:{
		"...on AddAppContributorResponsePayload": "AddAppContributorResponsePayload",
		"...on AddCompassComponentLabelsPayload": "AddCompassComponentLabelsPayload",
		"...on AppInstallationResponse": "AppInstallationResponse",
		"...on AppInstallationUpgradeResponse": "AppInstallationUpgradeResponse",
		"...on AppSubscribePayload": "AppSubscribePayload",
		"...on AppUninstallationResponse": "AppUninstallationResponse",
		"...on AppUnsubscribePayload": "AppUnsubscribePayload",
		"...on ApplyCompassScorecardToComponentPayload": "ApplyCompassScorecardToComponentPayload",
		"...on ApplyPolarisProjectTemplatePayload": "ApplyPolarisProjectTemplatePayload",
		"...on ArchivePolarisInsightsPayload": "ArchivePolarisInsightsPayload",
		"...on AriGraphCreateRelationshipsPayload": "AriGraphCreateRelationshipsPayload",
		"...on AriGraphDeleteRelationshipsPayload": "AriGraphDeleteRelationshipsPayload",
		"...on AriGraphReplaceRelationshipsPayload": "AriGraphReplaceRelationshipsPayload",
		"...on AttachCompassComponentDataManagerPayload": "AttachCompassComponentDataManagerPayload",
		"...on AttachEventSourcePayload": "AttachEventSourcePayload",
		"...on CompassAcknowledgeAnnouncementPayload": "CompassAcknowledgeAnnouncementPayload",
		"...on CompassAddTeamLabelsPayload": "CompassAddTeamLabelsPayload",
		"...on CompassCreateAnnouncementPayload": "CompassCreateAnnouncementPayload",
		"...on CompassCreateComponentSubscriptionPayload": "CompassCreateComponentSubscriptionPayload",
		"...on CompassCreateCustomFieldDefinitionPayload": "CompassCreateCustomFieldDefinitionPayload",
		"...on CompassCreateEventsPayload": "CompassCreateEventsPayload",
		"...on CompassCreateMetricDefinitionPayload": "CompassCreateMetricDefinitionPayload",
		"...on CompassCreateMetricSourcePayload": "CompassCreateMetricSourcePayload",
		"...on CompassCreateTeamCheckinPayload": "CompassCreateTeamCheckinPayload",
		"...on CompassDeleteAnnouncementPayload": "CompassDeleteAnnouncementPayload",
		"...on CompassDeleteComponentSubscriptionPayload": "CompassDeleteComponentSubscriptionPayload",
		"...on CompassDeleteCustomFieldDefinitionPayload": "CompassDeleteCustomFieldDefinitionPayload",
		"...on CompassDeleteMetricDefinitionPayload": "CompassDeleteMetricDefinitionPayload",
		"...on CompassDeleteMetricSourcePayload": "CompassDeleteMetricSourcePayload",
		"...on CompassDeleteTeamCheckinPayload": "CompassDeleteTeamCheckinPayload",
		"...on CompassInsertMetricValueByExternalIdPayload": "CompassInsertMetricValueByExternalIdPayload",
		"...on CompassInsertMetricValuePayload": "CompassInsertMetricValuePayload",
		"...on CompassRemoveTeamLabelsPayload": "CompassRemoveTeamLabelsPayload",
		"...on CompassSynchronizeLinkAssociationsPayload": "CompassSynchronizeLinkAssociationsPayload",
		"...on CompassUpdateAnnouncementPayload": "CompassUpdateAnnouncementPayload",
		"...on CompassUpdateCustomFieldDefinitionPayload": "CompassUpdateCustomFieldDefinitionPayload",
		"...on CompassUpdateMetricDefinitionPayload": "CompassUpdateMetricDefinitionPayload",
		"...on CompassUpdateTeamCheckinPayload": "CompassUpdateTeamCheckinPayload",
		"...on ConfigurePolarisRefreshPayload": "ConfigurePolarisRefreshPayload",
		"...on ConfluenceCreateBlogPostPayload": "ConfluenceCreateBlogPostPayload",
		"...on ConfluenceCreateBlogPostPropertyPayload": "ConfluenceCreateBlogPostPropertyPayload",
		"...on ConfluenceCreateFooterCommentOnBlogPostPayload": "ConfluenceCreateFooterCommentOnBlogPostPayload",
		"...on ConfluenceCreateFooterCommentOnPagePayload": "ConfluenceCreateFooterCommentOnPagePayload",
		"...on ConfluenceCreatePagePayload": "ConfluenceCreatePagePayload",
		"...on ConfluenceCreatePagePropertyPayload": "ConfluenceCreatePagePropertyPayload",
		"...on ConfluenceCreateSpacePayload": "ConfluenceCreateSpacePayload",
		"...on ConfluenceCreateUserPropertyPayload": "ConfluenceCreateUserPropertyPayload",
		"...on ConfluenceDeleteBlogPostPropertyPayload": "ConfluenceDeleteBlogPostPropertyPayload",
		"...on ConfluenceDeleteDraftBlogPostPayload": "ConfluenceDeleteDraftBlogPostPayload",
		"...on ConfluenceDeleteDraftPagePayload": "ConfluenceDeleteDraftPagePayload",
		"...on ConfluenceDeletePagePropertyPayload": "ConfluenceDeletePagePropertyPayload",
		"...on ConfluenceDeleteUserPropertyPayload": "ConfluenceDeleteUserPropertyPayload",
		"...on ConfluencePublishBlogPostPayload": "ConfluencePublishBlogPostPayload",
		"...on ConfluencePublishPagePayload": "ConfluencePublishPagePayload",
		"...on ConfluencePurgeBlogPostPayload": "ConfluencePurgeBlogPostPayload",
		"...on ConfluencePurgePagePayload": "ConfluencePurgePagePayload",
		"...on ConfluenceTrashBlogPostPayload": "ConfluenceTrashBlogPostPayload",
		"...on ConfluenceTrashPagePayload": "ConfluenceTrashPagePayload",
		"...on ConfluenceUpdateCurrentBlogPostPayload": "ConfluenceUpdateCurrentBlogPostPayload",
		"...on ConfluenceUpdateCurrentPagePayload": "ConfluenceUpdateCurrentPagePayload",
		"...on ConfluenceUpdateDraftBlogPostPayload": "ConfluenceUpdateDraftBlogPostPayload",
		"...on ConfluenceUpdateDraftPagePayload": "ConfluenceUpdateDraftPagePayload",
		"...on ConfluenceUpdateSpacePayload": "ConfluenceUpdateSpacePayload",
		"...on ConfluenceUpdateSpaceSettingsPayload": "ConfluenceUpdateSpaceSettingsPayload",
		"...on ConfluenceUpdateValueBlogPostPropertyPayload": "ConfluenceUpdateValueBlogPostPropertyPayload",
		"...on ConfluenceUpdateValuePagePropertyPayload": "ConfluenceUpdateValuePagePropertyPayload",
		"...on ConfluenceUpdateValueUserPropertyPayload": "ConfluenceUpdateValueUserPropertyPayload",
		"...on CopyPolarisInsightsPayload": "CopyPolarisInsightsPayload",
		"...on CreateAppDeploymentResponse": "CreateAppDeploymentResponse",
		"...on CreateAppDeploymentUrlResponse": "CreateAppDeploymentUrlResponse",
		"...on CreateAppResponse": "CreateAppResponse",
		"...on CreateAppTunnelResponse": "CreateAppTunnelResponse",
		"...on CreateCompassComponentExternalAliasPayload": "CreateCompassComponentExternalAliasPayload",
		"...on CreateCompassComponentLinkPayload": "CreateCompassComponentLinkPayload",
		"...on CreateCompassComponentPayload": "CreateCompassComponentPayload",
		"...on CreateCompassRelationshipPayload": "CreateCompassRelationshipPayload",
		"...on CreateCompassScorecardCriteriasPayload": "CreateCompassScorecardCriteriasPayload",
		"...on CreateCompassScorecardPayload": "CreateCompassScorecardPayload",
		"...on CreateCompassStarredComponentPayload": "CreateCompassStarredComponentPayload",
		"...on CreateDevOpsServiceAndJiraProjectRelationshipPayload": "CreateDevOpsServiceAndJiraProjectRelationshipPayload",
		"...on CreateDevOpsServiceAndOpsgenieTeamRelationshipPayload": "CreateDevOpsServiceAndOpsgenieTeamRelationshipPayload",
		"...on CreateDevOpsServiceAndRepositoryRelationshipPayload": "CreateDevOpsServiceAndRepositoryRelationshipPayload",
		"...on CreateDevOpsServicePayload": "CreateDevOpsServicePayload",
		"...on CreateDevOpsServiceRelationshipPayload": "CreateDevOpsServiceRelationshipPayload",
		"...on CreateEventSourcePayload": "CreateEventSourcePayload",
		"...on CreateHostedResourceUploadUrlPayload": "CreateHostedResourceUploadUrlPayload",
		"...on CreateJiraProjectAndOpsgenieTeamRelationshipPayload": "CreateJiraProjectAndOpsgenieTeamRelationshipPayload",
		"...on CreateJiraProjectAndRepositoryRelationshipPayload": "CreateJiraProjectAndRepositoryRelationshipPayload",
		"...on CreatePolarisAnonymousVisitorHashPayload": "CreatePolarisAnonymousVisitorHashPayload",
		"...on CreatePolarisCalculatedFieldPayload": "CreatePolarisCalculatedFieldPayload",
		"...on CreatePolarisCommentPayload": "CreatePolarisCommentPayload",
		"...on CreatePolarisDecorationPayload": "CreatePolarisDecorationPayload",
		"...on CreatePolarisInsightPayload": "CreatePolarisInsightPayload",
		"...on CreatePolarisStandardFieldPayload": "CreatePolarisStandardFieldPayload",
		"...on CreatePolarisViewPayload": "CreatePolarisViewPayload",
		"...on CreatePolarisViewSetPayload": "CreatePolarisViewSetPayload",
		"...on DeleteAppEnvironmentVariablePayload": "DeleteAppEnvironmentVariablePayload",
		"...on DeleteAppResponse": "DeleteAppResponse",
		"...on DeleteAppStoredEntityPayload": "DeleteAppStoredEntityPayload",
		"...on DeleteCompassComponentExternalAliasPayload": "DeleteCompassComponentExternalAliasPayload",
		"...on DeleteCompassComponentLinkPayload": "DeleteCompassComponentLinkPayload",
		"...on DeleteCompassComponentPayload": "DeleteCompassComponentPayload",
		"...on DeleteCompassRelationshipPayload": "DeleteCompassRelationshipPayload",
		"...on DeleteCompassScorecardCriteriasPayload": "DeleteCompassScorecardCriteriasPayload",
		"...on DeleteCompassScorecardPayload": "DeleteCompassScorecardPayload",
		"...on DeleteCompassStarredComponentPayload": "DeleteCompassStarredComponentPayload",
		"...on DeleteDevOpsContainerRelationshipEntityPropertiesPayload": "DeleteDevOpsContainerRelationshipEntityPropertiesPayload",
		"...on DeleteDevOpsServiceAndJiraProjectRelationshipPayload": "DeleteDevOpsServiceAndJiraProjectRelationshipPayload",
		"...on DeleteDevOpsServiceAndOpsgenieTeamRelationshipPayload": "DeleteDevOpsServiceAndOpsgenieTeamRelationshipPayload",
		"...on DeleteDevOpsServiceAndRepositoryRelationshipPayload": "DeleteDevOpsServiceAndRepositoryRelationshipPayload",
		"...on DeleteDevOpsServiceEntityPropertiesPayload": "DeleteDevOpsServiceEntityPropertiesPayload",
		"...on DeleteDevOpsServicePayload": "DeleteDevOpsServicePayload",
		"...on DeleteDevOpsServiceRelationshipPayload": "DeleteDevOpsServiceRelationshipPayload",
		"...on DeleteEventSourcePayload": "DeleteEventSourcePayload",
		"...on DeleteJiraProjectAndOpsgenieTeamRelationshipPayload": "DeleteJiraProjectAndOpsgenieTeamRelationshipPayload",
		"...on DeleteJiraProjectAndRepositoryRelationshipPayload": "DeleteJiraProjectAndRepositoryRelationshipPayload",
		"...on DeletePolarisAnonymousVisitorHashPayload": "DeletePolarisAnonymousVisitorHashPayload",
		"...on DeletePolarisDecorationPayload": "DeletePolarisDecorationPayload",
		"...on DeletePolarisFieldOptionPayload": "DeletePolarisFieldOptionPayload",
		"...on DeletePolarisFieldPayload": "DeletePolarisFieldPayload",
		"...on DeletePolarisIdeaTemplatePayload": "DeletePolarisIdeaTemplatePayload",
		"...on DeletePolarisInsightPayload": "DeletePolarisInsightPayload",
		"...on DeletePolarisViewPayload": "DeletePolarisViewPayload",
		"...on DeletePolarisViewSetPayload": "DeletePolarisViewSetPayload",
		"...on DeleteUserGrantPayload": "DeleteUserGrantPayload",
		"...on DetachCompassComponentDataManagerPayload": "DetachCompassComponentDataManagerPayload",
		"...on DetachEventSourcePayload": "DetachEventSourcePayload",
		"...on DevOpsToolUpdateNavbarConnectionStateTabSeenPayload": "DevOpsToolUpdateNavbarConnectionStateTabSeenPayload",
		"...on DirectoryRemoveUserPayload": "DirectoryRemoveUserPayload",
		"...on ForgeAlertsCreateAlertPayload": "ForgeAlertsCreateAlertPayload",
		"...on ForgeAlertsFixAlertPayload": "ForgeAlertsFixAlertPayload",
		"...on ForgeAlertsUpdateAlertPayload": "ForgeAlertsUpdateAlertPayload",
		"...on GenericMutationResponse": "GenericMutationResponse",
		"...on HelpCenterCreateTopicPayload": "HelpCenterCreateTopicPayload",
		"...on HelpCenterDeleteUpdateTopicPayload": "HelpCenterDeleteUpdateTopicPayload",
		"...on HelpCenterUpdateTopicsOrderPayload": "HelpCenterUpdateTopicsOrderPayload",
		"...on HelpObjectStoreCreateEntityMappingPayload": "HelpObjectStoreCreateEntityMappingPayload",
		"...on InvokeAuxEffectsResponse": "InvokeAuxEffectsResponse",
		"...on InvokeExtensionResponse": "InvokeExtensionResponse",
		"...on InvokePolarisObjectPayload": "InvokePolarisObjectPayload",
		"...on JiraAddIssuesToFixVersionPayload": "JiraAddIssuesToFixVersionPayload",
		"...on JiraAddRelatedWorkToVersionPayload": "JiraAddRelatedWorkToVersionPayload",
		"...on JiraAssignRelatedWorkPayload": "JiraAssignRelatedWorkPayload",
		"...on JiraCreateCustomFilterPayload": "JiraCreateCustomFilterPayload",
		"...on JiraCreateReleaseNoteConfluencePagePayload": "JiraCreateReleaseNoteConfluencePagePayload",
		"...on JiraDateFieldPayload": "JiraDateFieldPayload",
		"...on JiraDateTimeFieldPayload": "JiraDateTimeFieldPayload",
		"...on JiraDismissDevOpsIssuePanelBannerPayload": "JiraDismissDevOpsIssuePanelBannerPayload",
		"...on JiraIssueSearchViewPayload": "JiraIssueSearchViewPayload",
		"...on JiraLabelsFieldPayload": "JiraLabelsFieldPayload",
		"...on JiraMoveIssuesToFixVersionPayload": "JiraMoveIssuesToFixVersionPayload",
		"...on JiraNumberFieldPayload": "JiraNumberFieldPayload",
		"...on JiraOAuthAppsPayload": "JiraOAuthAppsPayload",
		"...on JiraOptoutDevOpsIssuePanelNotConnectedPayload": "JiraOptoutDevOpsIssuePanelNotConnectedPayload",
		"...on JiraPermissionSchemeAddGrantPayload": "JiraPermissionSchemeAddGrantPayload",
		"...on JiraPermissionSchemeRemoveGrantPayload": "JiraPermissionSchemeRemoveGrantPayload",
		"...on JiraProjectAndDevOpsToolRelationshipCreatePayload": "JiraProjectAndDevOpsToolRelationshipCreatePayload",
		"...on JiraRemoveIssuesFromFixVersionPayload": "JiraRemoveIssuesFromFixVersionPayload",
		"...on JiraRemoveRelatedWorkFromVersionPayload": "JiraRemoveRelatedWorkFromVersionPayload",
		"...on JiraSetApplicationPropertiesPayload": "JiraSetApplicationPropertiesPayload",
		"...on JiraSingleSelectFieldPayload": "JiraSingleSelectFieldPayload",
		"...on JiraStoryPointEstimateFieldPayload": "JiraStoryPointEstimateFieldPayload",
		"...on JiraUpdateCustomFilterJqlPayload": "JiraUpdateCustomFilterJqlPayload",
		"...on JiraUpdateCustomFilterPayload": "JiraUpdateCustomFilterPayload",
		"...on JiraUpdateReleaseNotesConfigurationPayload": "JiraUpdateReleaseNotesConfigurationPayload",
		"...on JiraUpdateVersionPayload": "JiraUpdateVersionPayload",
		"...on JiraUpdateVersionWarningConfigPayload": "JiraUpdateVersionWarningConfigPayload",
		"...on RefreshPolarisSnippetsPayload": "RefreshPolarisSnippetsPayload",
		"...on RemoveCompassComponentLabelsPayload": "RemoveCompassComponentLabelsPayload",
		"...on RemoveCompassScorecardFromComponentPayload": "RemoveCompassScorecardFromComponentPayload",
		"...on ResolvePolarisObjectPayload": "ResolvePolarisObjectPayload",
		"...on RoadmapAddItemPayload": "RoadmapAddItemPayload",
		"...on RoadmapResolveHealthcheckPayload": "RoadmapResolveHealthcheckPayload",
		"...on RoadmapScheduleItemsPayload": "RoadmapScheduleItemsPayload",
		"...on RoadmapToggleDependencyPayload": "RoadmapToggleDependencyPayload",
		"...on RoadmapUpdateItemPayload": "RoadmapUpdateItemPayload",
		"...on RoadmapUpdateSettingsPayload": "RoadmapUpdateSettingsPayload",
		"...on SetAppEnvironmentVariablePayload": "SetAppEnvironmentVariablePayload",
		"...on SetAppStoredEntityPayload": "SetAppStoredEntityPayload",
		"...on SetExternalAuthCredentialsPayload": "SetExternalAuthCredentialsPayload",
		"...on SetPolarisProjectOnboardedPayload": "SetPolarisProjectOnboardedPayload",
		"...on SetPolarisSelectedDeliveryProjectPayload": "SetPolarisSelectedDeliveryProjectPayload",
		"...on SetPolarisSnippetPropertiesConfigPayload": "SetPolarisSnippetPropertiesConfigPayload",
		"...on ShepherdCreateAlertPayload": "ShepherdCreateAlertPayload",
		"...on ShepherdCreateExampleAlertPayload": "ShepherdCreateExampleAlertPayload",
		"...on ShepherdCreateOrganizationPayload": "ShepherdCreateOrganizationPayload",
		"...on ShepherdCreateSubscriptionPayload": "ShepherdCreateSubscriptionPayload",
		"...on ShepherdSubscriptionMutationPayload": "ShepherdSubscriptionMutationPayload",
		"...on ShepherdTestSubscriptionPayload": "ShepherdTestSubscriptionPayload",
		"...on ShepherdUpdateAlertPayload": "ShepherdUpdateAlertPayload",
		"...on ShepherdUpdateOrganizationPayload": "ShepherdUpdateOrganizationPayload",
		"...on ShepherdUpdateSubscriptionPayload": "ShepherdUpdateSubscriptionPayload",
		"...on UnarchivePolarisInsightsPayload": "UnarchivePolarisInsightsPayload",
		"...on UnlinkExternalSourcePayload": "UnlinkExternalSourcePayload",
		"...on UnwatchMarketplaceAppPayload": "UnwatchMarketplaceAppPayload",
		"...on UpdateAppDetailsResponse": "UpdateAppDetailsResponse",
		"...on UpdateAppHostServiceScopesResponsePayload": "UpdateAppHostServiceScopesResponsePayload",
		"...on UpdateAtlassianOAuthClientResponse": "UpdateAtlassianOAuthClientResponse",
		"...on UpdateCompassComponentDataManagerMetadataPayload": "UpdateCompassComponentDataManagerMetadataPayload",
		"...on UpdateCompassComponentLinkPayload": "UpdateCompassComponentLinkPayload",
		"...on UpdateCompassComponentPayload": "UpdateCompassComponentPayload",
		"...on UpdateCompassComponentTypePayload": "UpdateCompassComponentTypePayload",
		"...on UpdateCompassScorecardCriteriasPayload": "UpdateCompassScorecardCriteriasPayload",
		"...on UpdateCompassScorecardPayload": "UpdateCompassScorecardPayload",
		"...on UpdateDevOpsContainerRelationshipEntityPropertiesPayload": "UpdateDevOpsContainerRelationshipEntityPropertiesPayload",
		"...on UpdateDevOpsServiceAndJiraProjectRelationshipPayload": "UpdateDevOpsServiceAndJiraProjectRelationshipPayload",
		"...on UpdateDevOpsServiceAndOpsgenieTeamRelationshipPayload": "UpdateDevOpsServiceAndOpsgenieTeamRelationshipPayload",
		"...on UpdateDevOpsServiceAndRepositoryRelationshipPayload": "UpdateDevOpsServiceAndRepositoryRelationshipPayload",
		"...on UpdateDevOpsServiceEntityPropertiesPayload": "UpdateDevOpsServiceEntityPropertiesPayload",
		"...on UpdateDevOpsServicePayload": "UpdateDevOpsServicePayload",
		"...on UpdateDevOpsServiceRelationshipPayload": "UpdateDevOpsServiceRelationshipPayload",
		"...on UpdateDeveloperLogAccessPayload": "UpdateDeveloperLogAccessPayload",
		"...on UpdateJiraProjectAndOpsgenieTeamRelationshipPayload": "UpdateJiraProjectAndOpsgenieTeamRelationshipPayload",
		"...on UpdateJiraProjectAndRepositoryRelationshipPayload": "UpdateJiraProjectAndRepositoryRelationshipPayload",
		"...on UpdatePolarisCalculatedFieldPayload": "UpdatePolarisCalculatedFieldPayload",
		"...on UpdatePolarisCommentPayload": "UpdatePolarisCommentPayload",
		"...on UpdatePolarisDecorationPayload": "UpdatePolarisDecorationPayload",
		"...on UpdatePolarisFieldDescriptionPayload": "UpdatePolarisFieldDescriptionPayload",
		"...on UpdatePolarisFieldEmojiPayload": "UpdatePolarisFieldEmojiPayload",
		"...on UpdatePolarisFieldOptionWeightPayload": "UpdatePolarisFieldOptionWeightPayload",
		"...on UpdatePolarisIdeaPayload": "UpdatePolarisIdeaPayload",
		"...on UpdatePolarisIdeaTemplatePayload": "UpdatePolarisIdeaTemplatePayload",
		"...on UpdatePolarisInsightPayload": "UpdatePolarisInsightPayload",
		"...on UpdatePolarisTermsConsentPayload": "UpdatePolarisTermsConsentPayload",
		"...on UpdatePolarisViewArrangementInfoPayload": "UpdatePolarisViewArrangementInfoPayload",
		"...on UpdatePolarisViewPayload": "UpdatePolarisViewPayload",
		"...on UpdatePolarisViewRankV2Payload": "UpdatePolarisViewRankV2Payload",
		"...on UpdatePolarisViewSetPayload": "UpdatePolarisViewSetPayload",
		"...on UpdatePolarisViewTimestampPayload": "UpdatePolarisViewTimestampPayload",
		"...on UserAuthTokenForExtensionResponse": "UserAuthTokenForExtensionResponse",
		"...on UserInstallationRulesPayload": "UserInstallationRulesPayload",
		"...on VirtualAgentUpdateConfigurationPayload": "VirtualAgentUpdateConfigurationPayload",
		"...on WatchMarketplaceAppPayload": "WatchMarketplaceAppPayload",
		success:"Boolean",
		errors:"MutationError"
	},
	PermissibleEstimationType:{
		value:"String",
		name:"String",
		description:"String"
	},
	PermissionToConsentByOauthId:{
		isAllowed:"Boolean",
		isSiteAdmin:"Boolean"
	},
	PolarisAnonymousVisitorHash:{
		"...on PolarisAnonymousVisitorViewHash":"PolarisAnonymousVisitorViewHash"
	},
	PolarisAnonymousVisitorViewHash:{
		cloudId:"String",
		projectId:"Int",
		projectKey:"String",
		viewId:"Int",
		hash:"String"
	},
	PolarisComment:{
		id:"ID",
		kind:"PolarisCommentKind",
		subject:"ID",
		updated:"String",
		created:"String",
		aaid:"String",
		content:"JSON",
		account:"User"
	},
	PolarisConnectApp:{
		id:"ID",
		name:"String",
		avatarUrl:"String",
		oauthClientId:"String",
		appId:"String",
		play:"PolarisPlay"
	},
	PolarisDecoration:{
		id:"ID",
		valueRules:"PolarisValueRule",
		valueDecoration:"PolarisValueDecoration"
	},
	PolarisDecorationScheme:{
		id:"ID",
		fields:"PolarisIdeaField"
	},
	PolarisDelegationToken:{
		url:"String",
		token:"String",
		expires:"String"
	},
	PolarisGroupValue:{
		label:"String",
		id:"String"
	},
	PolarisIdea:{
		id:"ID",
		archived:"Boolean",
		lastCommentsViewedTimestamp:"String",
		lastInsightsViewedTimestamp:"String"
	},
	PolarisIdeaArchivedByField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaArchivedField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		archivedOption:"PolarisIdeaFieldOption",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaArchivedOnField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaDateField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaDateTimeField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaDocumentField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaExternalReferenceField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField",
		configuration:"JSON"
	},
	PolarisIdeaExternalReferencePropertyField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaField:{
		"...on PolarisIdeaArchivedByField": "PolarisIdeaArchivedByField",
		"...on PolarisIdeaArchivedField": "PolarisIdeaArchivedField",
		"...on PolarisIdeaArchivedOnField": "PolarisIdeaArchivedOnField",
		"...on PolarisIdeaDateField": "PolarisIdeaDateField",
		"...on PolarisIdeaDateTimeField": "PolarisIdeaDateTimeField",
		"...on PolarisIdeaDocumentField": "PolarisIdeaDocumentField",
		"...on PolarisIdeaExternalReferenceField": "PolarisIdeaExternalReferenceField",
		"...on PolarisIdeaExternalReferencePropertyField": "PolarisIdeaExternalReferencePropertyField",
		"...on PolarisIdeaIntervalField": "PolarisIdeaIntervalField",
		"...on PolarisIdeaIssueCommentsField": "PolarisIdeaIssueCommentsField",
		"...on PolarisIdeaIssueIdField": "PolarisIdeaIssueIdField",
		"...on PolarisIdeaIssueTypeField": "PolarisIdeaIssueTypeField",
		"...on PolarisIdeaKeyField": "PolarisIdeaKeyField",
		"...on PolarisIdeaLabelsField": "PolarisIdeaLabelsField",
		"...on PolarisIdeaLinkedIssuesField": "PolarisIdeaLinkedIssuesField",
		"...on PolarisIdeaLinkedIssuesProgressField": "PolarisIdeaLinkedIssuesProgressField",
		"...on PolarisIdeaNumberField": "PolarisIdeaNumberField",
		"...on PolarisIdeaOptionField": "PolarisIdeaOptionField",
		"...on PolarisIdeaOptionsField": "PolarisIdeaOptionsField",
		"...on PolarisIdeaPlayField": "PolarisIdeaPlayField",
		"...on PolarisIdeaSpecialField": "PolarisIdeaSpecialField",
		"...on PolarisIdeaStatusField": "PolarisIdeaStatusField",
		"...on PolarisIdeaStringField": "PolarisIdeaStringField",
		"...on PolarisIdeaUserField": "PolarisIdeaUserField",
		"...on PolarisIdeaUsersField": "PolarisIdeaUsersField",
		"...on PolarisIdeaVotesField": "PolarisIdeaVotesField",
		id:"ID",
		jiraFieldKey:"String",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		decorations:"PolarisDecoration",
		presentation:"PolarisPresentation",
		formula:"JSON",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaFieldOption:{
		id:"ID",
		label:"String",
		weight:"Int"
	},
	PolarisIdeaIntervalField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaIssueCommentsField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaIssueIdField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		linearizable:"Boolean",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaIssueTypeField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		linearizable:"Boolean",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaKeyField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		linearizable:"Boolean",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaLabelsField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaLinkedIssuesField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaLinkedIssuesProgressField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaNumberField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaOptionField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		options:"PolarisIdeaFieldOption",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaOptionsField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		options:"PolarisIdeaFieldOption",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaPlayField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		play:"PolarisPlay",
		aspect:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaSpecialField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		linearizable:"Boolean",
		specialType:"String",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaStatusField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		linearizable:"Boolean",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaStringField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaTemplate:{
		id:"ID",
		title:"String",
		description:"String",
		color:"String",
		emoji:"String",
		template:"JSON",
		project:"ID",
		aaid:"String"
	},
	PolarisIdeaType:{
		id:"ID",
		name:"String",
		iconUrl:"String",
		description:"String"
	},
	PolarisIdeaUserField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaUsersField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		linearizable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeaVotesField:{
		id:"ID",
		fieldId:"Int",
		fieldName:"String",
		label:"String",
		editable:"Boolean",
		sortable:"Boolean",
		groupable:"Boolean",
		defaultSortOrder:"PolarisSortOrder",
		linearizable:"Boolean",
		jiraFieldKey:"String",
		decorations:"PolarisDecoration",
		formula:"JSON",
		presentation:"PolarisPresentation",
		description:"String",
		emoji:"String",
		builtin:"BuiltinPolarisIdeaField"
	},
	PolarisIdeas:{
		total:"Int",
		ideas:"PolarisRestIdea"
	},
	PolarisInsight:{
		id:"ID",
		container:"ID",
		aaid:"String",
		description:"JSON",
		snippets:"PolarisSnippet",
		created:"String",
		updated:"String",
		account:"User",
		play:"PolarisPlay",
		contribs:"PolarisPlayContribution"
	},
	PolarisIssueLinkType:{
		delivery:"Int",
		merge:"Int",
		datapoint:"Int"
	},
	PolarisMatrixAxis:{
		dimension:"String",
		field:"PolarisIdeaField",
		fieldOptions:"PolarisGroupValue"
	},
	PolarisMatrixConfig:{
		axes:"PolarisMatrixAxis"
	},
	PolarisMutationNamespace:{
		ranking:"PolarisRankingMutationNamespace"
	},
	PolarisPlay:{
		id:"ID",
		label:"String",
		kind:"PolarisPlayKind",
		view:"PolarisView",
		fields:"PolarisIdeaPlayField",
		parameters:"JSON",
		contributions:"PolarisPlayContribution",
		contribution:"PolarisPlayContribution"
	},
	PolarisPlayContribution:{
		id:"ID",
		play:"PolarisPlay",
		subject:"ID",
		aaid:"String",
		comment:"PolarisComment",
		amount:"Int",
		created:"String",
		updated:"String",
		appearsIn:"PolarisInsight"
	},
	PolarisPresentation:{
		type:"String",
		parameters:"JSON"
	},
	PolarisProject:{
		id:"ID",
		activationId:"String",
		name:"String",
		key:"String",
		avatarUrls:"ProjectAvatars",
		viewsets:"PolarisViewSet",
		views:"PolarisView",
		rankField:"ID",
		fields:"PolarisIdeaField",
		ideaTypes:"PolarisIdeaType",
		insights:"PolarisInsight",
		snippetProviders:"PolarisSnippetProvider",
		refreshing:"PolarisRefreshStatus",
		onboarded:"Boolean",
		template:"PolarisProjectTemplate",
		selectedDeliveryProject:"ID",
		ideas:"PolarisIdea",
		issueLinkType:"PolarisIssueLinkType",
		statusCategories:"PolarisStatusCategory",
		arjConfiguration:"ArjConfiguration",
		arjHierarchyConfiguration:"ArjHierarchyConfigurationLevel",
		plays:"PolarisPlay",
		play:"PolarisPlay"
	},
	PolarisProjectTemplate:{
		ideas:"JSON"
	},
	PolarisQueryNamespace:{
		ranking:"PolarisRankingQueryNamespace"
	},
	PolarisRankingMutationNamespace:{
		createList:"RankingDiffPayload",
		deleteList:"RankingDiffPayload",
		makeFirst:"RankingDiffPayload",
		makeLast:"RankingDiffPayload",
		makeBefore:"RankingDiffPayload",
		makeAfter:"RankingDiffPayload",
		makeUnranked:"RankingDiffPayload"
	},
	PolarisRankingQueryNamespace:{
		list:"RankItem"
	},
	PolarisRefreshInfo:{
		error:"String",
		errorCode:"Int",
		errorType:"PolarisRefreshError",
		queued:"String",
		last:"String",
		next:"String",
		autoSeconds:"Int",
		timeToLiveSeconds:"Int"
	},
	PolarisRefreshJob:{
		progress:"PolarisRefreshJobProgress",
		refreshedSnippets:"PolarisSnippet"
	},
	PolarisRefreshJobProgress:{
		pendingCount:"Int",
		errorCount:"Int"
	},
	PolarisRefreshStatus:{
		count:"Int",
		pending:"Int",
		errors:"Int",
		last:"String"
	},
	PolarisRestIdea:{
		id:"String",
		key:"String",
		fields:"JSON"
	},
	PolarisSnippet:{
		id:"ID",
		data:"JSON",
		url:"String",
		oauthClientId:"String",
		appInfo:"PolarisConnectApp",
		properties:"JSON",
		updated:"String",
		refresh:"PolarisRefreshInfo"
	},
	PolarisSnippetGroupDecl:{
		id:"ID",
		key:"String",
		label:"String",
		properties:"PolarisSnippetPropertyDecl"
	},
	PolarisSnippetPropertiesConfig:{
		config:"JSON"
	},
	PolarisSnippetPropertyDecl:{
		id:"ID",
		key:"String",
		label:"String",
		kind:"PolarisSnippetPropertyKind"
	},
	PolarisSnippetProvider:{
		id:"ID",
		app:"PolarisConnectApp",
		properties:"PolarisSnippetPropertyDecl",
		groups:"PolarisSnippetGroupDecl"
	},
	PolarisSortField:{
		field:"PolarisIdeaField",
		order:"PolarisSortOrder"
	},
	PolarisStatusCategory:{
		id:"Int",
		name:"String",
		key:"String",
		colorName:"String"
	},
	PolarisTermsConsent:{
		consented:"Boolean",
		requiresMarketingConsent:"Boolean",
		locale:"String"
	},
	PolarisTimelineConfig:{
		startDateField:"PolarisIdeaField",
		dueDateField:"PolarisIdeaField",
		mode:"PolarisTimelineMode",
		startTimestamp:"String",
		endTimestamp:"String"
	},
	PolarisValueDecoration:{
		emoji:"String",
		backgroundColor:"String",
		highlightContainer:"Boolean"
	},
	PolarisValueRule:{
		value:"String",
		operator:"PolarisValueOperator"
	},
	PolarisView:{
		id:"ID",
		xid:"Int",
		name:"String",
		emoji:"String",
		description:"JSON",
		projectId:"Int",
		viewSetId:"ID",
		tableColumnSizes:"PolarisViewTableColumnSize",
		fields:"PolarisIdeaField",
		jql:"String",
		immutable:"Boolean",
		visualizationType:"PolarisVisualizationType",
		groupBy:"PolarisIdeaField",
		verticalGroupBy:"PolarisIdeaField",
		groupValues:"PolarisGroupValue",
		verticalGroupValues:"PolarisGroupValue",
		sort:"PolarisSortField",
		hidden:"PolarisIdeaField",
		timelineConfig:"PolarisTimelineConfig",
		matrixConfig:"PolarisMatrixConfig",
		userJql:"String",
		filter:"PolarisViewFilter",
		rank:"Int",
		comments:"PolarisComment",
		containsArchived:"Boolean",
		lastViewed:"PolarisViewLastViewed",
		lastCommentsViewedTimestamp:"String",
		collabServiceDelegation:"PolarisDelegationToken",
		sortMode:"PolarisViewSortMode"
	},
	PolarisViewFilter:{
		kind:"PolarisViewFilterKind",
		field:"PolarisIdeaField",
		values:"PolarisViewFilterValue"
	},
	PolarisViewFilterValue:{
		stringValue:"String",
		numericValue:"Float",
		operator:"PolarisViewFilterOperator"
	},
	PolarisViewLastViewed:{
		timestamp:"String",
		aaid:"String",
		account:"User"
	},
	PolarisViewSet:{
		id:"ID",
		name:"String",
		type:"PolarisViewSetType",
		views:"PolarisView",
		viewsets:"PolarisViewSet",
		rank:"Int"
	},
	PolarisViewTableColumnSize:{
		field:"PolarisIdeaField",
		size:"Int"
	},
	ProjectAvatars:{
		x16:"URL",
		x24:"URL",
		x32:"URL",
		x48:"URL"
	},
	Query:{
		trello:"TrelloQueryApi",
		customerSupport:"SupportRequestCatalogQueryApi",
		jiraProjectAndDevOpsToolRelationship:"JiraProjectAndDevOpsToolRelationship",
		devOpsToolRelationshipsForJiraProject:"JiraProjectAndDevOpsToolRelationshipConnection",
		jiraProjectRelationshipsForDevOpsTool:"JiraProjectAndDevOpsToolRelationshipConnection",
		bitbucket:"BitbucketQuery",
		opsgenie:"OpsgenieQuery",
		releaseNotes:"ContentPlatformReleaseNotesConnection",
		releaseNote:"ContentPlatformReleaseNote",
		smarts:"SmartsQueryApi",
		townsquare:"TownsquareQueryApi",
		devOps:"DevOps",
		jiraProjectRelationshipsForRepository:"JiraProjectAndRepositoryRelationshipConnection",
		repositoryRelationshipsForJiraProject:"JiraProjectAndRepositoryRelationshipConnection",
		jiraProjectAndRepositoryRelationship:"JiraProjectAndRepositoryRelationship",
		opsgenieTeamRelationshipForDevOpsService:"DevOpsServiceAndOpsgenieTeamRelationship",
		devOpsServiceRelationshipsForOpsgenieTeam:"DevOpsServiceAndOpsgenieTeamRelationshipConnection",
		devOpsServiceAndOpsgenieTeamRelationship:"DevOpsServiceAndOpsgenieTeamRelationship",
		devOpsServiceRelationshipsForJiraProject:"DevOpsServiceAndJiraProjectRelationshipConnection",
		jiraProjectRelationshipsForService:"DevOpsServiceAndJiraProjectRelationshipConnection",
		devOpsServiceAndJiraProjectRelationship:"DevOpsServiceAndJiraProjectRelationship",
		devOpsServiceAndRepositoryRelationship:"DevOpsServiceAndRepositoryRelationship",
		devOpsServiceRelationshipsForRepository:"DevOpsServiceAndRepositoryRelationshipConnection",
		repositoryRelationshipsForDevOpsService:"DevOpsServiceAndRepositoryRelationshipConnection",
		jiraProjectRelationshipsForOpsgenieTeam:"JiraProjectAndOpsgenieTeamRelationshipConnection",
		opsgenieTeamRelationshipsForJiraProject:"JiraProjectAndOpsgenieTeamRelationshipConnection",
		jiraProjectAndOpsgenieTeamRelationship:"JiraProjectAndOpsgenieTeamRelationship",
		codeInJira:"CodeInJira",
		jira:"JiraQuery",
		avocado:"Avocado",
		team:"TeamQuery",
		appStoredEntity:"AppStoredEntity",
		appStoredEntities:"AppStoredEntityConnection",
		appStoredEntitiesForCleanup:"AppStoredEntityConnection",
		confluence:"ConfluenceQueryApi",
		polarisProject:"PolarisProject",
		polarisView:"PolarisView",
		polarisAPIVersion:"String",
		polarisInsights:"PolarisInsight",
		polarisInsight:"PolarisInsight",
		polarisInsightsWithErrors:"PolarisInsight",
		polarisConnectAppByClientID:"PolarisConnectApp",
		polarisLabels:"LabelUsage",
		polarisTermsConsent:"PolarisTermsConsent",
		polarisSnippetPropertiesConfig:"PolarisSnippetPropertiesConfig",
		polarisIdeas:"PolarisIdeas",
		polarisAnonymousVisitorHash:"PolarisAnonymousVisitorHash",
		polarisCollabToken:"PolarisDelegationToken",
		polarisAnonymousVisitorHashByID:"PolarisAnonymousVisitorHash",
		polarisLinkedDeliveryTickets:"JSON",
		polaris:"PolarisQueryNamespace",
		polarisIdeaTemplates:"PolarisIdeaTemplate",
		polarisViewArrangementInfo:"JSON",
		appActiveTunnels:"AppTunnelDefinitions",
		dvcs:"DvcsQuery",
		webTriggerUrlsByAppContext:"WebTriggerUrl",
		marketplacePartner:"MarketplacePartner",
		marketplaceApp:"MarketplaceApp",
		marketplaceAppByKey:"MarketplaceApp",
		marketplaceAppByCloudAppId:"MarketplaceApp",
		myMarketplaceApps:"MarketplaceAppConnection",
		marketplacePricingPlan:"MarketplacePricingPlan",
		marketplaceUser:"MarketplaceUser",
		compass:"CompassCatalogQueryApi",
		extensionsEcho:"String",
		extensionContexts:"ExtensionContext",
		extensionByKey:"Extension",
		echo:"String",
		diagnostics:"JSON",
		node:"Node",
		activities:"Activities",
		activity:"Activity",
		devOpsMetrics:"DevOpsMetrics",
		shepherd:"ShepherdQuery",
		directory:"DirectoryQuery",
		helpObjectStore:"HelpObjectStoreQueryApi",
		jsw:"JswQuery",
		boardScope:"BoardScope",
		developmentInformation:"IssueDevOpsDevelopmentInformation",
		softwareBoards:"BoardScopeConnection",
		apps:"AppConnection",
		app:"App",
		appHostServices:"AppHostService",
		devOpsTools:"DevOpsTools",
		search:"SearchQueryAPI",
		me:"AuthenticationContext",
		user:"User",
		users:"User",
		devOpsService:"DevOpsService",
		devOpsServiceTiers:"DevOpsServiceTier",
		devOpsServices:"DevOpsServiceConnection",
		devOpsServicesById:"DevOpsService",
		devOpsServiceRelationship:"DevOpsServiceRelationship",
		bitbucketRepositoriesAvailableToLinkWithNewDevOpsService:"BitbucketRepositoryIdConnection",
		appLogs:"AppLogConnection",
		appLogLines:"AppLogLineConnection",
		developerLogAccess:"DeveloperLogAccessResult",
		installationContextsWithLogAccess:"InstallationContextWithLogAccess",
		roadmaps:"RoadmapsQuery",
		tenantContexts:"TenantContext",
		virtualAgent:"VirtualAgentQueryApi",
		jiraReleases:"JiraReleases",
		appInstallationTask:"AppInstallationTask",
		ecosystem:"EcosystemQuery",
		appDeployment:"AppDeployment",
		jiraOAuthApps:"JiraOAuthAppsApps",
		oauthClients:"OAuthClientsQuery",
		helpCenter:"HelpCenterQueryApi"
	},
	QueryError:{
		identifier:"ID",
		message:"String",
		extensions:"QueryErrorExtension"
	},
	QueryErrorExtension:{
		"...on GenericQueryErrorExtension": "GenericQueryErrorExtension",
		"...on ShepherdGenericQueryErrorExtension": "ShepherdGenericQueryErrorExtension",
		statusCode:"Int",
		errorType:"String"
	},
	RankColumnOutput:{
		columns:"Column",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	RankItem:{
		id:"ID",
		rank:"Float"
	},
	RankingDiffPayload:{
		added:"RankItem",
		changed:"RankItem",
		deleted:"RankItem"
	},
	RawStatus:{
		id:"ID",
		jiraId:"ID",
		name:"String",
		category:"String"
	},
	RefreshPolarisSnippetsPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisRefreshJob"
	},
	RefreshToken:{
		refreshTokenRotation:"Boolean"
	},
	Remote:{
		key:"String",
		baseUrl:"String",
		classifications:"Classification",
		locations:"String"
	},
	RemoveCompassComponentLabelsPayload:{
		removedLabelNames:"String",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	RemoveCompassScorecardFromComponentPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	ReportsOverview:{
		metadata:"SoftwareReport"
	},
	ResolvePolarisObjectPayload:{
		success:"Boolean",
		errors:"MutationError",
		response:"ResolvedPolarisObject"
	},
	ResolvedPolarisObject:{
		statusCode:"Int",
		externalAuth:"ResolvedPolarisObjectExternalAuth",
		auth:"ResolvedPolarisObjectAuth",
		oauthClientId:"String",
		body:"JSON"
	},
	ResolvedPolarisObjectAuth:{
		hint:"String",
		type:"PolarisResolvedObjectAuthType"
	},
	ResolvedPolarisObjectExternalAuth:{
		key:"String",
		displayName:"String",
		url:"String"
	},
	RoadmapAddItemPayload:{
		success:"Boolean",
		errors:"MutationError",
		output:"RoadmapAddItemResponse"
	},
	RoadmapAddItemResponse:{
		id:"ID",
		key:"String",
		item:"RoadmapItem",
		matchesSource:"Boolean",
		matchesJqlFilters:"Boolean"
	},
	RoadmapBoardConfiguration:{
		jql:"String",
		isUserBoardAdmin:"Boolean",
		sprints:"RoadmapSprint",
		isBoardJqlFilteringOutEpics:"Boolean",
		isSprintsFeatureEnabled:"Boolean",
		isChildIssuePlanningEnabled:"Boolean"
	},
	RoadmapComponent:{
		id:"ID",
		name:"String"
	},
	RoadmapConfiguration:{
		isCrossProject:"Boolean",
		roadmapFeatureEnabled:"Boolean",
		rankIssuesSupported:"Boolean",
		dependencies:"RoadmapDependencyConfiguration",
		externalConfiguration:"RoadmapExternalConfiguration",
		projectConfigurations:"RoadmapProjectConfiguration",
		projectConfiguration:"RoadmapProjectConfiguration",
		statusCategories:"RoadmapStatusCategory",
		userConfiguration:"RoadmapUserConfiguration",
		boardConfiguration:"RoadmapBoardConfiguration",
		hierarchyConfiguration:"RoadmapHierarchyConfiguration"
	},
	RoadmapContent:{
		configuration:"RoadmapConfiguration",
		items:"RoadmapItemConnection"
	},
	RoadmapCreationPreferences:{
		projectId:"Long",
		itemTypes:"JSON"
	},
	RoadmapCustomFilter:{
		id:"ID",
		name:"String"
	},
	RoadmapDependencyConfiguration:{
		isDependenciesEnabled:"Boolean",
		inwardDependencyDescription:"String",
		outwardDependencyDescription:"String"
	},
	RoadmapDetails:{
		roadmapConfiguration:"RoadmapConfiguration",
		roadmapItems:"RoadmapItemConnection",
		metadata:"RoadmapMetadata",
		isRoadmapFeatureEnabled:"Boolean",
		healthcheck:"RoadmapHealthCheck",
		content:"RoadmapContent"
	},
	RoadmapExternalConfiguration:{
		externalSystem:"ID",
		colorFields:"ID",
		startDateField:"ID",
		dueDateField:"ID",
		rankField:"ID",
		epicLinkField:"ID",
		epicNameField:"ID",
		sprintField:"ID"
	},
	RoadmapFilterConfiguration:{
		customFilters:"RoadmapCustomFilter",
		quickFilters:"RoadmapQuickFilter"
	},
	RoadmapHealthCheck:{
		id:"ID",
		title:"String",
		explanation:"String",
		learnMore:"RoadmapHealthCheckLink",
		resolution:"RoadmapHealthCheckResolution"
	},
	RoadmapHealthCheckLink:{
		text:"String",
		url:"String"
	},
	RoadmapHealthCheckResolution:{
		label:"String",
		actionId:"ID",
		fallbackMessage:"String"
	},
	RoadmapHierarchyConfiguration:{
		levelOneName:"String"
	},
	RoadmapItem:{
		id:"ID",
		projectId:"ID",
		key:"String",
		itemType:"RoadmapItemType",
		parentId:"ID",
		summary:"String",
		assignee:"User",
		dueDate:"DateTime",
		dueDateRFC3339:"Date",
		startDate:"DateTime",
		startDateRFC3339:"Date",
		status:"RoadmapItemStatus",
		statusCategory:"RoadmapItemStatusCategory",
		createdDate:"DateTime",
		resolutionDate:"DateTime",
		dependencies:"ID",
		color:"RoadmapPaletteColor",
		rank:"String",
		labels:"String",
		versionIds:"ID",
		sprintIds:"ID",
		componentIds:"ID",
		inferredDueDate:"Date",
		inferredStartDate:"Date"
	},
	RoadmapItemConnection:{
		edges:"RoadmapItemEdge",
		nodes:"RoadmapItem",
		pageInfo:"PageInfo"
	},
	RoadmapItemEdge:{
		cursor:"String",
		node:"RoadmapItem"
	},
	RoadmapItemStatus:{
		id:"ID",
		name:"String",
		statusCategory:"RoadmapItemStatusCategory"
	},
	RoadmapItemStatusCategory:{
		id:"ID",
		key:"String",
		name:"String"
	},
	RoadmapItemType:{
		id:"ID",
		description:"String",
		iconUrl:"String",
		name:"String",
		subtask:"Boolean",
		avatarId:"ID",
		requiredFieldIds:"ID"
	},
	RoadmapMetadata:{
		hasExceededEpicLimit:"Boolean",
		hasExceededIssueLimit:"Boolean",
		corruptedIssueCount:"Int"
	},
	RoadmapMutationErrorExtension:{
		statusCode:"Int",
		errorType:"String"
	},
	RoadmapProject:{
		id:"ID",
		key:"String",
		name:"String",
		description:"String",
		lead:"User",
		hasCompletedOnboarding:"Boolean",
		areDependenciesSupported:"Boolean",
		inwardDependencyDescription:"String",
		outwardDependencyDescription:"String",
		epicIssueTypeId:"ID",
		startDateCustomFieldId:"ID",
		colorCustomFieldId:"ID",
		lexoRankCustomFieldId:"ID",
		itemTypes:"RoadmapItemType",
		permissions:"RoadmapProjectPermissions",
		validation:"RoadmapProjectValidation"
	},
	RoadmapProjectConfiguration:{
		projectId:"ID",
		projectKey:"String",
		projectName:"String",
		parentItemTypes:"RoadmapItemType",
		childItemTypes:"RoadmapItemType",
		permissions:"RoadmapProjectPermissions",
		validation:"RoadmapProjectValidation",
		defaultItemTypeId:"String",
		versions:"RoadmapVersion",
		components:"RoadmapComponent",
		isReleasesFeatureEnabled:"Boolean"
	},
	RoadmapProjectPermissions:{
		canEditIssues:"Boolean",
		canScheduleIssues:"Boolean",
		canCreateIssues:"Boolean",
		canAdministerProjects:"Boolean"
	},
	RoadmapProjectValidation:{
		hasAllFieldAssociations:"Boolean",
		hasEpicIssueType:"Boolean",
		hasValidHierarchy:"Boolean",
		isRoadmapFeatureEnabled:"Boolean"
	},
	RoadmapQuickFilter:{
		id:"ID",
		name:"String",
		query:"String"
	},
	RoadmapResolveHealthcheckPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	RoadmapScheduleItemsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	RoadmapSprint:{
		id:"ID",
		name:"String",
		startDate:"String",
		startDateRFC3339:"Date",
		endDate:"String",
		endDateRFC3339:"Date",
		state:"RoadmapSprintState"
	},
	RoadmapStatusCategory:{
		id:"ID",
		key:"String",
		name:"String"
	},
	RoadmapToggleDependencyPayload:{
		success:"Boolean",
		errors:"MutationError",
		output:"RoadmapToggleDependencyResponse"
	},
	RoadmapToggleDependencyResponse:{
		dependee:"ID",
		dependency:"ID"
	},
	RoadmapUpdateItemPayload:{
		success:"Boolean",
		errors:"MutationError",
		output:"RoadmapUpdateItemResponse"
	},
	RoadmapUpdateItemResponse:{
		item:"RoadmapItem"
	},
	RoadmapUpdateSettingsOutput:{
		roadmapEnabled:"Boolean",
		childIssuePlanningEnabled:"Boolean"
	},
	RoadmapUpdateSettingsPayload:{
		success:"Boolean",
		errors:"MutationError",
		output:"RoadmapUpdateSettingsOutput"
	},
	RoadmapUserConfiguration:{
		hasCompletedOnboarding:"Boolean",
		creationPreferences:"RoadmapCreationPreferences",
		isDependenciesVisible:"Boolean",
		isProgressVisible:"Boolean",
		isWarningsVisible:"Boolean",
		listWidth:"Long",
		timelineMode:"RoadmapTimelineMode",
		epicView:"RoadmapEpicView",
		levelOneView:"RoadmapLevelOneView",
		levelOneViewSettings:"RoadmapViewSettings",
		isReleasesVisible:"Boolean",
		highlightedVersions:"ID"
	},
	RoadmapVersion:{
		id:"ID",
		name:"String",
		status:"RoadmapVersionStatus",
		releaseDate:"Date"
	},
	RoadmapViewSettings:{
		period:"Int",
		showCompleted:"Boolean"
	},
	RoadmapsMutation:{
		resolveRoadmapHealthcheck:"RoadmapResolveHealthcheckPayload",
		updateRoadmapSettings:"RoadmapUpdateSettingsPayload",
		addRoadmapItem:"RoadmapAddItemPayload",
		updateRoadmapItem:"RoadmapUpdateItemPayload",
		scheduleRoadmapItems:"RoadmapScheduleItemsPayload",
		addRoadmapDependency:"RoadmapToggleDependencyPayload",
		removeRoadmapDependency:"RoadmapToggleDependencyPayload"
	},
	RoadmapsQuery:{
		roadmapForSource:"RoadmapDetails",
		roadmapItemByIds:"RoadmapItem",
		roadmapFilterItems:"ID",
		roadmapFilterConfiguration:"RoadmapFilterConfiguration"
	},
	ScopeSprintIssue:{
		issueKey:"String",
		issueSummary:"String",
		estimate:"Float"
	},
	SearchConfluencePageBlogAttachment:{
		id:"ID",
		title:"String",
		url:"URL",
		iconUrl:"URL",
		type:"SearchResultType",
		description:"String",
		lastModifiedDate:"DateTime",
		space:"SearchSpace",
		pageEntity:"ConfluencePage"
	},
	SearchConfluenceSpace:{
		id:"ID",
		title:"String",
		url:"URL",
		iconUrl:"URL",
		type:"SearchResultType",
		description:"String",
		lastModifiedDate:"DateTime",
		spaceEntity:"ConfluenceSpace"
	},
	SearchDefaultResult:{
		id:"ID",
		title:"String",
		url:"URL",
		iconUrl:"URL",
		type:"SearchResultType",
		description:"String",
		lastModifiedDate:"DateTime"
	},
	SearchItemConnection:{
		edges:"SearchResultItemEdge",
		pageInfo:"PageInfo",
		totalCount:"Int"
	},
	SearchQueryAPI:{
		search:"SearchItemConnection",
		recent:"SearchResult"
	},
	SearchResult:{
		"...on SearchConfluencePageBlogAttachment": "SearchConfluencePageBlogAttachment",
		"...on SearchConfluenceSpace": "SearchConfluenceSpace",
		"...on SearchDefaultResult": "SearchDefaultResult",
		"...on SearchResultJiraBoard": "SearchResultJiraBoard",
		"...on SearchResultJiraProject": "SearchResultJiraProject",
		id:"ID",
		title:"String",
		url:"URL",
		iconUrl:"URL",
		type:"SearchResultType",
		description:"String"
	},
	SearchResultItemEdge:{
		node:"SearchResult",
		cursor:"String"
	},
	SearchResultJiraBoard:{
		id:"ID",
		title:"String",
		url:"URL",
		iconUrl:"URL",
		type:"SearchResultType",
		description:"String",
		favourite:"Boolean",
		boardId:"ID",
		container:"SearchResultJiraBoardContainer",
		product:"SearchBoardProductType",
		isSimpleBoard:"Boolean"
	},
	SearchResultJiraBoardContainer:{
		"...on SearchResultJiraBoardProjectContainer":"SearchResultJiraBoardProjectContainer",
		"...on SearchResultJiraBoardUserContainer":"SearchResultJiraBoardUserContainer"
	},
	SearchResultJiraBoardProjectContainer:{
		projectId:"ID",
		projectKey:"String",
		projectName:"String",
		projectTypeKey:"SearchProjectType"
	},
	SearchResultJiraBoardUserContainer:{
		userId:"ID",
		userAccountId:"String",
		userName:"String"
	},
	SearchResultJiraProject:{
		id:"ID",
		projectType:"SearchProjectType",
		projectId:"String",
		projectKey:"String",
		title:"String",
		url:"URL",
		iconUrl:"URL",
		type:"SearchResultType",
		description:"String",
		favourite:"Boolean",
		canView:"Boolean",
		simplified:"Boolean",
		project:"JiraProject"
	},
	SearchSpace:{
		key:"String",
		iconUrl:"URL"
	},
	SecurityContainer:{
		"...on ThirdPartySecurityContainer": "ThirdPartySecurityContainer",
		name:"String",
		url:"URL",
		icon:"URL",
		providerName:"String",
		lastUpdated:"DateTime"
	},
	SecurityWorkspace:{
		"...on ThirdPartySecurityWorkspace": "ThirdPartySecurityWorkspace",
		name:"String",
		url:"URL",
		icon:"URL",
		providerName:"String",
		lastUpdated:"DateTime"
	},
	SetAppEnvironmentVariablePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	SetAppStoredEntityPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	SetColumnLimitOutput:{
		columns:"Column",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	SetColumnNameOutput:{
		column:"Column",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	SetExternalAuthCredentialsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	SetIssueMediaVisibilityOutput:{
		boardScope:"BoardScope",
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	SetPolarisProjectOnboardedPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	SetPolarisSelectedDeliveryProjectPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	SetPolarisSnippetPropertiesConfigPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	SetSwimlaneStrategyResponse:{
		strategy:"SwimlaneStrategy",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	ShepherdActivity:{
		"...on ShepherdResourceActivity":"ShepherdResourceActivity"
	},
	ShepherdActivityConnection:{
		edges:"ShepherdActivityEdge",
		pageInfo:"PageInfo"
	},
	ShepherdActivityEdge:{
		node:"ShepherdActivity"
	},
	ShepherdActivityHighlight:{
		action:"ShepherdActionType",
		actor:"ShepherdUser",
		subject:"ShepherdSubject",
		time:"ShepherdTime"
	},
	ShepherdActivityResult:{
		"...on QueryError":"QueryError",
		"...on ShepherdActivityConnection":"ShepherdActivityConnection"
	},
	ShepherdAlert:{
		assignee:"ShepherdUser",
		cloudId:"ID",
		createdOn:"DateTime",
		description:"ShepherdDescriptionTemplate",
		id:"ID",
		orgId:"ID",
		status:"ShepherdAlertStatus",
		supportingData:"ShepherdAlertSupportingData",
		template:"ShepherdAlertTemplateType",
		title:"String",
		updatedOn:"DateTime"
	},
	ShepherdAlertEdge:{
		cursor:"String",
		node:"ShepherdAlert"
	},
	ShepherdAlertResult:{
		"...on QueryError":"QueryError",
		"...on ShepherdAlert":"ShepherdAlert"
	},
	ShepherdAlertSupportingData:{
		highlight:"ShepherdHighlight"
	},
	ShepherdAlertsConnection:{
		edges:"ShepherdAlertEdge"
	},
	ShepherdAlertsResult:{
		"...on QueryError":"QueryError",
		"...on ShepherdAlertsConnection":"ShepherdAlertsConnection"
	},
	ShepherdAppInfo:{
		apiVersion:"Int",
		env:"String",
		loginUrl:"String"
	},
	ShepherdConfig:{
		descriptionTemplates:"ShepherdDescriptionTemplate"
	},
	ShepherdConfigResult:{
		"...on QueryError":"QueryError",
		"...on ShepherdConfig":"ShepherdConfig"
	},
	ShepherdCreateAlertPayload:{
		errors:"MutationError",
		node:"ShepherdAlert",
		success:"Boolean"
	},
	ShepherdCreateExampleAlertPayload:{
		errors:"MutationError",
		node:"ShepherdAlert",
		success:"Boolean"
	},
	ShepherdCreateOrganizationPayload:{
		errors:"MutationError",
		node:"ShepherdOrganization",
		success:"Boolean"
	},
	ShepherdCreateSubscriptionPayload:{
		errors:"MutationError",
		node:"ShepherdSubscription",
		success:"Boolean"
	},
	ShepherdDescriptionTemplate:{
		text:"JSON",
		type:"ShepherdAlertTemplateType"
	},
	ShepherdEmailConnection:{
		edges:"ShepherdEmailEdge"
	},
	ShepherdEmailEdge:{
		cursor:"String",
		node:"ShepherdEmailSubscription"
	},
	ShepherdEmailSubscription:{
		createdBy:"String",
		createdOn:"DateTime",
		email:"String",
		id:"ID",
		status:"ShepherdSubscriptionStatus",
		updatedBy:"String",
		updatedOn:"DateTime"
	},
	ShepherdGenericQueryErrorExtension:{
		errorType:"String",
		statusCode:"Int",
		type:"ShepherdQueryErrorType"
	},
	ShepherdHighlight:{
		"...on ShepherdActivityHighlight":"ShepherdActivityHighlight"
	},
	ShepherdMutation:{
		createAlert:"ShepherdCreateAlertPayload",
		createExampleAlert:"ShepherdCreateExampleAlertPayload",
		createOrganization:"ShepherdCreateOrganizationPayload",
		createSubscription:"ShepherdCreateSubscriptionPayload",
		deleteSubscription:"ShepherdSubscriptionMutationPayload",
		testSubscription:"ShepherdTestSubscriptionPayload",
		updateAlert:"ShepherdUpdateAlertPayload",
		updateOrganization:"ShepherdUpdateOrganizationPayload",
		updateSubscription:"ShepherdUpdateSubscriptionPayload"
	},
	ShepherdOrganization:{
		createdOn:"DateTime",
		enabled:"Boolean",
		id:"ID",
		subscriptions:"ShepherdSubscriptionsResult",
		updatedOn:"DateTime"
	},
	ShepherdOrganizationResult:{
		"...on QueryError":"QueryError",
		"...on ShepherdOrganization":"ShepherdOrganization"
	},
	ShepherdQuery:{
		shepherdActivity:"ShepherdActivityResult",
		shepherdAlert:"ShepherdAlertResult",
		shepherdAlerts:"ShepherdAlertsResult",
		shepherdAppInfo:"ShepherdAppInfo",
		shepherdConfig:"ShepherdConfigResult",
		shepherdOrganization:"ShepherdOrganizationResult",
		shepherdSubscriptions:"ShepherdSubscriptionsResult",
		shepherdUser:"ShepherdUser"
	},
	ShepherdResourceActivity:{
		action:"ShepherdActionType",
		actor:"ShepherdUser",
		id:"String",
		resourceAri:"String",
		time:"DateTime"
	},
	ShepherdSlackEdge:{
		cursor:"String",
		node:"ShepherdSlackSubscription"
	},
	ShepherdSlackSubscription:{
		callbackURL:"String",
		channelId:"String",
		createdBy:"String",
		createdOn:"DateTime",
		id:"ID",
		status:"ShepherdSubscriptionStatus",
		teamId:"String",
		updatedBy:"String",
		updatedOn:"DateTime"
	},
	ShepherdSubject:{
		ari:"String",
		ati:"String",
		containerAri:"String"
	},
	ShepherdSubscription:{
		"...on ShepherdEmailSubscription": "ShepherdEmailSubscription",
		"...on ShepherdSlackSubscription": "ShepherdSlackSubscription",
		"...on ShepherdWebhookSubscription": "ShepherdWebhookSubscription",
		createdBy:"String",
		createdOn:"DateTime",
		id:"ID",
		status:"ShepherdSubscriptionStatus",
		updatedBy:"String",
		updatedOn:"DateTime"
	},
	ShepherdSubscriptionConnection:{
		edges:"ShepherdSubscriptionEdge"
	},
	ShepherdSubscriptionEdge:{
		"...on ShepherdEmailEdge": "ShepherdEmailEdge",
		"...on ShepherdSlackEdge": "ShepherdSlackEdge",
		"...on ShepherdWebhookEdge": "ShepherdWebhookEdge",
		cursor:"String",
		node:"ShepherdSubscription"
	},
	ShepherdSubscriptionMutationPayload:{
		errors:"MutationError",
		node:"ShepherdSubscription",
		success:"Boolean"
	},
	ShepherdSubscriptionsResult:{
		"...on QueryError":"QueryError",
		"...on ShepherdEmailConnection":"ShepherdEmailConnection",
		"...on ShepherdSubscriptionConnection":"ShepherdSubscriptionConnection",
		"...on ShepherdWebhookConnection":"ShepherdWebhookConnection"
	},
	ShepherdTestSubscriptionPayload:{
		errors:"MutationError",
		node:"ShepherdSubscription",
		success:"Boolean"
	},
	ShepherdTime:{
		end:"DateTime",
		start:"DateTime"
	},
	ShepherdUpdateAlertPayload:{
		errors:"MutationError",
		node:"ShepherdAlert",
		success:"Boolean"
	},
	ShepherdUpdateOrganizationPayload:{
		errors:"MutationError",
		node:"ShepherdOrganization",
		success:"Boolean"
	},
	ShepherdUpdateSubscriptionPayload:{
		errors:"MutationError",
		node:"ShepherdSubscription",
		success:"Boolean"
	},
	ShepherdUser:{
		aaid:"ID",
		createdOn:"DateTime",
		user:"User"
	},
	ShepherdWebhookConnection:{
		edges:"ShepherdWebhookEdge"
	},
	ShepherdWebhookEdge:{
		cursor:"String",
		node:"ShepherdWebhookSubscription"
	},
	ShepherdWebhookSubscription:{
		authToken:"String",
		callbackURL:"String",
		createdBy:"String",
		createdOn:"DateTime",
		id:"ID",
		status:"ShepherdSubscriptionStatus",
		type:"ShepherdWebhookType",
		updatedBy:"String",
		updatedOn:"DateTime"
	},
	SmartsQueryApi:{
		recommendedContainer:"SmartsRecommendedContainer",
		recommendedUser:"SmartsRecommendedUser",
		recommendedObject:"SmartsRecommendedObject"
	},
	SmartsRecommendedContainer:{
		id:"ID",
		score:"Float",
		container:"ConfluenceSpace"
	},
	SmartsRecommendedObject:{
		id:"ID",
		score:"Float",
		object:"SmartsRecommendedObjectData"
	},
	SmartsRecommendedObjectData:{
		"...on ConfluencePage":"ConfluencePage",
		"...on ConfluenceBlogPost":"ConfluenceBlogPost"
	},
	SmartsRecommendedUser:{
		id:"ID",
		score:"Float",
		user:"User"
	},
	SoftwareBoard:{
		id:"ID",
		name:"String",
		columns:"Column",
		swimlaneStrategy:"SwimlaneStrategy",
		hasClearedCards:"Boolean",
		inlineCardCreate:"InlineCardCreateConfig",
		cardMedia:"CardMediaConfig",
		assignees:"User",
		cardTypes:"CardType",
		cards:"SoftwareCard",
		cardChildren:"SoftwareCard",
		swimlanes:"Swimlane",
		userSwimlanes:"Swimlane",
		labels:"String",
		rankCustomFieldId:"String",
		editConfig:"BoardEditConfig",
		columnConfigs:"ColumnsConfig"
	},
	SoftwareBoardFeatureKey: `scalar.SoftwareBoardFeatureKey` as const,
	SoftwareBoardPermission: `scalar.SoftwareBoardPermission` as const,
	SoftwareCard:{
		id:"ID",
		key:"String",
		summary:"String",
		labels:"String",
		type:"CardType",
		status:"CardStatus",
		activeSprint:"Sprint",
		assignee:"User",
		flagged:"Boolean",
		done:"Boolean",
		coverMedia:"CardCoverMedia",
		devStatus:"DevStatus",
		parentId:"ID",
		childrenIds:"ID",
		estimate:"Estimate",
		childCardsMetadata:"ChildCardsMetadata",
		priority:"CardPriority",
		dueDate:"String",
		fixVersionsIds:"ID"
	},
	SoftwareCardChildrenInfo:{
		todoStats:"SoftwareCardChildrenInfoStats",
		inProgressStats:"SoftwareCardChildrenInfoStats",
		doneStats:"SoftwareCardChildrenInfoStats",
		lastColumnIssueStats:"SoftwareCardChildrenInfoStats"
	},
	SoftwareCardChildrenInfoStats:{
		cardCount:"Int"
	},
	SoftwareCardTransition:{
		id:"ID",
		name:"String",
		status:"CardStatus",
		originStatus:"CardStatus",
		cardType:"CardType",
		isGlobal:"Boolean",
		isInitial:"Boolean",
		hasConditions:"Boolean"
	},
	SoftwareCardTypeTransition:{
		transitionId:"ID",
		name:"String",
		status:"CardStatus",
		originStatus:"CardStatus",
		cardType:"CardType",
		isGlobal:"Boolean",
		isInitial:"Boolean",
		hasConditions:"Boolean"
	},
	SoftwareOperation:{
		icon:"Icon",
		name:"String",
		url:"String",
		tooltip:"String",
		styleClass:"String"
	},
	SoftwareProject:{
		id:"ID",
		key:"String",
		name:"String",
		cardTypes:"CardType"
	},
	SoftwareReport:{
		id:"ID",
		key:"String",
		localisedName:"String",
		localisedDescription:"String",
		group:"String",
		imageUri:"String",
		urlName:"String",
		isApplicable:"Boolean",
		inapplicableReason:"String",
		inapplicableDescription:"String"
	},
	SoftwareReports:{
		overview:"ReportsOverview",
		cumulativeFlowDiagram:"CumulativeFlowDiagram",
		burndownChart:"BurndownChart"
	},
	SoftwareSprintMetadata:{
		numCompletedIssues:"Int",
		numOpenIssues:"Int",
		top100CompletedCardKeysWithIncompleteChildren:"String"
	},
	Sprint:{
		id:"ID",
		name:"String",
		goal:"String",
		startDate:"DateTime",
		endDate:"DateTime",
		daysRemaining:"Int",
		cards:"SoftwareCard",
		sprintState:"SprintState",
		sprintMetadata:"SoftwareSprintMetadata"
	},
	SprintEndData:{
		timestamp:"DateTime",
		issueList:"ScopeSprintIssue",
		remainingEstimate:"Float"
	},
	SprintReportsFilters:{
		sprints:"Sprint",
		estimationStatistic:"SprintReportsEstimationStatisticType"
	},
	SprintResponse:{
		sprint:"Sprint",
		statusCode:"Int",
		success:"Boolean",
		message:"String"
	},
	SprintScopeChangeData:{
		timestamp:"DateTime",
		issueKey:"String",
		issueSummary:"String",
		eventType:"SprintScopeChangeEventType",
		scope:"Float",
		completion:"Float",
		remaining:"Float",
		estimate:"Float",
		prevCompletion:"Float",
		prevScope:"Float",
		prevRemaining:"Float",
		prevEstimate:"Float"
	},
	SprintScopeChangeEventType: `scalar.SprintScopeChangeEventType` as const,
	SprintStartData:{
		timestamp:"DateTime",
		issueList:"ScopeSprintIssue",
		scopeEstimate:"Float"
	},
	Storage:{
		hosted:"HostedStorage",
		remotes:"Remote"
	},
	Subscription:{
		onJiraIssueCreatedForUser:"OnJiraIssueCreatedForUserResponseType"
	},
	SupportRequest:{
		id:"ID",
		summary:"String",
		description:"String",
		projectName:"String",
		requestTypeName:"String",
		createdDate:"SupportRequestDisplayableDateTime",
		status:"SupportRequestStatus",
		reporter:"SupportRequestUser",
		participants:"SupportRequestUser",
		fields:"SupportRequestField",
		defaultFields:"SupportRequestField",
		experienceFields:"SupportRequestField",
		comments:"SupportRequestComments",
		statuses:"SupportRequestStatuses",
		transitions:"SupportRequestTransitions",
		targetScreen:"String",
		tracAttachmentComponentsEnabled:"Boolean",
		lastComment:"SupportRequestComments",
		relatedRequests:"SupportRequest",
		capabilities:"String",
		sourceId:"String",
		activities:"SupportRequestActivities"
	},
	SupportRequestActivities:{
		offset:"Int",
		limit:"Int",
		total:"Int",
		values:"SupportRequestActivity"
	},
	SupportRequestActivity:{
		comment:"SupportRequestComment",
		status:"SupportRequestActivityStatus"
	},
	SupportRequestActivityStatus:{
		text:"String",
		resolution:"String",
		createdDate:"SupportRequestDisplayableDateTime"
	},
	SupportRequestCatalogMutationApi:{
		addComment:"SupportRequestComment",
		updateMigrationTask:"JSON",
		statusTransition:"Boolean",
		removeRequestParticipants:"SupportRequestParticipants",
		addRequestParticipants:"SupportRequestParticipants",
		removeSupportRequestOrganizations:"SupportRequestOrganization",
		addSupportRequestOrganizations:"SupportRequestOrganization",
		createNamedContactOperationRequest:"SupportRequestTicket",
		updateSupportRequest:"SupportRequest",
		supportRequestContext:"SupportRequestContextMutationApi"
	},
	SupportRequestCatalogQueryApi:{
		me:"SupportRequestPage",
		supportRequest:"SupportRequest",
		users:"SupportRequestUsers",
		supportRequestContext:"SupportRequestContextQueryApi"
	},
	SupportRequestComment:{
		author:"SupportRequestUser",
		message:"String",
		createdDate:"SupportRequestDisplayableDateTime",
		mentionedUsers:"SupportRequestUser"
	},
	SupportRequestComments:{
		offset:"Int",
		limit:"Int",
		size:"Int",
		lastPage:"Boolean",
		values:"SupportRequestComment"
	},
	SupportRequestContactRelation:{
		openRequest:"SupportRequestTicket",
		contact:"SupportRequestUser"
	},
	SupportRequestContextMutationApi:{
		setNotifications:"SupportRequestNotification"
	},
	SupportRequestContextQueryApi:{
		getNotificationStatus:"SupportRequestNotification"
	},
	SupportRequestDisplayableDateTime:{
		dateTime:"String",
		friendly:"String",
		epochMillis:"Long"
	},
	SupportRequestField:{
		id:"String",
		label:"String",
		value:"SupportRequestFieldValue",
		dataType:"SupportRequestFieldDataType",
		editable:"Boolean"
	},
	SupportRequestFieldValue:{
		value:"String"
	},
	SupportRequestHierarchyRequest:{
		id:"ID",
		summary:"String",
		description:"String",
		requestTypeName:"String",
		createdDate:"SupportRequestDisplayableDateTime",
		status:"SupportRequestStatus",
		reporter:"SupportRequestUser",
		participants:"SupportRequestUser",
		parent:"SupportRequestHierarchyRequest",
		children:"SupportRequestHierarchyRequest",
		targetScreen:"String"
	},
	SupportRequestHierarchyRequests:{
		total:"Int",
		page:"SupportRequestHierarchyRequest"
	},
	SupportRequestLastComment:{
		offset:"Int",
		values:"SupportRequestComment"
	},
	SupportRequestNamedContactRelation:{
		orgId:"String",
		orgName:"String",
		sen:"String",
		contactRelations:"SupportRequestContactRelation"
	},
	SupportRequestNamedContactRelations:{
		cloudEnterpriseRelations:"SupportRequestNamedContactRelation",
		premierSupportRelations:"SupportRequestNamedContactRelation"
	},
	SupportRequestNotification:{
		status:"Boolean"
	},
	SupportRequestOrganization:{
		id:"Int",
		name:"String"
	},
	SupportRequestPage:{
		profile:"SupportRequestUser",
		requests:"SupportRequests",
		migrationRequests:"SupportRequestHierarchyRequests",
		namedContactRelations:"SupportRequestNamedContactRelations"
	},
	SupportRequestParticipants:{
		offset:"Int",
		limit:"Int",
		size:"Int",
		lastPage:"Boolean",
		values:"SupportRequestUser"
	},
	SupportRequestStatus:{
		category:"SupportRequestStatusCategory",
		text:"String",
		createdDate:"SupportRequestDisplayableDateTime"
	},
	SupportRequestStatuses:{
		offset:"Int",
		limit:"Int",
		size:"Int",
		lastPage:"Boolean",
		values:"SupportRequestStatus"
	},
	SupportRequestTicket:{
		issueKey:"String",
		statusName:"String",
		categoryKey:"String"
	},
	SupportRequestTransition:{
		id:"String",
		name:"String"
	},
	SupportRequestTransitions:{
		offset:"Int",
		limit:"Int",
		size:"Int",
		lastPage:"Boolean",
		values:"SupportRequestTransition"
	},
	SupportRequestUser:{
		user:"User",
		username:"String",
		email:"String",
		displayName:"String",
		userType:"SupportRequestUserType"
	},
	SupportRequestUsers:{
		searchUsers:"SupportRequestUser",
		searchOrganizations:"SupportRequestOrganization"
	},
	SupportRequests:{
		total:"Int",
		page:"SupportRequest"
	},
	Swimlane:{
		id:"ID",
		iconUrl:"String",
		name:"String",
		allowedCardTypes:"CardType",
		columnsInSwimlane:"ColumnInSwimlane"
	},
	Team:{
		id:"ID",
		organizationId:"String",
		creator:"User",
		state:"TeamState",
		displayName:"String",
		description:"String",
		membershipSetting:"MembershipSetting",
		smallHeaderImageUrl:"String",
		largeHeaderImageUrl:"String",
		smallAvatarImageUrl:"String",
		largeAvatarImageUrl:"String",
		members:"TeamMemberConnection"
	},
	TeamMember:{
		member:"User",
		state:"MembershipState",
		role:"MembershipRole"
	},
	TeamMemberConnection:{
		edges:"TeamMemberEdge",
		nodes:"TeamMember",
		pageInfo:"PageInfo"
	},
	TeamMemberEdge:{
		node:"TeamMember",
		cursor:"String"
	},
	TeamQuery:{
		team:"Team"
	},
	TenantContext:{
		cloudId:"ID",
		hostName:"String",
		cloudUrl:"URL",
		orgId:"ID"
	},
	ThirdPartySecurityContainer:{
		id:"ID",
		name:"String",
		url:"URL",
		icon:"URL",
		providerName:"String",
		lastUpdated:"DateTime"
	},
	ThirdPartySecurityWorkspace:{
		id:"ID",
		name:"String",
		url:"URL",
		icon:"URL",
		providerName:"String",
		lastUpdated:"DateTime"
	},
	TimeSeriesPoint:{
		id:"ID",
		x:"DateTime",
		y:"Int"
	},
	ToggleBoardFeatureOutput:{
		featureGroups:"BoardFeatureGroupConnection",
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	Toolchain:{
		containers:"ToolchainContainerConnection"
	},
	ToolchainContainer:{
		id:"ID",
		name:"String"
	},
	ToolchainContainerConnection:{
		edges:"ToolchainContainerEdge",
		nodes:"ToolchainContainer",
		pageInfo:"PageInfo"
	},
	ToolchainContainerEdge:{
		cursor:"String",
		node:"ToolchainContainer"
	},
	TownsquareComment:{
		creator:"User",
		id:"ID",
		url:"String",
		uuid:"String",
		container:"TownsquareCommentContainer"
	},
	TownsquareCommentConnection:{
		edges:"TownsquareCommentEdge",
		pageInfo:"PageInfo"
	},
	TownsquareCommentContainer:{
		"...on TownsquareGoal":"TownsquareGoal",
		"...on TownsquareProject":"TownsquareProject"
	},
	TownsquareCommentEdge:{
		cursor:"String",
		node:"TownsquareComment"
	},
	TownsquareGoal:{
		archived:"Boolean",
		iconData:"String",
		id:"ID",
		key:"String",
		name:"String",
		uuid:"String",
		owner:"User",
		url:"String",
		dueDate:"TownsquareTargetDate",
		state:"TownsquareGoalState"
	},
	TownsquareGoalConnection:{
		edges:"TownsquareGoalEdge",
		pageInfo:"PageInfo"
	},
	TownsquareGoalEdge:{
		cursor:"String",
		node:"TownsquareGoal"
	},
	TownsquareGoalState:{
		label:"String",
		score:"Float",
		value:"TownsquareGoalStateValue"
	},
	TownsquareHelpPointer:{
		cloudId:"String",
		creationDate:"DateTime",
		creatorAaid:"String",
		description:"String",
		id:"ID",
		link:"String",
		name:"String",
		owner:"TownsquareHelpPointerOwner",
		tags:"TownsquareTagConnection",
		teamId:"String",
		type:"TownsquareHelpPointerType",
		iconData:"String"
	},
	TownsquareHelpPointerConnection:{
		count:"Int",
		edges:"TownsquareHelpPointerEdge",
		pageInfo:"PageInfo"
	},
	TownsquareHelpPointerEdge:{
		cursor:"String",
		node:"TownsquareHelpPointer"
	},
	TownsquareHelpPointerOwner:{
		displayName:"String",
		id:"String",
		largeAvatarImageUrl:"String",
		smallAvatarImageUrl:"String"
	},
	TownsquareHelpPointerSearchResponse:{
		results:"TownsquareHelpPointerConnection",
		tags:"TownsquareTag",
		teams:"TownsquareTeam"
	},
	TownsquareProject:{
		archived:"Boolean",
		iconData:"String",
		id:"ID",
		key:"String",
		name:"String",
		uuid:"String",
		owner:"User",
		url:"String",
		dueDate:"TownsquareTargetDate",
		state:"TownsquareProjectState"
	},
	TownsquareProjectConnection:{
		edges:"TownsquareProjectEdge",
		pageInfo:"PageInfo"
	},
	TownsquareProjectEdge:{
		cursor:"String",
		node:"TownsquareProject"
	},
	TownsquareProjectState:{
		label:"String",
		value:"TownsquareProjectStateValue"
	},
	TownsquareQueryApi:{
		projectsByAri:"TownsquareProject",
		projectByKey:"TownsquareProject",
		goalsByAri:"TownsquareGoal",
		goalByKey:"TownsquareGoal",
		commentsByAri:"TownsquareComment",
		projectSearch:"TownsquareProjectConnection",
		goalSearch:"TownsquareGoalConnection",
		helpPointerSearch:"TownsquareHelpPointerSearchResponse",
		helpPointersByCloudIds:"TownsquareHelpPointerConnection",
		helpPointersByTeam:"TownsquareHelpPointerConnection"
	},
	TownsquareTag:{
		description:"String",
		id:"ID",
		name:"String"
	},
	TownsquareTagConnection:{
		count:"Int",
		edges:"TownsquareTagEdge",
		pageInfo:"PageInfo"
	},
	TownsquareTagEdge:{
		cursor:"String",
		node:"TownsquareTag"
	},
	TownsquareTargetDate:{
		confidence:"TownsquareTargetDateType",
		dateRange:"TownsquareTargetDateRange",
		label:"String"
	},
	TownsquareTargetDateRange:{
		end:"DateTime",
		start:"DateTime"
	},
	TownsquareTeam:{
		avatarUrl:"String",
		id:"ID",
		name:"String"
	},
	TrelloQueryApi:{
		echo:"String",
		templateCategories:"TrelloTemplateGalleryCategory",
		templateLanguages:"TrelloTemplateGalleryLanguage"
	},
	TrelloTemplateGalleryCategory:{
		key:"String"
	},
	TrelloTemplateGalleryLanguage:{
		description:"String",
		enabled:"Boolean",
		language:"String",
		locale:"String",
		localizedDescription:"String"
	},
	URL: `scalar.URL` as const,
	UnarchivePolarisInsightsPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UnassignIssueParentOutput:{
		boardScope:"BoardScope",
		statusCode:"Int",
		success:"Boolean",
		message:"String",
		clientMutationId:"ID"
	},
	UnlinkExternalSourcePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UnwatchMarketplaceAppPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdateAppDetailsResponse:{
		success:"Boolean",
		errors:"MutationError",
		app:"App"
	},
	UpdateAppHostServiceScopesResponsePayload:{
		success:"Boolean",
		errors:"MutationError",
		app:"App",
		appEnvironmentVersion:"AppEnvironmentVersion"
	},
	UpdateAtlassianOAuthClientResponse:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdateCompassComponentDataManagerMetadataPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	UpdateCompassComponentLinkPayload:{
		updatedComponentLink:"CompassLink",
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	UpdateCompassComponentPayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	UpdateCompassComponentTypePayload:{
		success:"Boolean",
		errors:"MutationError",
		componentDetails:"CompassComponent"
	},
	UpdateCompassScorecardCriteriasPayload:{
		success:"Boolean",
		errors:"MutationError",
		scorecard:"CompassScorecard"
	},
	UpdateCompassScorecardPayload:{
		success:"Boolean",
		errors:"MutationError",
		scorecardDetails:"CompassScorecard"
	},
	UpdateDevOpsContainerRelationshipEntityPropertiesPayload:{
		success:"Boolean",
		errors:"MutationError",
		properties:"JSON"
	},
	UpdateDevOpsServiceAndJiraProjectRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceAndJiraProjectRelationship:"DevOpsServiceAndJiraProjectRelationship"
	},
	UpdateDevOpsServiceAndOpsgenieTeamRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceAndOpsgenieTeamRelationship:"DevOpsServiceAndOpsgenieTeamRelationship"
	},
	UpdateDevOpsServiceAndRepositoryRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceAndRepositoryRelationship:"DevOpsServiceAndRepositoryRelationship"
	},
	UpdateDevOpsServiceEntityPropertiesPayload:{
		success:"Boolean",
		errors:"MutationError",
		properties:"JSON"
	},
	UpdateDevOpsServicePayload:{
		success:"Boolean",
		errors:"MutationError",
		service:"DevOpsService"
	},
	UpdateDevOpsServiceRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		serviceRelationship:"DevOpsServiceRelationship"
	},
	UpdateDeveloperLogAccessPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdateJiraProjectAndOpsgenieTeamRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		jiraProjectAndOpsgenieTeamRelationship:"JiraProjectAndOpsgenieTeamRelationship"
	},
	UpdateJiraProjectAndRepositoryRelationshipPayload:{
		success:"Boolean",
		errors:"MutationError",
		jiraProjectAndRepositoryRelationship:"JiraProjectAndRepositoryRelationship"
	},
	UpdatePolarisCalculatedFieldPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdeaField"
	},
	UpdatePolarisCommentPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisComment"
	},
	UpdatePolarisDecorationPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisDecoration"
	},
	UpdatePolarisFieldDescriptionPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdeaField"
	},
	UpdatePolarisFieldEmojiPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdeaField"
	},
	UpdatePolarisFieldOptionWeightPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdatePolarisIdeaPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisIdea"
	},
	UpdatePolarisIdeaTemplatePayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdatePolarisInsightPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisInsight"
	},
	UpdatePolarisPlayContributionPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisPlayContribution"
	},
	UpdatePolarisPlayPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisPlay"
	},
	UpdatePolarisTermsConsentPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdatePolarisViewArrangementInfoPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	UpdatePolarisViewPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisView"
	},
	UpdatePolarisViewRankV2Payload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisViewSet"
	},
	UpdatePolarisViewSetPayload:{
		success:"Boolean",
		errors:"MutationError",
		node:"PolarisViewSet"
	},
	UpdatePolarisViewTimestampPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	User:{
		"...on AppUser": "AppUser",
		"...on AtlassianAccountUser": "AtlassianAccountUser",
		"...on CustomerUser": "CustomerUser",
		id:"ID",
		accountId:"ID",
		canonicalAccountId:"ID",
		accountStatus:"AccountStatus",
		name:"String",
		picture:"URL"
	},
	UserAuthTokenForExtensionResponse:{
		success:"Boolean",
		errors:"MutationError",
		authToken:"AuthToken"
	},
	UserConsentExtension:{
		user:"UserConsentExtensionUser",
		appEnvironmentVersion:"UserConsentExtensionAppEnvironmentVersion",
		consentedAt:"DateTime"
	},
	UserConsentExtensionAppEnvironmentVersion:{
		id:"ID"
	},
	UserConsentExtensionUser:{
		aaid:"ID"
	},
	UserGrant:{
		id:"ID",
		accountId:"ID",
		oauthClientId:"ID",
		appId:"ID",
		appDetails:"UserGrantAppDetails",
		scopes:"AppHostServiceScope"
	},
	UserGrantAppDetails:{
		name:"String",
		description:"String",
		avatarUrl:"String",
		vendorName:"String",
		contactLink:"String",
		privacyPolicyLink:"String",
		termsOfServiceLink:"String"
	},
	UserGrantConnection:{
		edges:"UserGrantEdge",
		nodes:"UserGrant",
		pageInfo:"UserGrantPageInfo"
	},
	UserGrantEdge:{
		cursor:"String",
		node:"UserGrant"
	},
	UserGrantPageInfo:{
		hasNextPage:"Boolean",
		hasPreviousPage:"Boolean",
		startCursor:"String",
		endCursor:"String"
	},
	UserInstallationRules:{
		rule:"UserInstallationRuleValue"
	},
	UserInstallationRulesPayload:{
		rule:"UserInstallationRuleValue",
		success:"Boolean",
		errors:"MutationError"
	},
	VirtualAgentConfiguration:{
		id:"ID",
		respondToQueries:"Boolean",
		intentRuleProjections:"VirtualAgentIntentRuleProjectionsConnection",
		intentRuleProjection:"VirtualAgentIntentRuleProjectionResult"
	},
	VirtualAgentConfigurationResult:{
		"...on VirtualAgentConfiguration":"VirtualAgentConfiguration",
		"...on VirtualAgentQueryError":"VirtualAgentQueryError"
	},
	VirtualAgentIntentProjection:{
		id:"ID",
		name:"String",
		questionProjections:"VirtualAgentIntentQuestionProjectionsConnection"
	},
	VirtualAgentIntentProjectionResult:{
		"...on VirtualAgentIntentProjection":"VirtualAgentIntentProjection",
		"...on VirtualAgentQueryError":"VirtualAgentQueryError"
	},
	VirtualAgentIntentQuestionProjection:{
		id:"ID",
		text:"String"
	},
	VirtualAgentIntentQuestionProjectionEdge:{
		cursor:"String",
		node:"VirtualAgentIntentQuestionProjection"
	},
	VirtualAgentIntentQuestionProjectionsConnection:{
		edges:"VirtualAgentIntentQuestionProjectionEdge",
		nodes:"VirtualAgentIntentQuestionProjection",
		pageInfo:"PageInfo"
	},
	VirtualAgentIntentRuleProjection:{
		id:"ID",
		isEnabled:"Boolean",
		intentProjection:"VirtualAgentIntentProjectionResult",
		flowJsonRepresentation:"String"
	},
	VirtualAgentIntentRuleProjectionEdge:{
		cursor:"String",
		node:"VirtualAgentIntentRuleProjection"
	},
	VirtualAgentIntentRuleProjectionResult:{
		"...on VirtualAgentIntentRuleProjection":"VirtualAgentIntentRuleProjection",
		"...on VirtualAgentQueryError":"VirtualAgentQueryError"
	},
	VirtualAgentIntentRuleProjectionsConnection:{
		edges:"VirtualAgentIntentRuleProjectionEdge",
		nodes:"VirtualAgentIntentRuleProjection",
		pageInfo:"PageInfo"
	},
	VirtualAgentMutationApi:{
		updateVirtualAgentConfiguration:"VirtualAgentUpdateConfigurationPayload"
	},
	VirtualAgentQueryApi:{
		virtualAgentConfigurationByProjectId:"VirtualAgentConfigurationResult",
		intentRuleProjections:"VirtualAgentIntentRuleProjectionsConnection"
	},
	VirtualAgentQueryError:{
		id:"ID",
		message:"String",
		extensions:"QueryErrorExtension"
	},
	VirtualAgentUpdateConfigurationPayload:{
		success:"Boolean",
		errors:"MutationError",
		virtualAgentConfiguration:"VirtualAgentConfiguration"
	},
	WatchMarketplaceAppPayload:{
		success:"Boolean",
		errors:"MutationError"
	},
	WebTriggerUrl:{
		id:"ID",
		appId:"ID",
		envId:"ID",
		triggerKey:"String",
		extensionId:"ID",
		contextId:"ID",
		url:"URL",
		product:"String",
		tenantContext:"TenantContext"
	},
	_AppliedDirective:{
		name:"String",
		args:"_DirectiveArgument"
	},
	_DirectiveArgument:{
		name:"String",
		value:"String"
	}
}

export const Ops = {
mutation: "Mutation" as const,
	query: "Query" as const,
	subscription: "Subscription" as const
}