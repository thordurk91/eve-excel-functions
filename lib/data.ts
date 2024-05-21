export const function_data = [
        {
            "description": "Get alliance by id.",
            "id": "ALLIANCE",
            "name": "ALLIANCE",
            "parameters": [
                {
                    "description": "The alliance id",
                    "name": "alliance_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get character by id.",
            "id": "CHARACTER",
            "name": "CHARACTER",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id",
                    "type": "number"
                },
                {
                    "description": "Fetch location and ship data if the character is signed in",
                    "name": "fetch_location_and_ship",
                    "type": "boolean",
                    "optional": true
                }
            ],
            "result": {}
        },
        {
            "description": "Get active character(s) logged in.",
            "id": "ACTIVE_CHARACTER",
            "name": "ACTIVE_CHARACTER",
            "parameters": [],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get loyalty point information for a character.",
            "id": "CHARACTER_LP",
            "name": "CHARACTER_LP",
            "parameters": [
                {
                    "description": "The character id or entity",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {}
        },
        {
            "description": "Get standings information for a character.",
            "id": "CHARACTER_STANDINGS",
            "name": "CHARACTER_STANDINGS",
            "parameters": [
                {
                    "description": "The character id or entity",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Corp/faction id to display",
                    "name": "id",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get clone information for a character.",
            "id": "CHARACTER_CLONES",
            "name": "CHARACTER_CLONES",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {}
        },
        {
            "description": "Get fittings for a character.",
            "id": "CHARACTER_FITTINGS",
            "name": "CHARACTER_FITTINGS",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get planets/colonies for a character.",
            "id": "CHARACTER_PLANETS",
            "name": "CHARACTER_PLANETS",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get planets/colonies for a character.",
            "id": "CHARACTER_PLANET",
            "name": "CHARACTER_PLANET",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Planet id",
                    "name": "planet_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get corporation role information for a character.",
            "id": "CHARACTER_CORPORATION_ROLES",
            "name": "CHARACTER_CORPORATION_ROLES",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get implant information for a character.",
            "id": "CHARACTER_IMPLANTS",
            "name": "CHARACTER_IMPLANTS",
            "parameters": [
                {
                    "description": "The character id",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get assets for a character",
            "id": "CHARACTER_ASSETS",
            "name": "CHARACTER_ASSETS",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, assets for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "(String) Type name to filter results by or type id number to strict filter out by",
                    "name": "type_name_or_type_id",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Location id to filter out results by. Can be station id or structure id. Uses final location and location fields to match. If a cell/string is used it will try to convert to a number.",
                    "name": "location_filter",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Page of results to display (200 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get assets for a corporation",
            "id": "CORPORATION_ASSETS",
            "name": "CORPORATION_ASSETS",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                },
                {
                    "description": "Type name as string to filter results by or type id number to strict filter out by",
                    "name": "type_name_or_type_id",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Location id to filter out results by. Can be station id or structure id. Uses final location and location fields to match. Tries to convert cells/strings to numbers.",
                    "name": "location_filter",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Page of results to display (200 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get open market orders for a character",
            "id": "CHARACTER_ORDERS",
            "name": "CHARACTER_ORDERS",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, open market orders for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get historical market orders for a character",
            "id": "CHARACTER_ORDERS_HISTORY",
            "name": "CHARACTER_ORDERS_HISTORY",
            "parameters": [
                {
                    "description": "The character id or entity If omitted, historical market orders from the last 90 days for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Page of results to return (1000 per page) defaults to displaying all",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get mining activity for a character",
            "id": "CHARACTER_MINING",
            "name": "CHARACTER_MINING",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, skills for the first signed in character will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get skills for a character",
            "id": "CHARACTER_SKILLS",
            "name": "CHARACTER_SKILLS",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, skills for the first signed in character will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Search string to filter skills by",
                    "name": "search_string",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get skill queue for a character",
            "id": "CHARACTER_SKILL_QUEUE",
            "name": "CHARACTER_SKILL_QUEUE",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, skill queue for the first signed in character will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get attributes for a character",
            "id": "CHARACTER_ATTRIBUTES",
            "name": "CHARACTER_ATTRIBUTES",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, attributes for the first signed in character will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {}
        },
        {
            "descriptions": "Get contracts for a corporation",
            "id": "CORPORATION_CONTRACTS",
            "name": "CORPORATION_CONTRACTS",
            "parameters": [
                {
                    "description": "The character id or entity to be used to select the corporation, required for access reasons.",
                    "name": "character_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Title to filter by, string, substring match.",
                    "name": "title_filter",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Status to filter by, string, exact match",
                    "name": "status_filter",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "End location to filter by, exact match, integer",
                    "name": "end_location_filter",
                    "optional": true,
                    "type": "number"
                },
                {
                    "description": "Page of results to return. 500 per page, defaults to 1st page",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                },
                {
                    "description": "Include delete contracts, defaults to false.",
                    "name": "include_deleted",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get contracts for a character",
            "id": "CHARACTER_CONTRACTS",
            "name": "CHARACTER_CONTRACTS",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Title to filter by, string, substring match.",
                    "name": "title_filter",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Status to filter by, string, exact match",
                    "name": "status_filter",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Page of results to return. 500 per page",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                },
                {
                    "description": "Include delete contracts, defaults to false.",
                    "name": "include_deleted",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get wallet transactions for all signed in characters",
            "id": "CHARACTER_WALLET_TRANSACTIONS",
            "name": "CHARACTER_WALLET_TRANSACTIONS",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, transactions for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Page of results to return (200 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get wallet journal for a character",
            "id": "CHARACTER_WALLET_JOURNAL",
            "name": "CHARACTER_WALLET_JOURNAL",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, wallet journal for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "Filter to only display a certain ref type",
                    "name": "ref_type",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Page of results to display (200 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get wallet balance for a character",
            "id": "CHARACTER_WALLET_BALANCE",
            "name": "CHARACTER_WALLET_BALANCE",
            "parameters": [
                {
                    "description": "The character id. If omitted, wallet balance for the first signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {}
        },
        {
            "descriptions": "Get industry jobs belonging to a character",
            "id": "CHARACTER_INDUSTRY_JOBS",
            "name": "CHARACTER_INDUSTRY_JOBS",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, industry jobs for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "String to filter out results by matching it to the status property",
                    "name": "status_filter",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Type id number to filter out results by matching it to the product output from the job",
                    "name": "type_id_filter",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get blueprints owned by a character",
            "id": "CHARACTER_BLUEPRINTS",
            "name": "CHARACTER_BLUEPRINTS",
            "parameters": [
                {
                    "description": "The character id or entity. If omitted, blueprints for all signed in characters will be returned",
                    "name": "character_id_or_entity",
                    "optional": true,
                    "type": "any"
                },
                {
                    "description": "String to filter out results by",
                    "name": "search_string",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                },
                {
                    "description": "Page of results to display (500 per page). Defaults shows all.",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get blueprint by id.",
            "id": "BLUEPRINT",
            "name": "BLUEPRINT",
            "parameters": [
                {
                    "description": "The blueprint id or type id",
                    "name": "blueprint_or_type_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get blueprint explosion, material, component and excess for producing each step, experimental. Based on 0/0 blueprints",
            "id": "BLUEPRINT_EXPLOSION",
            "name": "BLUEPRINT_EXPLOSION",
            "parameters": [
                {
                    "description": "The array or range of blueprints or types to explode",
                    "dimensionality": "matrix",
                    "name": "blueprint_or_type_array",
                    "type": "any"
                },
                {
                    "description": "The array or range of quantities to manufacture for each blueprint or type. If omitted, a quantity of 1 for each blueprint or type is used",
                    "dimensionality": "matrix",
                    "name": "quantity_array",
                    "optional": true,
                    "type": "any"
                }
            ],
            "result": {}
        },
        {
            "description": "Get corporation by id.",
            "id": "CORPORATION",
            "name": "CORPORATION",
            "parameters": [
                {
                    "description": "The corporation id",
                    "name": "corporation_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "descriptions": "Get industry jobs belonging to a corporation.",
            "id": "CORPORATION_INDUSTRY_JOBS",
            "name": "CORPORATION_INDUSTRY_JOBS",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                },
                {
                    "description": "String to filter out results by matching it to the status property",
                    "name": "status_filter",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Type id number to filter out results by matching it to the product output from the job",
                    "name": "type_id_filter",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get blueprints belonging to a corporation.",
            "id": "CORPORATION_BLUEPRINTS",
            "name": "CORPORATION_BLUEPRINTS",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                },
                {
                    "description": "String to filter out results by",
                    "name": "search_string",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                },
                {
                    "description": "Page of results to display (500 per page). Defaults shows all.",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get members belonging to a corporation, and their tracking info. (Required Diretor role)",
            "id": "CORPORATION_MEMBERTRACKING",
            "name": "CORPORATION_MEMBERTRACKING",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "BETA Get a list of corporation mining observers (Required Accountant role)",
            "id": "CORPORATION_MINING",
            "name": "CORPORATION_MINING",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "BETA Get a list of corporation mining observers (Required Accountant role)",
            "id": "CORPORATION_MINING_DETAILS",
            "name": "CORPORATION_MINING_DETAILS",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                },
                {
                    "description": "The observer id",
                    "name": "observer_id",
                    "optional": false,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get structures belonging to a corporation.",
            "id": "CORPORATION_STRUCTURES",
            "name": "CORPORATION_STRUCTURES",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get customs offices belonging to a corporation.",
            "id": "CORPORATION_CUSTOMS_OFFICES",
            "name": "CORPORATION_CUSTOMS_OFFICES",
            "parameters": [
                {
                    "description": "The character id or entity.",
                    "name": "character_id_or_entity",
                    "optional": false,
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get open market orders for a corporation",
            "id": "CORPORATION_ORDERS",
            "name": "CORPORATION_ORDERS",
            "parameters": [
                {
                    "description": "The character id or entity that has access to the corporation orders",
                    "name": "character_id_or_entity",
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get historical market orders for a corporation",
            "id": "CORPORATION_ORDERS_HISTORY",
            "name": "CORPORATION_ORDERS_HISTORY",
            "parameters": [
                {
                    "description": "The character id or entity that has access to the corporation orders",
                    "name": "character_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Page of results to display (1000 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get wallet transactions for a corporation division",
            "id": "CORPORATION_WALLET_TRANSACTIONS",
            "name": "CORPORATION_WALLET_TRANSACTIONS",
            "parameters": [
                {
                    "description": "The character id or entity that has access to the corporation wallet transactions",
                    "name": "character_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "The division id. Defaults to 1",
                    "name": "division_id",
                    "type": "number",
                    "optional": true
                },
                {
                    "description": "Page of results to return (200 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get wallet journal for a corporation division",
            "id": "CORPORATION_WALLET_JOURNAL",
            "name": "CORPORATION_WALLET_JOURNAL",
            "parameters": [
                {
                    "description": "The character id or entity that has access to the corporation wallet journal",
                    "name": "character_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "The division id. Defaults to 1",
                    "name": "division_id",
                    "type": "number",
                    "optional": true
                },
                {
                    "description": "Filter to only display a certain ref type",
                    "name": "ref_type",
                    "optional": true,
                    "type": "string"
                },
                {
                    "description": "Page of results to display (200 per page)",
                    "name": "page",
                    "optional": true,
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "descriptions": "Get wallets and their division for a corporation",
            "id": "CORPORATION_WALLETS",
            "name": "CORPORATION_WALLETS",
            "parameters": [
                {
                    "description": "The character id or entity that has access to the corporation wallet information",
                    "name": "character_id_or_entity",
                    "type": "any"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get category by id.",
            "id": "CATEGORY",
            "name": "CATEGORY",
            "parameters": [
                {
                    "description": "The category id",
                    "name": "category_id",
                    "type": "number"
                },
                {
                    "description": "Whether the search should include a list of groups in the category. If omitted, strict = false",
                    "name": "expanded",
                    "optional": true,
                    "type": "boolean"
                },
                {
                    "description": "Whether the search should include another list of types in the group list. Requires expanded as TRUE.",
                    "name": "expand_groups",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {}
        },
        {
            "description": "Get group by id.",
            "id": "GROUP",
            "name": "GROUP",
            "parameters": [
                {
                    "description": "The group id",
                    "name": "group_id",
                    "type": "number"
                },
                {
                    "description": "Whether the search should include a list of types in the group. If omitted, strict = false",
                    "name": "expanded",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {}
        },
        {
            "description": "Get constellation by id.",
            "id": "CONSTELLATION",
            "name": "CONSTELLATION",
            "parameters": [
                {
                    "description": "The constellation id",
                    "name": "constellation_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get region by id.",
            "id": "REGION",
            "name": "REGION",
            "parameters": [
                {
                    "description": "The region id",
                    "name": "region_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get solarsystem by id.",
            "id": "SOLARSYSTEM",
            "name": "SOLARSYSTEM",
            "parameters": [
                {
                    "description": "The solarsystem id",
                    "name": "solarsystem_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get solarsystem index by ID.",
            "id": "INDUSTRYINDEX",
            "name": "INDUSTRYINDEX",
            "parameters": [
                {
                    "description": "The solarsystem id to get indices for, if ommitted returns all solar system indices",
                    "name": "solarsystem_id",
                    "type": "number",
                    "optional": true
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get stations by searchstring. If empty return all",
            "id": "SEARCHSTATIONS",
            "name": "SEARCHSTATIONS",
            "parameters": [
                {
                    "description": "The string to search for",
                    "name": "searchstring",
                    "type": "string",
                    "optional": true
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get solarsystem by searchstring. If empty return all",
            "id": "SEARCHSOLARSYSTEM",
            "name": "SEARCHSOLARSYSTEM",
            "parameters": [
                {
                    "description": "The string to search for",
                    "name": "searchstring",
                    "type": "string",
                    "optional": true
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get region by searchstring. If empty return all",
            "id": "SEARCHREGION",
            "name": "SEARCHREGION",
            "parameters": [
                {
                    "description": "The string to search for",
                    "name": "searchstring",
                    "type": "string",
                    "optional": true
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get station by id.",
            "id": "STATION",
            "name": "STATION",
            "parameters": [
                {
                    "description": "The station id",
                    "name": "station_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get PI schematic by id or output type_id.",
            "id": "SCHEMATIC",
            "name": "SCHEMATIC",
            "parameters": [
                {
                    "description": "The schematic id",
                    "name": "schematic_id_or_output_type_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get structure by id.",
            "id": "STRUCTURE",
            "name": "STRUCTURE",
            "parameters": [
                {
                    "description": "The structure id",
                    "name": "structure_id",
                    "type": "number"
                },
                {
                    "description": "The character id or entity",
                    "name": "character_id_or_entity",
                    "type": "any",
                    "optional": true
                }
            ],
            "result": {}
        },
        {
            "description": "Get type by id.",
            "id": "TYPE",
            "name": "TYPE",
            "parameters": [
                {
                    "description": "The item type id",
                    "name": "type_id",
                    "type": "number"
                },
                {
                    "description": "Include dogma information",
                    "name": "include_dogma",
                    "type": "boolean",
                    "optional": true
                }
            ],
            "result": {}
        },
        {
            "description": "Search for inventory types that match a given sub-string.",
            "id": "INVENTORYSEARCH",
            "name": "INVENTORYSEARCH",
            "parameters": [
                {
                    "description": "The string to search on",
                    "name": "search",
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                },
                {
                    "description": "Whether the search should display unpublished types. If omitted, display_unpublished = false",
                    "name": "display_unpublished",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Search for character that match a given sub-string. Min. 5 letters for non-strict searching. Requires a logged in character",
            "id": "CHARACTERSEARCH",
            "name": "CHARACTERSEARCH",
            "parameters": [
                {
                    "description": "The string to search on",
                    "name": "search",
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Search for corporations that match a given sub-string. Requires a logged in character",
            "id": "CORPORATIONSEARCH",
            "name": "CORPORATIONSEARCH",
            "parameters": [
                {
                    "description": "The string to search on",
                    "name": "search",
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Search for alliances that match a given sub-string. Requires a logged in character",
            "id": "ALLIANCESEARCH",
            "name": "ALLIANCESEARCH",
            "parameters": [
                {
                    "description": "The string to search on",
                    "name": "search",
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Search for structures that match a given sub-string. Requires a logged in character",
            "id": "STRUCTURESEARCH",
            "name": "STRUCTURESEARCH",
            "parameters": [
                {
                    "description": "The string to search on",
                    "name": "search",
                    "type": "string"
                },
                {
                    "description": "Whether the search should be a strict match. If omitted, strict = false",
                    "name": "strict",
                    "optional": true,
                    "type": "boolean"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get market orders stats for a type in a region. Stations and public structures.",
            "id": "MARKET_ORDERS_STATS",
            "name": "MARKET_ORDERS_STATS",
            "parameters": [
                {
                    "description": "The region id",
                    "name": "region_id",
                    "type": "number"
                },
                {
                    "description": "The type id or entity",
                    "name": "type_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Station or solarsystem id",
                    "name": "location_id",
                    "type": "number",
                    "optional": true
                }
            ],
            "result": {}
        },
        {
            "description": "Get market orders for a type in a region. Stations and public structures.",
            "id": "MARKET_ORDERS",
            "name": "MARKET_ORDERS",
            "parameters": [
                {
                    "description": "The region id",
                    "name": "region_id",
                    "type": "number"
                },
                {
                    "description": "The type id or entity",
                    "name": "type_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Only show sell if TRUE, only show buy if FALSE, both if left empty",
                    "name": "sell_buy_only_boolean",
                    "type": "boolean",
                    "optional": true
                },
                {
                    "description": "Location id filter for the orders",
                    "name": "location_id",
                    "type": "number",
                    "optional": true
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },{
            "description": "Get market history for a type in a region. Limited to 300 calls per minute",
            "id": "MARKET_HISTORY",
            "name": "MARKET_HISTORY",
            "parameters": [
                {
                    "description": "The region id",
                    "name": "region_id",
                    "type": "number"
                },
                {
                    "description": "The type id or entity",
                    "name": "type_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "How many days to aggregate in a single cell, 1 or TRUE will return the latest data available only for direct usage",
                    "name": "latest_only",
                    "type": "any",
                    "optional": true
                }
            ],
            "result": {}
        },
        {
            "description": "Get market orders for a type in a region. Stations and public structures. Auto updates every hour. Max 100 _STREAMING functions.",
            "id": "MARKET_ORDERS_STREAMING",
            "name": "MARKET_ORDERS_STREAMING",
            "options": {
                "stream": true
            },
            "parameters": [
                {
                    "description": "The region id",
                    "name": "region_id",
                    "type": "number"
                },
                {
                    "description": "The type id",
                    "name": "type_id",
                    "type": "any"
                },
                {
                    "description": "Only show sell if TRUE, only show buy if FALSE, both if left empty",
                    "name": "sell_buy_only_boolean",
                    "type": "boolean",
                    "optional": true
                },
                {
                    "description": "Location id filter for the orders",
                    "name": "location_id",
                    "type": "number",
                    "optional": true
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get market orders for a type from a structure. Private and public structures. Requires a logged in character for ACL checks.",
            "id": "MARKET_STRUCTURE_ORDERS",
            "name": "MARKET_STRUCTURE_ORDERS",
            "parameters": [
                {
                    "description": "The structure id",
                    "name": "structure_id",
                    "type": "number"
                },
                {
                    "description": "The type id or entity",
                    "name": "type_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "Only show sell if TRUE, only show buy if FALSE, both if left empty",
                    "name": "sell_buy_only_boolean",
                    "type": "boolean",
                    "optional": true
                },
                {
                    "description": "The character id or entity to use for the structure ACL. If ommitted uses the first signed in character",
                    "name": "character_id_or_entity",
                    "type": "any",
                    "optional": true
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get market orders stats for a type in a structure.",
            "id": "MARKET_STRUCTURE_ORDERS_STATS",
            "name": "MARKET_STRUCTURE_ORDERS_STATS",
            "parameters": [
                {
                    "description": "The structure id",
                    "name": "structure_id",
                    "type": "number"
                },
                {
                    "description": "The type id or entity",
                    "name": "type_id_or_entity",
                    "type": "any"
                },
                {
                    "description": "The character id or entity to use for the structure ACL. If ommitted uses the first signed in character",
                    "name": "character_id_or_entity",
                    "type": "any",
                    "optional": true
                }
            ],
            "result": {}
        },
        {
            "description": "Get market orders for a type from a structure. Private and public structures. Requires a logged in character for ACL checks. Auto updates every hour. Max 100 _STREAMING functions.",
            "id": "MARKET_STRUCTURE_ORDERS_STREAMING",
            "name": "MARKET_STRUCTURE_ORDERS_STREAMING",
            "options": {
                "stream": true
            },
            "parameters": [
                {
                    "description": "The structure id",
                    "name": "structure_id",
                    "type": "number"
                },
                {
                    "description": "The type id",
                    "name": "type_id",
                    "type": "any"
                },
                {
                    "description": "Only show sell if TRUE, only show buy if FALSE, both if left empty",
                    "name": "sell_buy_only_boolean",
                    "type": "boolean",
                    "optional": true
                },
                {
                    "description": "The character id or entity to use for the structure ACL. If ommitted uses the first signed in character",
                    "name": "character_id_or_entity",
                    "type": "any",
                    "optional": true
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "List all wars",
            "id": "WARS",
            "name": "WARS",
            "parameters": [],
            "result": {
                "dimensionality": "matrix"
            }
        },
        {
            "description": "Get war by id.",
            "id": "WAR",
            "name": "WAR",
            "parameters": [
                {
                    "description": "The war id",
                    "name": "war_id",
                    "type": "number"
                }
            ],
            "result": {}
        },
        {
            "description": "Get killmails related to a war.",
            "id": "WAR_KILLMAILS",
            "name": "WAR_KILLMAILS",
            "parameters": [
                {
                    "description": "The war id",
                    "name": "war_id",
                    "type": "number"
                }
            ],
            "result": {
                "dimensionality": "matrix"
            }
        }
    ]