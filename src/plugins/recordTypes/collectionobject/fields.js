import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        usageGroupList: {
          usageGroup: {
            usage: {
              [config]: {
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            usageNote: {
              [config]: {
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
          },
        },
        techniqueGroupList: {
          techniqueGroup: {
            techniqueType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodtechniquetype',
                  },
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared,place/tgn',
                  },
                },
              },
            },
            objectProductionPlaceRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodplacerole',
                  },
                },
              },
            },
          },
        },
        objectProductionPeopleGroupList: {
          objectProductionPeopleGroup: {
            objectProductionPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/archculture,concept/ethculture',
                  },
                },
              },
            },
            objectProductionPeopleRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpeoplerole',
                  },
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          objectProductionPersonGroup: {
            objectProductionPersonRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpersonrole',
                  },
                },
              },
            },
          },
        },
        objectProductionOrganizationGroupList: {
          objectProductionOrganizationGroup: {
            objectProductionOrganizationRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodorgrole',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_anthro': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/anthro',
          },
        },
        ethnoFileCodes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          ethnoFileCode: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthro.ethnoFileCode.name',
                  defaultMessage: 'Ethnographic file code',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethfilecode',
                },
              },
            },
          },
        },
        anthroOwnershipGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthroOwnershipGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthro.anthroOwnershipGroup.name',
                  defaultMessage: 'Previous ownership',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            anthroOwner: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwner.fullName',
                    defaultMessage: 'Previous owner name',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwner.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            anthroOwnershipAccess: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipAccess.fullName',
                    defaultMessage: 'Previous ownership access',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipAccess.name',
                    defaultMessage: 'Access',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipAccessLevels',
                  },
                },
              },
            },
            anthroOwnershipDateGroup: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.fullName',
                    defaultMessage: 'Previous ownership date',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            anthroOwnershipCategory: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipCategory.fullName',
                    defaultMessage: 'Previous ownership category',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipCategory.name',
                    defaultMessage: 'Category',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipCategories',
                  },
                },
              },
            },
            anthroOwnershipPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPlace.fullName',
                    defaultMessage: 'Previous ownership place',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared',
                  },
                },
              },
            },
            anthroOwnershipMethod: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipMethod.fullName',
                    defaultMessage: 'Previous ownership exchange method',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipMethod.name',
                    defaultMessage: 'Exch. meth.',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipExchangeMethods',
                  },
                },
              },
            },
            anthroOwnershipPriceCurrency: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceCurrency.fullName',
                    defaultMessage: 'Previous ownership exchange price currency',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceCurrency.name',
                    defaultMessage: 'Price currency',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            anthroOwnershipPriceAmount: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceAmount.fullName',
                    defaultMessage: 'Previous ownership exchange price amount',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceAmount.name',
                    defaultMessage: 'Price amount',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            anthroOwnershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipNote.fullName',
                    defaultMessage: 'Previous ownership note',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        fieldLocVerbatim: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthro.fieldLocVerbatim.name',
                defaultMessage: 'Field collection place (verbatim)',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        commingledRemainsGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          commingledRemainsGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            minIndividuals: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.minIndividuals.name',
                    defaultMessage: 'Minimum number of individuals',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            bone: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.bone.name',
                    defaultMessage: 'Bone',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            side: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.side.name',
                    defaultMessage: 'Side',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'bodyside',
                  },
                },
              },
            },
            count: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.count.name',
                    defaultMessage: 'Count',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            sex: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.sex.name',
                    defaultMessage: 'Sex',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'sexDeterminations',
                  },
                },
              },
            },
            ageRange: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.ageRange.name',
                    defaultMessage: 'Age range represented',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'agerange',
                  },
                },
              },
            },
            dentition: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.dentition.name',
                    defaultMessage: 'Dentition present?',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            mortuaryTreatmentGroupList: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              mortuaryTreatmentGroup: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.collectionobjects_anthro.mortuaryTreatmentGroup.name',
                      defaultMessage: 'Mortuary treatment',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                mortuaryTreatment: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatment.name',
                        defaultMessage: 'Treatment',
                      },
                      fullName: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatment.fullName',
                        defaultMessage: 'Mortuary treatment',
                      },
                    }),
                    view: {
                      type: TermPickerInput,
                      props: {
                        source: 'mortuarytreatment',
                      },
                    },
                  },
                },
                mortuaryTreatmentNote: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatmentNote.name',
                        defaultMessage: 'Note',
                      },
                      fullName: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatmentNote.fullName',
                        defaultMessage: 'Mortuary treatment note',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
              },
            },
            behrensmeyerSingleLower: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.behrensmeyerSingleLower.name',
                    defaultMessage: 'Single/lower',
                  },
                  fullName: {
                    id: 'field.collectionobjects_anthro.behrensmeyerSingleLower.fullName',
                    defaultMessage: 'Behrensmeyer stage - single/lower',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'behrensmeyer',
                  },
                },
              },
            },
            behrensmeyerUpper: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.behrensmeyerUpper.name',
                    defaultMessage: 'Upper',
                  },
                  fullName: {
                    id: 'field.collectionobjects_anthro.behrensmeyerUpper.fullName',
                    defaultMessage: 'Behrensmeyer stage - upper',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'behrensmeyer',
                  },
                },
              },
            },
            commingledRemainsNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_anthro.commingledRemainsNote.name',
                    defaultMessage: 'Note',
                  },
                  fullName: {
                    id: 'field.collectionobjects_anthro.commingledRemainsNote.fullName',
                    defaultMessage: 'Commingled remains note',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
          },
        },
        ...extensions.locality.fields,
      },
      ...extensions.annotation.collectionobject.fields,
      ...extensions.culturalcare.collectionobject.fields,
      ...extensions.nagpra.collectionobject.fields,
      ...extensions.naturalhistory.collectionobject.fields,
    },
  };
};
