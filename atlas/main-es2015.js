(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../git-version.json":
/*!******************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/git-version.json ***!
  \******************************************************************/
/*! exports provided: dirty, raw, hash, distance, tag, semver, suffix, semverString, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"dirty\":true,\"raw\":\"67e69614-dirty\",\"hash\":\"67e69614\",\"distance\":null,\"tag\":null,\"semver\":null,\"suffix\":\"67e69614-dirty\",\"semverString\":null}");

/***/ }),

/***/ "../../libs/atlas/api/src/index.ts":
/*!*****************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/index.ts ***!
  \*****************************************************************************/
/*! exports provided: AtlasApiModule, Cardinality, IndexType, deleteEntitySoft, getDomains, getSystems, getAppSearchEntity, getClassificationTypeByName, getClassificationsDefinitions, getClassificationForEntity, getDashboard, getDataQuality, clearEntityByIdCache, getEntityById, getFiltersAndResults, getGovernanceQuality, getLineageModel, getQueryResults, getTermById, getTermsDefinitionById, getTypeByName, getTypeDefs, removeEntityClassification, saveEntity, saveEntityClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_atlas_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/atlas-api.module */ "../../libs/atlas/api/src/lib/atlas-api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AtlasApiModule", function() { return _lib_atlas_api_module__WEBPACK_IMPORTED_MODULE_0__["AtlasApiModule"]; });

/* harmony import */ var _lib_delete_entity_soft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/delete-entity-soft */ "../../libs/atlas/api/src/lib/delete-entity-soft/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteEntitySoft", function() { return _lib_delete_entity_soft__WEBPACK_IMPORTED_MODULE_1__["deleteEntitySoft"]; });

/* harmony import */ var _lib_get_all_domains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/get-all-domains */ "../../libs/atlas/api/src/lib/get-all-domains/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDomains", function() { return _lib_get_all_domains__WEBPACK_IMPORTED_MODULE_2__["getDomains"]; });

/* harmony import */ var _lib_get_all_systems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/get-all-systems */ "../../libs/atlas/api/src/lib/get-all-systems/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystems", function() { return _lib_get_all_systems__WEBPACK_IMPORTED_MODULE_3__["getSystems"]; });

/* harmony import */ var _lib_get_app_seach_entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/get-app-seach-entity */ "../../libs/atlas/api/src/lib/get-app-seach-entity/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppSearchEntity", function() { return _lib_get_app_seach_entity__WEBPACK_IMPORTED_MODULE_4__["getAppSearchEntity"]; });

/* harmony import */ var _lib_get_classification_def_by_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/get-classification-def-by-name */ "../../libs/atlas/api/src/lib/get-classification-def-by-name/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationTypeByName", function() { return _lib_get_classification_def_by_name__WEBPACK_IMPORTED_MODULE_5__["getClassificationTypeByName"]; });

/* harmony import */ var _lib_get_classification_definitions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/get-classification-definitions */ "../../libs/atlas/api/src/lib/get-classification-definitions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationsDefinitions", function() { return _lib_get_classification_definitions__WEBPACK_IMPORTED_MODULE_6__["getClassificationsDefinitions"]; });

/* harmony import */ var _lib_get_classification_for_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/get-classification-for-entity */ "../../libs/atlas/api/src/lib/get-classification-for-entity/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationForEntity", function() { return _lib_get_classification_for_entity__WEBPACK_IMPORTED_MODULE_7__["getClassificationForEntity"]; });

/* harmony import */ var _lib_get_dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/get-dashboard */ "../../libs/atlas/api/src/lib/get-dashboard/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDashboard", function() { return _lib_get_dashboard__WEBPACK_IMPORTED_MODULE_8__["getDashboard"]; });

/* harmony import */ var _lib_get_data_quality__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/get-data-quality */ "../../libs/atlas/api/src/lib/get-data-quality/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataQuality", function() { return _lib_get_data_quality__WEBPACK_IMPORTED_MODULE_9__["getDataQuality"]; });

/* harmony import */ var _lib_get_entity_by_id__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/get-entity-by-id */ "../../libs/atlas/api/src/lib/get-entity-by-id/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearEntityByIdCache", function() { return _lib_get_entity_by_id__WEBPACK_IMPORTED_MODULE_10__["clearEntityByIdCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return _lib_get_entity_by_id__WEBPACK_IMPORTED_MODULE_10__["getEntityById"]; });

/* harmony import */ var _lib_get_filters_and_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/get-filters-and-results */ "../../libs/atlas/api/src/lib/get-filters-and-results/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersAndResults", function() { return _lib_get_filters_and_results__WEBPACK_IMPORTED_MODULE_11__["getFiltersAndResults"]; });

/* harmony import */ var _lib_get_governance_quality__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/get-governance-quality */ "../../libs/atlas/api/src/lib/get-governance-quality/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGovernanceQuality", function() { return _lib_get_governance_quality__WEBPACK_IMPORTED_MODULE_12__["getGovernanceQuality"]; });

/* harmony import */ var _lib_get_lineage_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/get-lineage-model */ "../../libs/atlas/api/src/lib/get-lineage-model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLineageModel", function() { return _lib_get_lineage_model__WEBPACK_IMPORTED_MODULE_13__["getLineageModel"]; });

/* harmony import */ var _lib_get_query_results__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/get-query-results */ "../../libs/atlas/api/src/lib/get-query-results/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryResults", function() { return _lib_get_query_results__WEBPACK_IMPORTED_MODULE_14__["getQueryResults"]; });

/* harmony import */ var _lib_get_term_by_id__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/get-term-by-id */ "../../libs/atlas/api/src/lib/get-term-by-id/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTermById", function() { return _lib_get_term_by_id__WEBPACK_IMPORTED_MODULE_15__["getTermById"]; });

/* harmony import */ var _lib_get_terms_definitions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/get-terms-definitions */ "../../libs/atlas/api/src/lib/get-terms-definitions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTermsDefinitionById", function() { return _lib_get_terms_definitions__WEBPACK_IMPORTED_MODULE_16__["getTermsDefinitionById"]; });

/* harmony import */ var _lib_get_type_by_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/get-type-by-name */ "../../libs/atlas/api/src/lib/get-type-by-name/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypeByName", function() { return _lib_get_type_by_name__WEBPACK_IMPORTED_MODULE_17__["getTypeByName"]; });

/* harmony import */ var _lib_get_type_defs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/get-type-defs */ "../../libs/atlas/api/src/lib/get-type-defs/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypeDefs", function() { return _lib_get_type_defs__WEBPACK_IMPORTED_MODULE_18__["getTypeDefs"]; });

/* harmony import */ var _lib_remove_entity_classification__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/remove-entity-classification */ "../../libs/atlas/api/src/lib/remove-entity-classification/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEntityClassification", function() { return _lib_remove_entity_classification__WEBPACK_IMPORTED_MODULE_19__["removeEntityClassification"]; });

/* harmony import */ var _lib_save_entity__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/save-entity */ "../../libs/atlas/api/src/lib/save-entity/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveEntity", function() { return _lib_save_entity__WEBPACK_IMPORTED_MODULE_20__["saveEntity"]; });

/* harmony import */ var _lib_save_entity_classification__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/save-entity-classification */ "../../libs/atlas/api/src/lib/save-entity-classification/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveEntityClassification", function() { return _lib_save_entity_classification__WEBPACK_IMPORTED_MODULE_21__["saveEntityClassification"]; });

/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/types */ "../../libs/atlas/api/src/lib/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cardinality", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_22__["Cardinality"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexType", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_22__["IndexType"]; });


























/***/ }),

/***/ "../../libs/atlas/api/src/lib/atlas-api.module.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/atlas-api.module.ts ***!
  \********************************************************************************************/
/*! exports provided: AtlasApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlasApiModule", function() { return AtlasApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AtlasApiModule {
    constructor(injector) {
        AtlasApiModule.injector = injector;
    }
}
AtlasApiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AtlasApiModule });
AtlasApiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AtlasApiModule_Factory(t) { return new (t || AtlasApiModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AtlasApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "../../libs/atlas/api/src/lib/delete-entity-soft/delete-entity-soft.ts":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/delete-entity-soft/delete-entity-soft.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: deleteEntitySoft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEntitySoft", function() { return deleteEntitySoft; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/entity/guid';
/**
 * Sets the internal status of the entity with the given guid to DELETED. This counts as a soft delete in Atlas.
 * @param guid the guid of the entity
 */
function deleteEntitySoft(guid) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'deleteEntitySoft');
    const path = `${BASE_PATH}/${guid}`;
    return http.authorize().delete(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/delete-entity-soft/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/delete-entity-soft/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: deleteEntitySoft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delete_entity_soft__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-entity-soft */ "../../libs/atlas/api/src/lib/delete-entity-soft/delete-entity-soft.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteEntitySoft", function() { return _delete_entity_soft__WEBPACK_IMPORTED_MODULE_0__["deleteEntitySoft"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-all-domains/get-all-domains.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-all-domains/get-all-domains.ts ***!
  \***********************************************************************************************************/
/*! exports provided: getDomains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDomains", function() { return getDomains; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getDomains(
/** Optional parameters for the get domains operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getDomains');
    const path = `atlas/v2/search/basic/?typeName=m4i_data_domain`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-all-domains/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-all-domains/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: getDomains */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_all_domains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-all-domains */ "../../libs/atlas/api/src/lib/get-all-domains/get-all-domains.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDomains", function() { return _get_all_domains__WEBPACK_IMPORTED_MODULE_0__["getDomains"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-all-systems/get-all-systems.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-all-systems/get-all-systems.ts ***!
  \***********************************************************************************************************/
/*! exports provided: getSystems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystems", function() { return getSystems; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getSystems(
/** Optional parameters for the get domains operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getSystems');
    const path = `atlas/v2/search/basic/?typeName=m4i_system`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-all-systems/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-all-systems/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: getSystems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_all_systems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-all-systems */ "../../libs/atlas/api/src/lib/get-all-systems/get-all-systems.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSystems", function() { return _get_all_systems__WEBPACK_IMPORTED_MODULE_0__["getSystems"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-app-seach-entity/get-app-search-entity.ts":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-app-seach-entity/get-app-search-entity.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: getAppSearchEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppSearchEntity", function() { return getAppSearchEntity; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");



function getAppSearchEntity(guid, { forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getAppSearchEntity');
    const path = `elastic/documents?ids%5B%5D=${guid}`;
    return http
        .authorizeFilter()
        .cache(forceUpdate)
        .get(path)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => { var _a; return (_a = result) === null || _a === void 0 ? void 0 : _a[0]; }));
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-app-seach-entity/index.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-app-seach-entity/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: getAppSearchEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_app_search_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-app-search-entity */ "../../libs/atlas/api/src/lib/get-app-seach-entity/get-app-search-entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAppSearchEntity", function() { return _get_app_search_entity__WEBPACK_IMPORTED_MODULE_0__["getAppSearchEntity"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-classification-def-by-name/get-classification-def-by-name.ts":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-classification-def-by-name/get-classification-def-by-name.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: getClassificationTypeByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassificationTypeByName", function() { return getClassificationTypeByName; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/types/classificationdef/name';
/**
 * Retrieves the classification type definition with the given `name` from the Atlas API
 */
function getClassificationTypeByName(
/** The name of the type */
name, { forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getClassificationTypeByName');
    const path = `${BASE_PATH}/${name}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-classification-def-by-name/index.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-classification-def-by-name/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: getClassificationTypeByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_classification_def_by_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-classification-def-by-name */ "../../libs/atlas/api/src/lib/get-classification-def-by-name/get-classification-def-by-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationTypeByName", function() { return _get_classification_def_by_name__WEBPACK_IMPORTED_MODULE_0__["getClassificationTypeByName"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-classification-definitions/get-classification-definitions.ts":
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-classification-definitions/get-classification-definitions.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: getClassificationsDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassificationsDefinitions", function() { return getClassificationsDefinitions; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getClassificationsDefinitions({ ignoreRelationships = false, minExtInfo = false, forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getClassificationsDefinitions');
    const path = 'atlas/v2/types/typedefs?type=classification';
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createHttpParams"])({
        ignoreRelationships,
        minExtInfo
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-classification-definitions/index.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-classification-definitions/index.ts ***!
  \****************************************************************************************************************/
/*! exports provided: getClassificationsDefinitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_classification_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-classification-definitions */ "../../libs/atlas/api/src/lib/get-classification-definitions/get-classification-definitions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationsDefinitions", function() { return _get_classification_definitions__WEBPACK_IMPORTED_MODULE_0__["getClassificationsDefinitions"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-classification-for-entity/get-classification-for-entity.ts":
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-classification-for-entity/get-classification-for-entity.ts ***!
  \***************************************************************************************************************************************/
/*! exports provided: getClassificationForEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClassificationForEntity", function() { return getClassificationForEntity; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/entity/guid';
/**
 * Returns the details for a classification given the `classificationName` as well as the `entityGuid` of the associated entity.
 * @param entityGuid the unique id of the associated entity
 * @param classificationName the type name of the classification
 */
function getClassificationForEntity(entityGuid, classificationName, { forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getClassificationForEntity');
    const path = `${BASE_PATH}/${entityGuid}/classification/${classificationName}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-classification-for-entity/index.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-classification-for-entity/index.ts ***!
  \***************************************************************************************************************/
/*! exports provided: getClassificationForEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_classification_for_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-classification-for-entity */ "../../libs/atlas/api/src/lib/get-classification-for-entity/get-classification-for-entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getClassificationForEntity", function() { return _get_classification_for_entity__WEBPACK_IMPORTED_MODULE_0__["getClassificationForEntity"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-dashboard/get-dashboards.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-dashboard/get-dashboards.ts ***!
  \********************************************************************************************************/
/*! exports provided: getDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDashboard", function() { return getDashboard; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getDashboard(forceUpdate = false) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getDashboard');
    const path = 'api/data_governance_dashboard';
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-dashboard/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-dashboard/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: getDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_dashboards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-dashboards */ "../../libs/atlas/api/src/lib/get-dashboard/get-dashboards.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDashboard", function() { return _get_dashboards__WEBPACK_IMPORTED_MODULE_0__["getDashboard"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-data-quality/get-data-quality.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-data-quality/get-data-quality.ts ***!
  \*************************************************************************************************************/
/*! exports provided: getDataQuality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataQuality", function() { return getDataQuality; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getDataQuality(query, facets, result_fields, page, filters, sort, { forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getDataQuality');
    const path = `data_quality`;
    return http
        .authorizeFilter()
        .cache(forceUpdate)
        .post(path, {
        query,
        facets,
        filters,
        page,
        result_fields,
        sort
    });
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-data-quality/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-data-quality/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: getDataQuality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_data_quality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data-quality */ "../../libs/atlas/api/src/lib/get-data-quality/get-data-quality.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataQuality", function() { return _get_data_quality__WEBPACK_IMPORTED_MODULE_0__["getDataQuality"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-entity-by-id/get-entity-by-id.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-entity-by-id/get-entity-by-id.ts ***!
  \*************************************************************************************************************/
/*! exports provided: clearEntityByIdCache, getEntityById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearEntityByIdCache", function() { return clearEntityByIdCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return getEntityById; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/entity/guid';
/** Clears the HTTP cache for the entity with the given `guid` */
function clearEntityByIdCache(
//** The guid of the entity */
guid) {
    const cache = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpCache"])();
    cache.clearCache(`${BASE_PATH}/${guid}`);
}
/**
 * Retrieves the entity with the given `guid` from the Atlas API
 */
function getEntityById(
/** The guid of the entity */
guid, { forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getEntityById');
    const path = `${BASE_PATH}/${guid}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-entity-by-id/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-entity-by-id/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: clearEntityByIdCache, getEntityById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_entity_by_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-entity-by-id */ "../../libs/atlas/api/src/lib/get-entity-by-id/get-entity-by-id.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clearEntityByIdCache", function() { return _get_entity_by_id__WEBPACK_IMPORTED_MODULE_0__["clearEntityByIdCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntityById", function() { return _get_entity_by_id__WEBPACK_IMPORTED_MODULE_0__["getEntityById"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-filters-and-results/get-filters-and-results.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-filters-and-results/get-filters-and-results.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: getFiltersAndResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFiltersAndResults", function() { return getFiltersAndResults; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getFiltersAndResults(query, facets, result_fields, page, filters, sort, { forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getFiltersAndResults');
    const path = 'elastic';
    return http
        .authorizeFilter()
        .cache(forceUpdate)
        .post(path, {
        query,
        facets,
        filters,
        page,
        result_fields,
        sort
    });
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-filters-and-results/index.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-filters-and-results/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: getFiltersAndResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_filters_and_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-filters-and-results */ "../../libs/atlas/api/src/lib/get-filters-and-results/get-filters-and-results.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFiltersAndResults", function() { return _get_filters_and_results__WEBPACK_IMPORTED_MODULE_0__["getFiltersAndResults"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-governance-quality/get-governance-quality.ts":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-governance-quality/get-governance-quality.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: getGovernanceQuality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGovernanceQuality", function() { return getGovernanceQuality; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getGovernanceQuality(query, facets, result_fields, page, filters, sort, { forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getGovernanceQuality');
    const path = `gov_quality`;
    return http
        .authorizeFilter()
        .cache(forceUpdate)
        .post(path, {
        query,
        facets,
        filters,
        page,
        result_fields,
        sort
    });
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-governance-quality/index.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-governance-quality/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: getGovernanceQuality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_governance_quality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-governance-quality */ "../../libs/atlas/api/src/lib/get-governance-quality/get-governance-quality.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGovernanceQuality", function() { return _get_governance_quality__WEBPACK_IMPORTED_MODULE_0__["getGovernanceQuality"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-lineage-model/get-lineage-model.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-lineage-model/get-lineage-model.ts ***!
  \***************************************************************************************************************/
/*! exports provided: getLineageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineageModel", function() { return getLineageModel; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const PATH = 'lineage_model';
/**
 * Fetch the lineage of an entity given its `guid`.
 *
 *  Options:
 *  * You can use `depth` to specify the maximum number of hops to traverse the lineage graph. Default is 3.
 *  * You can use `direction` to specify whether to retrieve input lineage, output lineage or both. Default is both.
 *
 * @param guid The unique atlas id of the enitity for which to retrieve the lineage
 */
function getLineageModel(guid, { depth = 3, direction = 'BOTH', forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getEntityById');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createHttpParams"])({
        guid,
        depth,
        direction
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(PATH, requestOptions);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-lineage-model/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-lineage-model/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: getLineageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_lineage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-lineage-model */ "../../libs/atlas/api/src/lib/get-lineage-model/get-lineage-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLineageModel", function() { return _get_lineage_model__WEBPACK_IMPORTED_MODULE_0__["getLineageModel"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-query-results/get-query-results.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-query-results/get-query-results.ts ***!
  \***************************************************************************************************************/
/*! exports provided: getQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryResults", function() { return getQueryResults; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const PATH = 'atlas/v2/search/basic';
/**
 * Retrieve data for the specified fulltext query
 */
function getQueryResults(
/** The fulltext query */
query, 
/** Optional parameters for the get type defs operation */
{ excludeDeletedEntities = false, forceUpdate = false, limit = 0, offset = 0 } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getQueryResults');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createHttpParams"])({
        excludeDeletedEntities,
        limit,
        offset,
        query
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(PATH, requestOptions);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-query-results/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-query-results/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: getQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_query_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-results */ "../../libs/atlas/api/src/lib/get-query-results/get-query-results.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryResults", function() { return _get_query_results__WEBPACK_IMPORTED_MODULE_0__["getQueryResults"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-term-by-id/get-term-by-id.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-term-by-id/get-term-by-id.ts ***!
  \*********************************************************************************************************/
/*! exports provided: getTermById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTermById", function() { return getTermById; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/glossary/term';
/**
 * Retrieves the term with the given `guid` from the Atlas API
 */
function getTermById(
/** The guid of the term */
guid, { forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getTermById');
    const path = `${BASE_PATH}/${guid}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-term-by-id/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-term-by-id/index.ts ***!
  \************************************************************************************************/
/*! exports provided: getTermById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_term_by_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-term-by-id */ "../../libs/atlas/api/src/lib/get-term-by-id/get-term-by-id.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTermById", function() { return _get_term_by_id__WEBPACK_IMPORTED_MODULE_0__["getTermById"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-terms-definitions/get-terms-definitions.ts":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-terms-definitions/get-terms-definitions.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: getTermsDefinitionById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTermsDefinitionById", function() { return getTermsDefinitionById; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/glossary/term';
function getTermsDefinitionById(
/** The guid of the term entity */
guid, { ignoreRelationships = false, minExtInfo = false, forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getTermsDefinitionById');
    const path = `${BASE_PATH}/${guid}`;
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createHttpParams"])({
        ignoreRelationships,
        minExtInfo
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-terms-definitions/index.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-terms-definitions/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getTermsDefinitionById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_terms_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-terms-definitions */ "../../libs/atlas/api/src/lib/get-terms-definitions/get-terms-definitions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTermsDefinitionById", function() { return _get_terms_definitions__WEBPACK_IMPORTED_MODULE_0__["getTermsDefinitionById"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-type-by-name/get-type-by-name.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-type-by-name/get-type-by-name.ts ***!
  \*************************************************************************************************************/
/*! exports provided: getTypeByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeByName", function() { return getTypeByName; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const BASE_PATH = 'atlas/v2/types/entitydef/name';
/**
 * Retrieves the entity type definition with the given `name` from the Atlas API
 */
function getTypeByName(
/** The name of the type */
name, { forceUpdate = false } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getTypeByName');
    const path = `${BASE_PATH}/${name}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-type-by-name/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-type-by-name/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: getTypeByName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_type_by_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type-by-name */ "../../libs/atlas/api/src/lib/get-type-by-name/get-type-by-name.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypeByName", function() { return _get_type_by_name__WEBPACK_IMPORTED_MODULE_0__["getTypeByName"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-type-defs/get-type-defs.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-type-defs/get-type-defs.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getTypeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypeDefs", function() { return getTypeDefs; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


function getTypeDefs(
/** Optional parameters for the get type defs operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getTypeDefs');
    const path = `atlas/v2/types/typedefs`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/get-type-defs/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/get-type-defs/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: getTypeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_type_defs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-type-defs */ "../../libs/atlas/api/src/lib/get-type-defs/get-type-defs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypeDefs", function() { return _get_type_defs__WEBPACK_IMPORTED_MODULE_0__["getTypeDefs"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/remove-entity-classification/index.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/remove-entity-classification/index.ts ***!
  \**************************************************************************************************************/
/*! exports provided: removeEntityClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remove_entity_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-entity-classification */ "../../libs/atlas/api/src/lib/remove-entity-classification/remove-entity-classification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeEntityClassification", function() { return _remove_entity_classification__WEBPACK_IMPORTED_MODULE_0__["removeEntityClassification"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/remove-entity-classification/remove-entity-classification.ts":
/*!*************************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/remove-entity-classification/remove-entity-classification.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: removeEntityClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityClassification", function() { return removeEntityClassification; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


/**
 * Removes the classification with the given `classificationName` from the entity with the given `guid`.
 */
function removeEntityClassification(
/** The guid of the entity */
guid, 
/** The name of the classification to remove */
classificationName) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'removeEntityClassification');
    const path = `atlas/v2/entity/guid/${guid}/classification/${classificationName}`;
    return http.authorize().delete(path);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/save-entity-classification/index.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/save-entity-classification/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: saveEntityClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_entity_classification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-entity-classification */ "../../libs/atlas/api/src/lib/save-entity-classification/save-entity-classification.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveEntityClassification", function() { return _save_entity_classification__WEBPACK_IMPORTED_MODULE_0__["saveEntityClassification"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/save-entity-classification/save-entity-classification.ts":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/save-entity-classification/save-entity-classification.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: saveEntityClassification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveEntityClassification", function() { return saveEntityClassification; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


/**
 * Adds the given `classifications` to the entity with the given `guid`.
 */
function saveEntityClassification(
/** The guid of the entity */
guid, 
/** The classifications to add */
classifications) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'saveEntityClassification');
    const path = `atlas/v2/entity/guid/${guid}/classifications`;
    return http.authorize().post(path, classifications);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/save-entity/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/save-entity/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: saveEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _save_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save-entity */ "../../libs/atlas/api/src/lib/save-entity/save-entity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveEntity", function() { return _save_entity__WEBPACK_IMPORTED_MODULE_0__["saveEntity"]; });




/***/ }),

/***/ "../../libs/atlas/api/src/lib/save-entity/save-entity.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/save-entity/save-entity.ts ***!
  \***************************************************************************************************/
/*! exports provided: saveEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveEntity", function() { return saveEntity; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/atlas/api/src/lib/utils.ts");


const PATH = 'atlas/v2/entity';
/**
 * Saves the given `entity` to Atlas.
 */
function saveEntity(
/** The guid of the term */
entity) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'saveEntity');
    return http
        .authorize()
        .post(PATH, entity);
}


/***/ }),

/***/ "../../libs/atlas/api/src/lib/types.ts":
/*!*********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/types.ts ***!
  \*********************************************************************************/
/*! exports provided: Cardinality, IndexType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cardinality", function() { return Cardinality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexType", function() { return IndexType; });
var Cardinality;
(function (Cardinality) {
    Cardinality["List"] = "LIST";
    Cardinality["Set"] = "SET";
    Cardinality["Single"] = "SINGLE";
})(Cardinality || (Cardinality = {}));
var IndexType;
(function (IndexType) {
    IndexType["Default"] = "DEFAULT";
    IndexType["String"] = "STRING";
})(IndexType || (IndexType = {}));


/***/ }),

/***/ "../../libs/atlas/api/src/lib/utils.ts":
/*!*********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/atlas/api/src/lib/utils.ts ***!
  \*********************************************************************************/
/*! exports provided: createHttpParams, getHttpClient, getHttpCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpParams", function() { return createHttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpClient", function() { return getHttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpCache", function() { return getHttpCache; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/http */ "../../libs/http/src/index.ts");
/* harmony import */ var libs_http_src_lib_http_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! libs/http/src/lib/http-cache.service */ "../../libs/http/src/lib/http-cache.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _atlas_api_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./atlas-api.module */ "../../libs/atlas/api/src/lib/atlas-api.module.ts");





/**
 * Creates a new `HttpParams` object based on the given parameters, filtering out any parameter of which the value is null or undefined
 */
function createHttpParams(
/** The set of key value pairs to include as parameters */
params) {
    let result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    Object.entries(params).forEach(([key, value]) => {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNil"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNaN"])(value)) {
            result = result.set(key, value);
        }
    });
    return result;
}
/**
 * Returns the `HttpService` as imported by the `RepositoryModule`. If the `RepositoryModule` has not been loaded, throws an error.
 */
function getHttpClient() {
    if (!_atlas_api_module__WEBPACK_IMPORTED_MODULE_4__["AtlasApiModule"].injector) {
        throw new Error('Tried running an API query while the AtlasApiModule was not loaded. Please make sure the AtlasApiModule is imported.');
    }
    return _atlas_api_module__WEBPACK_IMPORTED_MODULE_4__["AtlasApiModule"].injector.get(_models4insight_http__WEBPACK_IMPORTED_MODULE_1__["HttpService"]);
}
function getHttpCache() {
    if (!_atlas_api_module__WEBPACK_IMPORTED_MODULE_4__["AtlasApiModule"].injector) {
        throw new Error('Tried accessing the cache while the AtlasApiModule was not loaded. Please make sure the AtlasApiModule is imported.');
    }
    return _atlas_api_module__WEBPACK_IMPORTED_MODULE_4__["AtlasApiModule"].injector.get(libs_http_src_lib_http_cache_service__WEBPACK_IMPORTED_MODULE_2__["HttpCacheService"]);
}


/***/ }),

/***/ "../../libs/authentication/src/index.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/authentication/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: AuthenticationModule, AuthenticationGuard, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/authentication.guard */ "../../libs/authentication/src/lib/authentication.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _lib_authentication_guard__WEBPACK_IMPORTED_MODULE_0__["AuthenticationGuard"]; });

/* harmony import */ var _lib_authentication_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/authentication.module */ "../../libs/authentication/src/lib/authentication.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return _lib_authentication_module__WEBPACK_IMPORTED_MODULE_1__["AuthenticationModule"]; });

/* harmony import */ var _lib_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/authentication.service */ "../../libs/authentication/src/lib/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _lib_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]; });






/***/ }),

/***/ "../../libs/authentication/src/lib/authentication-config.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/authentication/src/lib/authentication-config.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AuthenticationConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationConfigService", function() { return AuthenticationConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const AuthenticationConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AuthenticationConfig');


/***/ }),

/***/ "../../libs/authentication/src/lib/authentication.guard.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/authentication/src/lib/authentication.guard.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "../../libs/authentication/src/lib/authentication.service.ts");






const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]('AuthenticationGuard');
class AuthenticationGuard {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        return this.authenticationService.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((isAuthenticated) => {
            if (!isAuthenticated) {
                log.debug('Not authenticated, redirecting to login...');
                this.authenticationService.login();
            }
        }));
    }
}
AuthenticationGuard.ɵfac = function AuthenticationGuard_Factory(t) { return new (t || AuthenticationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
AuthenticationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationGuard, factory: AuthenticationGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/authentication/src/lib/authentication.module.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/authentication/src/lib/authentication.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _authentication_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication-config.service */ "../../libs/authentication/src/lib/authentication-config.service.ts");




class AuthenticationModule {
    static forRoot(config) {
        return {
            ngModule: AuthenticationModule,
            providers: [
                {
                    provide: _authentication_config_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/authentication/src/lib/authentication.service.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/authentication/src/lib/authentication.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication.module */ "../../libs/authentication/src/lib/authentication.module.ts");
/* harmony import */ var _keycloak_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keycloak.service */ "../../libs/authentication/src/lib/keycloak.service.ts");











const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]('AuthenticationService');
/**
 * Provides a base for authentication workflow.
 */
class AuthenticationService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(keycloakService, storeService) {
        super({ name: 'AuthenticationService', storeService });
        this.keycloakService = keycloakService;
        this.init();
    }
    init() {
        // On init, check whether the user is already authenticated. This causes the user to be redirected to the login screen if they are not logged in.
        // If the user is authenticated, update the auth state.
        this.keycloakService.isAuthenticated.then(isAuthenticated => this.update({
            description: 'Initial auth state updated',
            payload: {
                isAuthenticated: isAuthenticated
            }
        }));
        // Whenever the Keycloak onAuthStateChanged event triggers, update the auth state.
        this.keycloakService.onAuthStateChanged.subscribe(isAuthenticated => this.update({
            description: 'Auth state updated',
            payload: {
                isAuthenticated: isAuthenticated
            }
        }));
        // Whenver the user logs out of Keycloak while they are logged into this app, log them out here as well.
        this.keycloakService.onAuthStateChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(isAuthenticated => !isAuthenticated), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.login()))
            .subscribe();
        // Whenever the auth state changes, update the user credentials.
        // If the user is not authenticated, the credentials object should be empty.
        this.isAuthenticated()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(isAuthenticated => isAuthenticated
            ? this.keycloakService.userProfile
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({})))
            .subscribe(credentials => this.update({
            description: 'User credentials updated',
            payload: {
                credentials: credentials
            }
        }));
    }
    /**
     * Authenticates the user.
     */
    login() {
        return this.keycloakService.login();
    }
    /**
     * Logs out the user and clear credentials.
     */
    logout() {
        return this.keycloakService.logout();
    }
    /**
     * Whether the user is authenticated.
     * @return True if the user is authenticated.
     */
    isAuthenticated() {
        return this.select('isAuthenticated');
    }
    /**
     * Redirects the user to their account management panel
     */
    accountManagement() {
        return this.keycloakService.accountManagement();
    }
    /**
     * Gets the current user's credentials.
     * @return The current user's credentials, or null if not authenticated.
     */
    credentials() {
        return this.select('credentials');
    }
    /**
     * Emits whenever the authentication state changes
     * @return An observable stream of the current authentication state
     */
    onAuthStateChanged() {
        return this.select('isAuthenticated');
    }
    /**
     * Attempts to update the token. If not successful, redirects to login. Returns the token, or nothing if no token is available.
     */
    updateToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let token;
            try {
                token = yield this.keycloakService.updateToken();
            }
            catch (_a) {
                this.login();
            }
            return token;
        });
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_keycloak_service__WEBPACK_IMPORTED_MODULE_7__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: _authentication_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _authentication_module__WEBPACK_IMPORTED_MODULE_6__["AuthenticationModule"]
            }]
    }], function () { return [{ type: _keycloak_service__WEBPACK_IMPORTED_MODULE_7__["KeycloakService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/authentication/src/lib/keycloak.service.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/authentication/src/lib/keycloak.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: KeycloakService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeycloakService", function() { return KeycloakService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! keycloak-js */ "../../node_modules/keycloak-js/dist/keycloak.js");
/* harmony import */ var keycloak_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(keycloak_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication-config.service */ "../../libs/authentication/src/lib/authentication-config.service.ts");
/* harmony import */ var _authentication_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication.module */ "../../libs/authentication/src/lib/authentication.module.ts");









const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]('KeycloakService');
class KeycloakService {
    constructor(config) {
        this.authState = new rxjs__WEBPACK_IMPORTED_MODULE_4__["ReplaySubject"]();
        this.keycloakAuth = keycloak_js__WEBPACK_IMPORTED_MODULE_3___default()(config);
        this.authState.subscribe((auth) => log.debug(`Auth state updated: ${auth}`));
        this.keycloakAuth.onReady = auth => this.authState.next(auth);
        this.keycloakAuth.onAuthSuccess = () => this.authState.next(true);
        this.keycloakAuth.onAuthLogout = () => this.authState.next(false);
        /**
         * Whenever the token expires and a refresh token is available, try to refresh the access token.
         * Otherwise, redirect to login.
         */
        this.keycloakAuth.onTokenExpired = () => {
            if (this.keycloakAuth.refreshToken) {
                this.updateToken();
            }
            else {
                this.authState.next(false);
                this.login();
            }
        };
        /**
         * When failing to refresh the token, redirect to login.
         */
        this.keycloakAuth.onAuthRefreshError = () => {
            log.debug('Failed to refresh the access token. Redirecting to login...');
            this.authState.next(false);
            this.login();
        };
    }
    login(options = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { success, error } = this.keycloakAuth.login(options);
            return new Promise((resolve, reject) => {
                success(resolve);
                error(reject);
            });
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { success, error } = this.keycloakAuth.logout();
            return new Promise((resolve, reject) => {
                success(resolve);
                error(reject);
            });
        });
    }
    accountManagement() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { success, error } = this.keycloakAuth.accountManagement();
            return new Promise((resolve, reject) => {
                success(resolve);
                error(reject);
            });
        });
    }
    updateToken() {
        const { success, error } = this.keycloakAuth.updateToken(5);
        return new Promise((resolve, reject) => {
            success(() => resolve(this.keycloakAuth.token));
            error(reject);
        });
    }
    get isAuthenticated() {
        const { authenticated } = this.keycloakAuth;
        return authenticated
            ? Promise.resolve(authenticated)
            : this.isSSOAuthenticated();
    }
    get token() {
        return this.keycloakAuth.token;
    }
    get tokenParsed() {
        return this.keycloakAuth.tokenParsed;
    }
    get userProfile() {
        const { profile } = this.keycloakAuth;
        return profile ? Promise.resolve(profile) : this.loadUserProfile();
    }
    get onAuthStateChanged() {
        return this.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])());
    }
    isSSOAuthenticated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { success, error } = this.keycloakAuth.init({ onLoad: 'check-sso' });
            return new Promise((resolve, reject) => {
                success(resolve);
                error(reject);
            });
        });
    }
    loadUserProfile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { success, error } = this.keycloakAuth.loadUserProfile();
            return new Promise((resolve, reject) => {
                success(resolve);
                error(reject);
            });
        });
    }
}
KeycloakService.ɵfac = function KeycloakService_Factory(t) { return new (t || KeycloakService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_config_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationConfigService"])); };
KeycloakService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: KeycloakService, factory: KeycloakService.ɵfac, providedIn: _authentication_module__WEBPACK_IMPORTED_MODULE_7__["AuthenticationModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KeycloakService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _authentication_module__WEBPACK_IMPORTED_MODULE_7__["AuthenticationModule"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_authentication_config_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/core/src/index.ts":
/*!************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/core/src/index.ts ***!
  \************************************************************************/
/*! exports provided: Core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core */ "../../libs/core/src/lib/core.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return _lib_core__WEBPACK_IMPORTED_MODULE_0__["Core"]; });




/***/ }),

/***/ "../../libs/core/src/lib/core.ts":
/*!***************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/core/src/lib/core.ts ***!
  \***************************************************************************/
/*! exports provided: Core */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Core", function() { return Core; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/google-analytics */ "../../libs/google-analytics/src/index.ts");
/* harmony import */ var _models4insight_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/http */ "../../libs/http/src/index.ts");
/* harmony import */ var _models4insight_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/i18n */ "../../libs/i18n/src/index.ts");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _models4insight_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/notifications */ "../../libs/notifications/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_services_branch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models4insight/services/branch */ "../../libs/services/branch/src/index.ts");
/* harmony import */ var _models4insight_services_clickstream__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @models4insight/services/clickstream */ "../../libs/services/clickstream/src/index.ts");
/* harmony import */ var _models4insight_services_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @models4insight/services/model */ "../../libs/services/model/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_services_user_info__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @models4insight/services/user-info */ "../../libs/services/user-info/src/index.ts");
/* harmony import */ var _models4insight_shell__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @models4insight/shell */ "../../libs/shell/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_version__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @models4insight/version */ "../../libs/version/src/index.ts");

















/**
 * Represents the core of every Models4Insight application. Provides a method to generate an NgModule imports statement with a given configuration.
 */
class Core {
    /**
     * Returns an NgModule imports statement for the core Models4Insight modules initialized with the given configuration parameters
     * @param config The configuration parameters with which to initialize the core modules
     */
    static imports(config) {
        return [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _models4insight_logger__WEBPACK_IMPORTED_MODULE_6__["LoggerModule"].forRoot({ production: config.production }),
            _models4insight_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"].forRoot({ production: config.production }),
            _models4insight_version__WEBPACK_IMPORTED_MODULE_16__["VersionModule"].forRoot({
                appName: config.shell.appName,
                production: config.production
            }),
            _models4insight_redux__WEBPACK_IMPORTED_MODULE_8__["ReduxModule"].forRoot({ production: config.production }),
            _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationModule"].forRoot(config.keycloak),
            _models4insight_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsModule"].forRoot({
                measurementID: config.googleAnalyticsMeasurementID,
                production: config.production
            }),
            _models4insight_i18n__WEBPACK_IMPORTED_MODULE_5__["I18nModule"].forRoot(config.i18n),
            _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_15__["TaskManagerModule"],
            _models4insight_services_clickstream__WEBPACK_IMPORTED_MODULE_10__["ClickstreamModule"].forRoot({ app: config.shell.appName }),
            _models4insight_notifications__WEBPACK_IMPORTED_MODULE_7__["NotificationsModule"].forRoot(config.notifications),
            _models4insight_services_branch__WEBPACK_IMPORTED_MODULE_9__["ServicesBranchModule"],
            _models4insight_services_model__WEBPACK_IMPORTED_MODULE_11__["ServicesModelModule"],
            _models4insight_services_project__WEBPACK_IMPORTED_MODULE_12__["ServicesProjectModule"],
            _models4insight_services_user_info__WEBPACK_IMPORTED_MODULE_13__["ServicesUserInfoModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["ServiceWorkerModule"].register('./ngsw-worker.js', {
                enabled: config.production
            }),
            _models4insight_shell__WEBPACK_IMPORTED_MODULE_14__["ShellModule"].forRoot(config.shell)
        ];
    }
}


/***/ }),

/***/ "../../libs/google-analytics/src/index.ts":
/*!************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/google-analytics/src/index.ts ***!
  \************************************************************************************/
/*! exports provided: GoogleAnalyticsModule, GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_google_analytics_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/google-analytics.module */ "../../libs/google-analytics/src/lib/google-analytics.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsModule", function() { return _lib_google_analytics_module__WEBPACK_IMPORTED_MODULE_0__["GoogleAnalyticsModule"]; });

/* harmony import */ var _lib_google_analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/google-analytics.service */ "../../libs/google-analytics/src/lib/google-analytics.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return _lib_google_analytics_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAnalyticsService"]; });





/***/ }),

/***/ "../../libs/google-analytics/src/lib/google-analytics-config.service.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/google-analytics/src/lib/google-analytics-config.service.ts ***!
  \******************************************************************************************************************/
/*! exports provided: GoogleAnalyticsConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsConfigService", function() { return GoogleAnalyticsConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const GoogleAnalyticsConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GoogleAnalyticsConfig');


/***/ }),

/***/ "../../libs/google-analytics/src/lib/google-analytics.module.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/google-analytics/src/lib/google-analytics.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: GoogleAnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsModule", function() { return GoogleAnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _google_analytics_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-analytics-config.service */ "../../libs/google-analytics/src/lib/google-analytics-config.service.ts");
/* harmony import */ var _google_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./google-analytics.service */ "../../libs/google-analytics/src/lib/google-analytics.service.ts");





class GoogleAnalyticsModule {
    constructor(config = {}, googleAnalyticsService, parentModule) {
        if (parentModule) {
            throw new Error('GoogleAnalyticsModule is already loaded. Import it in the AppModule only');
        }
        if (config.production) {
            googleAnalyticsService.init();
        }
    }
    static forRoot(config = {}) {
        return {
            ngModule: GoogleAnalyticsModule,
            providers: [
                _google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"],
                {
                    provide: _google_analytics_config_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAnalyticsConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
GoogleAnalyticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleAnalyticsModule });
GoogleAnalyticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleAnalyticsModule_Factory(t) { return new (t || GoogleAnalyticsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_google_analytics_config_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAnalyticsConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](GoogleAnalyticsModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_google_analytics_config_service__WEBPACK_IMPORTED_MODULE_1__["GoogleAnalyticsConfigService"]]
            }] }, { type: _google_analytics_service__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"] }, { type: GoogleAnalyticsModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/google-analytics/src/lib/google-analytics.service.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/google-analytics/src/lib/google-analytics.service.ts ***!
  \***********************************************************************************************************/
/*! exports provided: GoogleAnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleAnalyticsService", function() { return GoogleAnalyticsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _google_analytics_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-analytics-config.service */ "../../libs/google-analytics/src/lib/google-analytics-config.service.ts");
/// <reference types="gtag.js" />
/// <reference types="gtag.js" />






class GoogleAnalyticsService {
    constructor(router, config = {}) {
        this.router = router;
        this.config = config;
    }
    init() {
        // Listen for navigation end events on the router.
        // Whenever the url changes, record a new pageview
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('urlAfterRedirects'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(url => {
            if (gtag) {
                gtag('config', this.config.measurementID, {
                    page_path: url
                });
            }
            else {
                throw new Error('Tried submitting Google analytics measurement data, but Google analytics functions were not loaded properly.');
            }
        });
    }
}
GoogleAnalyticsService.ɵfac = function GoogleAnalyticsService_Factory(t) { return new (t || GoogleAnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_google_analytics_config_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsConfigService"])); };
GoogleAnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GoogleAnalyticsService, factory: GoogleAnalyticsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleAnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_google_analytics_config_service__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/index.ts":
/*!************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/index.ts ***!
  \************************************************************************/
/*! exports provided: HttpModule, HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_http_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/http.module */ "../../libs/http/src/lib/http.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return _lib_http_module__WEBPACK_IMPORTED_MODULE_0__["HttpModule"]; });

/* harmony import */ var _lib_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/http.service */ "../../libs/http/src/lib/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _lib_http_service__WEBPACK_IMPORTED_MODULE_1__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _lib_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]; });





/***/ }),

/***/ "../../libs/http/src/lib/authorization-header-filter.interceptor.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/authorization-header-filter.interceptor.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AuthorizationHeaderInterceptorFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationHeaderInterceptorFilter", function() { return AuthorizationHeaderInterceptorFilter; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]('AuthorizationHeaderInterceptorFilter');
/**
 * Adds an authorization header containing the current Keycloak token to all requests.
 */
class AuthorizationHeaderInterceptorFilter {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // Retrieve the current access token or update it if it has expired.
        const token$ = this.authenticationService.updateToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(token$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(token => next.handle(request.clone({
            setHeaders: {
                Authorization: `Bearer search-ot1rcw3uffpojw1tz299upw1`
            }
        }))));
    }
}
AuthorizationHeaderInterceptorFilter.ɵfac = function AuthorizationHeaderInterceptorFilter_Factory(t) { return new (t || AuthorizationHeaderInterceptorFilter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AuthorizationHeaderInterceptorFilter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationHeaderInterceptorFilter, factory: AuthorizationHeaderInterceptorFilter.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationHeaderInterceptorFilter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/authorization-header.interceptor.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/authorization-header.interceptor.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AuthorizationHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationHeaderInterceptor", function() { return AuthorizationHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");







const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_2__["Logger"]('AuthorizationHeaderInterceptor');
/**
 * Adds an authorization header containing the current Keycloak token to all requests.
 */
class AuthorizationHeaderInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // Retrieve the current access token or update it if it has expired.
        const token$ = this.authenticationService.updateToken();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(token$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(token => next.handle(request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        }))));
    }
}
AuthorizationHeaderInterceptor.ɵfac = function AuthorizationHeaderInterceptor_Factory(t) { return new (t || AuthorizationHeaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
AuthorizationHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizationHeaderInterceptor, factory: AuthorizationHeaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizationHeaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/cache.interceptor.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/cache.interceptor.ts ***!
  \****************************************************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-cache.service */ "../../libs/http/src/lib/http-cache.service.ts");






/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
class CacheInterceptor {
    constructor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    /**
     * Configures interceptor options
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    configure(options) {
        const instance = new CacheInterceptor(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    }
    intercept(request, next) {
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((subscriber) => {
            const cachedData = this.forceUpdate ? null : this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request).subscribe(event => {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                        this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, error => subscriber.error(error), () => subscriber.complete());
            }
        });
    }
}
CacheInterceptor.ɵfac = function CacheInterceptor_Factory(t) { return new (t || CacheInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"])); };
CacheInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CacheInterceptor, factory: CacheInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CacheInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/error-handler.interceptor.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/error-handler.interceptor.ts ***!
  \************************************************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _http_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-config.service */ "../../libs/http/src/lib/http-config.service.ts");





const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
class ErrorHandlerInterceptor {
    constructor(config = {}) {
        this.config = config;
    }
    intercept(request, next) {
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => this.errorHandler(error)));
    }
    // Customize the default error handler here if needed
    errorHandler(response) {
        if (!this.config.production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    }
}
ErrorHandlerInterceptor.ɵfac = function ErrorHandlerInterceptor_Factory(t) { return new (t || ErrorHandlerInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_config_service__WEBPACK_IMPORTED_MODULE_3__["HttpConfigService"], 8)); };
ErrorHandlerInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerInterceptor, factory: ErrorHandlerInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_http_config_service__WEBPACK_IMPORTED_MODULE_3__["HttpConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/http-cache.service.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/http-cache.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);




const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]('HttpCacheService');
const cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
class HttpCacheService {
    constructor() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    setCacheData(url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug(`Cache set for key: "${url}"`);
        this.saveCacheData();
    }
    /**
     * Gets the cached data for the specified request.
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    getCacheData(url) {
        const cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug(`Cache hit for key: "${url}"`);
            return cacheEntry.data;
        }
        return null;
    }
    /**
     * Gets the cached entry for the specified request.
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    getHttpCacheEntry(url) {
        return this.cachedData[url] || null;
    }
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param url The request URL.
     * @param matchAll Whether or not the url of the request should match completely. Defaults to `true`.
     */
    clearCache(url, matchAll = true) {
        this.cachedData = Object.entries(this.cachedData)
            .filter(([cachedUrl]) => matchAll ? url === cachedUrl : cachedUrl.includes(url))
            .reduce((cache, [cachedUrl, cachedData]) => (Object.assign(Object.assign({}, cache), { [cachedUrl]: cachedData })), {});
        log.debug(`Cache cleared for key: "${url}"`);
        this.saveCacheData();
    }
    /**
     * Cleans cache entries older than the specified date.
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    cleanCache(expirationDate) {
        if (expirationDate) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["each"])(this.cachedData, (value, key) => {
                if (expirationDate >= value.lastUpdated) {
                    delete this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    }
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    setPersistence(persistence) {
        this.cleanCache();
        this.storage =
            persistence === 'local' || persistence === 'session'
                ? window[persistence + 'Storage']
                : null;
        this.loadCacheData();
    }
    saveCacheData() {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    }
    loadCacheData() {
        const data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.parse(data) : {};
    }
}
HttpCacheService.ɵfac = function HttpCacheService_Factory(t) { return new (t || HttpCacheService)(); };
HttpCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpCacheService, factory: HttpCacheService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/http-config.service.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/http-config.service.ts ***!
  \******************************************************************************************/
/*! exports provided: HttpConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigService", function() { return HttpConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const HttpConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HttpConfig');


/***/ }),

/***/ "../../libs/http/src/lib/http.module.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/http.module.ts ***!
  \**********************************************************************************/
/*! exports provided: HttpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authorization_header_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization-header.interceptor */ "../../libs/http/src/lib/authorization-header.interceptor.ts");
/* harmony import */ var _authorization_header_filter_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorization-header-filter.interceptor */ "../../libs/http/src/lib/authorization-header-filter.interceptor.ts");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.interceptor */ "../../libs/http/src/lib/cache.interceptor.ts");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handler.interceptor */ "../../libs/http/src/lib/error-handler.interceptor.ts");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http-cache.service */ "../../libs/http/src/lib/http-cache.service.ts");
/* harmony import */ var _http_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http-config.service */ "../../libs/http/src/lib/http-config.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http.service */ "../../libs/http/src/lib/http.service.ts");
/* harmony import */ var _ie_cache_header_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ie-cache-header-interceptor */ "../../libs/http/src/lib/ie-cache-header-interceptor.ts");











class HttpModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('HttpModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config = {}) {
        return {
            ngModule: HttpModule,
            providers: [
                _authorization_header_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthorizationHeaderInterceptor"],
                _cache_interceptor__WEBPACK_IMPORTED_MODULE_4__["CacheInterceptor"],
                _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerInterceptor"],
                _ie_cache_header_interceptor__WEBPACK_IMPORTED_MODULE_9__["IECacheHeaderInterceptor"],
                _http_cache_service__WEBPACK_IMPORTED_MODULE_6__["HttpCacheService"],
                _authorization_header_filter_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthorizationHeaderInterceptorFilter"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
                    useClass: _http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"]
                },
                {
                    provide: _http_config_service__WEBPACK_IMPORTED_MODULE_7__["HttpConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
HttpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HttpModule });
HttpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HttpModule_Factory(t) { return new (t || HttpModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HttpModule, 12)); }, imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HttpModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]
            }]
    }], function () { return [{ type: HttpModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/http.service.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/http.service.ts ***!
  \***********************************************************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _authorization_header_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization-header.interceptor */ "../../libs/http/src/lib/authorization-header.interceptor.ts");
/* harmony import */ var _authorization_header_filter_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorization-header-filter.interceptor */ "../../libs/http/src/lib/authorization-header-filter.interceptor.ts");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.interceptor */ "../../libs/http/src/lib/cache.interceptor.ts");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-handler.interceptor */ "../../libs/http/src/lib/error-handler.interceptor.ts");
/* harmony import */ var _ie_cache_header_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ie-cache-header-interceptor */ "../../libs/http/src/lib/ie-cache-header-interceptor.ts");









// From @angular/common/http/src/interceptor: allows to chain interceptors
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(request) {
        return this.interceptor.intercept(request, this.next);
    }
}
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled, use the standard HTTP_INTERCEPTORS token.
 */
const HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
class HttpService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] {
    constructor(httpHandler, injector, interceptors = []) {
        super(httpHandler);
        this.httpHandler = httpHandler;
        this.injector = injector;
        this.interceptors = interceptors;
        if (!this.interceptors) {
            // Configure default interceptors that can be disabled here
            this.interceptors = [
                this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerInterceptor"]),
                this.injector.get(_ie_cache_header_interceptor__WEBPACK_IMPORTED_MODULE_6__["IECacheHeaderInterceptor"])
            ];
        }
    }
    authorize() {
        const authHeaderInterceptor = this.injector.get(_authorization_header_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthorizationHeaderInterceptor"]);
        return this.addInterceptor(authHeaderInterceptor);
    }
    authorizeFilter() {
        const authHeaderInterceptor = this.injector.get(_authorization_header_filter_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthorizationHeaderInterceptorFilter"]);
        return this.addInterceptor(authHeaderInterceptor);
    }
    cache(forceUpdate) {
        const cacheInterceptor = this.injector
            .get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_4__["CacheInterceptor"])
            .configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    }
    skipErrorHandler() {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorHandlerInterceptor"]);
    }
    // Override the original method to wire interceptors when triggering the request.
    request(method, url, options) {
        const handler = this.interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](handler).request(method, url, options);
    }
    removeInterceptor(interceptorType) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.filter(i => !(i instanceof interceptorType)));
    }
    addInterceptor(interceptor) {
        return new HttpService(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](HTTP_DYNAMIC_INTERCEPTORS, 8)); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHandler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [HTTP_DYNAMIC_INTERCEPTORS]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/http/src/lib/ie-cache-header-interceptor.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/http/src/lib/ie-cache-header-interceptor.ts ***!
  \**************************************************************************************************/
/*! exports provided: IECacheHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IECacheHeaderInterceptor", function() { return IECacheHeaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Appends no-cache headers to the request.
 * This solves a problem particularly with Internet Explorer where REST API responses would be cached by the browser, showing outdated information in the app.
 */
class IECacheHeaderInterceptor {
    intercept(request, next) {
        if (request.method === 'GET') {
            const customRequest = request.clone({
                headers: request.headers
                    .set('Cache-Control', 'no-cache')
                    .set('Pragma', 'no-cache')
            });
            return next.handle(customRequest);
        }
        return next.handle(request);
    }
}
IECacheHeaderInterceptor.ɵfac = function IECacheHeaderInterceptor_Factory(t) { return new (t || IECacheHeaderInterceptor)(); };
IECacheHeaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IECacheHeaderInterceptor, factory: IECacheHeaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IECacheHeaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "../../libs/i18n/src/index.ts":
/*!************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/i18n/src/index.ts ***!
  \************************************************************************/
/*! exports provided: I18nModule, extract, I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_i18n_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/i18n.module */ "../../libs/i18n/src/lib/i18n.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nModule", function() { return _lib_i18n_module__WEBPACK_IMPORTED_MODULE_0__["I18nModule"]; });

/* harmony import */ var _lib_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/i18n.service */ "../../libs/i18n/src/lib/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return _lib_i18n_service__WEBPACK_IMPORTED_MODULE_1__["extract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return _lib_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]; });





/***/ }),

/***/ "../../libs/i18n/src/lib/i18n-config.service.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/i18n/src/lib/i18n-config.service.ts ***!
  \******************************************************************************************/
/*! exports provided: I18nConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nConfigService", function() { return I18nConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const I18nConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('I18nConfig');


/***/ }),

/***/ "../../libs/i18n/src/lib/i18n.module.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/i18n/src/lib/i18n.module.ts ***!
  \**********************************************************************************/
/*! exports provided: I18nModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nModule", function() { return I18nModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _i18n_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n-config.service */ "../../libs/i18n/src/lib/i18n-config.service.ts");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n.service */ "../../libs/i18n/src/lib/i18n.service.ts");







class I18nModule {
    constructor(i18nService, parentModule) {
        this.i18nService = i18nService;
        if (parentModule) {
            throw new Error('I18nModule is already loaded. Import it in the AppModule only');
        }
        this.i18nService.init();
    }
    static forRoot(config) {
        return {
            ngModule: I18nModule,
            providers: [
                _i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"],
                {
                    provide: _i18n_config_service__WEBPACK_IMPORTED_MODULE_2__["I18nConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
I18nModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: I18nModule });
I18nModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function I18nModule_Factory(t) { return new (t || I18nModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](I18nModule, 12)); }, imports: [[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forRoot()],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](I18nModule, { imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forRoot()],
                exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]]
            }]
    }], function () { return [{ type: _i18n_service__WEBPACK_IMPORTED_MODULE_3__["I18nService"] }, { type: I18nModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/i18n/src/lib/i18n.service.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/i18n/src/lib/i18n.service.ts ***!
  \***********************************************************************************/
/*! exports provided: extract, I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _i18n_config_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./i18n-config.service */ "../../libs/i18n/src/lib/i18n-config.service.ts");















const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('I18nService');
const languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * @param s The string to extract for translation.
 * @return The same string.
 */
function extract(s) {
    return s;
}
/**
 * Passes through all child nodes of the given `ActivatedRouteSnapshot` and returns the furthest page title found.
 * If no title is found, returns `undefined`.
 */
function findTitle(activatedRoute) {
    let title;
    if (activatedRoute.firstChild) {
        title = findTitle(activatedRoute.firstChild);
    }
    if (!title) {
        title = activatedRoute.data['title'];
    }
    return title;
}
class I18nService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["BasicStore"] {
    constructor(router, titleService, translateService, config, storeService) {
        super({
            defaultState: {
                defaultLanguage: config.defaultLanguage,
                supportedLanguages: Object.keys(config.languages),
                userLanguage: localStorage.getItem(languageKey) ||
                    translateService.getBrowserCultureLang()
            },
            name: 'I18nService',
            storeService
        });
        this.router = router;
        this.titleService = titleService;
        this.translateService = translateService;
        Object.entries(config.languages).forEach(([lang, translations]) => this.setTranslation(lang, translations));
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param defaultLanguage The default language to use.
     * @param supportedLanguages The list of supported languages.
     */
    init() {
        // Whenever the current language changes, update the store
        this.translateService.onLangChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["pluck"])('lang'))
            .subscribe((lang) => this.update({
            payload: { currentLanguage: lang },
            description: 'Current language settings updated'
        }));
        // Whenever new route data becomes available, look up the current page title
        const pageTitle = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(data => data instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((data) => findTitle(data.state.root)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["shareReplay"])());
        // Whenever the current language or the page title changes, update the page title
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])([this.translateService.onLangChange, pageTitle])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMapTo"])(pageTitle))
            .subscribe(title => {
            if (title) {
                this.titleService.setTitle(this.translateService.instant(title));
            }
        });
        // Whenever the current language changes, cache it as the the user's preferred language in the localStorage
        this.select('currentLanguage').subscribe(lang => localStorage.setItem(languageKey, lang));
        // Whenever the user's language, supported languages, or default language update, update the `TranslateService` to use this language.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])([
            this.select('userLanguage'),
            this.select('supportedLanguages'),
            this.select('defaultLanguage')
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(([userLang, supportedLangs, defaultLang]) => {
            let lang = userLang;
            let isSupportedLanguage = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["includes"])(supportedLangs, lang);
            // If no exact match is found, search without the region
            if (userLang && !isSupportedLanguage) {
                const noRegion = lang.split('-')[0];
                lang =
                    supportedLangs.find(supportedLanguage => supportedLanguage.startsWith(noRegion)) || '';
                isSupportedLanguage = Boolean(lang);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                lang = defaultLang;
            }
            return lang;
        }))
            .subscribe(lang => {
            log.debug(`Language set to ${lang}`);
            this.translateService.use(lang);
        });
    }
    /**
     * Sets the current language.
     * Note: The current language is saved to the local storage.
     * If no parameter is specified, the language is loaded from local storage (if present).
     * @param language The IETF language code to set.
     */
    setLanguage(language) {
        this.update({
            payload: { userLanguage: language },
            description: 'New preferred language selected'
        });
    }
    /** Merges a set of translations with the current dictionary for the given language. */
    setTranslation(
    /** The IETF language code associated with the translations */
    language, 
    /** The translations to merge with the current dictionary */
    translations) {
        this.translateService.setTranslation(language, translations, true);
    }
}
I18nService.ɵfac = function I18nService_Factory(t) { return new (t || I18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_i18n_config_service__WEBPACK_IMPORTED_MODULE_9__["I18nConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["StoreService"])); };
I18nService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: I18nService, factory: I18nService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](I18nService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_i18n_config_service__WEBPACK_IMPORTED_MODULE_9__["I18nConfigService"]]
            }] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/logger/src/index.ts":
/*!**************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/logger/src/index.ts ***!
  \**************************************************************************/
/*! exports provided: LoggerModule, LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/logger */ "../../libs/logger/src/lib/logger.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _lib_logger__WEBPACK_IMPORTED_MODULE_0__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _lib_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"]; });

/* harmony import */ var _lib_logger_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/logger.module */ "../../libs/logger/src/lib/logger.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerModule", function() { return _lib_logger_module__WEBPACK_IMPORTED_MODULE_1__["LoggerModule"]; });





/***/ }),

/***/ "../../libs/logger/src/lib/logger-config.service.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/logger/src/lib/logger-config.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoggerConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerConfigService", function() { return LoggerConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const LoggerConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('LoggerConfig');


/***/ }),

/***/ "../../libs/logger/src/lib/logger.module.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/logger/src/lib/logger.module.ts ***!
  \**************************************************************************************/
/*! exports provided: LoggerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerModule", function() { return LoggerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "../../libs/logger/src/lib/logger.ts");
/* harmony import */ var _logger_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger-config.service */ "../../libs/logger/src/lib/logger-config.service.ts");




class LoggerModule {
    constructor(config = {}, parentModule) {
        if (parentModule) {
            throw new Error('LoggerModule is already loaded. Import it in the AppModule only');
        }
        if (config.production) {
            _logger__WEBPACK_IMPORTED_MODULE_1__["Logger"].enableProductionMode();
        }
    }
    static forRoot(config = {}) {
        return {
            ngModule: LoggerModule,
            providers: [
                {
                    provide: _logger_config_service__WEBPACK_IMPORTED_MODULE_2__["LoggerConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
LoggerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoggerModule });
LoggerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoggerModule_Factory(t) { return new (t || LoggerModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_config_service__WEBPACK_IMPORTED_MODULE_2__["LoggerConfigService"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LoggerModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_logger_config_service__WEBPACK_IMPORTED_MODULE_2__["LoggerConfigService"]]
            }] }, { type: LoggerModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/logger/src/lib/logger.ts":
/*!*******************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/logger/src/lib/logger.ts ***!
  \*******************************************************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root module:
 * ```
 * @NgModule({
 *  imports: [
 *    LoggerModule.forRoot({ production: environment.production }),
 *    ...
 *  ]
 * })
 * export class AppModule {}
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
class Logger {
    constructor(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    static enableProductionMode() {
        Logger.level = LogLevel.Warning;
    }
    /**
     * Logs messages or objects with the debug level.
     * Works the same as console.log().
     */
    debug(...objects) {
        this.log(console.log, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects with the error level.
     * Works the same as console.log().
     */
    error(...objects) {
        this.log(console.error, LogLevel.Error, objects);
    }
    /**
     * Logs messages or objects with the info level.
     * Works the same as console.log().
     */
    info(...objects) {
        this.log(console.info, LogLevel.Info, objects);
    }
    /**
     * Starts a timer with the given label. Outputs at the debug level.
     * @param objects The label of the timer
     */
    time(...objects) {
        this.log(console.time, LogLevel.Debug, objects);
    }
    /**
     * Ends the timer with the given label. Outputs at the debug level.
     * @param objects The label of the timer
     */
    timeEnd(...objects) {
        this.log(console.timeEnd, LogLevel.Debug, objects);
    }
    /**
     * Logs messages or objects with the warning level.
     * Works the same as console.log().
     */
    warn(...objects) {
        this.log(console.warn, LogLevel.Warning, objects);
    }
    log(func, level, objects) {
        if (level <= Logger.level) {
            const messageContent = objects.join(', ');
            const logMessage = this.source
                ? `[${this.source}] ${messageContent}`
                : messageContent;
            func.call(console, logMessage);
        }
    }
}
/**
 * Current logging level.
 * Set it to LogLevel.Off to disable logs completely.
 */
Logger.level = LogLevel.Debug;


/***/ }),

/***/ "../../libs/notifications/src/index.ts":
/*!*********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/notifications/src/index.ts ***!
  \*********************************************************************************/
/*! exports provided: NotificationsModule, NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_notifications_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/notifications.module */ "../../libs/notifications/src/lib/notifications.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return _lib_notifications_module__WEBPACK_IMPORTED_MODULE_0__["NotificationsModule"]; });

/* harmony import */ var _lib_notifications_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/notifications.service */ "../../libs/notifications/src/lib/notifications.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return _lib_notifications_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"]; });





/***/ }),

/***/ "../../libs/notifications/src/lib/notifications-config.service.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/notifications/src/lib/notifications-config.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: NotificationsConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsConfigService", function() { return NotificationsConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const NotificationsConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NotificationsConfig');


/***/ }),

/***/ "../../libs/notifications/src/lib/notifications.module.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/notifications/src/lib/notifications.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _notifications_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications-config.service */ "../../libs/notifications/src/lib/notifications-config.service.ts");



class NotificationsModule {
    static forRoot(config = {}) {
        return {
            ngModule: NotificationsModule,
            providers: [
                {
                    provide: _notifications_config_service__WEBPACK_IMPORTED_MODULE_1__["NotificationsConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
NotificationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NotificationsModule });
NotificationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], null, null); })();


/***/ }),

/***/ "../../libs/notifications/src/lib/notifications.service.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/notifications/src/lib/notifications.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _notifications_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications-config.service */ "../../libs/notifications/src/lib/notifications-config.service.ts");
/* harmony import */ var _notifications_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications.module */ "../../libs/notifications/src/lib/notifications.module.ts");







class NotificationsService {
    constructor(config = {}) {
        this.config = config;
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(registration => {
                this.serviceWorkerRegistration = registration;
            });
        }
    }
    /**
     * Attempts to show a notification to the user.
     * Notifications are user opt-in based.
     * The user will be prompted to grant permission if not already granted or denied.
     * Prefers the service worker persistent notification interface, but falls back to browser notifications if the service worker is unavailable.
     * Returns the tag of the notification.
     */
    showNotification(
    /** The notification message that will be shown to the user */
    title, 
    /** Additional options */
    options = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result = null;
            if ('Notification' in window) {
                const permission = yield Notification.requestPermission();
                if (permission === 'granted') {
                    const config = Object.assign({
                        badge: this.config.badgePath,
                        icon: this.config.iconPath,
                        tag: result = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])(),
                        timestamp: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["now"])()
                    }, options);
                    result = config.tag;
                    if (this.serviceWorkerRegistration) {
                        this.serviceWorkerRegistration.showNotification(title, config);
                    }
                    else {
                        new Notification(title, config);
                    }
                }
            }
            return result;
        });
    }
}
NotificationsService.ɵfac = function NotificationsService_Factory(t) { return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_notifications_config_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsConfigService"], 8)); };
NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationsService, factory: NotificationsService.ɵfac, providedIn: _notifications_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _notifications_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsModule"]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_notifications_config_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/permissions/src/index.ts":
/*!*******************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/index.ts ***!
  \*******************************************************************************/
/*! exports provided: BranchPermissionDirective, BranchPermissionModule, BranchPermissionService, HasBranchPermissionDirective, FeatureDirective, Feature, FeatureService, ProjectPermissionDirective, ProjectPermissionModule, ProjectPermissionService, HasProjectPermissionDirective, FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_branch_permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/branch-permission */ "../../libs/permissions/src/lib/branch-permission/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionDirective", function() { return _lib_branch_permission__WEBPACK_IMPORTED_MODULE_0__["BranchPermissionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionModule", function() { return _lib_branch_permission__WEBPACK_IMPORTED_MODULE_0__["BranchPermissionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionService", function() { return _lib_branch_permission__WEBPACK_IMPORTED_MODULE_0__["BranchPermissionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasBranchPermissionDirective", function() { return _lib_branch_permission__WEBPACK_IMPORTED_MODULE_0__["HasBranchPermissionDirective"]; });

/* harmony import */ var _lib_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/feature */ "../../libs/permissions/src/lib/feature/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureDirective", function() { return _lib_feature__WEBPACK_IMPORTED_MODULE_1__["FeatureDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return _lib_feature__WEBPACK_IMPORTED_MODULE_1__["Feature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return _lib_feature__WEBPACK_IMPORTED_MODULE_1__["FeatureService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return _lib_feature__WEBPACK_IMPORTED_MODULE_1__["FeatureModule"]; });

/* harmony import */ var _lib_project_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/project-permission */ "../../libs/permissions/src/lib/project-permission/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionDirective", function() { return _lib_project_permission__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionModule", function() { return _lib_project_permission__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionService", function() { return _lib_project_permission__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasProjectPermissionDirective", function() { return _lib_project_permission__WEBPACK_IMPORTED_MODULE_2__["HasProjectPermissionDirective"]; });






/***/ }),

/***/ "../../libs/permissions/src/lib/abstract-permission.directive.ts":
/*!***********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/abstract-permission.directive.ts ***!
  \***********************************************************************************************************/
/*! exports provided: AbstractPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPermissionDirective", function() { return AbstractPermissionDirective; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




class AbstractPermissionDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        /** Indicates the current user permission state */
        this.hasPermission$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        /** Indicates whether or not the view has been created. Can also be false if previously created, but destroyed. */
        this.hasView = false;
    }
    ngOnInit() {
        // Whenever the permission provider emits a new value, propagate the new permission state.
        this.permissionProvider
            .pipe(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["untilDestroyed"])(this))
            .subscribe(this.hasPermission$);
        //Whenever the permissions change, trigger the update of the view.
        this.hasPermission$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["untilDestroyed"])(this))
            .subscribe(hasPermission => this.handlePermissionChange(hasPermission));
    }
    ngOnDestroy() { }
}
AbstractPermissionDirective.ɵfac = function AbstractPermissionDirective_Factory(t) { return new (t || AbstractPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"])); };
AbstractPermissionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: AbstractPermissionDirective });


/***/ }),

/***/ "../../libs/permissions/src/lib/branch-permission/abstract-branch-permission.directive.ts":
/*!************************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/branch-permission/abstract-branch-permission.directive.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: AbstractBranchPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractBranchPermissionDirective", function() { return AbstractBranchPermissionDirective; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_permission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-permission.directive */ "../../libs/permissions/src/lib/abstract-permission.directive.ts");



class AbstractBranchPermissionDirective extends _abstract_permission_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractPermissionDirective"] {
    constructor(branchPermissionService, templateRef, viewContainer) {
        super(templateRef, viewContainer);
        this.branchPermissionService = branchPermissionService;
        this.level$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
        this.branchName$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"]();
    }
    get permissionProvider() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["combineLatest"])([this.branchName$, this.level$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(([branchName, permissionLevel]) => this.branchPermissionService.checkPermission(branchName, permissionLevel)));
    }
}


/***/ }),

/***/ "../../libs/permissions/src/lib/branch-permission/branch-permission.directive.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/branch-permission/branch-permission.directive.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: BranchPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionDirective", function() { return BranchPermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_branch_permission_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-branch-permission.directive */ "../../libs/permissions/src/lib/branch-permission/abstract-branch-permission.directive.ts");
/* harmony import */ var _branch_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-permission.service */ "../../libs/permissions/src/lib/branch-permission/branch-permission.service.ts");





class BranchPermissionDirective extends _abstract_branch_permission_directive__WEBPACK_IMPORTED_MODULE_1__["AbstractBranchPermissionDirective"] {
    constructor(branchPermissionService, templateRef, viewContainer) {
        super(branchPermissionService, templateRef, viewContainer);
    }
    set level(level) {
        this.level$.next(level);
    }
    set branchName(branchName) {
        this.branchName$.next(branchName);
    }
    /**
     * Creates or destroys the view based on the given permission state.
     */
    handlePermissionChange(hasPermission) {
        if (hasPermission && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!hasPermission && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
BranchPermissionDirective.ɵfac = function BranchPermissionDirective_Factory(t) { return new (t || BranchPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_permission_service__WEBPACK_IMPORTED_MODULE_2__["BranchPermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
BranchPermissionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BranchPermissionDirective, selectors: [["models4insight-branch-permission"], ["", "models4insight-branch-permission", ""]], inputs: { level: ["models4insight-branch-permission", "level"], branchName: ["models4insight-branch-permissionBranch", "branchName"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchPermissionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'models4insight-branch-permission, [models4insight-branch-permission]'
            }]
    }], function () { return [{ type: _branch_permission_service__WEBPACK_IMPORTED_MODULE_2__["BranchPermissionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-branch-permission']
        }], branchName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-branch-permissionBranch']
        }] }); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/branch-permission/branch-permission.module.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/branch-permission/branch-permission.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: BranchPermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionModule", function() { return BranchPermissionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _project_permission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project-permission */ "../../libs/permissions/src/lib/project-permission/index.ts");
/* harmony import */ var _branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./branch-permission.directive */ "../../libs/permissions/src/lib/branch-permission/branch-permission.directive.ts");
/* harmony import */ var _branch_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./branch-permission.service */ "../../libs/permissions/src/lib/branch-permission/branch-permission.service.ts");
/* harmony import */ var _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./has-branch-permission.directive */ "../../libs/permissions/src/lib/branch-permission/has-branch-permission.directive.ts");







class BranchPermissionModule {
    static forRoot() {
        return {
            ngModule: BranchPermissionModule,
            providers: [_branch_permission_service__WEBPACK_IMPORTED_MODULE_4__["BranchPermissionService"]]
        };
    }
}
BranchPermissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BranchPermissionModule });
BranchPermissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BranchPermissionModule_Factory(t) { return new (t || BranchPermissionModule)(); }, imports: [[_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"], _project_permission__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BranchPermissionModule, { declarations: [_branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__["BranchPermissionDirective"], _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_5__["HasBranchPermissionDirective"]], imports: [_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"], _project_permission__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionModule"]], exports: [_branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__["BranchPermissionDirective"], _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_5__["HasBranchPermissionDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchPermissionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"], _project_permission__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionModule"]],
                declarations: [_branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__["BranchPermissionDirective"], _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_5__["HasBranchPermissionDirective"]],
                exports: [_branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__["BranchPermissionDirective"], _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_5__["HasBranchPermissionDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/branch-permission/branch-permission.service.ts":
/*!*************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/branch-permission/branch-permission.service.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: BranchPermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionService", function() { return BranchPermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _project_permission__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project-permission */ "../../libs/permissions/src/lib/project-permission/index.ts");












class BranchPermissionService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectService, projectPermissionService, storeService) {
        super({ name: 'BranchPermissionService', storeService });
        this.projectService = projectService;
        this.projectPermissionService = projectPermissionService;
        this.checkPermission$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.init();
    }
    init() {
        // Handles control flow to prevent flooding the rest api with requests for the same project.
        // After the first request is made for any combination of project ID and branch name, any further requests can be served from the store.
        this.checkPermission$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.projectService.select('projectId')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(([branchName, projectId]) => 
        // This manages control flow for updates on the store to ensure there are no excess updates due to triggers in quick succession
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => this.handleCheckPermission(projectId, branchName)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.select(['permissions', projectId, branchName])))))
            .subscribe();
    }
    /**
     * Checks whether or not the current user meets the required permission level for the branch of the given project. The owner of a project always has the required permissions.
     * @param project the project to check permission for
     * @param branchName the branch to check permission for
     * @param requiredPermissionLevel the minimum permission level required
     */
    checkPermission(branchName, requiredPermissionLevel) {
        this.checkPermission$.next(branchName);
        const branchPermissionLevel = this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(projectId => this.select(['permissions', projectId, branchName])));
        const isOwner = this.projectPermissionService.checkPermission(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["PermissionLevel"].OWNER);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([branchPermissionLevel, isOwner]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([branchPermissionLevel, isOwner]) => branchPermissionLevel <= requiredPermissionLevel || isOwner));
    }
    handleCheckPermission(projectId, branchName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Placeholder while rest api function is still unavailable.
            this.update({
                description: `Permission level updated for branch ${branchName} of project ${projectId}`,
                path: ['permissions', projectId, branchName],
                payload: _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["PermissionLevel"].OWNER
            });
        });
    }
}
BranchPermissionService.ɵfac = function BranchPermissionService_Factory(t) { return new (t || BranchPermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_permission__WEBPACK_IMPORTED_MODULE_7__["ProjectPermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
BranchPermissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BranchPermissionService, factory: BranchPermissionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BranchPermissionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _project_permission__WEBPACK_IMPORTED_MODULE_7__["ProjectPermissionService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/branch-permission/has-branch-permission.directive.ts":
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/branch-permission/has-branch-permission.directive.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: HasBranchPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasBranchPermissionDirective", function() { return HasBranchPermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_branch_permission_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-branch-permission.directive */ "../../libs/permissions/src/lib/branch-permission/abstract-branch-permission.directive.ts");
/* harmony import */ var _branch_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-permission.service */ "../../libs/permissions/src/lib/branch-permission/branch-permission.service.ts");





class HasBranchPermissionDirective extends _abstract_branch_permission_directive__WEBPACK_IMPORTED_MODULE_1__["AbstractBranchPermissionDirective"] {
    constructor(branchPermissionService, templateRef, viewContainer) {
        super(branchPermissionService, templateRef, viewContainer);
        this.context = { hasPermission: false };
    }
    set level(level) {
        this.level$.next(level);
    }
    set branchName(branchName) {
        this.branchName$.next(branchName);
    }
    /**
     * Updates the context of the view based on the given permission state.
     */
    handlePermissionChange(hasPermission) {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.context);
            this.hasView = true;
        }
        this.context.hasPermission = hasPermission;
    }
}
HasBranchPermissionDirective.ɵfac = function HasBranchPermissionDirective_Factory(t) { return new (t || HasBranchPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_branch_permission_service__WEBPACK_IMPORTED_MODULE_2__["BranchPermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
HasBranchPermissionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HasBranchPermissionDirective, selectors: [["models4insight-has-branch-permission"], ["", "models4insight-has-branch-permission", ""]], inputs: { level: ["models4insight-has-branch-permission", "level"], branchName: ["models4insight-has-branch-permissionBranch", "branchName"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasBranchPermissionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'models4insight-has-branch-permission, [models4insight-has-branch-permission]'
            }]
    }], function () { return [{ type: _branch_permission_service__WEBPACK_IMPORTED_MODULE_2__["BranchPermissionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-has-branch-permission']
        }], branchName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-has-branch-permissionBranch']
        }] }); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/branch-permission/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/branch-permission/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: BranchPermissionDirective, BranchPermissionModule, BranchPermissionService, HasBranchPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _branch_permission_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branch-permission.directive */ "../../libs/permissions/src/lib/branch-permission/branch-permission.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionDirective", function() { return _branch_permission_directive__WEBPACK_IMPORTED_MODULE_0__["BranchPermissionDirective"]; });

/* harmony import */ var _branch_permission_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branch-permission.module */ "../../libs/permissions/src/lib/branch-permission/branch-permission.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionModule", function() { return _branch_permission_module__WEBPACK_IMPORTED_MODULE_1__["BranchPermissionModule"]; });

/* harmony import */ var _branch_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branch-permission.service */ "../../libs/permissions/src/lib/branch-permission/branch-permission.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermissionService", function() { return _branch_permission_service__WEBPACK_IMPORTED_MODULE_2__["BranchPermissionService"]; });

/* harmony import */ var _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./has-branch-permission.directive */ "../../libs/permissions/src/lib/branch-permission/has-branch-permission.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasBranchPermissionDirective", function() { return _has_branch_permission_directive__WEBPACK_IMPORTED_MODULE_3__["HasBranchPermissionDirective"]; });







/***/ }),

/***/ "../../libs/permissions/src/lib/feature/feature.directive.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/feature/feature.directive.ts ***!
  \*******************************************************************************************************/
/*! exports provided: FeatureDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureDirective", function() { return FeatureDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-permission.directive */ "../../libs/permissions/src/lib/abstract-permission.directive.ts");
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feature.service */ "../../libs/permissions/src/lib/feature/feature.service.ts");







class FeatureDirective extends _abstract_permission_directive__WEBPACK_IMPORTED_MODULE_3__["AbstractPermissionDirective"] {
    constructor(featureService, templateRef, viewContainer) {
        super(templateRef, viewContainer);
        this.featureService = featureService;
        this.subscription$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    set subscription(value) {
        this.subscription$.next(value);
    }
    get permissionProvider() {
        return this.subscription$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(subscription => this.featureService.checkPermission(subscription)));
    }
    /**
     * Creates or destroys the view based on the given permission state.
     */
    handlePermissionChange(hasPermission) {
        if (hasPermission && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!hasPermission && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
FeatureDirective.ɵfac = function FeatureDirective_Factory(t) { return new (t || FeatureDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feature_service__WEBPACK_IMPORTED_MODULE_4__["FeatureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
FeatureDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: FeatureDirective, selectors: [["models4insight-feature"], ["", "models4insight-feature", ""]], inputs: { subscription: ["models4insight-feature", "subscription"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'models4insight-feature, [models4insight-feature]'
            }]
    }], function () { return [{ type: _feature_service__WEBPACK_IMPORTED_MODULE_4__["FeatureService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { subscription: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-feature']
        }] }); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/feature/feature.module.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/feature/feature.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return FeatureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _feature_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.directive */ "../../libs/permissions/src/lib/feature/feature.directive.ts");
/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature.service */ "../../libs/permissions/src/lib/feature/feature.service.ts");





class FeatureModule {
}
FeatureModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FeatureModule });
FeatureModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FeatureModule_Factory(t) { return new (t || FeatureModule)(); }, providers: [_feature_service__WEBPACK_IMPORTED_MODULE_3__["FeatureService"]], imports: [[_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FeatureModule, { declarations: [_feature_directive__WEBPACK_IMPORTED_MODULE_2__["FeatureDirective"]], imports: [_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"]], exports: [_feature_directive__WEBPACK_IMPORTED_MODULE_2__["FeatureDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"]],
                declarations: [_feature_directive__WEBPACK_IMPORTED_MODULE_2__["FeatureDirective"]],
                providers: [_feature_service__WEBPACK_IMPORTED_MODULE_3__["FeatureService"]],
                exports: [_feature_directive__WEBPACK_IMPORTED_MODULE_2__["FeatureDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/feature/feature.service.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/feature/feature.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: Feature, FeatureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return FeatureService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");




var Feature;
(function (Feature) {
    Feature["ANALYTICS_ACCESS"] = "analytics_access";
    Feature["DATA2MODEL_ACCESS"] = "data2model_access";
    Feature["DATA2MODEL_BRANCH_CREATE"] = "data2model_branch_create";
    Feature["DATA2MODEL_MODEL_SAVE"] = "data2model_model_save";
    Feature["DATA2MODEL_RULES_EDIT"] = "data2model_rules_edit";
    Feature["DATA2MODEL_RULES_SAVE"] = "data2model_rules_save";
    Feature["DATA2MODEL_SUGGESTIONS"] = "data2model_suggestions";
    Feature["PLATFORM_ACCESS"] = "platform_access";
    Feature["PLATFORM_BRANCH_ACCESS_RIGHTS"] = "platform_branch_access_rights";
    Feature["PLATFORM_BRANCH_CREATE"] = "platform_branch_create";
    Feature["PLATFORM_BRANCH_MERGE"] = "platform_branch_merge";
    Feature["PLATFORM_MODEL_EXPLORE"] = "platform_model_explore";
    Feature["PLATFORM_MODEL_RETRIEVE"] = "platform_model_retrieve";
    Feature["PLATFORM_MODEL_UPLOAD"] = "platform_model_upload";
    Feature["PLATFORM_PROJECT_COLLABORATE"] = "platform_project_collaborate";
    Feature["PLATFORM_PROJECT_CONTINUE_WORKING"] = "platform_project_continue_working";
    Feature["PLATFORM_PROJECT_CREATE"] = "platform_project_create";
    Feature["PLATFORM_PROJECT_HOME"] = "platform_project_home";
    Feature["PLATFORM_USER_GROUPS_CREATE"] = "platform_user_groups_create";
})(Feature || (Feature = {}));
class FeatureService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_1__["BasicStore"] {
    constructor(storeService) {
        super({ name: 'FeatureService', storeService });
    }
    /**
     * Checks with the backend whether or not the current user can access the feature with the given name and updates the store accordingly.
     */
    checkPermission(feature) {
        // This is a placeholder while the backend function is not yet available
        this.update({
            description: `Subscription updated for feature ${feature}`,
            path: ['subscription', feature],
            payload: true
        });
        return this.select(['subscription', feature]);
    }
}
FeatureService.ɵfac = function FeatureService_Factory(t) { return new (t || FeatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
FeatureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeatureService, factory: FeatureService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/feature/index.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/feature/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: FeatureDirective, Feature, FeatureService, FeatureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature.module */ "../../libs/permissions/src/lib/feature/feature.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureModule", function() { return _feature_module__WEBPACK_IMPORTED_MODULE_0__["FeatureModule"]; });

/* harmony import */ var _feature_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feature.directive */ "../../libs/permissions/src/lib/feature/feature.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureDirective", function() { return _feature_directive__WEBPACK_IMPORTED_MODULE_1__["FeatureDirective"]; });

/* harmony import */ var _feature_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.service */ "../../libs/permissions/src/lib/feature/feature.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return _feature_service__WEBPACK_IMPORTED_MODULE_2__["Feature"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureService", function() { return _feature_service__WEBPACK_IMPORTED_MODULE_2__["FeatureService"]; });






/***/ }),

/***/ "../../libs/permissions/src/lib/project-permission/abstract-project-permission.directive.ts":
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/project-permission/abstract-project-permission.directive.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: AbstractProjectPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractProjectPermissionDirective", function() { return AbstractProjectPermissionDirective; });
/* harmony import */ var _abstract_permission_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract-permission.directive */ "../../libs/permissions/src/lib/abstract-permission.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");



class AbstractProjectPermissionDirective extends _abstract_permission_directive__WEBPACK_IMPORTED_MODULE_0__["AbstractPermissionDirective"] {
    constructor(projectPermissionService, templateRef, viewContainer) {
        super(templateRef, viewContainer);
        this.projectPermissionService = projectPermissionService;
        this.level$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    }
    get permissionProvider() {
        return this.level$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(permissionLevel => this.projectPermissionService.checkPermission(permissionLevel)));
    }
}


/***/ }),

/***/ "../../libs/permissions/src/lib/project-permission/has-project-permission.directive.ts":
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/project-permission/has-project-permission.directive.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: HasProjectPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasProjectPermissionDirective", function() { return HasProjectPermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_project_permission_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-project-permission.directive */ "../../libs/permissions/src/lib/project-permission/abstract-project-permission.directive.ts");
/* harmony import */ var _project_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-permission.service */ "../../libs/permissions/src/lib/project-permission/project-permission.service.ts");





class HasProjectPermissionDirective extends _abstract_project_permission_directive__WEBPACK_IMPORTED_MODULE_1__["AbstractProjectPermissionDirective"] {
    constructor(projectPermissionService, templateRef, viewContainer) {
        super(projectPermissionService, templateRef, viewContainer);
        this.context = { hasPermission: false };
    }
    set level(level) {
        this.level$.next(level);
    }
    /**
     * Updates the context of the view based on the given permission state.
     */
    handlePermissionChange(hasPermission) {
        if (!this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.context);
            this.hasView = true;
        }
        this.context.hasPermission = hasPermission;
    }
}
HasProjectPermissionDirective.ɵfac = function HasProjectPermissionDirective_Factory(t) { return new (t || HasProjectPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_permission_service__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
HasProjectPermissionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: HasProjectPermissionDirective, selectors: [["models4insight-has-project-permission"], ["", "models4insight-has-project-permission", ""]], inputs: { level: ["models4insight-has-project-permission", "level"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasProjectPermissionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'models4insight-has-project-permission, [models4insight-has-project-permission]'
            }]
    }], function () { return [{ type: _project_permission_service__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-has-project-permission']
        }] }); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/project-permission/index.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/project-permission/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProjectPermissionDirective, ProjectPermissionModule, ProjectPermissionService, HasProjectPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _project_permission_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-permission.directive */ "../../libs/permissions/src/lib/project-permission/project-permission.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionDirective", function() { return _project_permission_directive__WEBPACK_IMPORTED_MODULE_0__["ProjectPermissionDirective"]; });

/* harmony import */ var _project_permission_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-permission.module */ "../../libs/permissions/src/lib/project-permission/project-permission.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionModule", function() { return _project_permission_module__WEBPACK_IMPORTED_MODULE_1__["ProjectPermissionModule"]; });

/* harmony import */ var _project_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-permission.service */ "../../libs/permissions/src/lib/project-permission/project-permission.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionService", function() { return _project_permission_service__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionService"]; });

/* harmony import */ var _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./has-project-permission.directive */ "../../libs/permissions/src/lib/project-permission/has-project-permission.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HasProjectPermissionDirective", function() { return _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_3__["HasProjectPermissionDirective"]; });







/***/ }),

/***/ "../../libs/permissions/src/lib/project-permission/project-permission.directive.ts":
/*!*****************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/project-permission/project-permission.directive.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: ProjectPermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionDirective", function() { return ProjectPermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_project_permission_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-project-permission.directive */ "../../libs/permissions/src/lib/project-permission/abstract-project-permission.directive.ts");
/* harmony import */ var _project_permission_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-permission.service */ "../../libs/permissions/src/lib/project-permission/project-permission.service.ts");





class ProjectPermissionDirective extends _abstract_project_permission_directive__WEBPACK_IMPORTED_MODULE_1__["AbstractProjectPermissionDirective"] {
    constructor(projectPermissionService, templateRef, viewContainer) {
        super(projectPermissionService, templateRef, viewContainer);
    }
    set level(level) {
        this.level$.next(level);
    }
    /**
     * Creates or destroys the view based on the given permission state.
     */
    handlePermissionChange(hasPermission) {
        if (hasPermission && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (!hasPermission && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}
ProjectPermissionDirective.ɵfac = function ProjectPermissionDirective_Factory(t) { return new (t || ProjectPermissionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_permission_service__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ProjectPermissionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ProjectPermissionDirective, selectors: [["models4insight-project-permission"], ["", "models4insight-project-permission", ""]], inputs: { level: ["models4insight-project-permission", "level"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPermissionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'models4insight-project-permission, [models4insight-project-permission]'
            }]
    }], function () { return [{ type: _project_permission_service__WEBPACK_IMPORTED_MODULE_2__["ProjectPermissionService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['models4insight-project-permission']
        }] }); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/project-permission/project-permission.module.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/project-permission/project-permission.module.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ProjectPermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionModule", function() { return ProjectPermissionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has-project-permission.directive */ "../../libs/permissions/src/lib/project-permission/has-project-permission.directive.ts");
/* harmony import */ var _project_permission_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-permission.directive */ "../../libs/permissions/src/lib/project-permission/project-permission.directive.ts");
/* harmony import */ var _project_permission_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-permission.service */ "../../libs/permissions/src/lib/project-permission/project-permission.service.ts");






class ProjectPermissionModule {
    static forRoot() {
        return {
            ngModule: ProjectPermissionModule,
            providers: [_project_permission_service__WEBPACK_IMPORTED_MODULE_4__["ProjectPermissionService"]]
        };
    }
}
ProjectPermissionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProjectPermissionModule });
ProjectPermissionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProjectPermissionModule_Factory(t) { return new (t || ProjectPermissionModule)(); }, imports: [[_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProjectPermissionModule, { declarations: [_project_permission_directive__WEBPACK_IMPORTED_MODULE_3__["ProjectPermissionDirective"],
        _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_2__["HasProjectPermissionDirective"]], imports: [_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"]], exports: [_project_permission_directive__WEBPACK_IMPORTED_MODULE_3__["ProjectPermissionDirective"], _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_2__["HasProjectPermissionDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPermissionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_models4insight_repository__WEBPACK_IMPORTED_MODULE_1__["RepositoryModule"]],
                declarations: [
                    _project_permission_directive__WEBPACK_IMPORTED_MODULE_3__["ProjectPermissionDirective"],
                    _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_2__["HasProjectPermissionDirective"],
                ],
                exports: [_project_permission_directive__WEBPACK_IMPORTED_MODULE_3__["ProjectPermissionDirective"], _has_project_permission_directive__WEBPACK_IMPORTED_MODULE_2__["HasProjectPermissionDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "../../libs/permissions/src/lib/project-permission/project-permission.service.ts":
/*!***************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/permissions/src/lib/project-permission/project-permission.service.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ProjectPermissionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPermissionService", function() { return ProjectPermissionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");










class ProjectPermissionService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectService, storeService) {
        super({ name: 'ProjectPermissionService', storeService });
        this.projectService = projectService;
        this.init();
    }
    init() {
        // Handles control flow to prevent flooding the rest api with requests for the same project.
        // After the first request is made for any project ID, any further requests can be served from the store.
        this.projectService
            .selectCurrentProject()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilKeyChanged"])('id'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(({ project }) => 
        // This manages control flow for updates on the store to ensure there are no excess updates due to triggers in quick succession
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(() => this.handleCheckPermissions(project)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.select(['permissions', project])))))
            .subscribe();
    }
    /**
     * Returns an `Observable`stream of whether or not the current user meets the given minimum required permission level for the current project.
     * @param requiredPermissionLevel The minimum permission level required.
     */
    checkPermission(requiredPermissionLevel) {
        return this.projectService.selectCurrentProject().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(({ project }) => this.select(['permissions', project])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(permissionLevel => permissionLevel <= requiredPermissionLevel));
    }
    /**
     * Returns whether or not the current huser meets the given minimum required permission level for the current project
     * @param requiredPermissionLevel The minimum permission level required.
     */
    hasPermission(requiredPermissionLevel) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { project } = yield this.projectService.getCurrentProject(), permissionLevel = yield this.get(['permissions', project]);
            return permissionLevel <= requiredPermissionLevel;
        });
    }
    handleCheckPermissions(projectName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { role_id } = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["getUserRole"])(projectName, {
                forceUpdate: true
            }).toPromise();
            this.update({
                description: `Permission level updated for project ${projectName}`,
                path: ['permissions', projectName],
                payload: role_id
            });
        });
    }
}
ProjectPermissionService.ɵfac = function ProjectPermissionService_Factory(t) { return new (t || ProjectPermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
ProjectPermissionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectPermissionService, factory: ProjectPermissionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectPermissionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/redux/src/index.ts":
/*!*************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/index.ts ***!
  \*************************************************************************/
/*! exports provided: ReduxModule, ActionType, reduceDelete, reduceSet, reduceUpdate, MonitorAsync, BasicStore, StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/action */ "../../libs/redux/src/lib/action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return _lib_action__WEBPACK_IMPORTED_MODULE_0__["ActionType"]; });

/* harmony import */ var _lib_basic_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/basic-store */ "../../libs/redux/src/lib/basic-store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceDelete", function() { return _lib_basic_store__WEBPACK_IMPORTED_MODULE_1__["reduceDelete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceSet", function() { return _lib_basic_store__WEBPACK_IMPORTED_MODULE_1__["reduceSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceUpdate", function() { return _lib_basic_store__WEBPACK_IMPORTED_MODULE_1__["reduceUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MonitorAsync", function() { return _lib_basic_store__WEBPACK_IMPORTED_MODULE_1__["MonitorAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasicStore", function() { return _lib_basic_store__WEBPACK_IMPORTED_MODULE_1__["BasicStore"]; });

/* harmony import */ var _lib_redux_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/redux.module */ "../../libs/redux/src/lib/redux.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReduxModule", function() { return _lib_redux_module__WEBPACK_IMPORTED_MODULE_2__["ReduxModule"]; });

/* harmony import */ var _lib_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/store.service */ "../../libs/redux/src/lib/store.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return _lib_store_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"]; });







/***/ }),

/***/ "../../libs/redux/src/lib/abstract-store.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/lib/abstract-store.ts ***!
  \**************************************************************************************/
/*! exports provided: abstractStoreDefaultState, AbstractStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abstractStoreDefaultState", function() { return abstractStoreDefaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractStore", function() { return AbstractStore; });
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action */ "../../libs/redux/src/lib/action.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");








const win = window;
const abstractStoreDefaultState = {};
/**
 * An abstract base store which provides some shared functionality
 */
class AbstractStore {
    constructor({ storeService, name = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), rootReducers = {}, defaultState = abstractStoreDefaultState } = {}) {
        this.actions$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rootReducers = {};
        // Set the default state of the store as a clone of the given default state in case the default state is shared between several stores
        this.defaultState = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(defaultState);
        // Initialize the state with the given default state
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.defaultState);
        // Add the reset operation to the given set of reducers
        this.rootReducers = Object.assign(Object.assign({}, rootReducers), { [_action__WEBPACK_IMPORTED_MODULE_6__["ActionType"].RESET]: () => this.reduceReset() });
        // If no store name is given, a UUID is used instead
        this.name = name;
        // Initialize the logger with either the store name or the UUID.
        this.logger = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_0__["Logger"](this.name);
        // Register this store with the parent service if a reference is given. This is used for error reporting.
        if (storeService) {
            storeService.register(this);
        }
        // Start up the reducer that maintains the state
        this.actions$
            .pipe(this.reducer(), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"])(this))
            .subscribe(this.state$);
    }
    /**
     * Enables production mode.
     * Disables emissions to Redux DevTools
     */
    static enableProductionMode() {
        AbstractStore.production = true;
    }
    ngOnDestroy() {
        this.actions$.complete();
        this.state$.complete();
    }
    get(path, options = {}) {
        return this.select(path, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .toPromise();
    }
    /**
     * Returns the store to its default state
     */
    reset() {
        this.dispatch({
            type: _action__WEBPACK_IMPORTED_MODULE_6__["ActionType"].RESET,
            description: 'Return to default state'
        });
    }
    select(path, options = {}) {
        let result;
        if (Array.isArray(path)) {
            // Pluck does not have an overload for an array that combines strings an numbers, but the function does actually support it.
            result = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])(...path));
        }
        else {
            result = this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pluck"])(path));
        }
        return result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(value => (value !== undefined && value !== null && !Number.isNaN(value)) ||
            (options.includeFalsy && !value)));
    }
    watch(path, options = {}) {
        return this.select(path, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(state => (Array.isArray(state) ? state : Object.values((state !== null && state !== void 0 ? state : {})))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([old, current]) => old ? Object(lodash__WEBPACK_IMPORTED_MODULE_2__["differenceWith"])(current, old, lodash__WEBPACK_IMPORTED_MODULE_2__["isEqual"]) : current));
    }
    /**
     * Returns an observable of the complete state
     */
    get state() {
        return this.state$.asObservable();
    }
    /**
     * Returns the current state
     */
    get value() {
        return this.state$.getValue();
    }
    /**
     * Dispatch an operation that manipulates the state
     * @param action The operation to dispatch
     */
    dispatch(action) {
        this.actions$.next(action);
    }
    /**
     * Apply the given action to the given state, resulting in a new state object that reflects the result of the operation.
     * @param state the current state
     * @param action the operation to apply
     */
    reducer() {
        return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])((state, action) => {
            const next = this.reduceAction(state, action);
            if (!AbstractStore.production) {
                // Construct a debug message representing the current action
                const logMessage = action.description
                    ? `${action.type}: ${action.description}`
                    : action.type;
                // Log the debug message to the console
                this.logger.debug(logMessage);
                // If the user has Redux devtools enabled, also log the action there
                if (win.devTools) {
                    win.devTools.send(`[${this.name}] ${logMessage}`, next);
                }
            }
            return next;
        }, this.state$.value);
    }
    reduceAction(state, action) {
        const rootReducer = this.rootReducers[action.type];
        return rootReducer ? rootReducer(state, action) : state;
    }
    reduceReset() {
        return this.defaultState;
    }
}
/**
 * Whether or not the Store is running in production mode
 */
AbstractStore.production = false;
/**
 * The current session ID shared across all stores for debugging and telemetry
 */
AbstractStore.sessionId = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
AbstractStore.ɵfac = function AbstractStore_Factory(t) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinvalidFactory"](); };
AbstractStore.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineDirective"]({ type: AbstractStore });


/***/ }),

/***/ "../../libs/redux/src/lib/action.ts":
/*!******************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/lib/action.ts ***!
  \******************************************************************************/
/*! exports provided: ActionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
var ActionType;
(function (ActionType) {
    ActionType["RESET"] = "RESET";
    ActionType["SET"] = "SET";
    ActionType["UPDATE"] = "UPDATE";
    ActionType["DELETE"] = "DELETE";
})(ActionType || (ActionType = {}));


/***/ }),

/***/ "../../libs/redux/src/lib/basic-store.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/lib/basic-store.ts ***!
  \***********************************************************************************/
/*! exports provided: reduceDelete, reduceSet, reduceUpdate, MonitorAsync, BasicStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceDelete", function() { return reduceDelete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceSet", function() { return reduceSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reduceUpdate", function() { return reduceUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorAsync", function() { return MonitorAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStore", function() { return BasicStore; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _abstract_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract-store */ "../../libs/redux/src/lib/abstract-store.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action */ "../../libs/redux/src/lib/action.ts");





/**
 * Returns a new instance of the given `state` which omits the entry at the given `path`.
 * If no `path` is given, or if the given `path` is empty, returns an empty `state`.
 */
function reduceDelete(state, { path }) {
    return !path || path.length === 0
        ? {}
        : path.length === 1
            ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(state, path)
            : Object(lodash__WEBPACK_IMPORTED_MODULE_0__["setWith"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["clone"])(state), path.slice(0, path.length - 1), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(state, path.slice(0, path.length - 1)), path[path.length - 1]), lodash__WEBPACK_IMPORTED_MODULE_0__["clone"]);
}
/**
 * Returns a new instance of the given `payload`, replacing the given `state`.
 */
function reduceSet(state, { payload }) {
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["clone"])(payload);
}
/**
 * Returns a new instance of the given `state` where any entry at the given `path` has been replaced with the given `payload`.
 * If no `path` is given, or if the given `path` is empty, the given `payload` is assigned to the given `state`.
 */
function reduceUpdate(state, { path, payload }) {
    return !path || path.length === 0
        ? Object.assign(state, Object(lodash__WEBPACK_IMPORTED_MODULE_0__["clone"])(payload))
        : // Make a clone of the current state and the payload to ensure the state is never modified in place
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["setWith"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["clone"])(state), path, payload, lodash__WEBPACK_IMPORTED_MODULE_0__["clone"]);
}
const rootReducers = {
    [_action__WEBPACK_IMPORTED_MODULE_4__["ActionType"].SET]: reduceSet,
    [_action__WEBPACK_IMPORTED_MODULE_4__["ActionType"].UPDATE]: reduceUpdate,
    [_action__WEBPACK_IMPORTED_MODULE_4__["ActionType"].DELETE]: reduceDelete
};
function MonitorAsync(indicatorProperty, { onComplete, store } = {}) {
    return function (target, key, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const originalResult = original.apply(this, args);
            return ((store !== null && store !== void 0 ? store : target)).monitorAsync.apply(this, [
                originalResult,
                indicatorProperty,
                onComplete
            ]);
        };
        return descriptor;
    };
}
/**
 * This is an implementation of a store supporting basic CRUD operations.
 */
class BasicStore extends _abstract_store__WEBPACK_IMPORTED_MODULE_3__["AbstractStore"] {
    constructor(options = {}) {
        super(Object.assign(Object.assign({}, options), { rootReducers: Object.assign(Object.assign({}, options.rootReducers), rootReducers) }));
    }
    delete(options = {}) {
        this.dispatch({
            type: _action__WEBPACK_IMPORTED_MODULE_4__["ActionType"].DELETE,
            description: options.description,
            path: options.path
        });
    }
    monitorAsync(operation, indicatorProperty, onComplete) {
        if (!Array.isArray(indicatorProperty)) {
            indicatorProperty = [indicatorProperty];
        }
        const setIndicatorState = (state) => this.update({
            description: `Set ${indicatorProperty} to ${Boolean(state)
                .toString()
                .toUpperCase()}`,
            path: indicatorProperty,
            payload: state
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => setIndicatorState(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMapTo"])(operation), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(() => {
            var _a;
            setIndicatorState(false);
            (_a = onComplete) === null || _a === void 0 ? void 0 : _a.next();
        }));
    }
    /**
     * Dispatch a set operation, replacing the current state
     * @param {Object} options
     * @param {String} options.description    A short explanation of the update
     * @param {any} options.payload           The new state
     */
    set(options = {}) {
        this.dispatch({
            type: _action__WEBPACK_IMPORTED_MODULE_4__["ActionType"].SET,
            description: options.description,
            payload: options.payload
        });
    }
    update(options = {}) {
        this.dispatch({
            type: _action__WEBPACK_IMPORTED_MODULE_4__["ActionType"].UPDATE,
            description: options.description,
            path: options.path,
            payload: options.payload
        });
    }
}


/***/ }),

/***/ "../../libs/redux/src/lib/redux-config.service.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/lib/redux-config.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ReduxConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxConfigService", function() { return ReduxConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const ReduxConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ReduxConfig');


/***/ }),

/***/ "../../libs/redux/src/lib/redux.module.ts":
/*!************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/lib/redux.module.ts ***!
  \************************************************************************************/
/*! exports provided: ReduxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReduxModule", function() { return ReduxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-store */ "../../libs/redux/src/lib/abstract-store.ts");
/* harmony import */ var _redux_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux-config.service */ "../../libs/redux/src/lib/redux-config.service.ts");




/*
 * Enable integration with Redux dev tools if:
 * - Running in dev mode, and
 * - The extension is available in the user's browser.
 */
const win = window;
const reduxDevToolsOptions = {
    maxAge: 15,
    features: {
        pause: false,
        lock: false,
        persist: false,
        jump: false,
        skip: false,
        reorder: false,
        dispatch: false,
        test: false
    }
};
class ReduxModule {
    constructor(config = {}, parentModule) {
        if (parentModule) {
            throw new Error('ReduxModule is already loaded. Import it in the AppModule only');
        }
        if (config.production) {
            _abstract_store__WEBPACK_IMPORTED_MODULE_1__["AbstractStore"].enableProductionMode();
        }
        else if (win.__REDUX_DEVTOOLS_EXTENSION__) {
            win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect(reduxDevToolsOptions);
        }
    }
    static forRoot(config = {}) {
        return {
            ngModule: ReduxModule,
            providers: [
                {
                    provide: _redux_config_service__WEBPACK_IMPORTED_MODULE_2__["ReduxConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
ReduxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReduxModule });
ReduxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReduxModule_Factory(t) { return new (t || ReduxModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_redux_config_service__WEBPACK_IMPORTED_MODULE_2__["ReduxConfigService"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ReduxModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReduxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_redux_config_service__WEBPACK_IMPORTED_MODULE_2__["ReduxConfigService"]]
            }] }, { type: ReduxModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/redux/src/lib/store.service.ts":
/*!*************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/redux/src/lib/store.service.ts ***!
  \*************************************************************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _redux_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux.module */ "../../libs/redux/src/lib/redux.module.ts");





/**
 * This service allows stores to register themselves, enabling a snapshot which aggregates the current state of all registered stores.
 * Stores which should not be included in the snapshot, should not be registered.
 */
class StoreService {
    constructor() {
        this.register$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.snapshot$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        this.init();
    }
    init() {
        // Update the current snapshot every time the state of one of the registered stores updates
        this.register$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(store => store.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(state => ({ [store.name]: state })))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((snapshot, stateMap) => (Object.assign(Object.assign({}, snapshot), stateMap)), this.snapshot$.value))
            .subscribe(this.snapshot$);
    }
    /** Register a store with this service */
    register(store) {
        this.register$.next(store);
    }
    /** Returns the current aggregated state of all registered stores */
    get snapshot() {
        return this.snapshot$.getValue();
    }
    /** Returns an observable stream of the aggregated state of all registered stores */
    get state() {
        return this.snapshot$.asObservable();
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: _redux_module__WEBPACK_IMPORTED_MODULE_3__["ReduxModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _redux_module__WEBPACK_IMPORTED_MODULE_3__["ReduxModule"]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../../libs/repository/src/index.ts":
/*!******************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/index.ts ***!
  \******************************************************************************/
/*! exports provided: createHttpParams, RepositoryModule, PermissionLevel, BranchPermission, ProjectPermission, ConflictResolutionTemplateEnum, ConflictChangeTypeEnum, ConflictTypeEnum, ErrorContext, ModelCommitContentTypeEnum, ModelProvenanceOperationEnum, ModelQueryDifResultStateEnum, ModelQueryStateEnum, ParserNameEnum, UserSearch, checkCommitStatus, commitData, commitEventLog, commitJsonModel, commitModel, compareModels, createMetricExemption, initializeProject, createProject, deleteBranch, deleteMetricExemption, deleteProject, deleteUserGroup, defaultDownloadModelOptions, downloadModel, forceCommitModel, getBranch, getBranches, getBranchesSummary, getMetricExemption, getModel, getModelConflict, getProject, getProvenance, getProvenanceSummary, getUserGroup, getUserGroups, getUserInfo, getUserProjects, getUserRole, logClickstreamEvent, mergeBranch, modelviewConvert, defaultMonitorStatusOptions, monitorStatus, reportError, repositoryVersion, updateBranch, updateProject, updateUserGroup, updateUserInfo, userSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_check_commit_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/check-commit-status */ "../../libs/repository/src/lib/check-commit-status/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkCommitStatus", function() { return _lib_check_commit_status__WEBPACK_IMPORTED_MODULE_0__["checkCommitStatus"]; });

/* harmony import */ var _lib_commit_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/commit-data */ "../../libs/repository/src/lib/commit-data/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitData", function() { return _lib_commit_data__WEBPACK_IMPORTED_MODULE_1__["commitData"]; });

/* harmony import */ var _lib_commit_event_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/commit-event-log */ "../../libs/repository/src/lib/commit-event-log/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitEventLog", function() { return _lib_commit_event_log__WEBPACK_IMPORTED_MODULE_2__["commitEventLog"]; });

/* harmony import */ var _lib_commit_json_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/commit-json-model */ "../../libs/repository/src/lib/commit-json-model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitJsonModel", function() { return _lib_commit_json_model__WEBPACK_IMPORTED_MODULE_3__["commitJsonModel"]; });

/* harmony import */ var _lib_commit_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/commit-model */ "../../libs/repository/src/lib/commit-model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitModel", function() { return _lib_commit_model__WEBPACK_IMPORTED_MODULE_4__["commitModel"]; });

/* harmony import */ var _lib_compare_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/compare-models */ "../../libs/repository/src/lib/compare-models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareModels", function() { return _lib_compare_models__WEBPACK_IMPORTED_MODULE_5__["compareModels"]; });

/* harmony import */ var _lib_create_metric_exemption__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/create-metric-exemption */ "../../libs/repository/src/lib/create-metric-exemption/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMetricExemption", function() { return _lib_create_metric_exemption__WEBPACK_IMPORTED_MODULE_6__["createMetricExemption"]; });

/* harmony import */ var _lib_create_project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/create-project */ "../../libs/repository/src/lib/create-project/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeProject", function() { return _lib_create_project__WEBPACK_IMPORTED_MODULE_7__["initializeProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return _lib_create_project__WEBPACK_IMPORTED_MODULE_7__["createProject"]; });

/* harmony import */ var _lib_delete_branch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/delete-branch */ "../../libs/repository/src/lib/delete-branch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteBranch", function() { return _lib_delete_branch__WEBPACK_IMPORTED_MODULE_8__["deleteBranch"]; });

/* harmony import */ var _lib_delete_metric_exemption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/delete-metric-exemption */ "../../libs/repository/src/lib/delete-metric-exemption/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMetricExemption", function() { return _lib_delete_metric_exemption__WEBPACK_IMPORTED_MODULE_9__["deleteMetricExemption"]; });

/* harmony import */ var _lib_delete_project__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/delete-project */ "../../libs/repository/src/lib/delete-project/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return _lib_delete_project__WEBPACK_IMPORTED_MODULE_10__["deleteProject"]; });

/* harmony import */ var _lib_delete_user_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/delete-user-group */ "../../libs/repository/src/lib/delete-user-group/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUserGroup", function() { return _lib_delete_user_group__WEBPACK_IMPORTED_MODULE_11__["deleteUserGroup"]; });

/* harmony import */ var _lib_download_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/download-model */ "../../libs/repository/src/lib/download-model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDownloadModelOptions", function() { return _lib_download_model__WEBPACK_IMPORTED_MODULE_12__["defaultDownloadModelOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadModel", function() { return _lib_download_model__WEBPACK_IMPORTED_MODULE_12__["downloadModel"]; });

/* harmony import */ var _lib_force_commit_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/force-commit-model */ "../../libs/repository/src/lib/force-commit-model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceCommitModel", function() { return _lib_force_commit_model__WEBPACK_IMPORTED_MODULE_13__["forceCommitModel"]; });

/* harmony import */ var _lib_get_branch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/get-branch */ "../../libs/repository/src/lib/get-branch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBranch", function() { return _lib_get_branch__WEBPACK_IMPORTED_MODULE_14__["getBranch"]; });

/* harmony import */ var _lib_get_branches__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/get-branches */ "../../libs/repository/src/lib/get-branches/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBranches", function() { return _lib_get_branches__WEBPACK_IMPORTED_MODULE_15__["getBranches"]; });

/* harmony import */ var _lib_get_branches_summary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/get-branches-summary */ "../../libs/repository/src/lib/get-branches-summary/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBranchesSummary", function() { return _lib_get_branches_summary__WEBPACK_IMPORTED_MODULE_16__["getBranchesSummary"]; });

/* harmony import */ var _lib_get_metric_exemption__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/get-metric-exemption */ "../../libs/repository/src/lib/get-metric-exemption/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetricExemption", function() { return _lib_get_metric_exemption__WEBPACK_IMPORTED_MODULE_17__["getMetricExemption"]; });

/* harmony import */ var _lib_get_model__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/get-model */ "../../libs/repository/src/lib/get-model/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return _lib_get_model__WEBPACK_IMPORTED_MODULE_18__["getModel"]; });

/* harmony import */ var _lib_get_model_conflict__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/get-model-conflict */ "../../libs/repository/src/lib/get-model-conflict/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelConflict", function() { return _lib_get_model_conflict__WEBPACK_IMPORTED_MODULE_19__["getModelConflict"]; });

/* harmony import */ var _lib_get_project__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/get-project */ "../../libs/repository/src/lib/get-project/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return _lib_get_project__WEBPACK_IMPORTED_MODULE_20__["getProject"]; });

/* harmony import */ var _lib_get_provenance__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./lib/get-provenance */ "../../libs/repository/src/lib/get-provenance/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProvenance", function() { return _lib_get_provenance__WEBPACK_IMPORTED_MODULE_21__["getProvenance"]; });

/* harmony import */ var _lib_get_provenance_summary__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./lib/get-provenance-summary */ "../../libs/repository/src/lib/get-provenance-summary/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProvenanceSummary", function() { return _lib_get_provenance_summary__WEBPACK_IMPORTED_MODULE_22__["getProvenanceSummary"]; });

/* harmony import */ var _lib_get_user_group__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./lib/get-user-group */ "../../libs/repository/src/lib/get-user-group/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserGroup", function() { return _lib_get_user_group__WEBPACK_IMPORTED_MODULE_23__["getUserGroup"]; });

/* harmony import */ var _lib_get_user_groups__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./lib/get-user-groups */ "../../libs/repository/src/lib/get-user-groups/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserGroups", function() { return _lib_get_user_groups__WEBPACK_IMPORTED_MODULE_24__["getUserGroups"]; });

/* harmony import */ var _lib_get_user_info__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lib/get-user-info */ "../../libs/repository/src/lib/get-user-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _lib_get_user_info__WEBPACK_IMPORTED_MODULE_25__["getUserInfo"]; });

/* harmony import */ var _lib_get_user_projects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./lib/get-user-projects */ "../../libs/repository/src/lib/get-user-projects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserProjects", function() { return _lib_get_user_projects__WEBPACK_IMPORTED_MODULE_26__["getUserProjects"]; });

/* harmony import */ var _lib_get_user_role__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lib/get-user-role */ "../../libs/repository/src/lib/get-user-role/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserRole", function() { return _lib_get_user_role__WEBPACK_IMPORTED_MODULE_27__["getUserRole"]; });

/* harmony import */ var _lib_log_clickstream_event__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./lib/log-clickstream-event */ "../../libs/repository/src/lib/log-clickstream-event/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logClickstreamEvent", function() { return _lib_log_clickstream_event__WEBPACK_IMPORTED_MODULE_28__["logClickstreamEvent"]; });

/* harmony import */ var _lib_merge_branch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lib/merge-branch */ "../../libs/repository/src/lib/merge-branch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeBranch", function() { return _lib_merge_branch__WEBPACK_IMPORTED_MODULE_29__["mergeBranch"]; });

/* harmony import */ var _lib_modelview_convert__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./lib/modelview-convert */ "../../libs/repository/src/lib/modelview-convert/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modelviewConvert", function() { return _lib_modelview_convert__WEBPACK_IMPORTED_MODULE_30__["modelviewConvert"]; });

/* harmony import */ var _lib_monitor_status__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./lib/monitor-status */ "../../libs/repository/src/lib/monitor-status/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMonitorStatusOptions", function() { return _lib_monitor_status__WEBPACK_IMPORTED_MODULE_31__["defaultMonitorStatusOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monitorStatus", function() { return _lib_monitor_status__WEBPACK_IMPORTED_MODULE_31__["monitorStatus"]; });

/* harmony import */ var _lib_report_error__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lib/report-error */ "../../libs/repository/src/lib/report-error/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return _lib_report_error__WEBPACK_IMPORTED_MODULE_32__["reportError"]; });

/* harmony import */ var _lib_repository_version__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lib/repository-version */ "../../libs/repository/src/lib/repository-version/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repositoryVersion", function() { return _lib_repository_version__WEBPACK_IMPORTED_MODULE_33__["repositoryVersion"]; });

/* harmony import */ var _lib_repository_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./lib/repository.module */ "../../libs/repository/src/lib/repository.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RepositoryModule", function() { return _lib_repository_module__WEBPACK_IMPORTED_MODULE_34__["RepositoryModule"]; });

/* harmony import */ var _lib_types__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./lib/types */ "../../libs/repository/src/lib/types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionLevel", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["PermissionLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchPermission", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["BranchPermission"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectPermission", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ProjectPermission"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConflictResolutionTemplateEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ConflictResolutionTemplateEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConflictChangeTypeEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ConflictChangeTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConflictTypeEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ConflictTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorContext", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ErrorContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelCommitContentTypeEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ModelCommitContentTypeEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelProvenanceOperationEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ModelProvenanceOperationEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelQueryDifResultStateEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ModelQueryDifResultStateEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelQueryStateEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ModelQueryStateEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParserNameEnum", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["ParserNameEnum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSearch", function() { return _lib_types__WEBPACK_IMPORTED_MODULE_35__["UserSearch"]; });

/* harmony import */ var _lib_update_branch__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./lib/update-branch */ "../../libs/repository/src/lib/update-branch/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateBranch", function() { return _lib_update_branch__WEBPACK_IMPORTED_MODULE_36__["updateBranch"]; });

/* harmony import */ var _lib_update_project__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./lib/update-project */ "../../libs/repository/src/lib/update-project/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateProject", function() { return _lib_update_project__WEBPACK_IMPORTED_MODULE_37__["updateProject"]; });

/* harmony import */ var _lib_update_user_group__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lib/update-user-group */ "../../libs/repository/src/lib/update-user-group/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserGroup", function() { return _lib_update_user_group__WEBPACK_IMPORTED_MODULE_38__["updateUserGroup"]; });

/* harmony import */ var _lib_update_user_info__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./lib/update-user-info */ "../../libs/repository/src/lib/update-user-info/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return _lib_update_user_info__WEBPACK_IMPORTED_MODULE_39__["updateUserInfo"]; });

/* harmony import */ var _lib_user_search__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./lib/user-search */ "../../libs/repository/src/lib/user-search/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSearch", function() { return _lib_user_search__WEBPACK_IMPORTED_MODULE_40__["userSearch"]; });

/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./lib/utils */ "../../libs/repository/src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpParams", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_41__["createHttpParams"]; });













































/***/ }),

/***/ "../../libs/repository/src/lib/check-commit-status/check-commit-status.ts":
/*!********************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/check-commit-status/check-commit-status.ts ***!
  \********************************************************************************************************************/
/*! exports provided: checkCommitStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCommitStatus", function() { return checkCommitStatus; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Makes an API call to check the status of an asynchronous backend operation
 */
function checkCommitStatus(
/** The ID of the operation assigned by the API */
taskId, 
/** The full name of the project to which the operation is related */
projectName) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/model/v2/query`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'checkCommitStatus');
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    headers = headers.set('Accept', 'application/json');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({
        taskId,
        projectName
    });
    const requestOptions = {
        headers: headers,
        params: queryParameters
    };
    return http.authorize().get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/check-commit-status/index.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/check-commit-status/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: checkCommitStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _check_commit_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-commit-status */ "../../libs/repository/src/lib/check-commit-status/check-commit-status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkCommitStatus", function() { return _check_commit_status__WEBPACK_IMPORTED_MODULE_0__["checkCommitStatus"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/commit-data/commit-data.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-data/commit-data.ts ***!
  \****************************************************************************************************/
/*! exports provided: commitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitData", function() { return commitData; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Commit a dataset associated with a model to the repository
 */
function commitData(
/** The full name of the project to which the data should be committed */
projectName, 
/** The name of the branch to which the data should be committed */
branchName, 
/** The actual data to be committed. Defaults to an empty array */
content = [], 
/** The id of the model to which the data should be committed. Defaults to 'TRUNK' */
model_id = 'TRUNK') {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/data`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'commitData');
    const body = {
        project: projectName,
        branch: branchName,
        model_id: model_id,
        content: content
    };
    return http
        .authorize()
        .post(path, body, { responseType: 'text' });
}


/***/ }),

/***/ "../../libs/repository/src/lib/commit-data/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-data/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: commitData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commit_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commit-data */ "../../libs/repository/src/lib/commit-data/commit-data.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitData", function() { return _commit_data__WEBPACK_IMPORTED_MODULE_0__["commitData"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/commit-event-log/commit-event-log.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-event-log/commit-event-log.ts ***!
  \**************************************************************************************************************/
/*! exports provided: commitEventLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitEventLog", function() { return commitEventLog; });
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");





/**
 * Commit a history of redux events to the repository
 */
function commitEventLog(sessionId, event) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_3__["repositoryLogBasePath"]}/event`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'commitEventLog');
    let eventPath;
    if (event.type === _models4insight_redux__WEBPACK_IMPORTED_MODULE_0__["ActionType"].UPDATE || event.type === _models4insight_redux__WEBPACK_IMPORTED_MODULE_0__["ActionType"].DELETE) {
        eventPath = event.path;
    }
    const body = {
        sessionId,
        event: {
            description: event.description,
            path: eventPath,
            timestamp: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["now"])(),
            type: event.type
        }
    };
    return http.post(path, body);
}


/***/ }),

/***/ "../../libs/repository/src/lib/commit-event-log/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-event-log/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: commitEventLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commit_event_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commit-event-log */ "../../libs/repository/src/lib/commit-event-log/commit-event-log.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitEventLog", function() { return _commit_event_log__WEBPACK_IMPORTED_MODULE_0__["commitEventLog"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/commit-json-model/commit-json-model.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-json-model/commit-json-model.ts ***!
  \****************************************************************************************************************/
/*! exports provided: commitJsonModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitJsonModel", function() { return commitJsonModel; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Commits a model to the repository as a JSON string
 */
function commitJsonModel(
/** The full name of the project to which the model should be committed */
projectName, 
/** The name of the branch to which the model should be committed */
toBranchName, 
/** The JSON string representing the model */
json, 
/** The username of the user committing the model */
userid, 
/** Optional parameters for the commit operation */
{ parserName = 'archimate3', module = '', comment = '' } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/model/v2/commitJson`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'commitJsonModel');
    const body = {
        projectName: projectName,
        branch: toBranchName,
        userid: userid,
        type: parserName,
        comment: comment,
        raw: json
    };
    return http.authorize().post(path, body);
}


/***/ }),

/***/ "../../libs/repository/src/lib/commit-json-model/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-json-model/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: commitJsonModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commit_json_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commit-json-model */ "../../libs/repository/src/lib/commit-json-model/commit-json-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitJsonModel", function() { return _commit_json_model__WEBPACK_IMPORTED_MODULE_0__["commitJsonModel"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/commit-model/commit-model.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-model/commit-model.ts ***!
  \******************************************************************************************************/
/*! exports provided: commitModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commitModel", function() { return commitModel; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "../../libs/repository/src/lib/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Commits a model to the repository as a File
 */
function commitModel(
/** The full name of the project to which the model should be committed */
projectName, 
/** The name of the branch to which the model should be committed */
toBranchName, 
/** The file containing the model */
file, 
/** The username of the user committing the model */
userid, 
/** Optional parameters for the commit operation */
{ keepOriginalIds = false, parserName = 'archimate3', module = '', modelId = 'TRUNK', comment = '', contentType = _types__WEBPACK_IMPORTED_MODULE_2__["ModelCommitContentTypeEnum"].ARCHIMATE } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/model/v2/commit`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'commitModel');
    const formParams = new FormData();
    formParams.append('parserName', parserName);
    formParams.append('projectName', projectName);
    formParams.append('toBranchName', toBranchName);
    formParams.append('module', module);
    formParams.append('modelId', modelId);
    formParams.append('userid', userid);
    formParams.append('comment', comment);
    formParams.append('contentType', contentType);
    formParams.append('keepOriginalIds', Boolean(keepOriginalIds).toString());
    formParams.append('file', file, file.name);
    return http.authorize().post(path, formParams);
}


/***/ }),

/***/ "../../libs/repository/src/lib/commit-model/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/commit-model/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: commitModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _commit_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commit-model */ "../../libs/repository/src/lib/commit-model/commit-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "commitModel", function() { return _commit_model__WEBPACK_IMPORTED_MODULE_0__["commitModel"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/compare-models/compare-models.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/compare-models/compare-models.ts ***!
  \**********************************************************************************************************/
/*! exports provided: compareModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareModels", function() { return compareModels; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



function compareModels(project, baseBranchName, otherBranchName, { baseVersion, forceUpdate, otherVersion } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = _constants__WEBPACK_IMPORTED_MODULE_1__["modelCompareBasePath"];
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'compareModels');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project,
        baseBranch: baseBranchName,
        baseVersion,
        otherBranch: otherBranchName,
        otherVersion
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/compare-models/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/compare-models/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: compareModels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare-models */ "../../libs/repository/src/lib/compare-models/compare-models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compareModels", function() { return _compare_models__WEBPACK_IMPORTED_MODULE_0__["compareModels"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/constants.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/constants.ts ***!
  \**************************************************************************************/
/*! exports provided: modelCompareBasePath, modelviewBasePath, repositoryBasePath, repositoryApiBasePath, repositoryLogBasePath, userSearchBasePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelCompareBasePath", function() { return modelCompareBasePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelviewBasePath", function() { return modelviewBasePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repositoryBasePath", function() { return repositoryBasePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repositoryApiBasePath", function() { return repositoryApiBasePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repositoryLogBasePath", function() { return repositoryLogBasePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSearchBasePath", function() { return userSearchBasePath; });
const modelCompareBasePath = 'compare';
const modelviewBasePath = 'modelview/api';
const repositoryBasePath = 'repository';
const repositoryApiBasePath = `${repositoryBasePath}/api`;
const repositoryLogBasePath = `${repositoryBasePath}/log`;
const userSearchBasePath = 'users';


/***/ }),

/***/ "../../libs/repository/src/lib/create-metric-exemption/create-metric-exemption.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/create-metric-exemption/create-metric-exemption.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: createMetricExemption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMetricExemption", function() { return createMetricExemption; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Commits the given metric exemption to the database
 */
function createMetricExemption(
/** The metric exemption that should be committed */
exemption) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/exempt`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'createMetricExemption');
    const params = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])(exemption);
    return http.authorize().post(path, params);
}


/***/ }),

/***/ "../../libs/repository/src/lib/create-metric-exemption/index.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/create-metric-exemption/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: createMetricExemption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_metric_exemption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-metric-exemption */ "../../libs/repository/src/lib/create-metric-exemption/create-metric-exemption.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMetricExemption", function() { return _create_metric_exemption__WEBPACK_IMPORTED_MODULE_0__["createMetricExemption"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/create-project/create-project.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/create-project/create-project.ts ***!
  \**********************************************************************************************************/
/*! exports provided: initializeProject, createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeProject", function() { return initializeProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return createProject; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ "../../libs/repository/src/lib/types.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/** Adds default permissions, committer information and a default update message to the given project */
function initializeProject(
/** The data object representing the project */
project, 
/** The username of the user to whom the project belongs */
username, 
/** The email address of the user to whom the project belongs */
email) {
    return Object.assign(Object.assign({}, project), { permissions: {
            [username]: _types__WEBPACK_IMPORTED_MODULE_2__["PermissionLevel"].OWNER
        }, last_update_message: 'project creation', committer: {
            username,
            email
        } });
}
/** Create a project with some default values */
function createProject(
/** The data object representing the project */
project, 
/** The username of the user to whom the project belongs */
username, 
/** The email address of the user to whom the project belongs */
email) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'createProject');
    const initializedProject = initializeProject(project, username, email);
    return http.authorize().post(path, initializedProject);
}


/***/ }),

/***/ "../../libs/repository/src/lib/create-project/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/create-project/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: initializeProject, createProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-project */ "../../libs/repository/src/lib/create-project/create-project.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initializeProject", function() { return _create_project__WEBPACK_IMPORTED_MODULE_0__["initializeProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createProject", function() { return _create_project__WEBPACK_IMPORTED_MODULE_0__["createProject"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/delete-branch/delete-branch.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-branch/delete-branch.ts ***!
  \********************************************************************************************************/
/*! exports provided: deleteBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBranch", function() { return deleteBranch; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Deletes the branch with the given `projectId` and `branchId` from the repository.
 * Branches are not actually deleted, but have their `enabled` property set to `false` in the database.
 */
function deleteBranch(
/** The id of the project for which a branch should be deleted */
projectId, 
/** The id of the branch which should be deleted */
branchId) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/branch`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'deleteBranch');
    const requestParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId,
        branch_id: branchId
    });
    const requestOptions = {
        params: requestParameters,
        responseType: 'text'
    };
    return http.authorize().delete(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/delete-branch/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-branch/index.ts ***!
  \************************************************************************************************/
/*! exports provided: deleteBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delete_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-branch */ "../../libs/repository/src/lib/delete-branch/delete-branch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteBranch", function() { return _delete_branch__WEBPACK_IMPORTED_MODULE_0__["deleteBranch"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/delete-metric-exemption/delete-metric-exemption.ts":
/*!****************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-metric-exemption/delete-metric-exemption.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: deleteMetricExemption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMetricExemption", function() { return deleteMetricExemption; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Delete an exemption from the database which:
 * - Belongs to the metric with the given name and project with the given id, and
 * - Has the given exemption id
 */
function deleteMetricExemption(
/** The id of the project to which the exemption belongs */
projectId, 
/** The id of the exemption */
exemptionId) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/exempt/${projectId}/${exemptionId}`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'deleteMetricExemption');
    return http.authorize().delete(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/delete-metric-exemption/index.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-metric-exemption/index.ts ***!
  \**********************************************************************************************************/
/*! exports provided: deleteMetricExemption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delete_metric_exemption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-metric-exemption */ "../../libs/repository/src/lib/delete-metric-exemption/delete-metric-exemption.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteMetricExemption", function() { return _delete_metric_exemption__WEBPACK_IMPORTED_MODULE_0__["deleteMetricExemption"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/delete-project/delete-project.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-project/delete-project.ts ***!
  \**********************************************************************************************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API request to delete a specific project and all associated models
 */
function deleteProject(
/** The ID of the project to delete */
projectId) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'deleteProject');
    const path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/${projectId}`;
    return http.authorize().delete(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/delete-project/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-project/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: deleteProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delete_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-project */ "../../libs/repository/src/lib/delete-project/delete-project.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return _delete_project__WEBPACK_IMPORTED_MODULE_0__["deleteProject"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/delete-user-group/delete-user-group.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-user-group/delete-user-group.ts ***!
  \****************************************************************************************************************/
/*! exports provided: deleteUserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUserGroup", function() { return deleteUserGroup; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Deletes the `UserGroup` with the given `projectId` and `userGroupId` from the repository.
 */
function deleteUserGroup(projectId, userGroupId) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/group`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'deleteUserGroup');
    const requestParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId,
        group_id: userGroupId
    });
    const requestOptions = {
        params: requestParameters,
        responseType: 'text'
    };
    return http.authorize().delete(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/delete-user-group/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/delete-user-group/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: deleteUserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _delete_user_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-user-group */ "../../libs/repository/src/lib/delete-user-group/delete-user-group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUserGroup", function() { return _delete_user_group__WEBPACK_IMPORTED_MODULE_0__["deleteUserGroup"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/download-model/download-model.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/download-model/download-model.ts ***!
  \**********************************************************************************************************/
/*! exports provided: defaultDownloadModelOptions, downloadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDownloadModelOptions", function() { return defaultDownloadModelOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadModel", function() { return downloadModel; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _get_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../get-model */ "../../libs/repository/src/lib/get-model/index.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "../../libs/repository/src/lib/types.ts");




const defaultDownloadModelOptions = {
    contentType: _types__WEBPACK_IMPORTED_MODULE_3__["ModelCommitContentTypeEnum"].ARCHIMATE,
    module: '',
    modelId: 'TRUNK',
    parserName: 'archimate3'
};
function findFileName(response) {
    const contentDisposition = response.headers.get('content-disposition') || '';
    const matches = /filename=([^;]+)/gi.exec(contentDisposition);
    return (matches[1] || '').trim();
}
/**
 * Download a version of a model from the given project and branch in a particular format
 */
function downloadModel(
/** The full name of the project from which to retrieve the model */
fullProjectName, 
/** The name of the branch from which to retrieve the model */
branch, 
/** The username of the user downloading the model */
userid, 
/** */
version, 
/** Additional parameters for the download model operation */
options = defaultDownloadModelOptions) {
    const { contentType, forceUpdate, modelId, module, parserName } = Object.assign(Object.assign({}, defaultDownloadModelOptions), options);
    return Object(_get_model__WEBPACK_IMPORTED_MODULE_2__["getModel"])(parserName, fullProjectName, branch, module, modelId, userid, contentType, { forceUpdate, observe: 'response', responseType: 'text', version }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
        Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(new Blob([response.body], {
            type: contentType === 'json' ? 'application/json' : 'text/xml'
        }), findFileName(response));
    }));
}


/***/ }),

/***/ "../../libs/repository/src/lib/download-model/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/download-model/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: defaultDownloadModelOptions, downloadModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _download_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./download-model */ "../../libs/repository/src/lib/download-model/download-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDownloadModelOptions", function() { return _download_model__WEBPACK_IMPORTED_MODULE_0__["defaultDownloadModelOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadModel", function() { return _download_model__WEBPACK_IMPORTED_MODULE_0__["downloadModel"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/force-commit-model/force-commit-model.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/force-commit-model/force-commit-model.ts ***!
  \******************************************************************************************************************/
/*! exports provided: forceCommitModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceCommitModel", function() { return forceCommitModel; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Forcibly commit a model to the repository, resolving any conflicts
 */
function forceCommitModel(
/** Name of the parser used for interpreting the added file */
parserName, 
/** Full name of the project to which the model should be committed */
projectName, 
/** The name of the source branch */
fromBranchName, 
/** ID of the module to which the model should be committed */
module, 
/** The ID of the model that should be forcibly committed */
fromModelId, 
/** The name of the target branch */
toBranchName, 
/** The ID of the model that should be overwritten */
toModelId, 
/** The username of the user that is triggering the commit */
userid, 
/** The comment provided by the user */
comment, 
/** The data format in which the model was provided */
contentType, 
/** The original task ID as provided by the API */
commitTaskId, 
/** The conflict resolution template to apply */
template, 
/** A list of IDs representing which items to keep from the repository version of the model */
addListLeft = [], 
/** A list of IDs representing which items to keep from the uploaded version of the model */
addListRight = [], 
/** A list of IDs representing which items to discard from the repository version of the model */
deleteListLeft = [], 
/** A list of IDs representing which items to discard from the uploaded version of the model */
deleteListRight = []) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/model/v2/force`;
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'forceCommitModel');
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const formParams = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({
        parserName,
        projectName,
        fromBranchName,
        module,
        fromModelId,
        toBranchName,
        toModelId,
        userid,
        comment,
        contentType,
        template,
        addListLeft,
        addListRight,
        deleteListLeft,
        deleteListRight,
        commitTaskId
    });
    const requestOptions = {
        headers
    };
    return http.authorize().post(path, formParams, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/force-commit-model/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/force-commit-model/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: forceCommitModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _force_commit_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./force-commit-model */ "../../libs/repository/src/lib/force-commit-model/force-commit-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceCommitModel", function() { return _force_commit_model__WEBPACK_IMPORTED_MODULE_0__["forceCommitModel"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-branch/get-branch.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-branch/get-branch.ts ***!
  \**************************************************************************************************/
/*! exports provided: getBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBranch", function() { return getBranch; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Retrieves the `Branch` with the given `branchId` for the project with the given `projectId`
 */
function getBranch(
/** The id of the project for which to retrieve the branch */
projectId, 
/** The id of the branch to retrieve */
branchId, 
/** Additional parameters for the getBranch operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/branch`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getBranch');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId,
        branch_id: branchId
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-branch/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-branch/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: getBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-branch */ "../../libs/repository/src/lib/get-branch/get-branch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBranch", function() { return _get_branch__WEBPACK_IMPORTED_MODULE_0__["getBranch"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-branches-summary/get-branches-summary.ts":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-branches-summary/get-branches-summary.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: getBranchesSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBranchesSummary", function() { return getBranchesSummary; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API call to retrieve a paged summary of all branches in the project
 */
function getBranchesSummary(
/** The full name of the project for which to retrieve the branch summary */
projectName, 
/** Additional query parameters */
{ batchSize, offset, queryString, branchName, latestOnly, from, until, forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/branch`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getBranchesSummary');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        projectName,
        pageLength: batchSize,
        pageOffset: offset,
        query: queryString,
        branchName,
        latestOnly,
        startDate: from,
        endDate: until
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-branches-summary/index.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-branches-summary/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getBranchesSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_branches_summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-branches-summary */ "../../libs/repository/src/lib/get-branches-summary/get-branches-summary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBranchesSummary", function() { return _get_branches_summary__WEBPACK_IMPORTED_MODULE_0__["getBranchesSummary"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-branches/get-branches.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-branches/get-branches.ts ***!
  \******************************************************************************************************/
/*! exports provided: getBranches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBranches", function() { return getBranches; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Retrieves all `Branch` for the project with the given `projectId`
 */
function getBranches(
/** The id of the project for which to retrieve the branches */
projectId, 
/** Additional parameters for the getBranches operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/branch`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getBranches');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-branches/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-branches/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: getBranches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_branches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-branches */ "../../libs/repository/src/lib/get-branches/get-branches.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getBranches", function() { return _get_branches__WEBPACK_IMPORTED_MODULE_0__["getBranches"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-metric-exemption/get-metric-exemption.ts":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-metric-exemption/get-metric-exemption.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: getMetricExemption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetricExemption", function() { return getMetricExemption; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Retrieves all `MetricExemption` for the project with the given `projectId`.
 * You can optionally supply a branch id, metric name and version timestamp to limit the results.
 */
function getMetricExemption(
/** The id of the project for which to retrieve the exemptions */
projectId, 
/** Additional options for the getMetricExemption operation */
{ branchId, forceUpdate, metricName, version } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/exempt`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getMetricExemption');
    const params = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId,
        branch: branchId,
        metric: metricName,
        version
    });
    return http
        .cache(forceUpdate)
        .authorize()
        .get(path, { params });
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-metric-exemption/index.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-metric-exemption/index.ts ***!
  \*******************************************************************************************************/
/*! exports provided: getMetricExemption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_metric_exemption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-metric-exemption */ "../../libs/repository/src/lib/get-metric-exemption/get-metric-exemption.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMetricExemption", function() { return _get_metric_exemption__WEBPACK_IMPORTED_MODULE_0__["getMetricExemption"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-model-conflict/get-model-conflict.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-model-conflict/get-model-conflict.ts ***!
  \******************************************************************************************************************/
/*! exports provided: getModelConflict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModelConflict", function() { return getModelConflict; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Retrieve the details for a conflict or a set of conflicts
 */
function getModelConflict(
/** The ID of the operation that resulted in the conflicts */
taskId, 
/** The full name of the project to which the conflicts belong */
projectName, 
/** The inclusive index at which to start the page */
index, 
/** The length of the page */
limit) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/model/v2/conflict`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'getModelConflict');
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    headers = headers.set('Accept', 'application/json');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({
        taskId,
        projectName,
        index,
        limit
    });
    const requestOptions = {
        headers,
        params: queryParameters
    };
    return http
        .authorize()
        .cache()
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-model-conflict/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-model-conflict/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: getModelConflict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_model_conflict__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-model-conflict */ "../../libs/repository/src/lib/get-model-conflict/get-model-conflict.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModelConflict", function() { return _get_model_conflict__WEBPACK_IMPORTED_MODULE_0__["getModelConflict"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-model/get-model.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-model/get-model.ts ***!
  \************************************************************************************************/
/*! exports provided: getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Retrieve a version of a model from the given project and branch in a particular format. If no version is given, retrieves the latest version.
 */
function getModel(
/** Name of the parser used for interpreting the added file */
parserName, 
/** The full name of the project from which to retrieve the model */
projectName, 
/** The name of the branch from which to retrieve the model */
branchName, 
/** The ID of the module which to retrieve */
module, 
/** The ID of the model which to retrieve */
modelId, 
/** The username of the user retrieving the model */
userid, 
/** The format in which to retrieve the model */
contentType, 
/** Additional parameters for the retrieve operation */
{ forceUpdate, observe, responseType, version } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/model/retrieve`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'getModel');
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({
        parserName,
        projectName,
        branchName,
        module,
        modelId,
        userid,
        version,
        contentType
    });
    const requestOptions = {
        headers,
        params: queryParameters,
        observe,
        responseType: responseType || (contentType === 'json' ? 'json' : 'text')
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-model/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-model/index.ts ***!
  \********************************************************************************************/
/*! exports provided: getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-model */ "../../libs/repository/src/lib/get-model/get-model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return _get_model__WEBPACK_IMPORTED_MODULE_0__["getModel"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-project/get-project.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-project/get-project.ts ***!
  \****************************************************************************************************/
/*! exports provided: getProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return getProject; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API request to retrieve details about a specific project with the given projectId
 */
function getProject(
/** The ID of the project for which to retrieve the details */
projectId, 
/** Optional parameters for the get project operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getProject');
    const path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/${projectId}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-project/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-project/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: getProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-project */ "../../libs/repository/src/lib/get-project/get-project.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProject", function() { return _get_project__WEBPACK_IMPORTED_MODULE_0__["getProject"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-provenance-summary/get-provenance-summary.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-provenance-summary/get-provenance-summary.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: getProvenanceSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProvenanceSummary", function() { return getProvenanceSummary; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API request to retrieve a paged set of provenance summaries for the given project
 */
function getProvenanceSummary(
/** The full name of the project for which to retrieve the provenance */
projectName, { batchSize, offset, queryString, branchName, latestOnly, from, until, forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/provenance/hour`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getProvenanceSummary');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        projectName,
        pageLength: batchSize,
        pageOffset: offset,
        query: queryString,
        branchName,
        latestOnly,
        startDate: from,
        endDate: until
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-provenance-summary/index.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-provenance-summary/index.ts ***!
  \*********************************************************************************************************/
/*! exports provided: getProvenanceSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_provenance_summary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-provenance-summary */ "../../libs/repository/src/lib/get-provenance-summary/get-provenance-summary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProvenanceSummary", function() { return _get_provenance_summary__WEBPACK_IMPORTED_MODULE_0__["getProvenanceSummary"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-provenance/get-provenance.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-provenance/get-provenance.ts ***!
  \**********************************************************************************************************/
/*! exports provided: getProvenance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProvenance", function() { return getProvenance; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API request for a paged set of provenance items for the given project
 */
function getProvenance(
/** The full name of the project for which to retrieve the provenance */
projectName, 
/** Additional query parameters */
{ batchSize, offset, queryString, branchName, latestOnly, from, until, forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/provenance`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getProvenance');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        projectName,
        pageLength: batchSize,
        pageOffset: offset,
        query: queryString,
        branchName,
        latestOnly,
        startDate: from,
        endDate: until
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-provenance/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-provenance/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: getProvenance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_provenance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-provenance */ "../../libs/repository/src/lib/get-provenance/get-provenance.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProvenance", function() { return _get_provenance__WEBPACK_IMPORTED_MODULE_0__["getProvenance"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-user-group/get-user-group.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-group/get-user-group.ts ***!
  \**********************************************************************************************************/
/*! exports provided: getUserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserGroup", function() { return getUserGroup; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Retrieves the `UserGroup` with the given `userGroupId` for the project with the given `projectId`
 */
function getUserGroup(
/** The id of the project for which to retrieve the user group */
projectId, 
/** The id of the user group to retrieve */
userGroupId, 
/** Additional parameters for the getUserGroup operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/group`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getUserGroup');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId,
        group_id: userGroupId
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-user-group/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-group/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: getUserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-group */ "../../libs/repository/src/lib/get-user-group/get-user-group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserGroup", function() { return _get_user_group__WEBPACK_IMPORTED_MODULE_0__["getUserGroup"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-user-groups/get-user-groups.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-groups/get-user-groups.ts ***!
  \************************************************************************************************************/
/*! exports provided: getUserGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserGroups", function() { return getUserGroups; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Retrieves all `UserGroup` for the project with the given `projectId`
 */
function getUserGroups(
/** The id of the project for which to retrieve the user groups */
projectId, 
/** Additional parameters for the getUserGroups operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/group`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getUserGroups');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["createHttpParams"])({
        project_id: projectId
    });
    const requestOptions = {
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-user-groups/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-groups/index.ts ***!
  \**************************************************************************************************/
/*! exports provided: getUserGroups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_groups__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-groups */ "../../libs/repository/src/lib/get-user-groups/get-user-groups.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserGroups", function() { return _get_user_groups__WEBPACK_IMPORTED_MODULE_0__["getUserGroups"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-user-info/get-user-info.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-info/get-user-info.ts ***!
  \********************************************************************************************************/
/*! exports provided: getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");


/**
 * Makes an API request to retrieve the user info for the current user.
 * The API interprets the Bearer token in the request header to determine which user info to return.
 */
function getUserInfo({ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_0__["repositoryApiBasePath"]}/user`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-user-info/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-info/index.ts ***!
  \************************************************************************************************/
/*! exports provided: getUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-info */ "../../libs/repository/src/lib/get-user-info/get-user-info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return _get_user_info__WEBPACK_IMPORTED_MODULE_0__["getUserInfo"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-user-projects/get-user-projects.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-projects/get-user-projects.ts ***!
  \****************************************************************************************************************/
/*! exports provided: getUserProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjects", function() { return getUserProjects; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Retrieve a list of projects the given user owns or has permission to access
 */
function getUserProjects(
/** The username of the user for whom to retrieve the projects */
userId, 
/** Optional parameters for the get user projects operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getUserProjects');
    const path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/user/${userId}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-user-projects/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-projects/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: getUserProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-projects */ "../../libs/repository/src/lib/get-user-projects/get-user-projects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserProjects", function() { return _get_user_projects__WEBPACK_IMPORTED_MODULE_0__["getUserProjects"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/get-user-role/get-user-role.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-role/get-user-role.ts ***!
  \********************************************************************************************************/
/*! exports provided: getUserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserRole", function() { return getUserRole; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API request to retrieve the role of the current user in the given project.
 * The identity of the user is derived from the bearer token
 */
function getUserRole(
/** The full name of the project for which to look up the role */
projectName, 
/** Additional parameters for the get user role operation */
{ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'getUserRole');
    const path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/auth/role/${projectName}`;
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/get-user-role/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/get-user-role/index.ts ***!
  \************************************************************************************************/
/*! exports provided: getUserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_user_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-user-role */ "../../libs/repository/src/lib/get-user-role/get-user-role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUserRole", function() { return _get_user_role__WEBPACK_IMPORTED_MODULE_0__["getUserRole"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/log-clickstream-event/index.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/log-clickstream-event/index.ts ***!
  \********************************************************************************************************/
/*! exports provided: logClickstreamEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_clickstream_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-clickstream-event */ "../../libs/repository/src/lib/log-clickstream-event/log-clickstream-event.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logClickstreamEvent", function() { return _log_clickstream_event__WEBPACK_IMPORTED_MODULE_0__["logClickstreamEvent"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/log-clickstream-event/log-clickstream-event.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/log-clickstream-event/log-clickstream-event.ts ***!
  \************************************************************************************************************************/
/*! exports provided: logClickstreamEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logClickstreamEvent", function() { return logClickstreamEvent; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Saves the given clickstream event to the database
 */
function logClickstreamEvent(
/** The event that should be saved to the database */
event) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/log`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'logClickstreamEvent');
    return http.authorize().post(path, event);
}


/***/ }),

/***/ "../../libs/repository/src/lib/merge-branch/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/merge-branch/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: mergeBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _merge_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./merge-branch */ "../../libs/repository/src/lib/merge-branch/merge-branch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeBranch", function() { return _merge_branch__WEBPACK_IMPORTED_MODULE_0__["mergeBranch"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/merge-branch/merge-branch.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/merge-branch/merge-branch.ts ***!
  \******************************************************************************************************/
/*! exports provided: mergeBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeBranch", function() { return mergeBranch; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Makes an API call to move a branch to another branch. Has convenient default values for the optionals.
 */
function mergeBranch(
/** The full name of the project */
projectName, 
/** The name of the source branch */
fromBranch, 
/** The name of the target branch */
toBranch, 
/** The username of the user making the merge */
userid, 
/** Additional parameters for the merge branch operation */
{ parserName = 'archimate3', comment = '' } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/branch`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'mergeBranch');
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
    const formParams = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({
        parserName,
        projectName,
        fromBranch,
        toBranch,
        userid,
        comment
    });
    const requestOptions = {
        headers
    };
    return http
        .authorize()
        .post(path, formParams.toString(), requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/modelview-convert/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/modelview-convert/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: modelviewConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modelview_convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modelview-convert */ "../../libs/repository/src/lib/modelview-convert/modelview-convert.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "modelviewConvert", function() { return _modelview_convert__WEBPACK_IMPORTED_MODULE_0__["modelviewConvert"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/modelview-convert/modelview-convert.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/modelview-convert/modelview-convert.ts ***!
  \****************************************************************************************************************/
/*! exports provided: modelviewConvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modelviewConvert", function() { return modelviewConvert; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




function modelviewConvert(svg, width, height) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["modelviewBasePath"]}/convert`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'modelviewConvert');
    const formParams = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({
        svg,
        width,
        height
    });
    return http
        .authorize()
        .post(path, formParams, { responseType: 'text' })
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(response => Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["b64toBlob"])(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["b64urlToB64"])(response))));
}


/***/ }),

/***/ "../../libs/repository/src/lib/monitor-status/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/monitor-status/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: defaultMonitorStatusOptions, monitorStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monitor_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monitor-status */ "../../libs/repository/src/lib/monitor-status/monitor-status.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultMonitorStatusOptions", function() { return _monitor_status__WEBPACK_IMPORTED_MODULE_0__["defaultMonitorStatusOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "monitorStatus", function() { return _monitor_status__WEBPACK_IMPORTED_MODULE_0__["monitorStatus"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/monitor-status/monitor-status.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/monitor-status/monitor-status.ts ***!
  \**********************************************************************************************************/
/*! exports provided: defaultMonitorStatusOptions, monitorStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMonitorStatusOptions", function() { return defaultMonitorStatusOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monitorStatus", function() { return monitorStatus; });
/* harmony import */ var backoff_rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backoff-rxjs */ "../../node_modules/backoff-rxjs/esm2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ "../../libs/repository/src/lib/types.ts");
/* harmony import */ var _check_commit_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../check-commit-status */ "../../libs/repository/src/lib/check-commit-status/index.ts");





const defaultMonitorStatusOptions = {
    retryCount: 30,
    retryIntervalMax: 30000,
    retryIntervalMin: 1000
};
function monitorStatus(
/** The full name of the project to which the task relates */
fullProjectName, 
/** The ID of the task for which to check the status */
taskId, 
/** Additional parameters for the monitor status operation */
options = defaultMonitorStatusOptions) {
    const { retryCount, retryIntervalMax, retryIntervalMin } = Object.assign(Object.assign({}, defaultMonitorStatusOptions), options);
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1).pipe(
    // Retrieve the current operation state from the API
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => Object(_check_commit_status__WEBPACK_IMPORTED_MODULE_4__["checkCommitStatus"])(taskId, fullProjectName)), 
    // Throws a timeout error if the state of the operation is not and end state
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((status) => status.state === _types__WEBPACK_IMPORTED_MODULE_3__["ModelQueryStateEnum"].COMPLETED ||
        status.state === _types__WEBPACK_IMPORTED_MODULE_3__["ModelQueryStateEnum"].FAILURE
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(status)
        : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('The processing timed out!')), 
    // Retries the status check and doubles the interval every time
    // This ensures the operation does not actually time out until the max retries are reached
    Object(backoff_rxjs__WEBPACK_IMPORTED_MODULE_0__["retryBackoff"])({
        initialInterval: retryIntervalMin,
        maxInterval: retryIntervalMax,
        maxRetries: retryCount
    }), 
    // If the end state was a failure of some sorts, throw an error
    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])((status) => status.state === _types__WEBPACK_IMPORTED_MODULE_3__["ModelQueryStateEnum"].FAILURE ||
        status.difResult.state === _types__WEBPACK_IMPORTED_MODULE_3__["ModelQueryDifResultStateEnum"].FAILURE
        ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something went wrong while processing the model!')
        : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(status)));
}


/***/ }),

/***/ "../../libs/repository/src/lib/report-error/index.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/report-error/index.ts ***!
  \***********************************************************************************************/
/*! exports provided: reportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _report_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-error */ "../../libs/repository/src/lib/report-error/report-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return _report_error__WEBPACK_IMPORTED_MODULE_0__["reportError"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/report-error/report-error.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/report-error/report-error.ts ***!
  \******************************************************************************************************/
/*! exports provided: reportError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return reportError; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/** Make an API call to report an error */
function reportError(
/** The name of the app from which the error is reported */
appName, 
/** The version of the app from which the error is reported */
appVersion, 
/** The error as thrown */
error, 
/** The username of the user reporting the error */
userid, 
/** A snapshot of the current application state */
state) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/error`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'reportError');
    const headers = {
        'Content-Type': 'application/json'
    };
    const body = {
        app: appName,
        error: error,
        userid: userid,
        state: state,
        version: appVersion
    };
    const requestOptions = { headers };
    // Sometimes the state cannot be serialized. In this case, omit the state from the payload.
    let payload;
    try {
        payload = JSON.stringify(body, Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["circularReplacer"])());
    }
    catch (_a) {
        payload = JSON.stringify(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["omit"])(body, 'state'), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["circularReplacer"])());
    }
    return http.authorize().post(path, payload, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/repository-version/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/repository-version/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: repositoryVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository-version */ "../../libs/repository/src/lib/repository-version/repository-version.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repositoryVersion", function() { return _repository_version__WEBPACK_IMPORTED_MODULE_0__["repositoryVersion"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/repository-version/repository-version.ts":
/*!******************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/repository-version/repository-version.ts ***!
  \******************************************************************************************************************/
/*! exports provided: repositoryVersion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repositoryVersion", function() { return repositoryVersion; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");


/**
 * Retrieves the version string of the repository this application is currently connected to.
 * If the version string is unavailable for whatever reason, returns `unknown` instead.
 */
function repositoryVersion({ forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_0__["repositoryLogBasePath"]}/version`;
    return http.cache(forceUpdate).get(path);
}


/***/ }),

/***/ "../../libs/repository/src/lib/repository.module.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/repository.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: RepositoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepositoryModule", function() { return RepositoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RepositoryModule {
    constructor(injector) {
        RepositoryModule.injector = injector;
    }
}
RepositoryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RepositoryModule });
RepositoryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RepositoryModule_Factory(t) { return new (t || RepositoryModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepositoryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "../../libs/repository/src/lib/types.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/types.ts ***!
  \**********************************************************************************/
/*! exports provided: PermissionLevel, BranchPermission, ProjectPermission, ConflictResolutionTemplateEnum, ConflictChangeTypeEnum, ConflictTypeEnum, ErrorContext, ModelCommitContentTypeEnum, ModelProvenanceOperationEnum, ModelQueryDifResultStateEnum, ModelQueryStateEnum, ParserNameEnum, UserSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionLevel", function() { return PermissionLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchPermission", function() { return BranchPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPermission", function() { return ProjectPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictResolutionTemplateEnum", function() { return ConflictResolutionTemplateEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictChangeTypeEnum", function() { return ConflictChangeTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictTypeEnum", function() { return ConflictTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorContext", function() { return ErrorContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelCommitContentTypeEnum", function() { return ModelCommitContentTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelProvenanceOperationEnum", function() { return ModelProvenanceOperationEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelQueryDifResultStateEnum", function() { return ModelQueryDifResultStateEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelQueryStateEnum", function() { return ModelQueryStateEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParserNameEnum", function() { return ParserNameEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearch", function() { return UserSearch; });
/**
 * Generic application permission levels.
 * Permissions form a hierarchy. The higher the number, the lower the permission level.
 * Permissions from lower levels apply to higher levels as well.
 */
var PermissionLevel;
(function (PermissionLevel) {
    /** No permission required */
    PermissionLevel[PermissionLevel["UNRESTRICTED"] = -1] = "UNRESTRICTED";
    /** Can perform delete actions and assign other owners */
    PermissionLevel[PermissionLevel["OWNER"] = 0] = "OWNER";
    /** Can alter properties and settings including access control */
    PermissionLevel[PermissionLevel["MAINTAINER"] = 1] = "MAINTAINER";
    /** Can commit changes to the model */
    PermissionLevel[PermissionLevel["CONTRIBUTOR"] = 2] = "CONTRIBUTOR";
    /** Can retrieve models in Archi format */
    PermissionLevel[PermissionLevel["MODEL_USER"] = 3] = "MODEL_USER";
    /** Can use the model explorer and business dashboards */
    PermissionLevel[PermissionLevel["BUSINESS_USER"] = 4] = "BUSINESS_USER";
})(PermissionLevel || (PermissionLevel = {}));
/** Additional permission levels for use with branch access control */
var BranchPermission;
(function (BranchPermission) {
})(BranchPermission || (BranchPermission = {}));
/** Additional permission levels for use with project access control */
var ProjectPermission;
(function (ProjectPermission) {
})(ProjectPermission || (ProjectPermission = {}));
var ConflictResolutionTemplateEnum;
(function (ConflictResolutionTemplateEnum) {
    ConflictResolutionTemplateEnum["MANUAL"] = "manual";
    ConflictResolutionTemplateEnum["REPOSITORY_ONLY"] = "repository_only";
    ConflictResolutionTemplateEnum["UPLOAD_ONLY"] = "upload_only";
    ConflictResolutionTemplateEnum["UNION_REPOSITORY"] = "union_repository";
    ConflictResolutionTemplateEnum["UNION_UPLOAD"] = "union_upload";
})(ConflictResolutionTemplateEnum || (ConflictResolutionTemplateEnum = {}));
/** All possible values of a conflict change type */
var ConflictChangeTypeEnum;
(function (ConflictChangeTypeEnum) {
    ConflictChangeTypeEnum["UNCHANGED"] = "unchanged";
    ConflictChangeTypeEnum["ADDED"] = "added";
    ConflictChangeTypeEnum["DELETED"] = "deleted";
    ConflictChangeTypeEnum["MODIFIED"] = "modified";
})(ConflictChangeTypeEnum || (ConflictChangeTypeEnum = {}));
/** All possible values of a conflict type */
var ConflictTypeEnum;
(function (ConflictTypeEnum) {
    ConflictTypeEnum["NODES"] = "nodes";
    ConflictTypeEnum["RELATIONS"] = "relations";
    ConflictTypeEnum["VIEWS"] = "views";
})(ConflictTypeEnum || (ConflictTypeEnum = {}));
/** Request body for submitting an error to the API */
class ErrorContext {
}
var ModelCommitContentTypeEnum;
(function (ModelCommitContentTypeEnum) {
    /** Archimate 3.0 */
    ModelCommitContentTypeEnum["ARCHIMATE"] = "archimate";
    /** XML */
    ModelCommitContentTypeEnum["XML"] = "xml";
    /** JSON */
    ModelCommitContentTypeEnum["JSON"] = "json";
})(ModelCommitContentTypeEnum || (ModelCommitContentTypeEnum = {}));
/**
 * All possible provenance operations
 */
var ModelProvenanceOperationEnum;
(function (ModelProvenanceOperationEnum) {
    ModelProvenanceOperationEnum["CREATE_PROJECT"] = "create_project";
    ModelProvenanceOperationEnum["RETRIEVE"] = "retrieve";
    ModelProvenanceOperationEnum["COMMIT"] = "commit";
    ModelProvenanceOperationEnum["CLONE"] = "clone";
    ModelProvenanceOperationEnum["MERGE"] = "merge";
    ModelProvenanceOperationEnum["BRANCH_CLONE"] = "branch_clone";
    ModelProvenanceOperationEnum["BRANCH_MERGE"] = "branch_merge";
    ModelProvenanceOperationEnum["UPLOAD"] = "upload";
})(ModelProvenanceOperationEnum || (ModelProvenanceOperationEnum = {}));
/**
 * Represents the state of the processing after a commit as reported by the API
 */
var ModelQueryDifResultStateEnum;
(function (ModelQueryDifResultStateEnum) {
    ModelQueryDifResultStateEnum["COMMITTED"] = "COMMITTED";
    ModelQueryDifResultStateEnum["FAILURE"] = "FAILURE";
    ModelQueryDifResultStateEnum["CONFLICT"] = "CONFLICT";
    ModelQueryDifResultStateEnum["LOCKED"] = "LOCKED";
    ModelQueryDifResultStateEnum["UNDEFINED"] = "UNDEFINED";
})(ModelQueryDifResultStateEnum || (ModelQueryDifResultStateEnum = {}));
/**
 * Represents the state of the operation as reported by the API
 */
var ModelQueryStateEnum;
(function (ModelQueryStateEnum) {
    ModelQueryStateEnum["CREATED"] = "created";
    ModelQueryStateEnum["WAITING"] = "waiting";
    ModelQueryStateEnum["RUNNING"] = "running";
    ModelQueryStateEnum["COMPLETED"] = "completed";
    ModelQueryStateEnum["FAILURE"] = "failure";
})(ModelQueryStateEnum || (ModelQueryStateEnum = {}));
/** All possible parser name values */
var ParserNameEnum;
(function (ParserNameEnum) {
    ParserNameEnum["ARCHIMATE3"] = "archimate3";
})(ParserNameEnum || (ParserNameEnum = {}));
/**
 * Search result returned by the API representing a single user
 */
class UserSearch {
}


/***/ }),

/***/ "../../libs/repository/src/lib/update-branch/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-branch/index.ts ***!
  \************************************************************************************************/
/*! exports provided: updateBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_branch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-branch */ "../../libs/repository/src/lib/update-branch/update-branch.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateBranch", function() { return _update_branch__WEBPACK_IMPORTED_MODULE_0__["updateBranch"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/update-branch/update-branch.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-branch/update-branch.ts ***!
  \********************************************************************************************************/
/*! exports provided: updateBranch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBranch", function() { return updateBranch; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Creates or updates the given `Branch` in the repository.
 * Whether a `Branch` is updated or created depends on whether or not the `branch_id` property is set.
 */
function updateBranch(
/** The branch which to create or update */
branch) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/branch`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'updateBranch');
    return http.authorize().post(path, branch);
}


/***/ }),

/***/ "../../libs/repository/src/lib/update-project/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-project/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: updateProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-project */ "../../libs/repository/src/lib/update-project/update-project.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateProject", function() { return _update_project__WEBPACK_IMPORTED_MODULE_0__["updateProject"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/update-project/update-project.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-project/update-project.ts ***!
  \**********************************************************************************************************/
/*! exports provided: updateProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProject", function() { return updateProject; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Makes an API request to update an existing project; project names are immutable
 */
function updateProject(
/** The ID of the project to update */
projectId, 
/** The updated project data object */
project) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])();
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'updateProject');
    const path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/${projectId}`;
    return http.authorize().post(path, project);
}


/***/ }),

/***/ "../../libs/repository/src/lib/update-user-group/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-user-group/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: updateUserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_user_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user-group */ "../../libs/repository/src/lib/update-user-group/update-user-group.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserGroup", function() { return _update_user_group__WEBPACK_IMPORTED_MODULE_0__["updateUserGroup"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/update-user-group/update-user-group.ts":
/*!****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-user-group/update-user-group.ts ***!
  \****************************************************************************************************************/
/*! exports provided: updateUserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserGroup", function() { return updateUserGroup; });
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");



/**
 * Creates or updates the given `UserGroup` in the repository.
 * Whether a `UserGroup` is updated or created depends on whether or not the `group_id` property is set.
 */
function updateUserGroup(
/** The user group which to create or update */
userGroup) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_1__["repositoryApiBasePath"]}/project/group`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_0__["validateRequiredArguments"])(arguments, 'updateUserGroup');
    return http.authorize().post(path, userGroup);
}


/***/ }),

/***/ "../../libs/repository/src/lib/update-user-info/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-user-info/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: updateUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_user_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user-info */ "../../libs/repository/src/lib/update-user-info/update-user-info.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return _update_user_info__WEBPACK_IMPORTED_MODULE_0__["updateUserInfo"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/update-user-info/update-user-info.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/update-user-info/update-user-info.ts ***!
  \**************************************************************************************************************/
/*! exports provided: updateUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUserInfo", function() { return updateUserInfo; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Makes an API request to update the user info for the current user.
 * The API interprets the Bearer token in the request header to determine which user info to update.
 */
function updateUserInfo(
/** The new user info */
userinfo) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = `${_constants__WEBPACK_IMPORTED_MODULE_2__["repositoryApiBasePath"]}/user/update`;
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'updateUserInfo');
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    headers = headers.set('Content-Type', 'application/json');
    const requestOptions = {
        headers
    };
    return http.authorize().post(path, userinfo, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/user-search/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/user-search/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: userSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-search */ "../../libs/repository/src/lib/user-search/user-search.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userSearch", function() { return _user_search__WEBPACK_IMPORTED_MODULE_0__["userSearch"]; });




/***/ }),

/***/ "../../libs/repository/src/lib/user-search/user-search.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/user-search/user-search.ts ***!
  \****************************************************************************************************/
/*! exports provided: userSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSearch", function() { return userSearch; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "../../libs/repository/src/lib/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../../libs/repository/src/lib/utils.ts");




/**
 * Get the user details matching the search string
 */
function userSearch(
/** String to match the first name, last name, username or email address of any users */
search, { forceUpdate } = {}) {
    const http = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getHttpClient"])(), path = _constants__WEBPACK_IMPORTED_MODULE_2__["userSearchBasePath"];
    Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"])(arguments, 'userSearch');
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
    headers = headers.set('Content-Type', 'application/json');
    const queryParameters = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["createHttpParams"])({ search });
    const requestOptions = {
        headers,
        params: queryParameters
    };
    return http
        .authorize()
        .cache(forceUpdate)
        .get(path, requestOptions);
}


/***/ }),

/***/ "../../libs/repository/src/lib/utils.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/repository/src/lib/utils.ts ***!
  \**********************************************************************************/
/*! exports provided: createHttpParams, getHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpParams", function() { return createHttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHttpClient", function() { return getHttpClient; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models4insight_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/http */ "../../libs/http/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repository_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./repository.module */ "../../libs/repository/src/lib/repository.module.ts");




/**
 * Creates a new `HttpParams` object based on the given parameters, filtering out any parameter of which the value is null or undefined
 */
function createHttpParams(
/** The set of key value pairs to include as parameters */
params) {
    let result = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
    Object.entries(params).forEach(([key, value]) => {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isNil"])(value) && !Object(lodash__WEBPACK_IMPORTED_MODULE_2__["isNaN"])(value)) {
            result = result.set(key, value);
        }
    });
    return result;
}
/**
 * Returns the `HttpService` as imported by the `RepositoryModule`. If the `RepositoryModule` has not been loaded, throws an error.
 */
function getHttpClient() {
    if (!_repository_module__WEBPACK_IMPORTED_MODULE_3__["RepositoryModule"].injector) {
        throw new Error('Tried running an API query while the RepositoryModule was not loaded. Please make sure the RepositoryModule is imported.');
    }
    return _repository_module__WEBPACK_IMPORTED_MODULE_3__["RepositoryModule"].injector.get(_models4insight_http__WEBPACK_IMPORTED_MODULE_1__["HttpService"]);
}


/***/ }),

/***/ "../../libs/services/branch/src/index.ts":
/*!***********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/branch/src/index.ts ***!
  \***********************************************************************************/
/*! exports provided: defaultBranchesServiceState, BranchesService, ServicesBranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_branches_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/branches.service */ "../../libs/services/branch/src/lib/branches.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultBranchesServiceState", function() { return _lib_branches_service__WEBPACK_IMPORTED_MODULE_0__["defaultBranchesServiceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BranchesService", function() { return _lib_branches_service__WEBPACK_IMPORTED_MODULE_0__["BranchesService"]; });

/* harmony import */ var _lib_services_branch_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services-branch.module */ "../../libs/services/branch/src/lib/services-branch.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesBranchModule", function() { return _lib_services_branch_module__WEBPACK_IMPORTED_MODULE_1__["ServicesBranchModule"]; });





/***/ }),

/***/ "../../libs/services/branch/src/lib/branches.service.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/branch/src/lib/branches.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: defaultBranchesServiceState, BranchesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBranchesServiceState", function() { return defaultBranchesServiceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchesService", function() { return BranchesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_branch_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services-branch.module */ "../../libs/services/branch/src/lib/services-branch.module.ts");













const defaultBranchesServiceState = {
    isCreatingBranch: false,
    isDeletingBranch: false,
    isIndexingBranchesByName: false,
    isLoadingBranches: false,
    isUpdatingBranch: false
};
class BranchesService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectService, storeService) {
        super({
            defaultState: defaultBranchesServiceState,
            name: 'BranchesService',
            storeService
        });
        this.projectService = projectService;
        this.deleteBranch$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.branchDeleted$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.createBranch$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.branchUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.init();
    }
    init() {
        this.deleteBranch$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(branch => this.handleDeleteBranch(branch)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.branchDeleted$);
        this.createBranch$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(branch => this.handleCreateBranch(branch)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.branchUpdated$);
        // Whenever a new project is selected, retrieve the branches for that project
        this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(projectId => this.handleRetrieveBranches(projectId)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe();
        // Whenever the branches update, build an index of branches by name
        this.branches
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(branches => this.handleIndexBranchesByName(branches)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe();
        // Whenever a branch is created or updated, save it to the backend
        this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(projectId => this.watch(['branchesPerProject', projectId, 'branchesById'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(branches => Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(branches)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(branch => this.handleUpdateBranch(branch)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.branchUpdated$);
    }
    /**
     * Saves the given `branch` to the back end.
     * Use this function if your `branch` does not yet have an ID.
     */
    createBranch(branch) {
        this.updateBranch(branch);
    }
    /**
     * Deletes the given `branch`
     */
    deleteBranch(branch) {
        this.deleteBranch$.next(branch);
    }
    /**
     * Returns a snapshot of the `Branch` with the given `branchId` as a `Promise`.
     * @param branchId the ID of the `Branch` to retrieve.
     */
    getBranchById(branchId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            return this.get([
                'branchesPerProject',
                projectId,
                'branchesById',
                branchId
            ]);
        });
    }
    /**
     * Returns a snapshot of the `Branch` with the given `branchName` as a `Promise`.
     * @param branchName The name of the `Branch` to retrieve.
     */
    getBranchByName(branchName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            return this.get([
                'branchesPerProject',
                projectId,
                'branchesByName',
                branchName
            ]);
        });
    }
    /**
     * Returns an `Observable` stream of the `Branch` with the given `branchId`.
     * @param branchId the ID of the `Branch` to observe
     */
    selectBranchById(branchId) {
        return this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(projectId => this.select([
            'branchesPerProject',
            projectId,
            'branchesById',
            branchId
        ])));
    }
    /**
     * Returns an `Observable` stream of the `Branch` with the given `branchName`.
     * @param branchName The name of the `Branch` to observe.
     */
    selectBranchByName(branchName) {
        return this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(projectId => this.select([
            'branchesPerProject',
            projectId,
            'branchesByName',
            branchName
        ])));
    }
    /**
     * Saves the given `branch` to the back end.
     */
    updateBranch(branch) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId'), branchId = (_a = branch) === null || _a === void 0 ? void 0 : _a.id;
            if (branchId) {
                this.update({
                    description: `Branch ${branchId} updated`,
                    path: ['branchesPerProject', projectId, 'branchesById', branchId],
                    payload: branch
                });
            }
            else {
                this.createBranch$.next(branch);
            }
        });
    }
    /**
     * Returns an `Observable` stream of all branches as a list
     */
    get branches() {
        return this.projectService.select('projectId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(projectId => this.select(['branchesPerProject', projectId, 'branchesById'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(Object.values));
    }
    handleCreateBranch(branch) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            const createBranchResponse = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["updateBranch"])(Object.assign(Object.assign({}, branch), { project_id: projectId })).toPromise();
            this.updateBranch(createBranchResponse);
            return createBranchResponse;
        });
    }
    handleDeleteBranch(branch) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId'), branchId = (_a = branch) === null || _a === void 0 ? void 0 : _a.id;
            const deleteBranchResponse = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["deleteBranch"])(projectId, branchId).toPromise();
            if (deleteBranchResponse === 'OK') {
                this.delete({
                    description: `Branch ${branchId} deleted`,
                    path: ['branchesPerProject', projectId, 'branchesById', branchId]
                });
            }
        });
    }
    handleIndexBranchesByName(branches) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId'), branchesByName = Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["indexByProperty"])(branches, 'name');
            this.update({
                description: 'New branches by name index available',
                path: ['branchesPerProject', projectId, 'branchesByName'],
                payload: branchesByName
            });
        });
    }
    handleRetrieveBranches(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const branches = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["getBranches"])(projectId, {
                forceUpdate: true
            }).toPromise();
            const branchesById = Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["indexByProperty"])(branches, 'id');
            this.update({
                description: 'New branches available',
                path: ['branchesPerProject', projectId, 'branchesById'],
                payload: branchesById
            });
        });
    }
    handleUpdateBranch(branch) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["updateBranch"])(Object.assign(Object.assign({}, branch), { project_id: projectId })).toPromise();
        });
    }
}
BranchesService.ɵfac = function BranchesService_Factory(t) { return new (t || BranchesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
BranchesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BranchesService, factory: BranchesService.ɵfac, providedIn: _services_branch_module__WEBPACK_IMPORTED_MODULE_9__["ServicesBranchModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Creating the branch', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isCreatingBranch'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BranchesService.prototype, "handleCreateBranch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Deleting the branch', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isDeletingBranch'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BranchesService.prototype, "handleDeleteBranch", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Indexing the branches by name', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isIndexingBranchesByName'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Array]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BranchesService.prototype, "handleIndexBranchesByName", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Retrieving the branches for the current project', {
        isQuiet: true
    }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isLoadingBranches'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BranchesService.prototype, "handleRetrieveBranches", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Saving the branch', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isUpdatingBranch'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], BranchesService.prototype, "handleUpdateBranch", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BranchesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_branch_module__WEBPACK_IMPORTED_MODULE_9__["ServicesBranchModule"]
            }]
    }], function () { return [{ type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, { handleCreateBranch: [], handleDeleteBranch: [], handleIndexBranchesByName: [], handleRetrieveBranches: [], handleUpdateBranch: [] }); })();


/***/ }),

/***/ "../../libs/services/branch/src/lib/services-branch.module.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/branch/src/lib/services-branch.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: ServicesBranchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesBranchModule", function() { return ServicesBranchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesBranchModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ServicesBranchModule is already loaded. Import it in the AppModule only');
        }
    }
}
ServicesBranchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesBranchModule });
ServicesBranchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesBranchModule_Factory(t) { return new (t || ServicesBranchModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ServicesBranchModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesBranchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: ServicesBranchModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/clickstream/src/index.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/clickstream/src/index.ts ***!
  \****************************************************************************************/
/*! exports provided: ClickstreamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_clickstream_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/clickstream.module */ "../../libs/services/clickstream/src/lib/clickstream.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickstreamModule", function() { return _lib_clickstream_module__WEBPACK_IMPORTED_MODULE_0__["ClickstreamModule"]; });




/***/ }),

/***/ "../../libs/services/clickstream/src/lib/clickstream-config.service.ts":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/clickstream/src/lib/clickstream-config.service.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ClickstreamConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickstreamConfigService", function() { return ClickstreamConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const ClickstreamConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ClickstreamConfig');


/***/ }),

/***/ "../../libs/services/clickstream/src/lib/clickstream.module.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/clickstream/src/lib/clickstream.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ClickstreamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickstreamModule", function() { return ClickstreamModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clickstream_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickstream-config.service */ "../../libs/services/clickstream/src/lib/clickstream-config.service.ts");
/* harmony import */ var _clickstream_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickstream.service */ "../../libs/services/clickstream/src/lib/clickstream.service.ts");





class ClickstreamModule {
    constructor(clickstreamService, parentModule) {
        if (parentModule) {
            throw new Error('ClickstreamModule is already loaded. Import it in the AppModule only');
        }
        clickstreamService.init();
    }
    static forRoot(config) {
        return {
            ngModule: ClickstreamModule,
            providers: [
                _clickstream_service__WEBPACK_IMPORTED_MODULE_2__["ClickstreamService"],
                {
                    provide: _clickstream_config_service__WEBPACK_IMPORTED_MODULE_1__["ClickstreamConfigService"],
                    useValue: config
                }
            ]
        };
    }
}
ClickstreamModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClickstreamModule });
ClickstreamModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClickstreamModule_Factory(t) { return new (t || ClickstreamModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_clickstream_service__WEBPACK_IMPORTED_MODULE_2__["ClickstreamService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ClickstreamModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickstreamModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _clickstream_service__WEBPACK_IMPORTED_MODULE_2__["ClickstreamService"] }, { type: ClickstreamModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/clickstream/src/lib/clickstream.service.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/clickstream/src/lib/clickstream.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ClickstreamService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickstreamService", function() { return ClickstreamService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _clickstream_config_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./clickstream-config.service */ "../../libs/services/clickstream/src/lib/clickstream-config.service.ts");















function eventIsNavigationEnd(event) {
    return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
}
class ClickstreamService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["BasicStore"] {
    constructor(authenticationService, config, router, storeService) {
        super({ name: 'ClickstreamService', storeService });
        this.authenticationService = authenticationService;
        this.config = config;
        this.router = router;
    }
    init() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(eventIsNavigationEnd), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(event => this.logClickstreamEvent(event)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe();
    }
    logClickstreamEvent(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userid = yield this.authenticationService.get([
                'credentials',
                'username'
            ]);
            const clickstreamEvent = {
                app: this.config.app,
                timestamp: Object(lodash__WEBPACK_IMPORTED_MODULE_8__["now"])(),
                url: event.urlAfterRedirects,
                userid
            };
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_5__["logClickstreamEvent"])(clickstreamEvent).toPromise();
        });
    }
}
ClickstreamService.ɵfac = function ClickstreamService_Factory(t) { return new (t || ClickstreamService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_clickstream_config_service__WEBPACK_IMPORTED_MODULE_10__["ClickstreamConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["StoreService"])); };
ClickstreamService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClickstreamService, factory: ClickstreamService.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__["ManagedTask"])('Logging the clickstream event', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["MonitorAsync"])('isLoggingClickstreamEvent'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ClickstreamService.prototype, "logClickstreamEvent", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickstreamService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_clickstream_config_service__WEBPACK_IMPORTED_MODULE_10__["ClickstreamConfigService"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }]; }, { logClickstreamEvent: [] }); })();


/***/ }),

/***/ "../../libs/services/model/src/index.ts":
/*!**********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/index.ts ***!
  \**********************************************************************************/
/*! exports provided: defaultCommitModelServiceState, CommitModelService, ConflictsService, ModelDataCommitService, ModelDataService, ModelService, defaultRetrieveModelServiceState, RetrieveModelService, ServicesModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_commit_model_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/commit-model.service */ "../../libs/services/model/src/lib/commit-model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCommitModelServiceState", function() { return _lib_commit_model_service__WEBPACK_IMPORTED_MODULE_0__["defaultCommitModelServiceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommitModelService", function() { return _lib_commit_model_service__WEBPACK_IMPORTED_MODULE_0__["CommitModelService"]; });

/* harmony import */ var _lib_conflicts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/conflicts.service */ "../../libs/services/model/src/lib/conflicts.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConflictsService", function() { return _lib_conflicts_service__WEBPACK_IMPORTED_MODULE_1__["ConflictsService"]; });

/* harmony import */ var _lib_model_data_commit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model-data-commit.service */ "../../libs/services/model/src/lib/model-data-commit.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelDataCommitService", function() { return _lib_model_data_commit_service__WEBPACK_IMPORTED_MODULE_2__["ModelDataCommitService"]; });

/* harmony import */ var _lib_model_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model-data.service */ "../../libs/services/model/src/lib/model-data.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelDataService", function() { return _lib_model_data_service__WEBPACK_IMPORTED_MODULE_3__["ModelDataService"]; });

/* harmony import */ var _lib_model_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/model.service */ "../../libs/services/model/src/lib/model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return _lib_model_service__WEBPACK_IMPORTED_MODULE_4__["ModelService"]; });

/* harmony import */ var _lib_retrieve_model_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/retrieve-model.service */ "../../libs/services/model/src/lib/retrieve-model.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultRetrieveModelServiceState", function() { return _lib_retrieve_model_service__WEBPACK_IMPORTED_MODULE_5__["defaultRetrieveModelServiceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetrieveModelService", function() { return _lib_retrieve_model_service__WEBPACK_IMPORTED_MODULE_5__["RetrieveModelService"]; });

/* harmony import */ var _lib_services_model_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesModelModule", function() { return _lib_services_model_module__WEBPACK_IMPORTED_MODULE_6__["ServicesModelModule"]; });










/***/ }),

/***/ "../../libs/services/model/src/lib/commit-model.service.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/commit-model.service.ts ***!
  \*****************************************************************************************************/
/*! exports provided: defaultCommitModelServiceState, CommitModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCommitModelServiceState", function() { return defaultCommitModelServiceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitModelService", function() { return CommitModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _conflicts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./conflicts.service */ "../../libs/services/model/src/lib/conflicts.service.ts");
/* harmony import */ var _services_model_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");


















const defaultCommitModelServiceState = {
    isCommittingModel: false
};
class CommitModelService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(authenticationService, conflictsService, projectService, taskManager, storeService) {
        super({
            defaultState: defaultCommitModelServiceState,
            name: 'CommitModelService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.conflictsService = conflictsService;
        this.projectService = projectService;
        this.taskManager = taskManager;
        this.storeService = storeService;
        this.commitModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.onModelCommitted$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.init();
    }
    init() {
        // Whenever a commit is triggered, handle the commit. Only one commit can be active at a time.
        this.commitModel$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["exhaustMap"])(({ branchId, comment, model, options, how }) => this.handleCommitModel(branchId, comment, model, options, how)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe(this.onModelCommitted$);
    }
    commitModel(branchId, comment, model, options = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commitModel$.next({
                branchId,
                comment,
                model,
                options,
                how: 'file'
            });
            return this.onModelCommitted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).toPromise();
        });
    }
    commitJsonModel(branchId, comment, model, options = {}) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commitModel$.next({
                branchId,
                comment,
                model,
                options,
                how: 'json'
            });
            return this.onModelCommitted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])()).toPromise();
        });
    }
    get onModelCommitted() {
        return this.onModelCommitted$.asObservable();
    }
    handleCommitModel(branchName, comment, model, { conflictResolutionTemplate, keepOriginalIds = false } = {}, how = 'file') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [project, username] = yield Promise.all([
                this.projectService.getCurrentProject(),
                this.authenticationService.get(['credentials', 'username'])
            ]);
            const task = this.taskManager.createTask();
            const commitMethods = {
                file: () => Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["commitModel"])(project.project, branchName, model, username, {
                    keepOriginalIds,
                    comment
                }),
                json: () => Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["commitJsonModel"])(project.project, branchName, model, username, {
                    comment
                })
            };
            const commitMethod = commitMethods[how], uploadModel = commitMethod().toPromise();
            yield task.addOperation({
                description: 'Uploading the model to the repository',
                operation: uploadModel
            });
            // Monitor the processing of the model and continue after processing is complete
            const commitStatus = uploadModel.then(commit => Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["monitorStatus"])(project.project, commit.taskId).toPromise());
            yield task.addOperation({
                description: 'Processing the committed model',
                operation: commitStatus
            });
            // If no conflict resolution template is given, register the conflict set with the conflicts service
            const handleConflicts = Promise.all([commitStatus, uploadModel]).then(([query, commit]) => {
                if (!conflictResolutionTemplate) {
                    this.conflictsService.registerConflictsForTask(query, project, branchName, branchName, commit.taskId, {
                        fromModelId: commit.taskId,
                        toModelId: 'TRUNK',
                        parserName: 'archimate3',
                        contentType: 'archimate',
                        comment: commit.comment
                    });
                }
                return [query, commit];
            });
            yield task.addOperation({
                description: 'Checking for conflicts',
                operation: handleConflicts
            });
            // If a conflict resolution template is given, automatically resolve the conflicts
            if (conflictResolutionTemplate) {
                const resolveConflicts = handleConflicts.then(([query, commit]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (query.difResult.state === _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["ModelQueryDifResultStateEnum"].CONFLICT) {
                        const forceCommit = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["forceCommitModel"])('archimate3', project.project, branchName, '', commit.taskId, branchName, 'TRUNK', username, commit.comment, _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["ModelCommitContentTypeEnum"].JSON, commit.taskId, conflictResolutionTemplate).toPromise();
                        return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["monitorStatus"])(project.project, forceCommit.taskId).toPromise();
                    }
                    else {
                        return query;
                    }
                }));
                yield task.addOperation({
                    description: 'Resolving the conflicts',
                    operation: resolveConflicts
                });
            }
            const executable = yield task.getExecutable();
            return executable.toPromise();
        });
    }
}
CommitModelService.ɵfac = function CommitModelService_Factory(t) { return new (t || CommitModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_conflicts_service__WEBPACK_IMPORTED_MODULE_10__["ConflictsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
CommitModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CommitModelService, factory: CommitModelService.ɵfac, providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_11__["ServicesModelModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isCommittingModel'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String, Object, Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], CommitModelService.prototype, "handleCommitModel", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommitModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_11__["ServicesModelModule"]
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _conflicts_service__WEBPACK_IMPORTED_MODULE_10__["ConflictsService"] }, { type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }, { type: _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__["TaskManagerService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, { handleCommitModel: [] }); })();


/***/ }),

/***/ "../../libs/services/model/src/lib/conflicts.service.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/conflicts.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: ConflictsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConflictsService", function() { return ConflictsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_model_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");










class ConflictsService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(storeService) {
        super({
            name: 'ConflictsService',
            storeService
        });
        this.init();
    }
    init() {
        // Whenever the conflict sets update, create an index of the conflict sets per project
        this.select('conflictSetsByTaskId')
            .pipe(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe(conflictSetsByTaskId => this.groupConflictSetsByProjectId(conflictSetsByTaskId));
    }
    /**
     * Registers a new conflict set
     */
    addConflictSet(
    /** The parser that should be used to interpret the model */
    parserName, 
    /** The project to which the model belongs */
    project, 
    /** The source branch for the commit/move */
    fromBranchName, 
    /** The target branch for the commit/move */
    toBranchName, 
    /** The source model ID for the commit/move */
    fromModelId, 
    /** The target model ID for the commit/move */
    toModelId, 
    /** The original comment provided by the user */
    comment, 
    /** The task ID as assigned by the API */
    taskId, 
    /** The content type in which the model was submitted */
    contentType, 
    /** The server response indicating there was a conflict */
    conflictSet) {
        this.update({
            description: 'New conflict set available',
            path: ['conflictSetsByTaskId', taskId],
            payload: {
                parserName: parserName,
                project: project,
                taskId: taskId,
                fromBranchName: fromBranchName,
                toBranchName: toBranchName,
                fromModelId: fromModelId,
                toModelId: toModelId,
                conflictSet: conflictSet,
                comment: comment,
                contentType: contentType,
                addListLeft: new Set(),
                addListRight: new Set(),
                deleteListLeft: new Set(),
                deleteListRight: new Set()
            }
        });
    }
    /**
     * Retrieves the specific conflict set identified by the given task ID as a `Promise`
     * @param taskId The identifier of the conflict set
     */
    getConflictSet(taskId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.get(['conflictSetsByTaskId', taskId]);
        });
    }
    /**
     * Returns the conflict sets for the project with the given `projectId` as a `Promise`
     * @param projectId The id of the project for which to retrieve the conflict sets
     */
    getConflictSetsForProject(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [conflictSetsByTaskId, taskIds] = yield Promise.all([
                this.get('conflictSetsByTaskId'),
                this.get(['conflictSetsPerProject', projectId])
            ]);
            return taskIds.map(taskId => conflictSetsByTaskId[taskId]);
        });
    }
    /**
     * Returns whether or not the given task indicates any conflicts
     * @param modelQuery The task that should be checked
     */
    hasConflicts(modelQuery) {
        var _a, _b, _c;
        return (((_a = modelQuery) === null || _a === void 0 ? void 0 : _a.state) === _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["ModelQueryStateEnum"].COMPLETED &&
            ((_c = (_b = modelQuery) === null || _b === void 0 ? void 0 : _b.difResult) === null || _c === void 0 ? void 0 : _c.state) === _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["ModelQueryDifResultStateEnum"].CONFLICT);
    }
    /**
     * Checks the given server response whether it indicates any conflicts.
     * If so, registers a new conflict set.
     */
    registerConflictsForTask(modelQuery, project, fromBranchName, toBranchName, taskId, options = {}) {
        const config = Object.assign({ fromModelId: 'TRUNK', toModelId: 'TRUNK', parserName: 'archimate3', contentType: 'archimate', comment: '' }, options);
        if (this.hasConflicts(modelQuery)) {
            this.addConflictSet(config.parserName, project, fromBranchName, toBranchName, config.fromModelId, config.toModelId, config.comment, taskId, config.contentType, modelQuery);
        }
    }
    /**
     * Unregisters a conflict set identified by the given `taskId`
     */
    removeConflictSet(
    /** The task ID which identifies the conflict set */
    taskId) {
        this.delete({
            description: 'Removed a conflict set',
            path: ['conflictSetsByTaskId', taskId]
        });
    }
    /**
     * Retrieves an `Observable` stream of the specific conflict set identified by the given `taskId`
     * @param taskId The identifier of the conflict set
     */
    selectConflictSet(taskId) {
        return this.select(['conflictSetsByTaskId', taskId]);
    }
    /**
     * Returns an `Observable` stream of the conflict sets for the project with the given `projectId`
     * @param projectId The id of the project for which to retrieve the conflict sets
     */
    selectConflictSetsForProject(projectId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])([
            this.select('conflictSetsByTaskId'),
            this.select(['conflictSetsPerProject', projectId])
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(([conflictSetsByTaskId, taskIds]) => taskIds
            .map(taskId => conflictSetsByTaskId[taskId])
            .filter(conflictSet => !!conflictSet)));
    }
    groupConflictSetsByProjectId(conflictSetsByTaskId) {
        const conflictSetsPerProject = Object.entries(conflictSetsByTaskId).reduce((result, [taskId, conflictSet]) => {
            var _a;
            return (Object.assign(Object.assign({}, result), { [conflictSet.project.id]: [
                    ...(_a = result[conflictSet.project.id], (_a !== null && _a !== void 0 ? _a : [])),
                    taskId
                ] }));
        }, {});
        this.update({
            description: 'New conflict sets per project available',
            payload: {
                conflictSetsPerProject
            }
        });
    }
}
ConflictsService.ɵfac = function ConflictsService_Factory(t) { return new (t || ConflictsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
ConflictsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConflictsService, factory: ConflictsService.ɵfac, providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModelModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConflictsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModelModule"]
            }]
    }], function () { return [{ type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/model/src/lib/model-data-commit.service.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/model-data-commit.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ModelDataCommitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDataCommitService", function() { return ModelDataCommitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./model-data.service */ "../../libs/services/model/src/lib/model-data.service.ts");
/* harmony import */ var _services_model_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");















function* formatData(dataByConceptId) {
    for (const [id, data] of Object.entries(dataByConceptId)) {
        yield {
            id,
            data
        };
    }
}
class ModelDataCommitService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(modelDataService, projectService, storeService) {
        super({ name: 'ModelDataCommitService', storeService });
        this.modelDataService = modelDataService;
        this.projectService = projectService;
        this.commitData$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.dataCommitted$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.init();
    }
    init() {
        this.commitData$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["exhaustMap"])(branch => this.handleCommitData(branch)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.dataCommitted$);
    }
    commitData(branch) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.commitData$.next(branch);
            return this.onDataCommitted.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["first"])()).toPromise();
        });
    }
    get onDataCommitted() {
        return this.dataCommitted$.asObservable();
    }
    handleCommitData(branch) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [{ project }, data] = yield Promise.all([
                this.projectService.getCurrentProject(),
                this.modelDataService.get('dataByConceptId')
            ]);
            const formattedData = Array.from(formatData(data));
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["commitData"])(project, branch, formattedData).toPromise();
        });
    }
}
ModelDataCommitService.ɵfac = function ModelDataCommitService_Factory(t) { return new (t || ModelDataCommitService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_model_data_service__WEBPACK_IMPORTED_MODULE_9__["ModelDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
ModelDataCommitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModelDataCommitService, factory: ModelDataCommitService.ɵfac, providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModelModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Committing the model data'),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isCommittingData'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ModelDataCommitService.prototype, "handleCommitData", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelDataCommitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModelModule"]
            }]
    }], function () { return [{ type: _model_data_service__WEBPACK_IMPORTED_MODULE_9__["ModelDataService"] }, { type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, { handleCommitData: [] }); })();


/***/ }),

/***/ "../../libs/services/model/src/lib/model-data.service.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/model-data.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: ModelDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelDataService", function() { return ModelDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _services_model_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");





class ModelDataService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_1__["BasicStore"] {
    constructor(storeService) {
        super({ name: 'ModelDataService', storeService });
    }
    set dataByConceptId(dataByConceptId) {
        this.update({
            description: 'New model data available',
            payload: { dataByConceptId }
        });
    }
}
ModelDataService.ɵfac = function ModelDataService_Factory(t) { return new (t || ModelDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_1__["StoreService"])); };
ModelDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelDataService, factory: ModelDataService.ɵfac, providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_2__["ServicesModelModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_2__["ServicesModelModule"]
            }]
    }], function () { return [{ type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/model/src/lib/model.service.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/model.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_model_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");















class ModelService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(authenticationService, projectService, storeService) {
        super({
            name: 'ModelService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.projectService = projectService;
        this.init();
    }
    init() {
        this.projectService
            .select('projectId')
            .pipe(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe(() => this.reset());
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([
            this.select('branch', { includeFalsy: true }),
            this.select('version', { includeFalsy: true })
        ])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(([branch]) => !!branch), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(([branch, version]) => this.handleRetrieveModel(branch, version)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe();
    }
    set model(model) {
        this.update({
            description: 'New model available',
            payload: { model }
        });
    }
    handleRetrieveModel(branch, version) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [{ project }, username] = yield Promise.all([
                this.projectService.getCurrentProject(),
                this.authenticationService.get(['credentials', 'username'])
            ]);
            const model = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["getModel"])('archimate3', project, branch, '', 'TRUNK', username, 'json', { version }).toPromise();
            this.model = model;
        });
    }
}
ModelService.ɵfac = function ModelService_Factory(t) { return new (t || ModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
ModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModelService, factory: ModelService.ɵfac, providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModelModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__["ManagedTask"])('Loading the model', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isLoadingModel'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ModelService.prototype, "handleRetrieveModel", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModelModule"]
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, { handleRetrieveModel: [] }); })();


/***/ }),

/***/ "../../libs/services/model/src/lib/retrieve-model.service.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/retrieve-model.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: defaultRetrieveModelServiceState, RetrieveModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRetrieveModelServiceState", function() { return defaultRetrieveModelServiceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrieveModelService", function() { return RetrieveModelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_model_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services-model.module */ "../../libs/services/model/src/lib/services-model.module.ts");















const defaultRetrieveModelServiceState = {
    isRetrievingModel: false
};
class RetrieveModelService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(authenticationService, projectService, storeService) {
        super({
            defaultState: defaultRetrieveModelServiceState,
            name: 'RetrieveModelService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.projectService = projectService;
        this.onModelRetrieved$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.retrieveModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.init();
    }
    init() {
        // Whenever a retrieve model is triggered, handle the retrieve. Only one retrieve can be active at a time.
        this.retrieveModel$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["exhaustMap"])(({ branchId, contentType, version }) => this.handleRetrieveModel(branchId, contentType, version)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe(this.onModelRetrieved$);
    }
    retrieveModel(branchId, contentType, version) {
        this.retrieveModel$.next({
            branchId,
            contentType,
            version
        });
    }
    get onModelRetrieved() {
        return this.onModelRetrieved$.asObservable();
    }
    handleRetrieveModel(branchId, contentType, version) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [{ project }, username] = yield Promise.all([
                this.projectService.getCurrentProject(),
                this.authenticationService.get(['credentials', 'username'])
            ]);
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["downloadModel"])(project, branchId, username, version, {
                contentType
            }).toPromise();
        });
    }
}
RetrieveModelService.ɵfac = function RetrieveModelService_Factory(t) { return new (t || RetrieveModelService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
RetrieveModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RetrieveModelService, factory: RetrieveModelService.ɵfac, providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModelModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_6__["ManagedTask"])('Retrieving the model from the repository'),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isRetrievingModel'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String, Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], RetrieveModelService.prototype, "handleRetrieveModel", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RetrieveModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_model_module__WEBPACK_IMPORTED_MODULE_10__["ServicesModelModule"]
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_5__["ProjectService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, { handleRetrieveModel: [] }); })();


/***/ }),

/***/ "../../libs/services/model/src/lib/services-model.module.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/model/src/lib/services-model.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ServicesModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModelModule", function() { return ServicesModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesModelModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ServicesModelModule is already loaded. Import it in the AppModule only');
        }
    }
}
ServicesModelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModelModule });
ServicesModelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModelModule_Factory(t) { return new (t || ServicesModelModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ServicesModelModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: ServicesModelModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/project/src/index.ts":
/*!************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/project/src/index.ts ***!
  \************************************************************************************/
/*! exports provided: defaultProjectMembersServiceState, ProjectMembersService, defaultProjectUserGroupsServiceState, ProjectUserGroupsService, ProjectService, defaultProjectsServiceState, ProjectsService, ServicesProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_project_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/project-members.service */ "../../libs/services/project/src/lib/project-members.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultProjectMembersServiceState", function() { return _lib_project_members_service__WEBPACK_IMPORTED_MODULE_0__["defaultProjectMembersServiceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectMembersService", function() { return _lib_project_members_service__WEBPACK_IMPORTED_MODULE_0__["ProjectMembersService"]; });

/* harmony import */ var _lib_project_user_groups_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/project-user-groups.service */ "../../libs/services/project/src/lib/project-user-groups.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultProjectUserGroupsServiceState", function() { return _lib_project_user_groups_service__WEBPACK_IMPORTED_MODULE_1__["defaultProjectUserGroupsServiceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectUserGroupsService", function() { return _lib_project_user_groups_service__WEBPACK_IMPORTED_MODULE_1__["ProjectUserGroupsService"]; });

/* harmony import */ var _lib_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/project.service */ "../../libs/services/project/src/lib/project.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return _lib_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]; });

/* harmony import */ var _lib_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/projects.service */ "../../libs/services/project/src/lib/projects.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultProjectsServiceState", function() { return _lib_projects_service__WEBPACK_IMPORTED_MODULE_3__["defaultProjectsServiceState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return _lib_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]; });

/* harmony import */ var _lib_services_project_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services-project.module */ "../../libs/services/project/src/lib/services-project.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesProjectModule", function() { return _lib_services_project_module__WEBPACK_IMPORTED_MODULE_4__["ServicesProjectModule"]; });








/***/ }),

/***/ "../../libs/services/project/src/lib/project-members.service.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/project/src/lib/project-members.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: defaultProjectMembersServiceState, ProjectMembersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjectMembersServiceState", function() { return defaultProjectMembersServiceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectMembersService", function() { return ProjectMembersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project.service */ "../../libs/services/project/src/lib/project.service.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projects.service */ "../../libs/services/project/src/lib/projects.service.ts");
/* harmony import */ var _services_project_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services-project.module */ "../../libs/services/project/src/lib/services-project.module.ts");

















const defaultProjectMembersServiceState = {
    isUpdatingMemberPermissions: false
};
class ProjectMembersService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(authenticationService, projectService, projectsService, storeService) {
        super({
            defaultState: defaultProjectMembersServiceState,
            name: 'ProjectMembersService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.projectService = projectService;
        this.projectsService = projectsService;
        this.deleteProjectMember$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.projectMemberDeleted$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.updateProjectMember$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.projectMemberUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.init();
    }
    init() {
        this.deleteProjectMember$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(username => this.handleDeleteProjectMember(username)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.projectMemberDeleted$);
        this.updateProjectMember$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(([username, permission]) => this.handleUpdateMemberPermissions(username, permission)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.projectMemberUpdated$);
    }
    /**
     * Add the member with the given `username` to the current project with the given `permission` level.
     * By default, their permission level will be set to `BUSINESS_USER`.
     *
     * @param username The username of the new project member
     * @param permission The permission level of the new project member
     */
    addProjectMember(username, permission = _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["PermissionLevel"].BUSINESS_USER) {
        this.setProjectMemberPermissions(username, permission);
    }
    /**
     * Removes the member with the given username from the project.
     *
     * @param username The username of the project member.
     */
    deleteProjectMember(username) {
        this.deleteProjectMember$.next(username);
    }
    /**
     * Returns a snapshot of the current user's permission level as a `Promise`.
     */
    getCurrentUserPermissions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const username = yield this.authenticationService.get([
                'credentials',
                'username'
            ]);
            return this.getMemberPermissions(username);
        });
    }
    /**
     * Returns a snapshot of the permission level of the user with the given `username` as a `Promise`.
     */
    getMemberPermissions(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            return this.projectsService.get(['projectsById', projectId, 'permissions', username], { includeFalsy: true });
        });
    }
    /**
     * Returns an `Observable` stream of the current user's permission level.
     */
    selectCurrentUserPermissions() {
        return this.authenticationService
            .select(['credentials', 'username'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(username => this.selectMemberPermissions(username)));
    }
    /**
     * Returns an `Observable` stream of the permission level of the project member with the given `username`.
     */
    selectMemberPermissions(username) {
        return this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(projectId => this.projectsService.select([
            'projectsById',
            projectId,
            'permissions',
            username
        ])));
    }
    /**
     * Updates the `permission` level of the user with the given `username`.
     *
     * @param username The username of the new project member
     * @param permission The permission level of the new project member
     */
    setProjectMemberPermissions(username, permission) {
        this.updateProjectMember$.next([username, permission]);
    }
    /** Returns a list of project members */
    get members() {
        return this.projectService
            .selectCurrentProject()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(project => Object.keys(project.permissions)));
    }
    /**
     * Emits an event whenever a project member has been deleted
     */
    get onProjectMemberDeleted() {
        return this.projectMemberDeleted$.asObservable();
    }
    /**
     * Emits an event whenever a project member has been created or changed
     */
    get onProjectMemberUpdated() {
        return this.projectMemberUpdated$.asObservable();
    }
    handleUpdateMemberPermissions(username, permission) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            this.projectsService.update({
                description: `Updated permissions for user ${username} to project ${projectId}`,
                path: ['projectsById', projectId, 'permissions', username],
                payload: permission
            });
            return { username: permission };
        });
    }
    handleDeleteProjectMember(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            this.projectsService.delete({
                description: `Removed permissions for user ${username} to project ${projectId}`,
                path: ['projectsById', projectId, 'permissions', username]
            });
            return username;
        });
    }
}
ProjectMembersService.ɵfac = function ProjectMembersService_Factory(t) { return new (t || ProjectMembersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
ProjectMembersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectMembersService, factory: ProjectMembersService.ɵfac, providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_11__["ServicesProjectModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])("Updating the project member's permissions", { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isUpdatingMemberPermissions'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectMembersService.prototype, "handleUpdateMemberPermissions", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Deleting the project member', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isDeletingProjectMember'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectMembersService.prototype, "handleDeleteProjectMember", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectMembersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_11__["ServicesProjectModule"]
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"] }, { type: _projects_service__WEBPACK_IMPORTED_MODULE_10__["ProjectsService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, { handleUpdateMemberPermissions: [], handleDeleteProjectMember: [] }); })();


/***/ }),

/***/ "../../libs/services/project/src/lib/project-user-groups.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/project/src/lib/project-user-groups.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: defaultProjectUserGroupsServiceState, ProjectUserGroupsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjectUserGroupsServiceState", function() { return defaultProjectUserGroupsServiceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUserGroupsService", function() { return ProjectUserGroupsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project.service */ "../../libs/services/project/src/lib/project.service.ts");
/* harmony import */ var _services_project_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services-project.module */ "../../libs/services/project/src/lib/services-project.module.ts");













const defaultProjectUserGroupsServiceState = {
    isCreatingUserGroup: false,
    isDeletingUserGroup: false,
    isRetrievingUserGroups: false,
    isUpdatingUserGroup: false
};
class ProjectUserGroupsService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectService, storeService) {
        super({
            defaultState: defaultProjectUserGroupsServiceState,
            name: 'ProjectUserGroupsService',
            storeService
        });
        this.projectService = projectService;
        this.createUserGroup$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.deleteUserGroup$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.userGroupDeleted$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.userGroupUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.init();
    }
    init() {
        // Whenever the project id changes, retrieve the associated user groups
        this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(projectId => this.handleRetrieveUserGroups(projectId)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe();
        // Whenever a user group create is triggered, handle the create user group operation.
        // Ony one user group create can be active at any time.
        this.createUserGroup$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["exhaustMap"])(userGroup => this.handleCreateUserGroup(userGroup)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe(this.userGroupUpdated$);
        // Whenever a user group delete is triggered, try to delete the given user group
        // A user group can only be deleted by a project owner
        this.deleteUserGroup$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["exhaustMap"])(userGroup => this.handleDeleteUserGroup(userGroup)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe(this.userGroupDeleted$);
        // Whenever a user group is added or updated, save it to the repository
        this.projectService
            .select('projectId')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(projectId => this.watch(['userGroupsPerProject', projectId, 'userGroupsById'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(userGroups => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(userGroups)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(userGroup => this.handleUpdateUserGroup(userGroup)))
            .subscribe(this.userGroupUpdated$);
    }
    /**
     * Saves the given user group to the back end.
     * Use this function if your user group does not yet have an ID.
     */
    createUserGroup(userGroup) {
        this.updateUserGroup(userGroup);
    }
    /**
     * Deletes the given user group
     */
    deleteUserGroup(userGroup) {
        this.deleteUserGroup$.next(userGroup);
    }
    /**
     * Saves the given user group to the back end.
     */
    updateUserGroup(userGroup) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId'), userGroupId = (_a = userGroup) === null || _a === void 0 ? void 0 : _a.id;
            if (userGroupId) {
                this.update({
                    description: `User group ${userGroupId} updated`,
                    path: [
                        'userGroupsPerProject',
                        projectId,
                        'userGroupsById',
                        userGroupId
                    ],
                    payload: userGroup
                });
            }
            else {
                this.createUserGroup$.next(userGroup);
            }
        });
    }
    /**
     * Emits an event whenever a user group has been deleted
     */
    get onUserGroupDeleted() {
        return this.userGroupDeleted$.asObservable();
    }
    /**
     * Emits an event whenever a user group has been created or changed
     */
    get onUserGroupUpdated() {
        return this.userGroupUpdated$.asObservable();
    }
    /**
     * Returns a list of user groups
     */
    get userGroups() {
        return this.projectService.select('projectId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(projectId => this.select(['userGroupsPerProject', projectId, 'userGroupsById'])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(Object.values));
    }
    handleCreateUserGroup(userGroup) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId');
            const createUserGroupResponse = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["updateUserGroup"])(Object.assign(Object.assign({}, userGroup), { project_id: projectId })).toPromise();
            this.updateUserGroup(createUserGroupResponse);
            return createUserGroupResponse;
        });
    }
    handleDeleteUserGroup(userGroup) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.projectService.get('projectId'), userGroupId = (_a = userGroup) === null || _a === void 0 ? void 0 : _a.id;
            const deleteUserGroupResponse = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["deleteUserGroup"])(projectId, userGroupId).toPromise();
            if (deleteUserGroupResponse === 'OK') {
                this.delete({
                    description: `User group ${userGroupId} deleted`,
                    path: ['userGroupsPerProject', projectId, 'userGroupsById', projectId]
                });
            }
        });
    }
    handleRetrieveUserGroups(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userGroups = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["getUserGroups"])(projectId).toPromise();
            const userGroupsById = Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["indexByProperty"])(userGroups, 'id');
            this.update({
                description: 'New user groups available',
                path: ['userGroupsPerProject', projectId, 'userGroupsById'],
                payload: userGroupsById
            });
        });
    }
    handleUpdateUserGroup(userGroup) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_3__["updateUserGroup"])(userGroup).toPromise();
        });
    }
}
ProjectUserGroupsService.ɵfac = function ProjectUserGroupsService_Factory(t) { return new (t || ProjectUserGroupsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
ProjectUserGroupsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectUserGroupsService, factory: ProjectUserGroupsService.ɵfac, providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_9__["ServicesProjectModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Creating the user group', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isCreatingUserGroup'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectUserGroupsService.prototype, "handleCreateUserGroup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Deleting the user group', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isDeletingUserGroup'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectUserGroupsService.prototype, "handleDeleteUserGroup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Retrieving the user groups of the current project', {
        isQuiet: true
    }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isRetrievingUserGroups'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectUserGroupsService.prototype, "handleRetrieveUserGroups", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Saving the user group', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isUpdatingUserGroup'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectUserGroupsService.prototype, "handleUpdateUserGroup", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectUserGroupsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_9__["ServicesProjectModule"]
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, { handleCreateUserGroup: [], handleDeleteUserGroup: [], handleRetrieveUserGroups: [], handleUpdateUserGroup: [] }); })();


/***/ }),

/***/ "../../libs/services/project/src/lib/project.service.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/project/src/lib/project.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.service */ "../../libs/services/project/src/lib/projects.service.ts");
/* harmony import */ var _services_project_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services-project.module */ "../../libs/services/project/src/lib/services-project.module.ts");









class ProjectService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectsService, storeService) {
        super({
            name: 'ProjectService',
            storeService
        });
        this.projectsService = projectsService;
    }
    /**
     * Returns a snapshot of the current `Project` as a `Promise`.
     */
    getCurrentProject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projectId = yield this.get('projectId');
            return this.projectsService.getProjectById(projectId);
        });
    }
    /**
     * Deletes the current project
     */
    deleteCurrentProject() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const project = yield this.getCurrentProject();
            this.projectsService.deleteProject(project);
        });
    }
    /**
     * Returns an `Observable` stream of the current `Project`.
     */
    selectCurrentProject() {
        return this.select('projectId').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(projectId => this.projectsService.selectProjectById(projectId)));
    }
    /** Updates the ID of the currently selected `Project` */
    setCurrentProject(projectId) {
        this.update({
            description: `Project ${projectId} selected`,
            payload: {
                projectId
            }
        });
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_5__["ServicesProjectModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_5__["ServicesProjectModule"]
            }]
    }], function () { return [{ type: _projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/project/src/lib/projects.service.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/project/src/lib/projects.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: defaultProjectsServiceState, ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProjectsServiceState", function() { return defaultProjectsServiceState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_project_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services-project.module */ "../../libs/services/project/src/lib/services-project.module.ts");














const defaultProjectsServiceState = {
    isCreatingProject: false,
    isDeletingProject: false,
    isRetrievingProjects: false,
    isUpdatingProject: false
};
class ProjectsService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(authenticationService, storeService) {
        super({
            defaultState: defaultProjectsServiceState,
            name: 'ProjectsService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.createProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.projectCreated$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.deleteProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.projectDeleted$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.projectUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.init();
    }
    init() {
        // Whenever the username of the user changes, retrieve the projects of the current user
        this.authenticationService
            .select(['credentials', 'username'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(username => this.handleRetrieveProjects(username)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe();
        this.createProject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(project => this.handleCreateProject(project)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.projectCreated$);
        this.deleteProject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(project => this.handleDeleteProject(project)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.projectDeleted$);
        // Whenever a project is added or changes, save it to the repository
        this.watch('projectsById')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(projects => Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(projects)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(project => this.handleUpdateProject(project)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe(this.projectUpdated$);
    }
    handleCreateProject(project) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { username, email } = yield this.authenticationService.get('credentials');
            const projectCreateResponse = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["createProject"])(project, username, email).toPromise();
            this.updateProject(projectCreateResponse);
            return projectCreateResponse;
        });
    }
    /**
     * Saves the given project to the back end.
     * Use this function if your project does not yet have an ID.
     */
    createProject(project) {
        this.updateProject(project);
    }
    /**
     * Deletes the given project
     */
    deleteProject(project) {
        this.deleteProject$.next(project);
    }
    /**
     * Saves the given project to the back end.
     */
    updateProject(project) {
        var _a;
        if ((_a = project) === null || _a === void 0 ? void 0 : _a.id) {
            this.update({
                description: `Project ${project.id} updated`,
                path: ['projectsById', project.id],
                payload: project
            });
        }
        else {
            this.createProject$.next(project);
        }
    }
    /**
     * Returns a snapshot of the `Project` with the given `projectId` as a `Promise`.
     * @param projectId the ID of the project to retrieve
     */
    getProjectById(projectId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.get(['projectsById', projectId]);
        });
    }
    /**
     * Returns an `Observable` stream of the `Project` with the given `projectId`.
     * @param projectId the ID of the project to observe
     */
    selectProjectById(projectId) {
        return this.select(['projectsById', projectId]);
    }
    /**
     * An `Observable` stream of an `Array` containing all the user's current `Projects`.
     */
    get projects() {
        return this.select('projectsById').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])(projectsById => {
            const projects = Object.values(projectsById);
            return Object(lodash__WEBPACK_IMPORTED_MODULE_7__["orderBy"])(projects, 'last_updated', 'desc');
        }));
    }
    /**
     * Emits whenever a project has been created.
     */
    get onProjectCreated() {
        return this.projectCreated$.asObservable();
    }
    /**
     * Emits whenever a project has been deleted.
     */
    get onProjectDeleted() {
        return this.projectDeleted$.asObservable();
    }
    /**
     * Emits whenever a project has been updated.
     */
    get onProjectUpdated() {
        return this.projectUpdated$.asObservable();
    }
    handleDeleteProject(project) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["deleteProject"])((_a = project) === null || _a === void 0 ? void 0 : _a.id).toPromise();
            this.delete({
                description: `Project ${(_b = project) === null || _b === void 0 ? void 0 : _b.id} deleted`,
                path: ['projectsById', (_c = project) === null || _c === void 0 ? void 0 : _c.id]
            });
        });
    }
    handleRetrieveProjects(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const projects = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["getUserProjects"])(username).toPromise();
            const projectsById = Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["indexByProperty"])(projects, 'id');
            this.update({
                description: 'New projects available',
                payload: { projectsById }
            });
        });
    }
    handleUpdateProject(project) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["updateProject"])(project.id, project).toPromise();
        });
    }
}
ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_10__["ServicesProjectModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Creating the project', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isCreatingProject'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectsService.prototype, "handleCreateProject", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Deleting the project', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isDeletingProject'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectsService.prototype, "handleDeleteProject", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Retrieving your projects', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isRetrievingProjects'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectsService.prototype, "handleRetrieveProjects", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Saving the project', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isUpdatingProject'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ProjectsService.prototype, "handleUpdateProject", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_project_module__WEBPACK_IMPORTED_MODULE_10__["ServicesProjectModule"]
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, { handleCreateProject: [], handleDeleteProject: [], handleRetrieveProjects: [], handleUpdateProject: [] }); })();


/***/ }),

/***/ "../../libs/services/project/src/lib/services-project.module.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/project/src/lib/services-project.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: ServicesProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesProjectModule", function() { return ServicesProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesProjectModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ServicesProjectModule is already loaded. Import it in the AppModule only');
        }
    }
}
ServicesProjectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesProjectModule });
ServicesProjectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesProjectModule_Factory(t) { return new (t || ServicesProjectModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ServicesProjectModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesProjectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: ServicesProjectModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/user-info/src/index.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/user-info/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: FavoriteProjectsService, RecentProjectsService, ServicesUserInfoModule, UserInfoService, LastVisitedRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_favorite_projects_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/favorite-projects.service */ "../../libs/services/user-info/src/lib/favorite-projects.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteProjectsService", function() { return _lib_favorite_projects_service__WEBPACK_IMPORTED_MODULE_0__["FavoriteProjectsService"]; });

/* harmony import */ var _lib_recent_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/recent-projects.service */ "../../libs/services/user-info/src/lib/recent-projects.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RecentProjectsService", function() { return _lib_recent_projects_service__WEBPACK_IMPORTED_MODULE_1__["RecentProjectsService"]; });

/* harmony import */ var _lib_services_user_info_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services-user-info.module */ "../../libs/services/user-info/src/lib/services-user-info.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServicesUserInfoModule", function() { return _lib_services_user_info_module__WEBPACK_IMPORTED_MODULE_2__["ServicesUserInfoModule"]; });

/* harmony import */ var _lib_user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/user-info.service */ "../../libs/services/user-info/src/lib/user-info.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return _lib_user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]; });

/* harmony import */ var _lib_last_visited_route_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/last-visited-route.service */ "../../libs/services/user-info/src/lib/last-visited-route.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LastVisitedRouteService", function() { return _lib_last_visited_route_service__WEBPACK_IMPORTED_MODULE_4__["LastVisitedRouteService"]; });








/***/ }),

/***/ "../../libs/services/user-info/src/lib/favorite-projects.service.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/user-info/src/lib/favorite-projects.service.ts ***!
  \**************************************************************************************************************/
/*! exports provided: FavoriteProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteProjectsService", function() { return FavoriteProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services-user-info.module */ "../../libs/services/user-info/src/lib/services-user-info.module.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-info.service */ "../../libs/services/user-info/src/lib/user-info.service.ts");














class FavoriteProjectsService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectsService, projectService, userInfoService, storeService) {
        super({
            name: 'FavoriteProjectsService',
            storeService
        });
        this.projectsService = projectsService;
        this.projectService = projectService;
        this.userInfoService = userInfoService;
        this.storeService = storeService;
        this.addFavoriteProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.removeFavoriteProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.init();
    }
    init() {
        this.addFavoriteProject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(project => this.handleAddFavoriteProject(project)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe();
        this.removeFavoriteProject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(project => this.handleRemoveFavoriteProject(project)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe();
    }
    /**
     * Register the given project as one of the current user's favorites.
     * @param project The project that should be registered as a favorite.
     */
    addFavoriteProject(project) {
        this.addFavoriteProject$.next(project);
    }
    /**
     * Returns a snapshot of the current user's favorite projects as a `Promise`
     */
    getFavoriteProjects() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [favoriteProjectIds, projectsById] = yield Promise.all([
                this.userInfoService.get(['userInfo', 'favorite_projects']),
                this.projectsService.get('projectsById')
            ]);
            return favoriteProjectIds
                .filter(projectId => projectId in projectsById)
                .map(projectId => projectsById[projectId]);
        });
    }
    /**
     * Unregisters the given project as one of the current user's favorites.
     * @param project The project that should be unregistered as a favorite.
     */
    removeFavoriteProject(project) {
        this.removeFavoriteProject$.next(project);
    }
    /**
     * Returns an `Observable` stream of the current user's favorite projects
     */
    selectFavoriteProjects() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.userInfoService.select(['userInfo', 'favorite_projects']),
            this.projectsService.select('projectsById')
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([favoriteProjectIds, projectsById]) => favoriteProjectIds
            .filter(projectId => projectId in projectsById)
            .map(projectId => projectsById[projectId])));
    }
    /**
     * Returns whether the current projcect is a favorite as an `Observable` stream.
     */
    get isCurrentProjectFavorite() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.projectService.select('projectId'),
            this.userInfoService.select(['userInfo', 'favorite_projects'], {
                includeFalsy: true
            })
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([projectId, favoriteProjects]) => { var _a; return !!((_a = favoriteProjects) === null || _a === void 0 ? void 0 : _a.includes(projectId)); }));
    }
    handleAddFavoriteProject(project) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If the favorite projects are unavailable, start with an empty list
            const favoriteProjects = (_a = (yield this.userInfoService.get(['userInfo', 'favorite_projects'], {
                includeFalsy: true
            })), (_a !== null && _a !== void 0 ? _a : []));
            const updatedFavoriteProjects = [
                (_b = project) === null || _b === void 0 ? void 0 : _b.id,
                ...favoriteProjects.filter(favoriteProject => { var _a; return favoriteProject !== ((_a = project) === null || _a === void 0 ? void 0 : _a.id); })
            ];
            this.userInfoService.update({
                description: 'Favorite projects updated',
                path: ['userInfo', 'favorite_projects'],
                payload: updatedFavoriteProjects
            });
            return project;
        });
    }
    handleRemoveFavoriteProject(project) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const favoriteProjects = yield this.userInfoService.get([
                'userInfo',
                'favorite_projects'
            ]);
            const updatedFavoriteProjects = favoriteProjects.filter(favoriteProject => { var _a; return favoriteProject !== ((_a = project) === null || _a === void 0 ? void 0 : _a.id); });
            this.userInfoService.update({
                description: 'Favorite project removed',
                path: ['userInfo', 'favorite_projects'],
                payload: updatedFavoriteProjects
            });
            return project;
        });
    }
}
FavoriteProjectsService.ɵfac = function FavoriteProjectsService_Factory(t) { return new (t || FavoriteProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_info_service__WEBPACK_IMPORTED_MODULE_9__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
FavoriteProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FavoriteProjectsService, factory: FavoriteProjectsService.ɵfac, providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_8__["ServicesUserInfoModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Adding a favorite project', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isAddingFavoriteProject'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], FavoriteProjectsService.prototype, "handleAddFavoriteProject", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Removing a favorite project', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isRemovingFavoriteProject'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], FavoriteProjectsService.prototype, "handleRemoveFavoriteProject", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FavoriteProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_8__["ServicesUserInfoModule"]
            }]
    }], function () { return [{ type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }, { type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _user_info_service__WEBPACK_IMPORTED_MODULE_9__["UserInfoService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, { handleAddFavoriteProject: [], handleRemoveFavoriteProject: [] }); })();


/***/ }),

/***/ "../../libs/services/user-info/src/lib/last-visited-route.service.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/user-info/src/lib/last-visited-route.service.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LastVisitedRouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastVisitedRouteService", function() { return LastVisitedRouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_info_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-user-info.module */ "../../libs/services/user-info/src/lib/services-user-info.module.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-info.service */ "../../libs/services/user-info/src/lib/user-info.service.ts");








class LastVisitedRouteService {
    constructor(userInfoService) {
        this.userInfoService = userInfoService;
    }
    /**
     * Returns a snapshot of the user's last visited route as a `Promise`
     */
    getLastVisitedRoute() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const lastVisitedUrl = yield this.userInfoService.get([
                'userInfo',
                'last_visited'
            ]);
            return this.handleFormatLastVisitedRoute(lastVisitedUrl);
        });
    }
    /**
     * Returns an `Observable` stream of the user's last visited route
     */
    selectLastVisitedRoute() {
        return this.userInfoService
            .select(['userInfo', 'last_visited'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(lastVisitedUrl => this.handleFormatLastVisitedRoute(lastVisitedUrl)));
    }
    /**
     * Sets the user's last vistited route to the given `url`
     * @param url The url of the user's last visited route
     */
    updateLastVisitedRoute(url) {
        const [pathAndParameters] = url.split('#');
        this.userInfoService.update({
            description: 'New last visited url available',
            path: ['userInfo', 'last_visited'],
            payload: pathAndParameters
        });
    }
    handleFormatLastVisitedRoute(lastVisitedUrl) {
        const [path] = lastVisitedUrl.split('?'), queryParams = Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_2__["getQueryParametersFromUrl"])(lastVisitedUrl);
        return { path, queryParams };
    }
}
LastVisitedRouteService.ɵfac = function LastVisitedRouteService_Factory(t) { return new (t || LastVisitedRouteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"])); };
LastVisitedRouteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LastVisitedRouteService, factory: LastVisitedRouteService.ɵfac, providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_4__["ServicesUserInfoModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LastVisitedRouteService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_4__["ServicesUserInfoModule"]
            }]
    }], function () { return [{ type: _user_info_service__WEBPACK_IMPORTED_MODULE_5__["UserInfoService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/user-info/src/lib/recent-projects.service.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/user-info/src/lib/recent-projects.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: RecentProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentProjectsService", function() { return RecentProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_info_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services-user-info.module */ "../../libs/services/user-info/src/lib/services-user-info.module.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-info.service */ "../../libs/services/user-info/src/lib/user-info.service.ts");














class RecentProjectsService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["BasicStore"] {
    constructor(projectsService, userInfoService, storeService) {
        super({ name: 'RecentProjectsService', storeService });
        this.projectsService = projectsService;
        this.userInfoService = userInfoService;
        this.storeService = storeService;
        this.addRecentProject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.init();
    }
    init() {
        this.addRecentProject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(project => this.handleAddRecentProject(project)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe();
    }
    /**
     * Adds the given project to the user's recently visited projects
     * @param project The project that should be added to the list
     */
    addRecentProject(project) {
        this.addRecentProject$.next(project);
    }
    /**
     * Returns a snapshot of the current user's recently visited projects as a `Promise`
     */
    getRecentProjects() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [recentProjectIds, projectsById] = yield Promise.all([
                this.userInfoService.get(['userInfo', 'recent_projects']),
                this.projectsService.get('projectsById')
            ]);
            return recentProjectIds
                .filter(projectId => projectId in projectsById)
                .map(projectId => projectsById[projectId]);
        });
    }
    /**
     * Returns an `Observable` stream of the current user's recently visited projects
     */
    selectRecentProjects() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])([
            this.userInfoService.select(['userInfo', 'recent_projects']),
            this.projectsService.select('projectsById')
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(([recentProjectIds, projectsById]) => recentProjectIds
            .filter(projectId => projectId in projectsById)
            .map(projectId => projectsById[projectId])));
    }
    handleAddRecentProject(project) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If the recent projects are unavailable, start with an empty list
            const recentProjects = (_a = (yield this.userInfoService.get(['userInfo', 'recent_projects'], {
                includeFalsy: true
            })), (_a !== null && _a !== void 0 ? _a : []));
            const updatedRecentProjects = [
                (_b = project) === null || _b === void 0 ? void 0 : _b.id,
                ...recentProjects.filter(recentProject => { var _a; return recentProject !== ((_a = project) === null || _a === void 0 ? void 0 : _a.id); })
            ].slice(0, 5);
            this.userInfoService.update({
                description: 'Recent projects updated',
                path: ['userInfo', 'recent_projects'],
                payload: updatedRecentProjects
            });
            return project;
        });
    }
}
RecentProjectsService.ɵfac = function RecentProjectsService_Factory(t) { return new (t || RecentProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_info_service__WEBPACK_IMPORTED_MODULE_9__["UserInfoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"])); };
RecentProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecentProjectsService, factory: RecentProjectsService.ɵfac, providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_8__["ServicesUserInfoModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_4__["ManagedTask"])('Updating your recent projects', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["MonitorAsync"])('isAddingRecentProject'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], RecentProjectsService.prototype, "handleAddRecentProject", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecentProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_8__["ServicesUserInfoModule"]
            }]
    }], function () { return [{ type: _models4insight_services_project__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }, { type: _user_info_service__WEBPACK_IMPORTED_MODULE_9__["UserInfoService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_2__["StoreService"] }]; }, { handleAddRecentProject: [] }); })();


/***/ }),

/***/ "../../libs/services/user-info/src/lib/services-user-info.module.ts":
/*!**************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/user-info/src/lib/services-user-info.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ServicesUserInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesUserInfoModule", function() { return ServicesUserInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ServicesUserInfoModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ServicesUserInfoModule is already loaded. Import it in the AppModule only');
        }
    }
}
ServicesUserInfoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesUserInfoModule });
ServicesUserInfoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesUserInfoModule_Factory(t) { return new (t || ServicesUserInfoModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ServicesUserInfoModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesUserInfoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: ServicesUserInfoModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/services/user-info/src/lib/user-info.service.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/services/user-info/src/lib/user-info.service.ts ***!
  \******************************************************************************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_user_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services-user-info.module */ "../../libs/services/user-info/src/lib/services-user-info.module.ts");














const defaultUserInfoServiceState = {
    isAddingFavoriteProject: false,
    isRemovingFavoriteProject: false,
    isRetrievingUserInfo: false,
    isUpdatingUserInfo: false
};
class UserInfoService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["BasicStore"] {
    constructor(authenticationService, storeService) {
        super({
            defaultState: defaultUserInfoServiceState,
            name: 'UserInfoService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.storeService = storeService;
        this.init();
    }
    /**
     * Returns the current user preferences.
     */
    get userinfo() {
        return this.select('userInfo');
    }
    init() {
        const [authenticated, notAuthenticated] = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["partition"])(this.authenticationService.isAuthenticated(), lodash__WEBPACK_IMPORTED_MODULE_7__["identity"]);
        // Whenever a user authenticates, retrieve their userinfo
        authenticated
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(() => this.handleRetrieveUserInfo()), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe();
        // Whenever the user is not or no longer authenticated, reset the userinfo
        notAuthenticated.pipe(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this)).subscribe(() => this.reset());
        // Whenever the user info updates, send it over to the back end.
        // Don't update on the initial load, or when another user logs in.
        this.select('userInfo')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(([old, current]) => { var _a, _b, _c, _d; return ((_a = old) === null || _a === void 0 ? void 0 : _a.userid) && ((_b = current) === null || _b === void 0 ? void 0 : _b.userid) && ((_c = old) === null || _c === void 0 ? void 0 : _c.userid) === ((_d = current) === null || _d === void 0 ? void 0 : _d.userid); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(50), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(([, userInfo]) => this.handleUpdateUserInfo(userInfo)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_6__["untilDestroyed"])(this))
            .subscribe();
    }
    handleRetrieveUserInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userInfo = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["getUserInfo"])().toPromise();
            this.update({
                description: 'New user info available',
                payload: { userInfo }
            });
            return userInfo;
        });
    }
    handleUpdateUserInfo(userInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_4__["updateUserInfo"])(userInfo).toPromise();
        });
    }
}
UserInfoService.ɵfac = function UserInfoService_Factory(t) { return new (t || UserInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"])); };
UserInfoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserInfoService, factory: UserInfoService.ɵfac, providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_10__["ServicesUserInfoModule"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Retrieving your preferences', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isRetrievingUserInfo'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserInfoService.prototype, "handleRetrieveUserInfo", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_5__["ManagedTask"])('Saving your preferences', { isQuiet: true }),
    Object(_models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["MonitorAsync"])('isUpdatingUserInfo'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], UserInfoService.prototype, "handleUpdateUserInfo", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserInfoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _services_user_info_module__WEBPACK_IMPORTED_MODULE_10__["ServicesUserInfoModule"]
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_3__["StoreService"] }]; }, { handleRetrieveUserInfo: [], handleUpdateUserInfo: [] }); })();


/***/ }),

/***/ "../../libs/shell/src/index.ts":
/*!*************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/index.ts ***!
  \*************************************************************************/
/*! exports provided: RouteReusableStrategy, ShellModule, ShellService, Shell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_route_reusable_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/route-reusable-strategy */ "../../libs/shell/src/lib/route-reusable-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _lib_route_reusable_strategy__WEBPACK_IMPORTED_MODULE_0__["RouteReusableStrategy"]; });

/* harmony import */ var _lib_shell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/shell */ "../../libs/shell/src/lib/shell.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shell", function() { return _lib_shell__WEBPACK_IMPORTED_MODULE_1__["Shell"]; });

/* harmony import */ var _lib_shell_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/shell.module */ "../../libs/shell/src/lib/shell.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return _lib_shell_module__WEBPACK_IMPORTED_MODULE_2__["ShellModule"]; });

/* harmony import */ var _lib_shell_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shell.service */ "../../libs/shell/src/lib/shell.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShellService", function() { return _lib_shell_service__WEBPACK_IMPORTED_MODULE_3__["ShellService"]; });







/***/ }),

/***/ "../../libs/shell/src/lib/footer/footer.component.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/footer/footer.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _models4insight_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/version */ "../../libs/version/src/index.ts");
/* harmony import */ var _shell_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shell-config.service */ "../../libs/shell/src/lib/shell-config.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








class FooterComponent {
    constructor(versionService, config = {}) {
        this.faCopyright = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCopyright"];
        this.appName = config.appName;
        this.copyright = config.appCopyright;
        this.version = versionService.appVersion;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models4insight_version__WEBPACK_IMPORTED_MODULE_2__["VersionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shell_config_service__WEBPACK_IMPORTED_MODULE_3__["ShellConfigService"], 8)); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["models4insight-footer"]], decls: 15, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "level"], [1, "level-left"], [1, "level-item", "has-text-centered", "has-text-white"], ["translate", ""], [1, "icon"], [3, "icon"], [1, "level-right"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "shell.footer.copyright");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCopyright);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.copyright, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.appName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.version, " ");
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3NoZWxsL3NyYy9saWIvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return [{ type: _models4insight_version__WEBPACK_IMPORTED_MODULE_2__["VersionService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_shell_config_service__WEBPACK_IMPORTED_MODULE_3__["ShellConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/shell/src/lib/header/header.component.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/header/header.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/i18n */ "../../libs/i18n/src/index.ts");
/* harmony import */ var _models4insight_permissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/permissions */ "../../libs/permissions/src/index.ts");
/* harmony import */ var _shell_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shell-config.service */ "../../libs/shell/src/lib/shell-config.service.ts");
/* harmony import */ var _shell_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shell.service */ "../../libs/shell/src/lib/shell.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _permissions_src_lib_feature_feature_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../permissions/src/lib/feature/feature.directive */ "../../libs/permissions/src/lib/feature/feature.directive.ts");
















function HeaderComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const route_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + route_r8.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", route_r8.data ? route_r8.data["icon"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, route_r8.data && route_r8.data["title"] ? route_r8.data["title"] : route_r8.path)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/" + route_r8.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", route_r8.data ? route_r8.data["icon"] : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, route_r8.data && route_r8.data["title"] ? route_r8.data["title"] : route_r8.path)), " ");
} }
function HeaderComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_18_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.applyUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shell.header.update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_18_Template_a_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.applyUpdate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "shell.header.update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faSync);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faSync);
} }
function HeaderComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_20_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.triggerInstallPrompt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shell.header.install");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_20_Template_a_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.triggerInstallPrompt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "shell.header.install");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faArrowCircleDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faArrowCircleDown);
} }
function HeaderComponent_ng_container_32_ng_container_1_a_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_container_32_ng_container_1_a_12_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const language_r18 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.setLanguage(language_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r18, " ");
} }
function HeaderComponent_ng_container_32_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shell.header.language");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_ng_container_32_ng_container_1_a_12_Template, 2, 1, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 2, ctx_r16.currentLanguage$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 4, ctx_r16.supportedLanguages$));
} }
function HeaderComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_32_ng_container_1_Template, 14, 6, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const supportedLanguages_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", supportedLanguages_r15.length > 1);
} }
function HeaderComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "shell.header.welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_34_Template_a_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.accountManagement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "shell.header.security");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_34_Template_a_click_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "shell.header.logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const credentials_r21 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](credentials_r21.username || credentials_r21.email);
} }
function HeaderComponent_a_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Platform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Data2Model ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Analytics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-active": a0 }; };
class HeaderComponent {
    constructor(i18nService, authenticationService, shellService, config = {}) {
        this.i18nService = i18nService;
        this.authenticationService = authenticationService;
        this.shellService = shellService;
        this.Feature = _models4insight_permissions__WEBPACK_IMPORTED_MODULE_4__["Feature"];
        this.faArrowCircleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowCircleDown"];
        this.faBook = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBook"];
        this.faEllipsisV = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEllipsisV"];
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSync"];
        this.menuHidden = true;
        this.appLogoPath = config.appLogoPath || 'assets/m4i-logo-notext.png';
        this.appName = config.appName;
    }
    ngOnInit() {
        this.credentials$ = this.authenticationService.credentials();
        this.currentLanguage$ = this.i18nService.select('currentLanguage');
        this.isAppInstallable$ = this.shellService.select('isAppInstallable');
        this.isUpdateAvailable$ = this.shellService.select('isUpdateAvailable');
        this.routes$ = this.shellService.select('routes');
        this.supportedLanguages$ = this.i18nService.select('supportedLanguages');
    }
    applyUpdate() {
        this.shellService.applyUpdate();
    }
    triggerInstallPrompt() {
        this.shellService.installApp();
    }
    toggleMenu() {
        this.menuHidden = !this.menuHidden;
    }
    logout() {
        this.authenticationService.logout();
    }
    accountManagement() {
        this.authenticationService.accountManagement();
    }
    setLanguage(language) {
        this.i18nService.setLanguage(language);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models4insight_i18n__WEBPACK_IMPORTED_MODULE_3__["I18nService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shell_service__WEBPACK_IMPORTED_MODULE_6__["ShellService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shell_config_service__WEBPACK_IMPORTED_MODULE_5__["ShellConfigService"], 8)); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["models4insight-header"]], decls: 48, vars: 31, consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "is-fixed-top"], [1, "container"], [1, "navbar-brand"], ["routerLink", "/", 1, "navbar-item", "is-size-4"], [1, "logo", 3, "src", "alt"], ["role", "button", "type", "button", "aria-label", "Toggle navigation", "data-target", "primaryNavMenu", 1, "navbar-burger", "burger", 3, "click"], ["aria-hidden", "true"], ["id", "primaryNavMenu", 1, "navbar-menu", "is-paddingless", 3, "ngClass"], [1, "navbar-start"], [1, "navbar-item"], [1, "buttons"], [4, "ngFor", "ngForOf"], [1, "navbar-end"], [4, "ngIf"], ["href", "https://docs.models4insight.com", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "is-outlined", "is-dark", "is-hidden-touch"], [1, "icon"], [3, "icon"], ["translate", ""], ["href", "https://docs.models4insight.com", "target", "_blank", "rel", "noopener noreferrer", 1, "button", "is-outlined", "is-dark", "is-fullwidth", "is-hidden-desktop"], ["class", "navbar-item has-dropdown is-hoverable", 4, "ngIf"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link", "is-arrowless"], [1, "icon", "is-large", "is-hidden-touch"], ["translate", "", 1, "is-hidden-desktop"], [1, "navbar-dropdown", "is-right"], ["href", "/platform", "class", "navbar-item", "target", "_blank", "rel", "noopener noreferrer", 4, "models4insight-feature"], ["href", "/data2model", "class", "navbar-item", "target", "_blank", "rel", "noopener noreferrer", 4, "models4insight-feature"], ["href", "/consistency_metrics", "class", "navbar-item", "target", "_blank", "rel", "noopener noreferrer", 4, "models4insight-feature"], ["routerLinkActive", "has-text-white has-background-dark", 1, "button", "is-outlined", "is-dark", "is-hidden-touch", 3, "routerLink"], ["routerLinkActive", "has-text-white has-background-dark", 1, "button", "is-outlined", "is-dark", "is-fullwidth", "is-hidden-desktop", 3, "routerLink"], [1, "button", "is-info", "is-hidden-touch", 3, "click"], [1, "button", "is-info", "is-fullwidth", "is-hidden-desktop", 3, "click"], [1, "button", "is-primary", "is-hidden-touch", 3, "click"], [1, "button", "is-primary", "is-fullwidth", "is-hidden-desktop", 3, "click"], [1, "navbar-link"], [1, "navbar-dropdown"], ["class", "navbar-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "navbar-item", 3, "click"], ["role", "button", "translate", "", 1, "navbar-item", 3, "click"], [1, "navbar-divider"], ["href", "/platform", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"], [1, "icon", "is-medium"], ["src", "assets/m4i-icon.png"], ["href", "/data2model", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"], ["src", "assets/d2m-icon.png"], ["href", "/consistency_metrics", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_ng_container_13_Template, 15, 14, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_ng_container_18_Template, 11, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_ng_container_20_Template, 11, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "shell.header.documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "shell.header.documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_ng_container_32_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HeaderComponent_div_34_Template, 15, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "shell.header.services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HeaderComponent_a_45_Template, 5, 0, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HeaderComponent_a_46_Template, 5, 0, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, HeaderComponent_a_47_Template, 5, 0, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.appLogoPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.appName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", !ctx.menuHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.menuHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, !ctx.menuHidden));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 19, ctx.routes$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 21, ctx.isUpdateAvailable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 23, ctx.isAppInstallable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBook);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 25, ctx.supportedLanguages$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 27, ctx.credentials$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEllipsisV);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("models4insight-feature", ctx.Feature.PLATFORM_ACCESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("models4insight-feature", ctx.Feature.DATA2MODEL_ACCESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("models4insight-feature", ctx.Feature.ANALYTICS_ACCESS);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateDirective"], _permissions_src_lib_feature_feature_directive__WEBPACK_IMPORTED_MODULE_11__["FeatureDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]], styles: [".logo[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 150px;\n  max-height: 50px;\n  width: auto;\n  height: auto;\n}\n\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 20px;\n  max-width: 20px;\n}\n\n.navbar-item.has-dropdown.is-hoverable[_ngcontent-%COMP%]:hover   .navbar-dropdown[_ngcontent-%COMP%] {\n  display: block !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hlbGwvc3JjL2xpYi9oZWFkZXIvQzpcXFVzZXJzXFx0aGlqc1xcRGV2ZWxvcG1lbnRcXG1vZGVsczRpbnNpZ2h0L2xpYnNcXHNoZWxsXFxzcmNcXGxpYlxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJsaWJzL3NoZWxsL3NyYy9saWIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREdBO0VBQ0UseUJBQUE7QUNBRiIsImZpbGUiOiJsaWJzL3NoZWxsL3NyYy9saWIvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5pY29uIGltZyB7XG4gIG1heC1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMjBweDtcbn1cblxuLy8gRW5zdXJlcyB0aGUgbmF2YmFyIG1lbnUgZHJvcGRvd24gc2hvd3Mgb24gaG92ZXIgaW4gSUUxMSBhbmQgRWRnZSAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qZ3RobXMvYnVsbWEvaXNzdWVzLzI2NDQpXG4ubmF2YmFyLWl0ZW0uaGFzLWRyb3Bkb3duLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn0iLCIubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDE1MHB4O1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaWNvbiBpbWcge1xuICBtYXgtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDIwcHg7XG59XG5cbi5uYXZiYXItaXRlbS5oYXMtZHJvcGRvd24uaXMtaG92ZXJhYmxlOmhvdmVyIC5uYXZiYXItZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _models4insight_i18n__WEBPACK_IMPORTED_MODULE_3__["I18nService"] }, { type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _shell_service__WEBPACK_IMPORTED_MODULE_6__["ShellService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_shell_config_service__WEBPACK_IMPORTED_MODULE_5__["ShellConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/shell/src/lib/loading/loading.component.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/loading/loading.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shell_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shell.service */ "../../libs/shell/src/lib/shell.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function LoadingComponent_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "progress", 1);
} }
class LoadingComponent {
    constructor(shellService) {
        this.shellService = shellService;
    }
    ngOnInit() {
        this.isActive$ = this.shellService.select('isNavigating');
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shell_service__WEBPACK_IMPORTED_MODULE_1__["ShellService"])); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["models4insight-loading"]], decls: 2, vars: 3, consts: [["class", "progress is-link", "max", "100", 4, "ngIf"], ["max", "100", 1, "progress", "is-link"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingComponent_progress_0_Template, 1, 0, "progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.isActive$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".progress[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n\n.progress[_ngcontent-%COMP%] {\n  background: #dbdbdb;\n}\n\n.progress[_ngcontent-%COMP%]::-webkit-progress-bar {\n  background: transparent !important;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate {\n  -webkit-animation: progress-indeterminate 0.75s linear infinite;\n          animation: progress-indeterminate 0.75s linear infinite;\n  background: #dbdbdb linear-gradient(to right, #4a4a4a 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate::-moz-progress-bar {\n  background: transparent !important;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-primary {\n  background: #dbdbdb linear-gradient(to right, #00d1b2 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-link {\n  background: #dbdbdb linear-gradient(to right, #209cee 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-info {\n  background: #dbdbdb linear-gradient(to right, #3273dc 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-success {\n  background: #dbdbdb linear-gradient(to right, #23d160 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-warning {\n  background: #dbdbdb linear-gradient(to right, #ffdd57 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-danger {\n  background: #dbdbdb linear-gradient(to right, #ff3860 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n@-webkit-keyframes progress-indeterminate {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n@keyframes progress-indeterminate {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hlbGwvc3JjL2xpYi9sb2FkaW5nL0M6XFxVc2Vyc1xcdGhpanNcXERldmVsb3BtZW50XFxtb2RlbHM0aW5zaWdodC9saWJzXFxzaGVsbFxcc3JjXFxsaWJcXGxvYWRpbmdcXGxvYWRpbmcuY29tcG9uZW50LnNjc3MiLCJsaWJzL3NoZWxsL3NyYy9saWIvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsZ0JBQUE7QUNDRjs7QURpQ0E7RUFDRSxtQkE5QjhCO0FDQWhDOztBRGdDRTtFQUNFLGtDQUFBO0FDOUJKOztBRGlDRTtFQUNFLCtEQUFBO1VBQUEsdURBQUE7RUFDQSxvR0FBQTtBQy9CSjs7QURrQ0k7RUFDRSxrQ0FBQTtBQ2hDTjs7QURxQ007RUFDRSxvR0FBQTtBQ25DUjs7QURrQ007RUFDRSxvR0FBQTtBQ2hDUjs7QUQrQk07RUFDRSxvR0FBQTtBQzdCUjs7QUQ0Qk07RUFDRSxvR0FBQTtBQzFCUjs7QUR5Qk07RUFDRSxvR0FBQTtBQ3ZCUjs7QURzQk07RUFDRSxvR0FBQTtBQ3BCUjs7QURnQ0E7RUFDRTtJQUNFLDJCQUFBO0VDN0JGO0VEK0JBO0lBQ0UsNEJBQUE7RUM3QkY7QUFDRjs7QUR1QkE7RUFDRTtJQUNFLDJCQUFBO0VDN0JGO0VEK0JBO0lBQ0UsNEJBQUE7RUM3QkY7QUFDRiIsImZpbGUiOiJsaWJzL3NoZWxsL3NyYy9saWIvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbiRwcmltYXJ5OiAjMDBkMWIyO1xuJHRleHQ6ICM0YTRhNGE7XG4kcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG4kZHVtbXktaW52ZXJ0OiB3aGl0ZTtcbiRjb2xvcnM6IChcbiAgXCJwcmltYXJ5XCI6IChcbiAgICAkcHJpbWFyeSxcbiAgICAkcHJpbWFyeVxuICApLFxuICBcImxpbmtcIjogKFxuICAgICMyMDljZWUsXG4gICAgIzIwOWNlZVxuICApLFxuICBcImluZm9cIjogKFxuICAgICMzMjczZGMsXG4gICAgIzMyNzNkY1xuICApLFxuICBcInN1Y2Nlc3NcIjogKFxuICAgICMyM2QxNjAsXG4gICAgIzIzZDE2MFxuICApLFxuICBcIndhcm5pbmdcIjogKFxuICAgICNmZmRkNTcsXG4gICAgI2ZmZGQ1N1xuICApLFxuICBcImRhbmdlclwiOiAoXG4gICAgI2ZmMzg2MCxcbiAgICAjZmYzODYwXG4gIClcbik7XG5cbi5wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQ6ICRwcm9ncmVzcy1iYXItYmFja2dyb3VuZC1jb2xvcjtcblxuICAmOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgLy8gb3ZlcnJpZGUgYnVsbWEuY3NzXG4gIH1cblxuICAmOmluZGV0ZXJtaW5hdGUge1xuICAgIGFuaW1hdGlvbjogcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWNvbG9yIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHRleHQgMzAlLCAkcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtY29sb3IgMzAlKVxuICAgICAgdG9wIGxlZnQgLyAxNTAlIDE1MCUgbm8tcmVwZWF0O1xuXG4gICAgJjo6LW1vei1wcm9ncmVzcy1iYXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgLy8gb3ZlcnJpZGUgYnVsbWEuY3NzXG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRwYWlyIGluICRjb2xvcnMge1xuICAgICAgJGNvbG9yOiBudGgoJHBhaXIsIDEpO1xuICAgICAgJi5pcy0jeyRuYW1lfSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcm9ncmVzcy1iYXItYmFja2dyb3VuZC1jb2xvclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDMwJSwgJHByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWNvbG9yIDMwJSlcbiAgICAgICAgICB0b3BcbiAgICAgICAgICBsZWZ0IC9cbiAgICAgICAgICAxNTAlXG4gICAgICAgICAgMTUwJVxuICAgICAgICAgIG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1pbmRldGVybWluYXRlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xuICB9XG59XG4iLCIucHJvZ3Jlc3Mge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnByb2dyZXNzIHtcbiAgYmFja2dyb3VuZDogI2RiZGJkYjtcbn1cbi5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGUge1xuICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUgMC43NXMgbGluZWFyIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzRhNGE0YSAzMCUsICNkYmRiZGIgMzAlKSB0b3AgbGVmdC8xNTAlIDE1MCUgbm8tcmVwZWF0O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGU6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5wcm9ncmVzczppbmRldGVybWluYXRlLmlzLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwZDFiMiAzMCUsICNkYmRiZGIgMzAlKSB0b3AgbGVmdC8xNTAlIDE1MCUgbm8tcmVwZWF0O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGUuaXMtbGluayB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGIgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjA5Y2VlIDMwJSwgI2RiZGJkYiAzMCUpIHRvcCBsZWZ0LzE1MCUgMTUwJSBuby1yZXBlYXQ7XG59XG4ucHJvZ3Jlc3M6aW5kZXRlcm1pbmF0ZS5pcy1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2RiZGJkYiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMjczZGMgMzAlLCAjZGJkYmRiIDMwJSkgdG9wIGxlZnQvMTUwJSAxNTAlIG5vLXJlcGVhdDtcbn1cbi5wcm9ncmVzczppbmRldGVybWluYXRlLmlzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIzZDE2MCAzMCUsICNkYmRiZGIgMzAlKSB0b3AgbGVmdC8xNTAlIDE1MCUgbm8tcmVwZWF0O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGUuaXMtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGIgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZkZDU3IDMwJSwgI2RiZGJkYiAzMCUpIHRvcCBsZWZ0LzE1MCUgMTUwJSBuby1yZXBlYXQ7XG59XG4ucHJvZ3Jlc3M6aW5kZXRlcm1pbmF0ZS5pcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzg2MCAzMCUsICNkYmRiZGIgMzAlKSB0b3AgbGVmdC8xNTAlIDE1MCUgbm8tcmVwZWF0O1xufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzLWluZGV0ZXJtaW5hdGUge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-loading',
                templateUrl: './loading.component.html',
                styleUrls: ['./loading.component.scss']
            }]
    }], function () { return [{ type: _shell_service__WEBPACK_IMPORTED_MODULE_1__["ShellService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/shell/src/lib/pipeline/pipeline-task/pipeline-task.component.ts":
/*!**********************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/pipeline/pipeline-task/pipeline-task.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: PipelineTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineTaskComponent", function() { return PipelineTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var _models4insight_version__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @models4insight/version */ "../../libs/version/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shell_config_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shell-config.service */ "../../libs/shell/src/lib/shell-config.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






















function PipelineTaskComponent_article_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r27.task.currentOperation.description);
} }
function PipelineTaskComponent_article_0_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "shell.pipeline.error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, ctx_r31.task.currentOperation.description), " ");
} }
function PipelineTaskComponent_article_0_ng_container_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r32.task.error, " ", ctx_r32.task.error == null ? null : ctx_r32.task.error.message, " ");
} }
function PipelineTaskComponent_article_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "shell.pipeline.oops");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PipelineTaskComponent_article_0_ng_container_5_ng_container_7_Template, 5, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PipelineTaskComponent_article_0_ng_container_5_ng_container_8_Template, 2, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r28.task.options.showDetailedErrorDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r28.task.options.showDetailedErrorDescription);
} }
function PipelineTaskComponent_article_0_ng_container_6_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "shell.pipeline.report");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r35.faBug);
} }
function PipelineTaskComponent_article_0_ng_container_6_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "shell.pipeline.thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0, a1) { return { "is-loading": a0, "is-static": a1 }; };
function PipelineTaskComponent_article_0_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PipelineTaskComponent_article_0_ng_container_6_ng_container_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r37.report(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PipelineTaskComponent_article_0_ng_container_6_ng_container_3_ng_container_2_Template, 5, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PipelineTaskComponent_article_0_ng_container_6_ng_container_3_ng_container_3_Template, 3, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c0, ctx_r33.isReporting, ctx_r33.hasBeenReported));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r33.hasBeenReported);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r33.hasBeenReported);
} }
function PipelineTaskComponent_article_0_ng_container_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PipelineTaskComponent_article_0_ng_container_6_ng_container_4_ng_container_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r41.navigate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r39.faArrowRight);
} }
function PipelineTaskComponent_article_0_ng_container_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PipelineTaskComponent_article_0_ng_container_6_ng_container_4_ng_container_1_Template, 4, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.task.currentNavigationContext);
} }
function PipelineTaskComponent_article_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PipelineTaskComponent_article_0_ng_container_6_ng_container_3_Template, 4, 6, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PipelineTaskComponent_article_0_ng_container_6_ng_container_4_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PipelineTaskComponent_article_0_ng_container_6_Template_a_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r43.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.task.currentState === ctx_r29.TaskState.ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r29.task.currentState === ctx_r29.TaskState.INTERRUPTED);
} }
function PipelineTaskComponent_article_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "progress", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r45.task.currentOperation.index / ctx_r45.task.operations.length * 100);
} }
function PipelineTaskComponent_article_0_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "progress", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function PipelineTaskComponent_article_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PipelineTaskComponent_article_0_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PipelineTaskComponent_article_0_ng_container_7_ng_container_2_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.task.operations.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.task.operations.length === 1);
} }
const _c1 = function (a0, a1, a2) { return { "is-success": a0, "is-warning": a1, "is-danger": a2 }; };
function PipelineTaskComponent_article_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "article", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PipelineTaskComponent_article_0_ng_container_4_Template, 3, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PipelineTaskComponent_article_0_ng_container_5_Template, 9, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PipelineTaskComponent_article_0_ng_container_6_Template, 6, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PipelineTaskComponent_article_0_ng_container_7_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](5, _c1, ctx_r26.task.currentState === ctx_r26.TaskState.RUNNING || ctx_r26.task.currentState === ctx_r26.TaskState.DONE, ctx_r26.task.currentState === ctx_r26.TaskState.INTERRUPTED, ctx_r26.task.currentState === ctx_r26.TaskState.ERROR));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.task.currentState === ctx_r26.TaskState.RUNNING || ctx_r26.task.currentState === ctx_r26.TaskState.INTERRUPTED);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.task.currentState === ctx_r26.TaskState.ERROR);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.task.currentState === ctx_r26.TaskState.ERROR || ctx_r26.task.currentState === ctx_r26.TaskState.INTERRUPTED || ctx_r26.task.currentState === ctx_r26.TaskState.DONE);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r26.task.currentState === ctx_r26.TaskState.RUNNING);
} }
class PipelineTaskComponent {
    constructor(authenticationService, router, taskManager, storeService, versionService, config = {}) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.taskManager = taskManager;
        this.storeService = storeService;
        this.versionService = versionService;
        this.config = config;
        this.TaskState = _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_7__["TaskState"];
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowRight"];
        this.faBug = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBug"];
        this.report$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this.isReporting = false;
        this.hasBeenReported = false;
    }
    ngOnInit() {
        this.report$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["exhaustMap"])(() => this.handleReportError()), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_8__["untilDestroyed"])(this))
            .subscribe();
    }
    ngOnDestroy() { }
    clear() {
        this.taskManager.clearTask(this.task.id);
    }
    navigate() {
        const { route, relativeTo } = this.task.currentNavigationContext;
        this.router
            .navigate(route, { relativeTo: relativeTo })
            .then(() => this.clear());
    }
    report() {
        this.report$.next();
    }
    handleReportError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isReporting = true;
            const username = yield this.authenticationService.get([
                'credentials',
                'username'
            ]);
            try {
                yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_6__["reportError"])(this.config.appName, this.versionService.appVersion, this.task.error, username, this.storeService.snapshot).toPromise();
            }
            finally {
                this.hasBeenReported = true;
                this.isReporting = false;
            }
        });
    }
}
PipelineTaskComponent.ɵfac = function PipelineTaskComponent_Factory(t) { return new (t || PipelineTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_5__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_models4insight_version__WEBPACK_IMPORTED_MODULE_9__["VersionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shell_config_service__WEBPACK_IMPORTED_MODULE_12__["ShellConfigService"], 8)); };
PipelineTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PipelineTaskComponent, selectors: [["models4insight-pipeline-task"]], inputs: { task: "task" }, decls: 1, vars: 1, consts: [["class", "message", "role", "alert", 3, "ngClass", 4, "ngIf"], ["role", "alert", 1, "message", 3, "ngClass"], [1, "message-body", "has-background-light"], [1, "columns", "is-mobile"], [1, "column", "is-vcentered"], [4, "ngIf"], [1, "content"], ["translate", ""], [1, "column", "is-narrow", "is-vcentered"], [1, "buttons"], [1, "delete", 3, "click"], [1, "button", "is-danger", 3, "ngClass", "click"], [1, "icon"], [3, "icon"], [1, "button", "is-warning", 3, "click"], ["max", "100", 1, "progress", "is-success", 3, "value"], ["max", "100", 1, "progress", "is-success"]], template: function PipelineTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PipelineTaskComponent_article_0_Template, 8, 9, "article", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.task && (ctx.task.currentState === ctx.TaskState.RUNNING && !ctx.task.options.isQuiet || ctx.task.currentState == ctx.TaskState.INTERRUPTED && !ctx.task.options.isQuiet || ctx.task.currentState === ctx.TaskState.DONE && !ctx.task.options.clearOnSuccess || ctx.task.currentState === ctx.TaskState.ERROR && !ctx.task.options.clearOnError));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FaIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["LowerCasePipe"]], styles: [".button[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.message-body[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n\n.progress[_ngcontent-%COMP%] {\n  background: #dbdbdb;\n}\n\n.progress[_ngcontent-%COMP%]::-webkit-progress-bar {\n  background: transparent !important;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate {\n  -webkit-animation: progress-indeterminate 1.5s linear infinite;\n          animation: progress-indeterminate 1.5s linear infinite;\n  background: #dbdbdb linear-gradient(to right, #4a4a4a 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate::-moz-progress-bar {\n  background: transparent !important;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-primary {\n  background: #dbdbdb linear-gradient(to right, #00d1b2 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-link {\n  background: #dbdbdb linear-gradient(to right, #209cee 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-info {\n  background: #dbdbdb linear-gradient(to right, #3273dc 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-success {\n  background: #dbdbdb linear-gradient(to right, #23d160 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-warning {\n  background: #dbdbdb linear-gradient(to right, #ffdd57 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n.progress[_ngcontent-%COMP%]:indeterminate.is-danger {\n  background: #dbdbdb linear-gradient(to right, #ff3860 30%, #dbdbdb 30%) top left/150% 150% no-repeat;\n}\n\n@-webkit-keyframes progress-indeterminate {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n@keyframes progress-indeterminate {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hlbGwvc3JjL2xpYi9waXBlbGluZS9waXBlbGluZS10YXNrL0M6XFxVc2Vyc1xcdGhpanNcXERldmVsb3BtZW50XFxtb2RlbHM0aW5zaWdodC9saWJzXFxzaGVsbFxcc3JjXFxsaWJcXHBpcGVsaW5lXFxwaXBlbGluZS10YXNrXFxwaXBlbGluZS10YXNrLmNvbXBvbmVudC5zY3NzIiwibGlicy9zaGVsbC9zcmMvbGliL3BpcGVsaW5lL3BpcGVsaW5lLXRhc2svcGlwZWxpbmUtdGFzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUdFLDJCQUFBO0FDQ0Y7O0FEaUNBO0VBQ0UsbUJBOUI4QjtBQ0FoQzs7QURnQ0U7RUFDRSxrQ0FBQTtBQzlCSjs7QURpQ0U7RUFDRSw4REFBQTtVQUFBLHNEQUFBO0VBQ0Esb0dBQUE7QUMvQko7O0FEa0NJO0VBQ0Usa0NBQUE7QUNoQ047O0FEcUNNO0VBQ0Usb0dBQUE7QUNuQ1I7O0FEa0NNO0VBQ0Usb0dBQUE7QUNoQ1I7O0FEK0JNO0VBQ0Usb0dBQUE7QUM3QlI7O0FENEJNO0VBQ0Usb0dBQUE7QUMxQlI7O0FEeUJNO0VBQ0Usb0dBQUE7QUN2QlI7O0FEc0JNO0VBQ0Usb0dBQUE7QUNwQlI7O0FEZ0NBO0VBQ0U7SUFDRSwyQkFBQTtFQzdCRjtFRCtCQTtJQUNFLDRCQUFBO0VDN0JGO0FBQ0Y7O0FEdUJBO0VBQ0U7SUFDRSwyQkFBQTtFQzdCRjtFRCtCQTtJQUNFLDRCQUFBO0VDN0JGO0FBQ0YiLCJmaWxlIjoibGlicy9zaGVsbC9zcmMvbGliL3BpcGVsaW5lL3BpcGVsaW5lLXRhc2svcGlwZWxpbmUtdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lc3NhZ2UtYm9keSB7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4kcHJpbWFyeTogIzAwZDFiMjtcbiR0ZXh0OiAjNGE0YTRhO1xuJHByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xuJGR1bW15LWludmVydDogd2hpdGU7XG4kY29sb3JzOiAoXG4gIFwicHJpbWFyeVwiOiAoXG4gICAgJHByaW1hcnksXG4gICAgJHByaW1hcnlcbiAgKSxcbiAgXCJsaW5rXCI6IChcbiAgICAjMjA5Y2VlLFxuICAgICMyMDljZWVcbiAgKSxcbiAgXCJpbmZvXCI6IChcbiAgICAjMzI3M2RjLFxuICAgICMzMjczZGNcbiAgKSxcbiAgXCJzdWNjZXNzXCI6IChcbiAgICAjMjNkMTYwLFxuICAgICMyM2QxNjBcbiAgKSxcbiAgXCJ3YXJuaW5nXCI6IChcbiAgICAjZmZkZDU3LFxuICAgICNmZmRkNTdcbiAgKSxcbiAgXCJkYW5nZXJcIjogKFxuICAgICNmZjM4NjAsXG4gICAgI2ZmMzg2MFxuICApXG4pO1xuXG4ucHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kOiAkcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtY29sb3I7XG5cbiAgJjo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IC8vIG92ZXJyaWRlIGJ1bG1hLmNzc1xuICB9XG5cbiAgJjppbmRldGVybWluYXRlIHtcbiAgICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUgMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYmFja2dyb3VuZDogJHByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWNvbG9yIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHRleHQgMzAlLCAkcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQtY29sb3IgMzAlKVxuICAgICAgdG9wIGxlZnQgLyAxNTAlIDE1MCUgbm8tcmVwZWF0O1xuXG4gICAgJjo6LW1vei1wcm9ncmVzcy1iYXIge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgLy8gb3ZlcnJpZGUgYnVsbWEuY3NzXG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRwYWlyIGluICRjb2xvcnMge1xuICAgICAgJGNvbG9yOiBudGgoJHBhaXIsIDEpO1xuICAgICAgJi5pcy0jeyRuYW1lfSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcm9ncmVzcy1iYXItYmFja2dyb3VuZC1jb2xvclxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJGNvbG9yIDMwJSwgJHByb2dyZXNzLWJhci1iYWNrZ3JvdW5kLWNvbG9yIDMwJSlcbiAgICAgICAgICB0b3BcbiAgICAgICAgICBsZWZ0IC9cbiAgICAgICAgICAxNTAlXG4gICAgICAgICAgMTUwJVxuICAgICAgICAgIG5vLXJlcGVhdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1pbmRldGVybWluYXRlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xuICB9XG59XG4iLCIuYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZXNzYWdlLWJvZHkge1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzIHtcbiAgYmFja2dyb3VuZDogI2RiZGJkYjtcbn1cbi5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGUge1xuICBhbmltYXRpb246IHByb2dyZXNzLWluZGV0ZXJtaW5hdGUgMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGIgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGE0YTRhIDMwJSwgI2RiZGJkYiAzMCUpIHRvcCBsZWZ0LzE1MCUgMTUwJSBuby1yZXBlYXQ7XG59XG4ucHJvZ3Jlc3M6aW5kZXRlcm1pbmF0ZTo6LW1vei1wcm9ncmVzcy1iYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGUuaXMtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGIgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBkMWIyIDMwJSwgI2RiZGJkYiAzMCUpIHRvcCBsZWZ0LzE1MCUgMTUwJSBuby1yZXBlYXQ7XG59XG4ucHJvZ3Jlc3M6aW5kZXRlcm1pbmF0ZS5pcy1saW5rIHtcbiAgYmFja2dyb3VuZDogI2RiZGJkYiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMDljZWUgMzAlLCAjZGJkYmRiIDMwJSkgdG9wIGxlZnQvMTUwJSAxNTAlIG5vLXJlcGVhdDtcbn1cbi5wcm9ncmVzczppbmRldGVybWluYXRlLmlzLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzMyNzNkYyAzMCUsICNkYmRiZGIgMzAlKSB0b3AgbGVmdC8xNTAlIDE1MCUgbm8tcmVwZWF0O1xufVxuLnByb2dyZXNzOmluZGV0ZXJtaW5hdGUuaXMtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGIgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjNkMTYwIDMwJSwgI2RiZGJkYiAzMCUpIHRvcCBsZWZ0LzE1MCUgMTUwJSBuby1yZXBlYXQ7XG59XG4ucHJvZ3Jlc3M6aW5kZXRlcm1pbmF0ZS5pcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2RiZGJkYiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmRkNTcgMzAlLCAjZGJkYmRiIDMwJSkgdG9wIGxlZnQvMTUwJSAxNTAlIG5vLXJlcGVhdDtcbn1cbi5wcm9ncmVzczppbmRldGVybWluYXRlLmlzLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNkYmRiZGIgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzODYwIDMwJSwgI2RiZGJkYiAzMCUpIHRvcCBsZWZ0LzE1MCUgMTUwJSBuby1yZXBlYXQ7XG59XG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZSB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PipelineTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'models4insight-pipeline-task',
                templateUrl: './pipeline-task.component.html',
                styleUrls: ['./pipeline-task.component.scss']
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_7__["TaskManagerService"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_5__["StoreService"] }, { type: _models4insight_version__WEBPACK_IMPORTED_MODULE_9__["VersionService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_shell_config_service__WEBPACK_IMPORTED_MODULE_12__["ShellConfigService"]]
            }] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../../libs/shell/src/lib/pipeline/pipeline.component.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/pipeline/pipeline.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PipelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipelineComponent", function() { return PipelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipeline_task_pipeline_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipeline-task/pipeline-task.component */ "../../libs/shell/src/lib/pipeline/pipeline-task/pipeline-task.component.ts");







function PipelineComponent_models4insight_pipeline_task_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "models4insight-pipeline-task", 1);
} if (rf & 2) {
    const task_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", task_r48);
} }
class PipelineComponent {
    constructor(taskManager) {
        this.taskManager = taskManager;
    }
    ngOnInit() {
        // Select the tasks from the task manager that are not pending
        this.tasks$ = this.taskManager
            .select('tasks')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(tasks => Object.values(tasks).filter(task => task.currentState !== _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_1__["TaskState"].PENDING)));
    }
}
PipelineComponent.ɵfac = function PipelineComponent_Factory(t) { return new (t || PipelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_models4insight_task_manager__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"])); };
PipelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PipelineComponent, selectors: [["models4insight-pipeline"]], decls: 2, vars: 3, consts: [[3, "task", 4, "ngFor", "ngForOf"], [3, "task"]], template: function PipelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PipelineComponent_models4insight_pipeline_task_0_Template, 1, 1, "models4insight-pipeline-task", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.tasks$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _pipeline_task_pipeline_task_component__WEBPACK_IMPORTED_MODULE_4__["PipelineTaskComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".alert[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hlbGwvc3JjL2xpYi9waXBlbGluZS9waXBlbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsMkJBQTJCO0FBQzdCIiwiZmlsZSI6ImxpYnMvc2hlbGwvc3JjL2xpYi9waXBlbGluZS9waXBlbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0IHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-pipeline',
                templateUrl: './pipeline.component.html',
                styleUrls: ['./pipeline.component.css']
            }]
    }], function () { return [{ type: _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_1__["TaskManagerService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/shell/src/lib/route-reusable-strategy.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/route-reusable-strategy.ts ***!
  \***********************************************************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
class RouteReusableStrategy extends _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"] {
    shouldDetach(route) {
        return false;
    }
    store(route, detachedTree) { }
    shouldAttach(route) {
        return false;
    }
    retrieve(route) {
        return null;
    }
    shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig || future.data.reuse;
    }
}


/***/ }),

/***/ "../../libs/shell/src/lib/shell-config.service.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/shell-config.service.ts ***!
  \********************************************************************************************/
/*! exports provided: ShellConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellConfigService", function() { return ShellConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const ShellConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('ShellConfig');


/***/ }),

/***/ "../../libs/shell/src/lib/shell.component.ts":
/*!***************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/shell.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell.service */ "../../libs/shell/src/lib/shell.service.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "../../libs/shell/src/lib/header/header.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading/loading.component */ "../../libs/shell/src/lib/loading/loading.component.ts");
/* harmony import */ var _pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipeline/pipeline.component */ "../../libs/shell/src/lib/pipeline/pipeline.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "../../libs/shell/src/lib/footer/footer.component.ts");










const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_1__["Logger"]('ShellComponent');
class ShellComponent {
    constructor(shellService) {
        this.shellService = shellService;
    }
    /** Scroll to the top of the page whenever a new component is loaded */
    onActivate() {
        const scrollToTop = window.setInterval(() => {
            const pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
    /**
     * Triggers a check whether the current authentication token is still valid whenever the user (re-)focusses the shell
     */
    onFocus() {
        this.shellService.updateToken();
    }
}
ShellComponent.ɵfac = function ShellComponent_Factory(t) { return new (t || ShellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"])); };
ShellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShellComponent, selectors: [["models4insight-shell"]], hostBindings: function ShellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ShellComponent_focus_HostBindingHandler($event) { return ctx.onFocus(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 2, consts: [[1, "sticky"], [1, "is-tall-container", "has-background-light"], [3, "activate"]], template: function ShellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "models4insight-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "models4insight-loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "models4insight-pipeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "router-outlet", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function ShellComponent_Template_router_outlet_activate_5_listener($event) { return ctx.onActivate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "models4insight-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", "100%");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _loading_loading_component__WEBPACK_IMPORTED_MODULE_4__["LoadingComponent"], _pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_5__["PipelineComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".is-tall-container[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 100vh;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 4.25rem;\n  overflow: hidden;\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYnMvc2hlbGwvc3JjL2xpYi9DOlxcVXNlcnNcXHRoaWpzXFxEZXZlbG9wbWVudFxcbW9kZWxzNGluc2lnaHQvbGlic1xcc2hlbGxcXHNyY1xcbGliXFxzaGVsbC5jb21wb25lbnQuc2NzcyIsImxpYnMvc2hlbGwvc3JjL2xpYi9zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJsaWJzL3NoZWxsL3NyYy9saWIvc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtdGFsbC1jb250YWluZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0LjI1cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgei1pbmRleDogMTA7XHJcbn0iLCIuaXMtdGFsbC1jb250YWluZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5zdGlja3kge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNC4yNXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-shell',
                templateUrl: './shell.component.html',
                styleUrls: ['./shell.component.scss']
            }]
    }], function () { return [{ type: _shell_service__WEBPACK_IMPORTED_MODULE_2__["ShellService"] }]; }, { onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:focus']
        }] }); })();


/***/ }),

/***/ "../../libs/shell/src/lib/shell.module.ts":
/*!************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/shell.module.ts ***!
  \************************************************************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _models4insight_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/i18n */ "../../libs/i18n/src/index.ts");
/* harmony import */ var _models4insight_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/permissions */ "../../libs/permissions/src/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../translations/en-US.json */ "../../libs/shell/src/translations/en-US.json");
var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../translations/en-US.json */ "../../libs/shell/src/translations/en-US.json", 1);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "../../libs/shell/src/lib/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "../../libs/shell/src/lib/header/header.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loading/loading.component */ "../../libs/shell/src/lib/loading/loading.component.ts");
/* harmony import */ var _pipeline_pipeline_task_pipeline_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipeline/pipeline-task/pipeline-task.component */ "../../libs/shell/src/lib/pipeline/pipeline-task/pipeline-task.component.ts");
/* harmony import */ var _pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipeline/pipeline.component */ "../../libs/shell/src/lib/pipeline/pipeline.component.ts");
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./route-reusable-strategy */ "../../libs/shell/src/lib/route-reusable-strategy.ts");
/* harmony import */ var _shell_config_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shell-config.service */ "../../libs/shell/src/lib/shell-config.service.ts");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shell.component */ "../../libs/shell/src/lib/shell.component.ts");



















class ShellModule {
    constructor(i18nService) {
        this.i18nService = i18nService;
        this.i18nService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_7__);
    }
    static forRoot(config = {}) {
        return {
            ngModule: ShellModule,
            providers: [
                {
                    provide: _shell_config_service__WEBPACK_IMPORTED_MODULE_14__["ShellConfigService"],
                    useValue: config
                },
                {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"],
                    useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_13__["RouteReusableStrategy"]
                }
            ]
        };
    }
}
ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ShellModule });
ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ShellModule_Factory(t) { return new (t || ShellModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_i18n__WEBPACK_IMPORTED_MODULE_4__["I18nService"])); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _models4insight_permissions__WEBPACK_IMPORTED_MODULE_5__["FeatureModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ShellModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _shell_component__WEBPACK_IMPORTED_MODULE_15__["ShellComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
        _pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_12__["PipelineComponent"],
        _pipeline_pipeline_task_pipeline_task_component__WEBPACK_IMPORTED_MODULE_11__["PipelineTaskComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _models4insight_permissions__WEBPACK_IMPORTED_MODULE_5__["FeatureModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _models4insight_permissions__WEBPACK_IMPORTED_MODULE_5__["FeatureModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild(),
                ],
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                    _shell_component__WEBPACK_IMPORTED_MODULE_15__["ShellComponent"],
                    _loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"],
                    _pipeline_pipeline_component__WEBPACK_IMPORTED_MODULE_12__["PipelineComponent"],
                    _pipeline_pipeline_task_pipeline_task_component__WEBPACK_IMPORTED_MODULE_11__["PipelineTaskComponent"]
                ]
            }]
    }], function () { return [{ type: _models4insight_i18n__WEBPACK_IMPORTED_MODULE_4__["I18nService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/shell/src/lib/shell.service.ts":
/*!*************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/shell.service.ts ***!
  \*************************************************************************************/
/*! exports provided: shellServiceDefaultState, ShellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shellServiceDefaultState", function() { return shellServiceDefaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellService", function() { return ShellService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");















const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_5__["Logger"]('ShellService');
const shellServiceDefaultState = {
    isAppInstallable: false,
    isNavigating: false,
    isUpdateAvailable: false
};
class ShellService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_6__["BasicStore"] {
    constructor(authenticationService, router, swUpdate, storeService) {
        super({
            defaultState: shellServiceDefaultState,
            name: 'ShellService',
            storeService
        });
        this.authenticationService = authenticationService;
        this.router = router;
        this.swUpdate = swUpdate;
        this.applyUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.installApp$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.updateToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.init();
    }
    ngOnDestroy() { }
    init() {
        // These are the top level routes of the application which are not configured to be hidden and are not redirects
        const routes = this.router.config.filter(route => route.redirectTo === undefined && !(route.data && route.data.hidden));
        // Update the store with the routes found
        this.update({
            description: 'New top level routes available',
            payload: { routes }
        });
        // Whenever update token fires, update the authentication token
        this.updateToken$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["exhaustMap"])(() => this.authenticationService.updateToken()), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe(() => log.debug('Authentication token successfully updated'));
        // Intercept router navigation events
        this.router.events
            .pipe(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe(event => this.navigationInterceptor(event));
        // Track the previous page route for go back functionality
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["concatMap"])(([previousRoute, currentRoute]) => this.handleTrackPreviousRoute(previousRoute, currentRoute)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
            .subscribe();
        // Handle service worker triggers if the service worker is enabled
        if (this.swUpdate.isEnabled) {
            // Check whether an update is available
            this.swUpdate.available.pipe(Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this)).subscribe(event => this.update({
                description: 'Service worker update available',
                payload: {
                    isUpdateAvailable: !!event
                }
            }));
            // When the user applies an update, activate the update and reload the page
            this.applyUpdate$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["exhaustMap"])(() => this.swUpdate.activateUpdate()), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
                .subscribe(() => document.location.reload());
            // Check for updates on startup
            this.swUpdate.checkForUpdate();
            const beforeInstallPrompt$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(window, 'beforeinstallprompt').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["publish"])());
            beforeInstallPrompt$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.update({
                description: 'App is installable',
                payload: {
                    isAppInstallable: true
                }
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(event => event.userChoice), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])(() => this.update({
                description: 'User decided whether or not to install the app',
                payload: {
                    isAppInstallable: false
                }
            })), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
                .subscribe(decision => log.debug(`App install outcome: ${decision.outcome}`));
            // Prompt the user to install the app
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["combineLatest"])([beforeInstallPrompt$, this.installApp$])
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["exhaustMap"])(([event]) => event.prompt()), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_7__["untilDestroyed"])(this))
                .subscribe(() => log.debug('User prompted to intall the app'));
            beforeInstallPrompt$.connect();
        }
    }
    applyUpdate() {
        this.applyUpdate$.next();
    }
    installApp() {
        this.installApp$.next();
    }
    updateToken() {
        this.updateToken$.next();
    }
    handleTrackPreviousRoute(previousRoute, currentRoute) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [previousPath] = previousRoute.urlAfterRedirects.split('?'), [currentPath] = currentRoute.urlAfterRedirects.split('?');
            if (previousPath === currentPath)
                return;
            this.update({
                description: 'New previous route available',
                payload: { previousRoute: previousRoute.urlAfterRedirects }
            });
        });
    }
    navigationInterceptor(event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.update({
                description: 'Navigation start',
                payload: {
                    isNavigating: true
                }
            });
        }
        else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.update({
                description: 'Navigation complete',
                payload: {
                    isNavigating: false
                }
            });
        }
    }
}
ShellService.ɵfac = function ShellService_Factory(t) { return new (t || ShellService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_6__["StoreService"])); };
ShellService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShellService, factory: ShellService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShellService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _models4insight_authentication__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_6__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/shell/src/lib/shell.ts":
/*!*****************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/lib/shell.ts ***!
  \*****************************************************************************/
/*! exports provided: Shell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shell", function() { return Shell; });
/* harmony import */ var _models4insight_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models4insight/authentication */ "../../libs/authentication/src/index.ts");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell.component */ "../../libs/shell/src/lib/shell.component.ts");


/**
 * Provides helper methods to create routes.
 */
class Shell {
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return The new route using shell as the base.
     */
    static childRoutes(routes) {
        return {
            path: '',
            component: _shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"],
            children: routes,
            canActivate: [_models4insight_authentication__WEBPACK_IMPORTED_MODULE_0__["AuthenticationGuard"]],
            // Reuse ShellComponent instance when navigating between child views
            data: { reuse: true }
        };
    }
}


/***/ }),

/***/ "../../libs/shell/src/translations/en-US.json":
/*!****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/shell/src/translations/en-US.json ***!
  \****************************************************************************************/
/*! exports provided: shell, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"shell\":{\"header\":{\"documentation\":\"Documentation\",\"install\":\"Install app\",\"welcome\":\"Logged in as\",\"security\":\"Account security\",\"language\":\"Your language is\",\"logout\":\"Logout\",\"services\":\"Models4Insight services\",\"update\":\"Update available\"},\"footer\":{\"copyright\":\"Copyright\"},\"pipeline\":{\"error\":\"Something went wrong while\",\"oops\":\"Oops!\",\"report\":\"Report this error\",\"thanks\":\"Thank you!\"}}}");

/***/ }),

/***/ "../../libs/task-manager/src/index.ts":
/*!********************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/task-manager/src/index.ts ***!
  \********************************************************************************/
/*! exports provided: ManagedTask, TaskManagerModule, TaskState, defaultTaskOptions, Task, TaskManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_decorators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/decorators */ "../../libs/task-manager/src/lib/decorators.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ManagedTask", function() { return _lib_decorators__WEBPACK_IMPORTED_MODULE_0__["ManagedTask"]; });

/* harmony import */ var _lib_task_manager_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/task-manager.module */ "../../libs/task-manager/src/lib/task-manager.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskManagerModule", function() { return _lib_task_manager_module__WEBPACK_IMPORTED_MODULE_1__["TaskManagerModule"]; });

/* harmony import */ var _lib_task_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/task-manager.service */ "../../libs/task-manager/src/lib/task-manager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskState", function() { return _lib_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTaskOptions", function() { return _lib_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["defaultTaskOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return _lib_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["Task"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskManagerService", function() { return _lib_task_manager_service__WEBPACK_IMPORTED_MODULE_2__["TaskManagerService"]; });






/***/ }),

/***/ "../../libs/task-manager/src/lib/decorators.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/task-manager/src/lib/decorators.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManagedTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagedTask", function() { return ManagedTask; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _task_manager_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-manager.module */ "../../libs/task-manager/src/lib/task-manager.module.ts");
/* harmony import */ var _task_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-manager.service */ "../../libs/task-manager/src/lib/task-manager.service.ts");




function createOperation(original, args, thisArg) {
    try {
        return original.apply(thisArg, args);
    }
    catch (e) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(e);
    }
}
function getTaskManagerService() {
    if (!_task_manager_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagerModule"].injector) {
        throw new Error('Tried running a managed task while the TaskManager module was not loaded. Please make sure the Task Manager module is imported.');
    }
    return _task_manager_module__WEBPACK_IMPORTED_MODULE_2__["TaskManagerModule"].injector.get(_task_manager_service__WEBPACK_IMPORTED_MODULE_3__["TaskManagerService"]);
}
/**
 * Method decorator for functions returning an observable.
 * Registers the observable returned by the function as a managed task with the Task Manager.
 * Returns the executable of the Task instead.
 *
 * Use this decorator whenever you need to define a task with a single step.
 */
function ManagedTask(description, options) {
    return function (target, key, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const taskManagerService = getTaskManagerService();
                const operation = {
                    operation: createOperation(original, args, this),
                    description: description
                };
                const task = taskManagerService.createTask([operation], options);
                const executable = yield task.getExecutable();
                return executable.toPromise();
            });
        };
        return descriptor;
    };
}


/***/ }),

/***/ "../../libs/task-manager/src/lib/task-manager.module.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/task-manager/src/lib/task-manager.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: TaskManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerModule", function() { return TaskManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TaskManagerModule {
    constructor(injector, parentModule) {
        if (parentModule) {
            throw new Error('TaskManagerModule is already loaded. Import it in the AppModule only');
        }
        TaskManagerModule.injector = injector;
    }
}
TaskManagerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TaskManagerModule });
TaskManagerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TaskManagerModule_Factory(t) { return new (t || TaskManagerModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TaskManagerModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskManagerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: TaskManagerModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/task-manager/src/lib/task-manager.service.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/task-manager/src/lib/task-manager.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: TaskState, defaultTaskOptions, Task, TaskManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskState", function() { return TaskState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTaskOptions", function() { return defaultTaskOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskManagerService", function() { return TaskManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _models4insight_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/logger */ "../../libs/logger/src/index.ts");
/* harmony import */ var _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/redux */ "../../libs/redux/src/index.ts");
/* harmony import */ var _models4insight_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @models4insight/utils */ "../../libs/utils/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "../../node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _task_manager_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-manager.module */ "../../libs/task-manager/src/lib/task-manager.module.ts");













const log = new _models4insight_logger__WEBPACK_IMPORTED_MODULE_3__["Logger"]('TaskManager');
var TaskState;
(function (TaskState) {
    TaskState["PENDING"] = "pending";
    TaskState["RUNNING"] = "running";
    TaskState["DONE"] = "done";
    TaskState["ERROR"] = "error";
    TaskState["INTERRUPTED"] = "interrupted";
})(TaskState || (TaskState = {}));
const defaultTaskOptions = {
    clearOnError: false,
    clearOnSuccess: true,
    isQuiet: false,
    showDetailedErrorDescription: false
};
class Task {
    constructor(id, managedBy, router) {
        this.id = id;
        this.managedBy = managedBy;
        this.router = router;
        this.interrupt$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    addOperation(operation) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const operations = yield this.managedBy.get(['tasks', this.id, 'operations'], { includeFalsy: true });
            this.managedBy.update({
                description: `Added an operation for task ${this.id}`,
                path: ['tasks', this.id, 'operations'],
                payload: [...operations, operation]
            });
        });
    }
    /** Interrupts the task if it is currently running */
    interrupt() {
        this.interrupt$.next();
        this.managedBy.update({
            description: `Task ${this.id} was interrupted`,
            path: ['tasks', this.id, 'currentState'],
            payload: TaskState.INTERRUPTED
        });
    }
    /** Returns an executable of this task */
    getExecutable() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const task = yield this.managedBy.get(['tasks', this.id]);
            const onStart = () => this.managedBy.update({
                description: `Task ${task.id} started`,
                path: ['tasks', task.id, 'currentState'],
                payload: TaskState.RUNNING
            });
            const pipeline = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["range"])(0, task.operations.length), Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(task.operations)).pipe(
            // Execute each operation sequentially. Ensure each task completes by only taking at most one emission from the stream
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(([index, operation]) => this.handleOperation(task.id, operation, index)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeLast"])(1));
            const onComplete = () => {
                this.managedBy.update({
                    description: `Task ${this.id} completed`,
                    path: ['tasks', this.id, 'currentState'],
                    payload: TaskState.DONE
                });
                this.finalize(task);
            };
            const onInterrupt = () => {
                this.managedBy.update({
                    description: `Task ${this.id} interrupted`,
                    path: ['tasks', this.id, 'currentState'],
                    payload: TaskState.INTERRUPTED
                });
            };
            const onError = (error) => {
                this.managedBy.update({
                    description: `Task ${task.id} encountered an error`,
                    path: ['tasks', task.id, 'error'],
                    payload: error
                });
                this.managedBy.update({
                    description: `Task ${task.id} completed with an error`,
                    path: ['tasks', task.id, 'currentState'],
                    payload: TaskState.ERROR
                });
                return rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
            };
            const interrupt = this.interrupt$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(onInterrupt));
            const tasks = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(task).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(onStart), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMapTo"])(pipeline), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(onComplete), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(onError));
            const executable = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["race"])(tasks, interrupt);
            return executable;
        });
    }
    /**
     * Can be used to override the description of the current operation
     */
    set currentDescription(description) {
        this.managedBy.update({
            description: `Task ${this.id} description updated`,
            path: ['tasks', this.id, 'currentOperation', 'description'],
            payload: description
        });
    }
    set currentNavigationContext(context) {
        this.managedBy.update({
            description: `Task ${this.id} navigation context updated`,
            path: ['tasks', this.id, 'currentNavigationContext'],
            payload: context
        });
    }
    finalize(task) {
        // When the task completed successfully...
        if (task.currentState === TaskState.DONE) {
            if (task.options.navigateOnSuccess) {
                this.navigate(task.options.navigateOnSuccess);
            }
        }
        // When the task completed with an error...
        if (task.currentState === TaskState.ERROR) {
            if (task.options.navigateOnError) {
                this.navigate(task.options.navigateOnError);
            }
        }
    }
    handleOperation(taskId, operation, index) {
        this.managedBy.update({
            description: 'Start executing operation',
            path: ['tasks', taskId, 'currentOperation'],
            payload: {
                description: operation.description || `Step ${index}`,
                index: index
            }
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => log.time(taskId, operation.description)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => operation.operation), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => log.timeEnd(taskId, operation.description)));
    }
    navigate(context) {
        this.router.navigate(context.route, { relativeTo: context.relativeTo });
    }
}
class TaskManagerService extends _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["BasicStore"] {
    constructor(router, storeService) {
        super({ name: 'TaskManagerService', storeService });
        this.router = router;
        this.init();
    }
    init() {
        // Clean up completed tasks that can be removed from the queue
        this.watch('tasks')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["concatMap"])(tasks => this.handleRemoveCompletedTasks(tasks)), Object(_models4insight_utils__WEBPACK_IMPORTED_MODULE_5__["untilDestroyed"])(this))
            .subscribe();
    }
    createTask(operations = [], options = {}) {
        const taskId = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
        this.update({
            description: `Task ${taskId} created`,
            path: ['tasks', taskId],
            payload: {
                currentState: TaskState.PENDING,
                id: taskId,
                operations: operations,
                options: Object.assign(Object.assign({}, defaultTaskOptions), options)
            }
        });
        return new Task(taskId, this, this.router);
    }
    clearTask(taskId) {
        this.delete({
            description: `Cleared task ${taskId}`,
            path: ['tasks', taskId]
        });
    }
    handleRemoveCompletedTasks(tasks) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const task of tasks) {
                const clearAfterError = task.currentState === TaskState.ERROR && task.options.clearOnError, clearAfterSuccess = task.currentState === TaskState.DONE && task.options.clearOnSuccess;
                if (clearAfterError || clearAfterSuccess) {
                    this.clearTask(task.id);
                }
            }
        });
    }
}
TaskManagerService.ɵfac = function TaskManagerService_Factory(t) { return new (t || TaskManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["StoreService"])); };
TaskManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TaskManagerService, factory: TaskManagerService.ɵfac, providedIn: _task_manager_module__WEBPACK_IMPORTED_MODULE_9__["TaskManagerModule"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TaskManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: _task_manager_module__WEBPACK_IMPORTED_MODULE_9__["TaskManagerModule"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _models4insight_redux__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }]; }, null); })();


/***/ }),

/***/ "../../libs/utils/src/index.ts":
/*!*************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/index.ts ***!
  \*************************************************************************/
/*! exports provided: BidirectionalMultiMap, ComplexSet, CustomError, Stream, b64ToB64url, b64toBlob, b64urlToB64, buildWorkerBlobURL, bytesToBinaryString, circularReplacer, combinations, copyToClipboard, decodeXML, enumerate, findLast, flattenObject, fromEntries, getQueryParametersFromUrl, groupBy, indexByProperty, iterate, iterator, defaultCacheLimit, defaultResolver, memoize, pairs, pairwise, permutations, raceUntil, readFileAsString, rgbToHex, saveAsFile, stringToHash, substrings, union, userAgentIsEdge, userAgentIsInternetExplorer, validateRequiredArguments, defaultIfFalsy, switchTap, untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/classes */ "../../libs/utils/src/lib/classes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BidirectionalMultiMap", function() { return _lib_classes__WEBPACK_IMPORTED_MODULE_0__["BidirectionalMultiMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplexSet", function() { return _lib_classes__WEBPACK_IMPORTED_MODULE_0__["ComplexSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return _lib_classes__WEBPACK_IMPORTED_MODULE_0__["CustomError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return _lib_classes__WEBPACK_IMPORTED_MODULE_0__["Stream"]; });

/* harmony import */ var _lib_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/functions */ "../../libs/utils/src/lib/functions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64ToB64url", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["b64ToB64url"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64toBlob", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["b64toBlob"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64urlToB64", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["b64urlToB64"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildWorkerBlobURL", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["buildWorkerBlobURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bytesToBinaryString", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["bytesToBinaryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circularReplacer", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["circularReplacer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combinations", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["combinations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["copyToClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeXML", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["decodeXML"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerate", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["enumerate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["findLast"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenObject", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["flattenObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEntries", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["fromEntries"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryParametersFromUrl", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["getQueryParametersFromUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["groupBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexByProperty", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["indexByProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["iterate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["iterator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCacheLimit", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["defaultCacheLimit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultResolver", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["defaultResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["memoize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["pairs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["pairwise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permutations", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["permutations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raceUntil", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["raceUntil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readFileAsString", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["readFileAsString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["rgbToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveAsFile", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["saveAsFile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToHash", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["stringToHash"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "substrings", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["substrings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["union"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAgentIsEdge", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["userAgentIsEdge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAgentIsInternetExplorer", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["userAgentIsInternetExplorer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateRequiredArguments", function() { return _lib_functions__WEBPACK_IMPORTED_MODULE_1__["validateRequiredArguments"]; });

/* harmony import */ var _lib_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/rxjs-operators */ "../../libs/utils/src/lib/rxjs-operators/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIfFalsy", function() { return _lib_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["defaultIfFalsy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTap", function() { return _lib_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchTap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return _lib_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"]; });






/***/ }),

/***/ "../../libs/utils/src/lib/classes/bidirectional-multi-map.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/classes/bidirectional-multi-map.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BidirectionalMultiMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidirectionalMultiMap", function() { return BidirectionalMultiMap; });
/* harmony import */ var mnemonist_multi_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnemonist/multi-map */ "../../node_modules/mnemonist/multi-map.js");
/* harmony import */ var mnemonist_multi_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mnemonist_multi_map__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A multi-map implementation that also maintains a shadow copy mapping all values to their respective keys.
 */
class BidirectionalMultiMap {
    constructor(container = Array) {
        this.mapping = new mnemonist_multi_map__WEBPACK_IMPORTED_MODULE_0___default.a(container);
        this.inverse = new mnemonist_multi_map__WEBPACK_IMPORTED_MODULE_0___default.a(container);
    }
    clear() {
        this.inverse.clear();
        this.mapping.clear();
    }
    delete(key) {
        var _a;
        for (const value of (_a = this.mapping.get(key), (_a !== null && _a !== void 0 ? _a : []))) {
            this.inverse.remove(value, key);
        }
        return this.mapping.delete(key);
    }
    remove(key, value) {
        this.inverse.remove(value, key);
        return this.mapping.remove(key, value);
    }
    set(key, value) {
        this.inverse.set(value, key);
        return this.mapping.set(key, value);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/classes/complex-set.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/classes/complex-set.ts ***!
  \*******************************************************************************************/
/*! exports provided: ComplexSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplexSet", function() { return ComplexSet; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

class ComplexSet {
    /**
     * Represents a `Set` with a custom comparator.
     * This allows you to create sets of complex objects.
     * The `isEqual` method from `lodash` is used by default.
     *
     * **IMPORTANT**: For primitive values, the built-in `Set` object is more efficient.
     */
    constructor(
    /**
     * This method determines whether or not an item is already present in the set.
     * Defaults to the `isEqual` method from `lodash`.
     */
    comparator = lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"]) {
        this.comparator = comparator;
        this.array = [];
    }
    /**
     * Adds one or more additional values to the set.
     * @param value the value(s) which should be added to the set.
     */
    add(value) {
        if (!Array.isArray(value)) {
            value = [value];
        }
        this.array = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["uniqWith"])([...this.array, ...value], this.comparator);
    }
    /**
     * Returns the set as an an array of unique items
     */
    get items() {
        return this.array;
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/classes/custom-error.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/classes/custom-error.ts ***!
  \********************************************************************************************/
/*! exports provided: CustomError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return CustomError; });
/** Custom error base class that allows instanceof checking */
class CustomError extends Error {
    constructor(message) {
        super(message);
        // Set the prototype explicitly
        Object.setPrototypeOf(this, new.target.prototype);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/classes/index.ts":
/*!*************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/classes/index.ts ***!
  \*************************************************************************************/
/*! exports provided: BidirectionalMultiMap, ComplexSet, CustomError, Stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bidirectional_multi_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bidirectional-multi-map */ "../../libs/utils/src/lib/classes/bidirectional-multi-map.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BidirectionalMultiMap", function() { return _bidirectional_multi_map__WEBPACK_IMPORTED_MODULE_0__["BidirectionalMultiMap"]; });

/* harmony import */ var _complex_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./complex-set */ "../../libs/utils/src/lib/classes/complex-set.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplexSet", function() { return _complex_set__WEBPACK_IMPORTED_MODULE_1__["ComplexSet"]; });

/* harmony import */ var _custom_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-error */ "../../libs/utils/src/lib/classes/custom-error.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomError", function() { return _custom_error__WEBPACK_IMPORTED_MODULE_2__["CustomError"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream */ "../../libs/utils/src/lib/classes/stream.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return _stream__WEBPACK_IMPORTED_MODULE_3__["Stream"]; });







/***/ }),

/***/ "../../libs/utils/src/lib/classes/stream.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/classes/stream.ts ***!
  \**************************************************************************************/
/*! exports provided: Stream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stream", function() { return Stream; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Sequence based on an Iterator that supports sequential operations similar to an `Array`.
 *
 * To perform a computation, stream operations are composed into a stream pipeline.
 * A stream pipeline consists of:
 *
 * - A single source (e.g. a `Function` that supplies an `Iterable`, or a `Generator` function)
 * - Zero or more intermediate operations (which transform the `Stream` into another `Stream`)
 * - A single terminal operation (which produces a result or side-effect)
 *
 * It is not required to end a stream pipeline with a terminal operation provided by this class.
 * A `Stream` can be consumed like any regular `Iterable`, e.g. using a `for...of` loop.
 *
 * Streams are lazy.
 * Computation on the source data is only performed when the terminal operation is initiated.
 * Source elements are consumed only as needed.
 */
class Stream {
    constructor(source) {
        this[Symbol.iterator] = source;
    }
    /**
     * Returns a `Stream` consisting of all elements of the given `source`.
     * @param source The source of the stream.
     */
    static from(source) {
        function* from() {
            yield* source;
        }
        return new Stream(from);
    }
    /**
     * Reduces the elements of this stream using the given `collector`.
     * @param collector the `Function` describing the reduction
     */
    collect(collector) {
        return collector(this);
    }
    /**
     * Returns a lazily concatenated `Stream` whose elements are all the elements of this stream followed by all the elements of the given `iterables`.
     * @param iterables The iterables that should be concatenated to this stream.
     */
    concat(...iterables) {
        function* concat(base) {
            yield* base;
            for (const iterable of iterables) {
                yield* iterable;
            }
        }
        return new Stream(() => concat(this));
    }
    /**
     * Returns a `Stream` consisting of the unique elements of this stream.
     * @param comparator Function that returns `true` if two stream elements are the same. Defaults to `isEqual`.
     */
    distinct(comparator = lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"]) {
        function* distinct(iterable) {
            const seenItems = [];
            for (const item of iterable) {
                const hasBeenSeen = seenItems.some(seen => comparator(item, seen));
                if (!hasBeenSeen) {
                    yield item;
                    seenItems.push(item);
                }
            }
        }
        return new Stream(() => distinct(this));
    }
    /**
     * Returns whether all elements of this stream match the given `predicate`.
     * @param predicate The test condition.
     */
    every(predicate) {
        for (const item of this) {
            if (!predicate(item)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Returns a `Stream` consisting of the elements of this stream that match the given `predicate`.
     * @param predicate The filter condition.
     */
    filter(predicate) {
        function* filter(iterable) {
            for (const item of iterable) {
                if (predicate(item)) {
                    yield item;
                }
            }
        }
        return new Stream(() => filter(this));
    }
    /**
     * Returns the first element of this stream that matches the given `predicate`.
     * @param predicate The test condition.
     */
    find(predicate) {
        for (const item of this) {
            if (predicate(item)) {
                return item;
            }
        }
    }
    /**
     * Returns the first element of this stream.
     */
    first() {
        for (const item of this) {
            return item;
        }
    }
    /**
     * Returns a `Stream` consisting of the results of replacing each element of this stream with the contents of a mapped `Iterable` produced by applying the provided `projection` to each element.
     * @param projection The function to apply to each element of this stream.
     */
    flatMap(projection) {
        function* map(iterable) {
            for (const item of iterable) {
                yield* projection(item);
            }
        }
        return new Stream(() => map(this));
    }
    /**
     * Performs an action for each element of this stream.
     * @param effect The action to perform.
     */
    forEach(effect) {
        for (const item of this) {
            effect(item);
        }
    }
    /**
     * Retruns a `Stream` consisting of the results of applying the given `projection` to the elements of this stream.
     * @param projection The function to apply to each element of this stream.
     */
    map(projection) {
        function* map(iterable) {
            for (const item of iterable) {
                yield projection(item);
            }
        }
        return new Stream(() => map(this));
    }
    /**
     * Returns whether no elements of this stream match the given `predicate`.
     * @param predicate The test condition.
     */
    none(predicate) {
        for (const item of this) {
            if (predicate(item)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Accumulates the elements of this stream.
     * @param accumulator The function that accumulates the elements of the stream.
     * @param startWith The starting value of the accumulation.
     */
    reduce(accumulator, startWith) {
        let accumulation = startWith;
        for (const item of this) {
            accumulation = accumulator(accumulation, item);
        }
        return accumulation;
    }
    /**
     * Returns a `Stream` consisting of the remaining elements of this stream after discarding the first given `number` of elements.
     * @param number The number of elements to skip.
     */
    skip(number) {
        function* skip(iterable) {
            let i = 0;
            for (const item of iterable) {
                if (i >= number) {
                    yield item;
                }
                i++;
            }
        }
        return new Stream(() => skip(this));
    }
    /**
     * Returns whether any elements of this stream match the given `predicate`.
     * @param predicate The test condition.
     */
    some(predicate) {
        for (const item of this) {
            if (predicate(item)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns a `Stream` consisting of the first given `number` of elements of this stream.
     * @param number The number of elements to take.
     */
    take(number) {
        function* take(iterable) {
            let i = 0;
            for (const item of iterable) {
                yield item;
                i++;
                if (i >= number) {
                    break;
                }
            }
        }
        return new Stream(() => take(number > 0 ? this : []));
    }
    /**
     * Returns a `Stream` consisting of the first elements of this stream that match the given `predicate`.
     * @param predicate The test condition.
     */
    takeUntil(predicate) {
        function* takeUntil(iterable) {
            for (const item of iterable) {
                if (predicate(item)) {
                    break;
                }
                yield item;
            }
        }
        return new Stream(() => takeUntil(this));
    }
    /**
     * Returns a `Stream` consisting of the elements of this stream, additionally performing the given `effect` on each element.
     * @param effect The effect to perform.
     */
    tap(effect) {
        function* tap(iterable) {
            for (const item of iterable) {
                effect(item);
                yield item;
            }
        }
        return new Stream(() => tap(this));
    }
    /**
     * Retruns an `Array` containing the elements of this stream.
     */
    toArray() {
        return Array.from(this);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/b64-to-b64url.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/b64-to-b64url.ts ***!
  \***********************************************************************************************/
/*! exports provided: b64ToB64url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64ToB64url", function() { return b64ToB64url; });
function b64ToB64url(base64) {
    return base64
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/b64-to-blob.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/b64-to-blob.ts ***!
  \*********************************************************************************************/
/*! exports provided: b64toBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64toBlob", function() { return b64toBlob; });
function b64toBlob(base64, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(base64);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/b64url-to-b64.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/b64url-to-b64.ts ***!
  \***********************************************************************************************/
/*! exports provided: b64urlToB64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64urlToB64", function() { return b64urlToB64; });
function b64urlToB64(base64url) {
    return base64url.replace(/_/g, '/').replace(/-/g, '+');
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/build-worker-blob-url.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/build-worker-blob-url.ts ***!
  \*******************************************************************************************************/
/*! exports provided: buildWorkerBlobURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildWorkerBlobURL", function() { return buildWorkerBlobURL; });
/**
 * Helper function to create an object URL for the given function.
 * Useful for executing the given function as a web worker.
 * Use this as a workaround only if native web worker compilation with Angular is not available, e.g. in libraries.
 *
 * @param workerFunction The function for which to create an object url
 */
function buildWorkerBlobURL(workerFunction) {
    const functionName = workerFunction.name;
    // Make sure code starts with "function()"
    // Chrome, Firefox: "[`functionName`](){...}", Safari: "function [`functionName`](){...}"
    // we need an anonymous function: "function() {...}"
    const functionAsString = workerFunction.toString().replace(/^function +/, '');
    // Convert to anonymous function
    const anonymousFunctionString = functionAsString.replace(functionName + '()', 'function()');
    // Self executing
    const workerString = '(' + anonymousFunctionString + ')();';
    // Build the worker blob
    const workerBlob = new Blob([workerString], { type: 'text/javascript' });
    const workerBlobUrl = window.URL.createObjectURL(workerBlob);
    return workerBlobUrl;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/bytes-to-binary-string.ts":
/*!********************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/bytes-to-binary-string.ts ***!
  \********************************************************************************************************/
/*! exports provided: bytesToBinaryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToBinaryString", function() { return bytesToBinaryString; });
/**
 * Converts a byte array to its UTF-16 string representation
 * @param bytes the byte array to convert
 * @param sliceSize the number of bytes to process per chunk
 */
function bytesToBinaryString(bytes, sliceSize = 512) {
    const len = bytes.byteLength;
    let binary = '';
    for (let i = 0; i < len; i += sliceSize) {
        binary += String.fromCharCode(...bytes.slice(i, i + sliceSize));
    }
    return binary;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/circular-replacer.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/circular-replacer.ts ***!
  \***************************************************************************************************/
/*! exports provided: circularReplacer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circularReplacer", function() { return circularReplacer; });
/**
 * Returns a function which replaces circular references in a JSON object
 */
function circularReplacer() {
    const seen = new WeakSet();
    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/combinations.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/combinations.ts ***!
  \**********************************************************************************************/
/*! exports provided: combinations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinations", function() { return combinations; });
function* combinations(iterable, length = 2) {
    // If the desired length is 0, yield nothing
    if (length === 0)
        return;
    // Keep a record of the items we've seen so far to cut down on processing and avoid duplicate combinations
    const seenItems = new Set();
    for (const currentItem of iterable) {
        if (seenItems.has(currentItem))
            continue;
        if (length === 1)
            yield [currentItem];
        // Concatenate the current item with combinations of the items that we've seen so far
        // This will eventually result in all combinations for the current item
        // The recursion stops when the desired length reaches 0
        for (const combination of combinations(seenItems, length - 1)) {
            yield [...combination, currentItem];
        }
        seenItems.add(currentItem);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/copy-to-clipboard.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/copy-to-clipboard.ts ***!
  \***************************************************************************************************/
/*! exports provided: copyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return copyToClipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

function fallbackCopyValueToClipboard(value) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed'; //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((resolve, reject) => {
            try {
                document.execCommand('copy')
                    ? resolve()
                    : reject(`Value ${value} could not be copied to the clipboard!`);
            }
            catch (e) {
                reject(e);
            }
            finally {
                document.body.removeChild(textArea);
            }
        });
    });
}
/**
 * Writes the given value to the clipboard.
 * @param value The value that should be written to the clipboard
 */
function copyToClipboard(value) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // If the clipboard API is supported by the browser, use it.
        // Otherwise, use a fallback method instead.
        return navigator.clipboard
            ? navigator.clipboard.writeText(value)
            : fallbackCopyValueToClipboard(value);
    });
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/decode-xml.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/decode-xml.ts ***!
  \********************************************************************************************/
/*! exports provided: decodeXML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeXML", function() { return decodeXML; });
const specialCharactersMap = {
    '&amp;': '&',
    '&quot;': '"',
    '&lt;': '<',
    '&gt;': '>',
    '&#xA;': '\n'
};
const pattern = new RegExp(Object.keys(specialCharactersMap).join('|'), 'g');
function replacer(specialCharacter) {
    return specialCharactersMap[specialCharacter];
}
/**
 * Replaces XML encoded characters in the given string with their respective decoded characters.
 * @param xml The string that contains XML encoded characters
 */
function decodeXML(xml) {
    if (!xml)
        return xml;
    return xml.replace(pattern, replacer);
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/enumerate.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/enumerate.ts ***!
  \*******************************************************************************************/
/*! exports provided: enumerate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerate", function() { return enumerate; });
/**
 * Iterates over the given `items` and yields for every item a tuple of that item and its sequential index.
 * @param items The items to iterate over.
 */
function* enumerate(items) {
    let index = 0;
    for (const item of items) {
        yield [item, index];
        index++;
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/find-last.ts":
/*!*******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/find-last.ts ***!
  \*******************************************************************************************/
/*! exports provided: findLast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return findLast; });
/**
 * Returns the final item of the given `items` that matches the given `predicate`.
 *
 * @param items The data to search through
 * @param predicate The condition that the item should match
 */
function findLast([...items], predicate) {
    for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (predicate(item)) {
            return item;
        }
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/flatten-object.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/flatten-object.ts ***!
  \************************************************************************************************/
/*! exports provided: flattenObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenObject", function() { return flattenObject; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./union */ "../../libs/utils/src/lib/functions/union.ts");


/**
 * Returns a flattened representation of the given object
 */
function flattenObject(
/** The object to flatten */
object) {
    let result = Object.assign({}, object);
    Object.keys(object).forEach(key => {
        const property = object[key];
        if (typeof property === 'object') {
            result = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["omit"])(Object(_union__WEBPACK_IMPORTED_MODULE_1__["union"])(result, flattenObject(property)), key);
        }
    });
    return result;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/from-entries.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/from-entries.ts ***!
  \**********************************************************************************************/
/*! exports provided: fromEntries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromEntries", function() { return fromEntries; });
/**
 * Builds a dictionary out of the given key-value pairs.
 *
 * @param entries The key-value pairs out of which to build the dictionary.
 */
function fromEntries(entries) {
    const result = {};
    for (const [key, value] of entries) {
        result[key] = value;
    }
    return result;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/get-query-parameters-from-url.ts":
/*!***************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/get-query-parameters-from-url.ts ***!
  \***************************************************************************************************************/
/*! exports provided: getQueryParametersFromUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryParametersFromUrl", function() { return getQueryParametersFromUrl; });
/* harmony import */ var _from_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-entries */ "../../libs/utils/src/lib/functions/from-entries.ts");

function* parseQueryParams(queryParams) {
    for (const queryParam of queryParams) {
        const [key, value] = queryParam.split('=');
        if (typeof value !== 'string')
            throw new Error('Query param string is not correctly formatted');
        yield [decodeURIComponent(key), decodeURIComponent(value)];
    }
}
/**
 * Finds the query parameters from the given `url` and returns them as a dictionary of key-value pairs
 *
 * @param url The URI string from which to get the query parameters
 */
function getQueryParametersFromUrl(url) {
    var _a, _b;
    if (!url)
        return {};
    const [, params] = url.split('?');
    if (!((_a = params) === null || _a === void 0 ? void 0 : _a.length))
        return {};
    const queryParamString = params.split('#')[0];
    if (!((_b = queryParamString) === null || _b === void 0 ? void 0 : _b.length))
        return {};
    const queryParams = queryParamString.split('&');
    const parsedQueryParams = parseQueryParams(queryParams);
    return Object(_from_entries__WEBPACK_IMPORTED_MODULE_0__["fromEntries"])(parsedQueryParams);
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/group-by.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/group-by.ts ***!
  \******************************************************************************************/
/*! exports provided: groupBy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return groupBy; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Performs a group by operation on a dictionary based on one or multiple keys.
 * In the case of multiple keys, the resulting dictionary is indexed by a composite key delimited by # symbols.
 */
function groupBy(
/** The dataset to group */
data, 
/** The keys to group by */
keys) {
    // Harmonize the function inputs to always be an array
    if (!Array.isArray(keys)) {
        keys = [keys];
    }
    // Group the data by the given keys. If multiple keys are given, construct a composite key delimited by # symbols.
    return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["groupBy"])(data, item => keys.map(key => item[key]).join('#'));
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/index-by-property.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/index-by-property.ts ***!
  \***************************************************************************************************/
/*! exports provided: indexByProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexByProperty", function() { return indexByProperty; });
/**
 * Returns a dictionary containing all rows of the given `data` indexed by property `propertyName`.
 * The keys referenced by `propertyName` should be unique (e.g. an id).
 * If duplicate index keys do exist, only the last found row is indexed.
 *
 * A common use case for this function is to create a lookup table of a dataset.
 *
 * @param data The data to index
 * @param propertyName The name of the property to index by
 */
function indexByProperty(data, propertyName) {
    // Iterate over the dataset and add every row to the index keyed by its respective value for `propertyName`.
    const result = {};
    for (const row of data) {
        result[row[propertyName]] = row;
    }
    return result;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/index.ts":
/*!***************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/index.ts ***!
  \***************************************************************************************/
/*! exports provided: b64ToB64url, b64toBlob, b64urlToB64, buildWorkerBlobURL, bytesToBinaryString, circularReplacer, combinations, copyToClipboard, decodeXML, enumerate, findLast, flattenObject, fromEntries, getQueryParametersFromUrl, groupBy, indexByProperty, iterate, iterator, defaultCacheLimit, defaultResolver, memoize, pairs, pairwise, permutations, raceUntil, readFileAsString, rgbToHex, saveAsFile, stringToHash, substrings, union, userAgentIsEdge, userAgentIsInternetExplorer, validateRequiredArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _b64_to_b64url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b64-to-b64url */ "../../libs/utils/src/lib/functions/b64-to-b64url.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64ToB64url", function() { return _b64_to_b64url__WEBPACK_IMPORTED_MODULE_0__["b64ToB64url"]; });

/* harmony import */ var _b64_to_blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b64-to-blob */ "../../libs/utils/src/lib/functions/b64-to-blob.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64toBlob", function() { return _b64_to_blob__WEBPACK_IMPORTED_MODULE_1__["b64toBlob"]; });

/* harmony import */ var _b64url_to_b64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./b64url-to-b64 */ "../../libs/utils/src/lib/functions/b64url-to-b64.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b64urlToB64", function() { return _b64url_to_b64__WEBPACK_IMPORTED_MODULE_2__["b64urlToB64"]; });

/* harmony import */ var _build_worker_blob_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./build-worker-blob-url */ "../../libs/utils/src/lib/functions/build-worker-blob-url.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildWorkerBlobURL", function() { return _build_worker_blob_url__WEBPACK_IMPORTED_MODULE_3__["buildWorkerBlobURL"]; });

/* harmony import */ var _bytes_to_binary_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bytes-to-binary-string */ "../../libs/utils/src/lib/functions/bytes-to-binary-string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bytesToBinaryString", function() { return _bytes_to_binary_string__WEBPACK_IMPORTED_MODULE_4__["bytesToBinaryString"]; });

/* harmony import */ var _circular_replacer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./circular-replacer */ "../../libs/utils/src/lib/functions/circular-replacer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "circularReplacer", function() { return _circular_replacer__WEBPACK_IMPORTED_MODULE_5__["circularReplacer"]; });

/* harmony import */ var _combinations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combinations */ "../../libs/utils/src/lib/functions/combinations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "combinations", function() { return _combinations__WEBPACK_IMPORTED_MODULE_6__["combinations"]; });

/* harmony import */ var _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./copy-to-clipboard */ "../../libs/utils/src/lib/functions/copy-to-clipboard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyToClipboard", function() { return _copy_to_clipboard__WEBPACK_IMPORTED_MODULE_7__["copyToClipboard"]; });

/* harmony import */ var _decode_xml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decode-xml */ "../../libs/utils/src/lib/functions/decode-xml.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeXML", function() { return _decode_xml__WEBPACK_IMPORTED_MODULE_8__["decodeXML"]; });

/* harmony import */ var _enumerate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enumerate */ "../../libs/utils/src/lib/functions/enumerate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enumerate", function() { return _enumerate__WEBPACK_IMPORTED_MODULE_9__["enumerate"]; });

/* harmony import */ var _find_last__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./find-last */ "../../libs/utils/src/lib/functions/find-last.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLast", function() { return _find_last__WEBPACK_IMPORTED_MODULE_10__["findLast"]; });

/* harmony import */ var _flatten_object__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flatten-object */ "../../libs/utils/src/lib/functions/flatten-object.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenObject", function() { return _flatten_object__WEBPACK_IMPORTED_MODULE_11__["flattenObject"]; });

/* harmony import */ var _from_entries__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-entries */ "../../libs/utils/src/lib/functions/from-entries.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromEntries", function() { return _from_entries__WEBPACK_IMPORTED_MODULE_12__["fromEntries"]; });

/* harmony import */ var _get_query_parameters_from_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-query-parameters-from-url */ "../../libs/utils/src/lib/functions/get-query-parameters-from-url.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryParametersFromUrl", function() { return _get_query_parameters_from_url__WEBPACK_IMPORTED_MODULE_13__["getQueryParametersFromUrl"]; });

/* harmony import */ var _group_by__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./group-by */ "../../libs/utils/src/lib/functions/group-by.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _group_by__WEBPACK_IMPORTED_MODULE_14__["groupBy"]; });

/* harmony import */ var _index_by_property__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index-by-property */ "../../libs/utils/src/lib/functions/index-by-property.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexByProperty", function() { return _index_by_property__WEBPACK_IMPORTED_MODULE_15__["indexByProperty"]; });

/* harmony import */ var _iterate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./iterate */ "../../libs/utils/src/lib/functions/iterate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return _iterate__WEBPACK_IMPORTED_MODULE_16__["iterate"]; });

/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./iterator */ "../../libs/utils/src/lib/functions/iterator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return _iterator__WEBPACK_IMPORTED_MODULE_17__["iterator"]; });

/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./memoize */ "../../libs/utils/src/lib/functions/memoize.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultCacheLimit", function() { return _memoize__WEBPACK_IMPORTED_MODULE_18__["defaultCacheLimit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultResolver", function() { return _memoize__WEBPACK_IMPORTED_MODULE_18__["defaultResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize__WEBPACK_IMPORTED_MODULE_18__["memoize"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pairs */ "../../libs/utils/src/lib/functions/pairs.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_19__["pairs"]; });

/* harmony import */ var _pairwise__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pairwise */ "../../libs/utils/src/lib/functions/pairwise.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return _pairwise__WEBPACK_IMPORTED_MODULE_20__["pairwise"]; });

/* harmony import */ var _permutations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./permutations */ "../../libs/utils/src/lib/functions/permutations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permutations", function() { return _permutations__WEBPACK_IMPORTED_MODULE_21__["permutations"]; });

/* harmony import */ var _race_until__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./race-until */ "../../libs/utils/src/lib/functions/race-until.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "raceUntil", function() { return _race_until__WEBPACK_IMPORTED_MODULE_22__["raceUntil"]; });

/* harmony import */ var _read_file_as_string__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./read-file-as-string */ "../../libs/utils/src/lib/functions/read-file-as-string.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readFileAsString", function() { return _read_file_as_string__WEBPACK_IMPORTED_MODULE_23__["readFileAsString"]; });

/* harmony import */ var _rgb_to_hex__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rgb-to-hex */ "../../libs/utils/src/lib/functions/rgb-to-hex.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _rgb_to_hex__WEBPACK_IMPORTED_MODULE_24__["rgbToHex"]; });

/* harmony import */ var _save_as_file__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./save-as-file */ "../../libs/utils/src/lib/functions/save-as-file.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveAsFile", function() { return _save_as_file__WEBPACK_IMPORTED_MODULE_25__["saveAsFile"]; });

/* harmony import */ var _string_to_hash__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./string-to-hash */ "../../libs/utils/src/lib/functions/string-to-hash.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringToHash", function() { return _string_to_hash__WEBPACK_IMPORTED_MODULE_26__["stringToHash"]; });

/* harmony import */ var _substrings__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./substrings */ "../../libs/utils/src/lib/functions/substrings.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "substrings", function() { return _substrings__WEBPACK_IMPORTED_MODULE_27__["substrings"]; });

/* harmony import */ var _union__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./union */ "../../libs/utils/src/lib/functions/union.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union__WEBPACK_IMPORTED_MODULE_28__["union"]; });

/* harmony import */ var _user_agent_is_edge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user-agent-is-edge */ "../../libs/utils/src/lib/functions/user-agent-is-edge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAgentIsEdge", function() { return _user_agent_is_edge__WEBPACK_IMPORTED_MODULE_29__["userAgentIsEdge"]; });

/* harmony import */ var _user_agent_is_internet_explorer__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-agent-is-internet-explorer */ "../../libs/utils/src/lib/functions/user-agent-is-internet-explorer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "userAgentIsInternetExplorer", function() { return _user_agent_is_internet_explorer__WEBPACK_IMPORTED_MODULE_30__["userAgentIsInternetExplorer"]; });

/* harmony import */ var _validate_required_arguments__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./validate-required-arguments */ "../../libs/utils/src/lib/functions/validate-required-arguments.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateRequiredArguments", function() { return _validate_required_arguments__WEBPACK_IMPORTED_MODULE_31__["validateRequiredArguments"]; });



































/***/ }),

/***/ "../../libs/utils/src/lib/functions/iterate.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/iterate.ts ***!
  \*****************************************************************************************/
/*! exports provided: iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/**
 * Convenience function to help iterate over the given `iterator`.
 */
function* iterate(iterator) {
    let item = iterator.next();
    while (!item.done) {
        yield item.value;
        item = iterator.next();
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/iterator.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/iterator.ts ***!
  \******************************************************************************************/
/*! exports provided: iterator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterator", function() { return iterator; });
/**
 * Returns an `Iterator` over every element of the given `iterable`.
 * @param iterable The collection of elements to iterate over
 */
function* iterator(iterable) {
    yield* iterable;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/memoize.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/memoize.ts ***!
  \*****************************************************************************************/
/*! exports provided: defaultCacheLimit, defaultResolver, memoize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCacheLimit", function() { return defaultCacheLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultResolver", function() { return defaultResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return memoize; });
/* harmony import */ var mnemonist_lru_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mnemonist/lru-map */ "../../node_modules/mnemonist/lru-map.js");
/* harmony import */ var mnemonist_lru_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mnemonist_lru_map__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The default maximum size of the cache.
 */
const defaultCacheLimit = 1000;
/**
 * The default cache key resolver.
 * Returns the first argument as the cache key.
 * The first argument should therefore be a string.
 *
 * @param args the arguments from which to take the key.
 */
const defaultResolver = (...args) => args[0];
/**
 * Caches the results of the given function by a key built from its arguments.
 *
 * When the function is called again for the same arguments, the result is returned from the cache instead.
 *
 * Use `memoize` whenever you need to repeat an expensive computation often.
 *
 * If your function takes multiple arguments, or if the first argument of your function is not a string, you should pass a custom `resolver`.
 *
 * Whenever the size of the cache exceeds the given `cacheLimit`, the least recently used entries is removed from the cache.
 * You can optionally increase or decrease the size of the cache.
 *
 * @param func The function of which the results should be cached.
 * @param options Configuration parameters.
 */
function memoize(func, { cacheLimit = defaultCacheLimit, resolver = defaultResolver } = {}) {
    const cache = new mnemonist_lru_map__WEBPACK_IMPORTED_MODULE_0___default.a(cacheLimit);
    function memoized(...args) {
        const key = resolver.apply(null, args);
        if (cache.has(key))
            return cache.get(key);
        const value = func.apply(null, args);
        cache.set(key, value);
        return value;
    }
    const result = Object.defineProperty(memoized, 'cache', {
        get: () => cache
    });
    return result;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/pairs.ts":
/*!***************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/pairs.ts ***!
  \***************************************************************************************/
/*! exports provided: pairs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* harmony import */ var _iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iterator */ "../../libs/utils/src/lib/functions/iterator.ts");

/**
 * For two collections `A` and `B`, returns a list of tuples `[A, B]` representing the items at index `i` for every item in `A` and `B`.
 * If either `A` or `B` does not contain an item at index `i`, the respective side of the tuple will be `undefined`.
 */
function* pairs(
/* A collection */
a, 
/* Another collection */
b) {
    const iteratorA = Object(_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"])(a), iteratorB = Object(_iterator__WEBPACK_IMPORTED_MODULE_0__["iterator"])(b);
    for (let itemA = iteratorA.next(), itemB = iteratorB.next(); !(itemA.done && itemB.done); itemA = iteratorA.next(), itemB = iteratorB.next()) {
        yield [itemA.value, itemB.value];
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/pairwise.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/pairwise.ts ***!
  \******************************************************************************************/
/*! exports provided: pairwise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pairwise", function() { return pairwise; });
/**
 * Returns a generator that returns every item from the given sequence, along with the previous item in the sequence.
 * @param items The seuqence of items
 */
function* pairwise(items) {
    let previous;
    for (const item of items) {
        if (previous) {
            yield [previous, item];
        }
        previous = item;
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/permutations.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/permutations.ts ***!
  \**********************************************************************************************/
/*! exports provided: permutations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "permutations", function() { return permutations; });
/**
 * Returns all permutations of the given items that are of the given length
 * @param iterable The items for which to find all permutations
 * @param length The desired length of the permutations
 */
function* permutations(iterable, length) {
    if (length === 0)
        return;
    const seenItems = new Set();
    for (const currentItem of iterable) {
        if (seenItems.has(currentItem))
            continue;
        if (length === 1)
            yield [currentItem];
        for (const [...permutation] of permutations(seenItems, length - 1)) {
            for (let i = 0; i <= permutation.length; i++) {
                const [...clone] = permutation;
                clone.splice(i, 0, currentItem);
                yield clone;
            }
        }
        seenItems.add(currentItem);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/race-until.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/race-until.ts ***!
  \********************************************************************************************/
/*! exports provided: raceUntil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raceUntil", function() { return raceUntil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/**
 * Returns a new `Promise` which resolves when either:
 * - One of the given `promises` resolves with a value which meets the given `predicate`. In this case, the resolved value is returned.
 * - None of the given `promises` resolves with a value which meets the given `predicate`. In this case, a default value (`null` by default) is returned instead.
 *
 * If one of the given `promises` rejects before a value which meets the given `predicate` is found, the result is rejected overall.
 */
function raceUntil(
/** The promises to resolve */
promises, 
/** The condition which the resolved value should fulfill */
predicate, 
/** The value to return if none of the given promises resolves with a value which meets the given predicate */
defaultValue = null) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const conditionalPromises = promises.map((promise) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => promise.then(value => predicate(value) && resolve(value), reject));
        }));
        return Promise.race([
            ...conditionalPromises,
            Promise.all(promises).then(() => defaultValue)
        ]);
    });
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/read-file-as-string.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/read-file-as-string.ts ***!
  \*****************************************************************************************************/
/*! exports provided: readFileAsString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFileAsString", function() { return readFileAsString; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

/**
 * Returns the content of the given `file` as a `string`
 */
function readFileAsString(file) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.onabort = () => reject('Read process aborted');
            reader.readAsText(file);
        });
    });
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/rgb-to-hex.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/rgb-to-hex.ts ***!
  \********************************************************************************************/
/*! exports provided: rgbToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Converts an rgb value to a hex color value, prefixed with a #. Defaults to #000000 if one of the given values cannot be mapped to a hex value.
 * @param r the redness value between 0 and 255
 * @param g the blueness value between 0 and 255
 * @param b the greenness value between 0 and 255
 */
function rgbToHex(r, g, b) {
    return typeof r === 'number' && typeof g === 'number' && typeof b === 'number'
        ? `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
        : '#000000';
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/save-as-file.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/save-as-file.ts ***!
  \**********************************************************************************************/
/*! exports provided: saveAsFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveAsFile", function() { return saveAsFile; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "../../node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Saves content in the form of a `string` or `Blob` to the user's device as a file with the given name.
 */
function saveAsFile(content, name) {
    if (typeof content === 'string') {
        content = new Blob([content]);
    }
    if (window && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(content, name);
    }
    else if (window && window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(content, name);
    }
    else {
        const objectUrl = window.URL.createObjectURL(content);
        Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(objectUrl, name);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/string-to-hash.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/string-to-hash.ts ***!
  \************************************************************************************************/
/*! exports provided: stringToHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToHash", function() { return stringToHash; });
/**
 * Returns a unique hash for the given string
 */
function stringToHash(string) {
    return string
        .split('')
        .reduce((prevHash, currVal) => ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0, 0);
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/substrings.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/substrings.ts ***!
  \********************************************************************************************/
/*! exports provided: substrings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "substrings", function() { return substrings; });
/**
 * Returns all unique substrings of the given `string`. You can optionally specify a minimum and maximum substring length.
 * @param string The string for which to find all substrings.
 */
function* substrings(string, { minLength = 1, maxLength = string.length } = {}) {
    const seen = new Set();
    for (let i = 0; i <= string.length - minLength; i++) {
        for (let j = i + minLength; j <= Math.min(maxLength, string.length); j++) {
            const substring = string.slice(i, j);
            if (!seen.has(substring)) {
                yield substring;
                seen.add(substring);
            }
        }
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/union.ts":
/*!***************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/union.ts ***!
  \***************************************************************************************/
/*! exports provided: union */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "union", function() { return union; });
/**
 * Returns a new object that represents the union between a and b. Nested objects are unified, nested lists are extended.
 */
function union(
/** The base object */
a, 
/** The other object */
b, 
/** Whether or not to overwrite properties that exist in both a and b in case of a primitive value or non-matching types */
overwrite = true) {
    // Make a shallow copy of the base object
    const result = Object.assign({}, a);
    // Iterate over the keys in the other object and assign its values to the result object
    Object.keys(b).forEach((key) => {
        const newValue = b[key];
        // If the property already exists in the result object...
        if (result.hasOwnProperty(key)) {
            const currentValue = result[key];
            // If the types between A and B don't match, or if the value is a primitive...
            if (Object(newValue) !== newValue ||
                newValue.constructor !== currentValue.constructor) {
                if (overwrite) {
                    result[key] = newValue;
                }
            }
            // Else, if the value is an array
            else if (Array.isArray(newValue)) {
                result[key] = currentValue.concat(newValue);
            }
            // Else, if the value is a set
            else if (newValue instanceof Set) {
                result[key] = new Set([Array.from(currentValue), Array.from(newValue)]);
            }
            // Else, if the value is a random object
            else {
                result[key] = union(currentValue, newValue);
            }
        }
        // Otherwise simply assign the value
        else {
            result[key] = newValue;
        }
    });
    return result;
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/user-agent-is-edge.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/user-agent-is-edge.ts ***!
  \****************************************************************************************************/
/*! exports provided: userAgentIsEdge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgentIsEdge", function() { return userAgentIsEdge; });
/**
 * Returns `true` if the current User Agent is a Microsoft Edge (non-chromium) variant.
 */
function userAgentIsEdge() {
    return ['Edge/'].some(userAgent => window && window.navigator.userAgent.includes(userAgent));
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/user-agent-is-internet-explorer.ts":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/user-agent-is-internet-explorer.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: userAgentIsInternetExplorer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userAgentIsInternetExplorer", function() { return userAgentIsInternetExplorer; });
/**
 * Returns `true` if the current User Agent is an Internet Explorer variant.
 */
function userAgentIsInternetExplorer() {
    return ['MSIE ', 'Trident/'].some(userAgent => window && window.navigator.userAgent.includes(userAgent));
}


/***/ }),

/***/ "../../libs/utils/src/lib/functions/validate-required-arguments.ts":
/*!*************************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/functions/validate-required-arguments.ts ***!
  \*************************************************************************************************************/
/*! exports provided: validateRequiredArguments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRequiredArguments", function() { return validateRequiredArguments; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Throws an error if any of the given `args` cannot be validated.
 * By default, checks whether any argument is `null` or `undefined`.
 *
 * Use this function to check the required parameters of any function, such as an API call.
 *
 * @example function exampleApiCall(
 *            requiredArgumentA: string,
 *            requiredArgumentB: number,
 *            options: ExampleApiCallOptions = {}
 *          ) {
 *            // Validate the required arguments for the API call before we do anything else.
 *            // By passing the `arguments` variable, we check all function parameters, including `options`.
 *            // This works since `options` has a default value.
 *            validateRequiredArguments(arguments, 'exampleApiCall');
 *
 *            // If not all parameters are required, you can validate a subset by passing an array or an object.
 *            // In the example below, we exclude `requiredArgumentB` and `options` from the check.
 *            validateRequiredArguments([requiredArgumentA], 'exampleApiCall');
 *            validateRequiredArguments({requiredArgumentA}, 'exampleApiCall');
 *          }
 *
 *          // Let's now call `exampleApiCall` with null as the first parameter.
 *          // This results in an error telling us the parameter at index 0 was invalid.
 *          exampleApiCall(null, 0);
 *          // -> Error: Required parameter 0 was null when calling exampleApiCall.
 */
function validateRequiredArguments(
/** The arguments to validate. */
args, 
/**
 * The name of the function to which the arguments belong.
 * Passing the function name ensures a meaningful error message from uglified code.
 */
calleeName, 
/**
 * The function used to validate each of the given arguments.
 * It should return `true` if the given argument is invalid.
 * By default, checks whether the given argument is `null` or `undefined`.
 */
isInvalidFn = lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"]) {
    const invalidArgument = Object.entries(args).find(([, value]) => isInvalidFn(value));
    if (invalidArgument) {
        throw new Error(`Required parameter ${invalidArgument[0]} was ${invalidArgument[1]} when calling ${calleeName}.`);
    }
}


/***/ }),

/***/ "../../libs/utils/src/lib/rxjs-operators/default-if-falsy.ts":
/*!*******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/rxjs-operators/default-if-falsy.ts ***!
  \*******************************************************************************************************/
/*! exports provided: defaultIfFalsy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultIfFalsy", function() { return defaultIfFalsy; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");

/**
 * When the value emitted by the source observable is either `null`, `undefined` or `NaN`, emit the given `defaultValue` instead
 * @param defaultValue The value to emit when the source observable emits `null`, `undefined` or `NaN`
 */
function defaultIfFalsy(defaultValue) {
    return source => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(value => (value !== null && value !== void 0 ? value : defaultValue)));
}


/***/ }),

/***/ "../../libs/utils/src/lib/rxjs-operators/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/rxjs-operators/index.ts ***!
  \********************************************************************************************/
/*! exports provided: defaultIfFalsy, switchTap, untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_if_falsy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-if-falsy */ "../../libs/utils/src/lib/rxjs-operators/default-if-falsy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultIfFalsy", function() { return _default_if_falsy__WEBPACK_IMPORTED_MODULE_0__["defaultIfFalsy"]; });

/* harmony import */ var _switch_tap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-tap */ "../../libs/utils/src/lib/rxjs-operators/switch-tap.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "switchTap", function() { return _switch_tap__WEBPACK_IMPORTED_MODULE_1__["switchTap"]; });

/* harmony import */ var _until_destroyed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./until-destroyed */ "../../libs/utils/src/lib/rxjs-operators/until-destroyed.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return _until_destroyed__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"]; });






/***/ }),

/***/ "../../libs/utils/src/lib/rxjs-operators/switch-tap.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/rxjs-operators/switch-tap.ts ***!
  \*************************************************************************************************/
/*! exports provided: switchTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchTap", function() { return switchTap; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


function switchTap(arg) {
    const next = typeof arg === 'function' ? arg : (x) => arg;
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(value => Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(next(value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["ignoreElements"])()), Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(value)));
}


/***/ }),

/***/ "../../libs/utils/src/lib/rxjs-operators/until-destroyed.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/utils/src/lib/rxjs-operators/until-destroyed.ts ***!
  \******************************************************************************************************/
/*! exports provided: untilDestroyed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return untilDestroyed; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");


const untilDestroyedSymbol = Symbol('untilDestroyed');
function untilDestroyed(
/** The parent Angular component or object instance. */
instance, 
/** The method to hook on. Defaults to `ngOnDestroy`. */
destroyMethodName = 'ngOnDestroy') {
    return (source) => {
        const originalDestroy = instance[destroyMethodName];
        const hasDestroyFunction = typeof originalDestroy === 'function';
        if (!hasDestroyFunction) {
            throw new Error(`${instance.constructor.name} is using untilDestroyed but doesn't implement ${destroyMethodName}`);
        }
        if (!instance[untilDestroyedSymbol]) {
            instance[untilDestroyedSymbol] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
            instance[destroyMethodName] = function () {
                if (hasDestroyFunction) {
                    originalDestroy.apply(this, arguments);
                }
                instance[untilDestroyedSymbol].next();
                instance[untilDestroyedSymbol].complete();
            };
        }
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(instance[untilDestroyedSymbol]));
    };
}


/***/ }),

/***/ "../../libs/version/src/index.ts":
/*!***************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/version/src/index.ts ***!
  \***************************************************************************/
/*! exports provided: VersionModule, VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_version_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/version.module */ "../../libs/version/src/lib/version.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionModule", function() { return _lib_version_module__WEBPACK_IMPORTED_MODULE_0__["VersionModule"]; });

/* harmony import */ var _lib_version_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/version.service */ "../../libs/version/src/lib/version.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return _lib_version_service__WEBPACK_IMPORTED_MODULE_1__["VersionService"]; });





/***/ }),

/***/ "../../libs/version/src/lib/version-config.service.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/version/src/lib/version-config.service.ts ***!
  \************************************************************************************************/
/*! exports provided: VersionConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionConfigService", function() { return VersionConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const VersionConfigService = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('VersionConfig');


/***/ }),

/***/ "../../libs/version/src/lib/version.module.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/version/src/lib/version.module.ts ***!
  \****************************************************************************************/
/*! exports provided: VersionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionModule", function() { return VersionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _version_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version-config.service */ "../../libs/version/src/lib/version-config.service.ts");
/* harmony import */ var _version_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version.service */ "../../libs/version/src/lib/version.service.ts");





class VersionModule {
    constructor(versionService, parentModule) {
        this.versionService = versionService;
        if (parentModule) {
            throw new Error('VersionModule is already loaded. Import it in the AppModule only');
        }
        this.init();
    }
    static forRoot(config = {}) {
        return {
            ngModule: VersionModule,
            providers: [
                _version_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"],
                {
                    provide: _version_config_service__WEBPACK_IMPORTED_MODULE_1__["VersionConfigService"],
                    useValue: config
                }
            ]
        };
    }
    init() {
        /**
         * Makes the version of the application and its connected services accessible from the browser console as a function called `version()`.
         */
        if (window && !window['version']) {
            window['version'] = (forceUpdate = false) => {
                this.versionService.getVersionDescriptor(forceUpdate).then(console.dir);
                return 'Retrieving a version descriptor of the application and connected services...';
            };
        }
    }
}
VersionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VersionModule });
VersionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VersionModule_Factory(t) { return new (t || VersionModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_version_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](VersionModule, 12)); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VersionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"]
    }], function () { return [{ type: _version_service__WEBPACK_IMPORTED_MODULE_2__["VersionService"] }, { type: VersionModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../../libs/version/src/lib/version.service.ts":
/*!*****************************************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/libs/version/src/lib/version.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: VersionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionService", function() { return VersionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/repository */ "../../libs/repository/src/index.ts");
/* harmony import */ var git_version_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! git-version.json */ "../../git-version.json");
var git_version_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! git-version.json */ "../../git-version.json", 1);
/* harmony import */ var package_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! package.json */ "../../package.json");
var package_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! package.json */ "../../package.json", 1);
/* harmony import */ var _version_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version-config.service */ "../../libs/version/src/lib/version-config.service.ts");







class VersionService {
    constructor(config = {}) {
        this.config = config;
        this.appName = this.config.appName;
        this.appVersion = `${package_json__WEBPACK_IMPORTED_MODULE_4__["version"]}#${git_version_json__WEBPACK_IMPORTED_MODULE_3__["hash"]}${this.config.production ? '' : '-dev'}`;
    }
    /**
     * Retrieves the version string of the repository to which the application connects.
     * The version string is composed of the release number and the git hash, delimited by a `#` sign.
     * If the version string could not be retrieved for any reason, returns `unknown` instead.
     * @param forceUpdate Whether or not to refresh the cache
     */
    getRepositoryVersion(forceUpdate = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const { version } = yield Object(_models4insight_repository__WEBPACK_IMPORTED_MODULE_2__["repositoryVersion"])({ forceUpdate }).toPromise();
                return version;
            }
            catch (_a) {
                return 'unknown';
            }
        });
    }
    /**
     * Returns an object which represents the version of the app and connected services.
     * @param forceUpdate Whether or not to refresh the cache
     */
    getVersionDescriptor(forceUpdate = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Resolve the version strings of the connected services concurrently
            const [repository] = yield Promise.all([
                this.getRepositoryVersion(forceUpdate)
            ]);
            return {
                app: this.appVersion,
                production: this.config.production,
                repository
            };
        });
    }
}
VersionService.ɵfac = function VersionService_Factory(t) { return new (t || VersionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_version_config_service__WEBPACK_IMPORTED_MODULE_5__["VersionConfigService"], 8)); };
VersionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VersionService, factory: VersionService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VersionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_version_config_service__WEBPACK_IMPORTED_MODULE_5__["VersionConfigService"]]
            }] }]; }, null); })();


/***/ }),

/***/ "../../package.json":
/*!**************************************************************!*\
  !*** C:/Users/thijs/Development/models4insight/package.json ***!
  \**************************************************************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"models4insight\",\"version\":\"2.2.0\",\"license\":\"UNLICENSED\",\"scripts\":{\"ng\":\"ng\",\"start\":\"npm run prebuild && ng serve\",\"prebuild\":\"npm run git-version\",\"build\":\"ng build\",\"build:prod\":\"npm run build -- --prod\",\"test\":\"ng test\",\"lint\":\"nx lint && ng lint\",\"e2e\":\"ng e2e\",\"affected:apps\":\"nx affected:apps\",\"affected:libs\":\"nx affected:libs\",\"affected:build\":\"nx affected:build\",\"affected:e2e\":\"nx affected:e2e\",\"affected:test\":\"nx affected:test\",\"affected:lint\":\"nx affected:lint\",\"affected:dep-graph\":\"nx affected:dep-graph\",\"affected\":\"nx affected\",\"format\":\"nx format:write\",\"format:write\":\"nx format:write\",\"format:check\":\"nx format:check\",\"update\":\"ng update @nrwl/workspace\",\"update:check\":\"ng update\",\"workspace-schematic\":\"nx workspace-schematic\",\"dep-graph\":\"nx dep-graph\",\"detailed-dep-graph\":\"madge --image ./target/dependencies.svg --extensions ts --exclude '.*spec.ts' .\",\"git-version\":\"node git-version.js\",\"help\":\"nx help\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"^9.0.0\",\"@angular/cdk\":\"^9.0.0\",\"@angular/common\":\"^9.0.0\",\"@angular/compiler\":\"^9.0.0\",\"@angular/core\":\"^9.0.0\",\"@angular/forms\":\"^9.0.0\",\"@angular/material\":\"^9.0.0\",\"@angular/platform-browser\":\"^9.0.0\",\"@angular/platform-browser-dynamic\":\"^9.0.0\",\"@angular/pwa\":\"^0.800.3\",\"@angular/router\":\"^9.0.0\",\"@angular/service-worker\":\"^9.0.0\",\"@fortawesome/angular-fontawesome\":\"^0.5.0\",\"@fortawesome/fontawesome-svg-core\":\"^1.2.25\",\"@fortawesome/free-regular-svg-icons\":\"^5.11.2\",\"@fortawesome/free-solid-svg-icons\":\"^5.11.2\",\"@models4insight/core\":\"file:libs/core\",\"@models4insight/styles\":\"file:libs/styles\",\"@nestjs/common\":\"^6.2.4\",\"@nestjs/core\":\"^6.2.4\",\"@nestjs/mongoose\":\"^6.1.2\",\"@nestjs/platform-express\":\"^6.2.4\",\"@ngneat/until-destroy\":\"^7.1.1\",\"@ngx-translate/core\":\"^10.0.1\",\"@nrwl/angular\":\"8.2.0\",\"backoff-rxjs\":\"^6.3.2\",\"base64url\":\"^3.0.1\",\"bokehjs\":\"^1.3.4\",\"bulma\":\"^0.9.3\",\"canvas\":\"^2.6.1\",\"canvg\":\"^3.0.2\",\"cartesian-product-generator\":\"^1.1.1\",\"classlist.js\":\"^1.1.20150312\",\"core-js\":\"^2.5.4\",\"d3\":\"^5.9.2\",\"d3-selection\":\"^2.0.0\",\"d3-zoom\":\"^2.0.0\",\"d3v3\":\"npm:d3@^3.5.12\",\"document-register-element\":\"1.13.1\",\"file-saver\":\"^2.0.2\",\"google-palette\":\"^1.1.0\",\"html2canvas\":\"^1.0.0-rc.7\",\"innersvg-polyfill\":\"0.0.2\",\"jsdom\":\"^15.2.1\",\"jszip\":\"^3.5.0\",\"keycloak-js\":\"^6.0.1\",\"lodash\":\"^4.17.14\",\"lodash-es\":\"^4.17.11\",\"mnemonist\":\"^0.30.0\",\"mongoose\":\"^5.5.13\",\"ngx-color-picker\":\"^9.0.0\",\"ngx-json-viewer\":\"^2.4.0\",\"ngx-page-scroll-core\":\"^7.0.1\",\"ngx-pagination\":\"^3.2.1\",\"png-metadata\":\"^1.0.2\",\"reflect-metadata\":\"^0.1.12\",\"rxjs\":\"~6.5.4\",\"ts-mixer\":\"^4.0.0\",\"uuid\":\"^3.3.2\",\"window-crypto\":\"^1.1.0\",\"zone.js\":\"^0.10.2\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"^0.900.1\",\"@angular/cli\":\"^9.0.1\",\"@angular/compiler-cli\":\"^9.0.0\",\"@angular/language-service\":\"^9.1.9\",\"@nestjs/schematics\":\"^6.3.0\",\"@nestjs/testing\":\"^6.2.4\",\"@nrwl/cypress\":\"8.2.0\",\"@nrwl/jest\":\"8.2.0\",\"@nrwl/nest\":\"8.2.0\",\"@nrwl/node\":\"8.2.0\",\"@nrwl/web\":\"8.2.0\",\"@nrwl/workspace\":\"8.2.0\",\"@types/body-parser\":\"^1.17.1\",\"@types/d3-selection\":\"^2.0.0\",\"@types/d3-zoom\":\"^1.8.2\",\"@types/file-saver\":\"^2.0.1\",\"@types/gtag.js\":\"0.0.3\",\"@types/jest\":\"24.0.9\",\"@types/jquery\":\"3.3.29\",\"@types/jsdom\":\"^12.2.4\",\"@types/lodash\":\"^4.14.134\",\"@types/mongoose\":\"^5.5.5\",\"@types/node\":\"~8.9.4\",\"@types/node-fetch\":\"^2.5.4\",\"@types/uuid\":\"^3.4.4\",\"body-parser\":\"^1.19.0\",\"codelyzer\":\"~5.0.1\",\"cypress\":\"^3.4.1\",\"dotenv\":\"6.2.0\",\"git-describe\":\"^4.0.4\",\"install\":\"^0.13.0\",\"jest\":\"24.1.0\",\"jest-preset-angular\":\"^7.1.1\",\"jest-resolve\":\"^27.2.4\",\"madge\":\"^3.4.4\",\"npm\":\"^6.14.5\",\"prettier\":\"^1.19.1\",\"ts-jest\":\"24.0.0\",\"ts-node\":\"~7.0.0\",\"tslib\":\"^1.10.0\",\"tslint\":\"~5.11.0\",\"typescript\":\"^3.7.5\",\"webpack-bundle-analyzer\":\"^3.6.1\"}}");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





const routes = [
    { path: '', redirectTo: '/search/browse', pathMatch: 'full' },
    {
        path: 'search',
        loadChildren: () => __webpack_require__.e(/*! import() | search-search-module */ "search-search-module").then(__webpack_require__.bind(null, /*! ./search/search.module */ "./src/app/search/search.module.ts")).then(m => m.SearchModule),
        data: { title: 'Search', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"] }
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboards-dashboard-module */ "dashboards-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboards/dashboard.module */ "./src/app/dashboards/dashboard.module.ts")).then(m => m.DashboardModule),
        data: { title: 'Dashboard', icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChartLine"] }
    },
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["models4insight-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2F0bGFzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'models4insight-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models4insight_atlas_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models4insight/atlas/api */ "../../libs/atlas/api/src/index.ts");
/* harmony import */ var _models4insight_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @models4insight/core */ "../../libs/core/src/index.ts");
/* harmony import */ var _models4insight_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @models4insight/i18n */ "../../libs/i18n/src/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../translations/en-US.json */ "./src/translations/en-US.json");
var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../translations/en-US.json */ "./src/translations/en-US.json", 1);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _libs_logger_src_lib_logger_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../libs/logger/src/lib/logger.module */ "../../libs/logger/src/lib/logger.module.ts");
/* harmony import */ var _libs_http_src_lib_http_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../libs/http/src/lib/http.module */ "../../libs/http/src/lib/http.module.ts");
/* harmony import */ var _libs_version_src_lib_version_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../libs/version/src/lib/version.module */ "../../libs/version/src/lib/version.module.ts");
/* harmony import */ var _libs_redux_src_lib_redux_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../libs/redux/src/lib/redux.module */ "../../libs/redux/src/lib/redux.module.ts");
/* harmony import */ var _libs_authentication_src_lib_authentication_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../libs/authentication/src/lib/authentication.module */ "../../libs/authentication/src/lib/authentication.module.ts");
/* harmony import */ var _libs_google_analytics_src_lib_google_analytics_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../libs/google-analytics/src/lib/google-analytics.module */ "../../libs/google-analytics/src/lib/google-analytics.module.ts");
/* harmony import */ var _libs_i18n_src_lib_i18n_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../libs/i18n/src/lib/i18n.module */ "../../libs/i18n/src/lib/i18n.module.ts");
/* harmony import */ var _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @models4insight/task-manager */ "../../libs/task-manager/src/index.ts");
/* harmony import */ var _libs_services_clickstream_src_lib_clickstream_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../libs/services/clickstream/src/lib/clickstream.module */ "../../libs/services/clickstream/src/lib/clickstream.module.ts");
/* harmony import */ var _libs_notifications_src_lib_notifications_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../libs/notifications/src/lib/notifications.module */ "../../libs/notifications/src/lib/notifications.module.ts");
/* harmony import */ var _models4insight_services_branch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @models4insight/services/branch */ "../../libs/services/branch/src/index.ts");
/* harmony import */ var _models4insight_services_model__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @models4insight/services/model */ "../../libs/services/model/src/index.ts");
/* harmony import */ var _models4insight_services_project__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @models4insight/services/project */ "../../libs/services/project/src/index.ts");
/* harmony import */ var _models4insight_services_user_info__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @models4insight/services/user-info */ "../../libs/services/user-info/src/index.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _libs_shell_src_lib_shell_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../libs/shell/src/lib/shell.module */ "../../libs/shell/src/lib/shell.module.ts");




























class AppModule {
    constructor(i18nService) {
        this.i18nService = i18nService;
        this.i18nService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_6__);
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_models4insight_i18n__WEBPACK_IMPORTED_MODULE_4__["I18nService"])); }, imports: [[
            ..._models4insight_core__WEBPACK_IMPORTED_MODULE_3__["Core"].imports(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]),
            _models4insight_atlas_api__WEBPACK_IMPORTED_MODULE_2__["AtlasApiModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"] // must be imported as the last module as it contains the fallback route
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _libs_logger_src_lib_logger_module__WEBPACK_IMPORTED_MODULE_10__["LoggerModule"], _libs_http_src_lib_http_module__WEBPACK_IMPORTED_MODULE_11__["HttpModule"], _libs_version_src_lib_version_module__WEBPACK_IMPORTED_MODULE_12__["VersionModule"], _libs_redux_src_lib_redux_module__WEBPACK_IMPORTED_MODULE_13__["ReduxModule"], _libs_authentication_src_lib_authentication_module__WEBPACK_IMPORTED_MODULE_14__["AuthenticationModule"], _libs_google_analytics_src_lib_google_analytics_module__WEBPACK_IMPORTED_MODULE_15__["GoogleAnalyticsModule"], _libs_i18n_src_lib_i18n_module__WEBPACK_IMPORTED_MODULE_16__["I18nModule"], _models4insight_task_manager__WEBPACK_IMPORTED_MODULE_17__["TaskManagerModule"], _libs_services_clickstream_src_lib_clickstream_module__WEBPACK_IMPORTED_MODULE_18__["ClickstreamModule"], _libs_notifications_src_lib_notifications_module__WEBPACK_IMPORTED_MODULE_19__["NotificationsModule"], _models4insight_services_branch__WEBPACK_IMPORTED_MODULE_20__["ServicesBranchModule"], _models4insight_services_model__WEBPACK_IMPORTED_MODULE_21__["ServicesModelModule"], _models4insight_services_project__WEBPACK_IMPORTED_MODULE_22__["ServicesProjectModule"], _models4insight_services_user_info__WEBPACK_IMPORTED_MODULE_23__["ServicesUserInfoModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"], _libs_shell_src_lib_shell_module__WEBPACK_IMPORTED_MODULE_25__["ShellModule"], _models4insight_atlas_api__WEBPACK_IMPORTED_MODULE_2__["AtlasApiModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"] // must be imported as the last module as it contains the fallback route
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
                imports: [
                    ..._models4insight_core__WEBPACK_IMPORTED_MODULE_3__["Core"].imports(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"]),
                    _models4insight_atlas_api__WEBPACK_IMPORTED_MODULE_2__["AtlasApiModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"] // must be imported as the last module as it contains the fallback route
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], function () { return [{ type: _models4insight_i18n__WEBPACK_IMPORTED_MODULE_4__["I18nService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "../../node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    name: 'm4i_atlas',
    googleAnalyticsMeasurementID: 'UA-138345924-1',
    i18n: {
        defaultLanguage: 'en-US',
        languages: {}
    },
    keycloak: {
        url: '/auth',
        realm: 'm4i',
        clientId: 'm4i_thijs'
    },
    notifications: {
        badgePath: 'assets/m4i-icon.png',
        iconPath: 'assets/m4i-icon.png'
    },
    production: false,
    shell: {
        appCopyright: 2022,
        appLogoPath: 'assets/m4i-platform-logo.png',
        appName: 'Models4Insight Data Governance',
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/translations/en-US.json":
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/*! exports provided: m4i_collection, m4i_confluent_environment, m4i_dataset, m4i_data_attribute, m4i_data_domain, m4i_data_entity, m4i_data_field, m4i_field, m4i_kafka_topic, m4i_system, m4i_indexPattern, m4i_person, m4i_dashboard, m4i_generic_process, m4i_confluent, m4i_index_pattern, m4i_confluent_environmet, m4i_referenceable, m4i_data_quality, m4i_elastic_index, m4i_visualization, m4i_elastic_cluster, m4i_connector_process, m4i_source, m4i_elastic_field, m4i_archimate_project, m4i_visualizeInformationProcess_process, m4i_changeDataCapture_process, m4i_kafka_field, m4i_kibana_space, m4i_kafka_cluster, m4i_elastic, qualifiedName, attributeType, fieldType, dataDomain, systems, collections, parentDataset, derivedsystem, deriveddatadomain, deriveddataentity, parentEntity, dataEntity, datasets, isIncomplete, hasParent, PII, isKeyData, derivedcollection, deriveddataset, derivedperson, riskClassification, hasContent, replicatedFrom, replicatedTo, optionalField, displayName, meanings, childEntity, dataAttribute, dataQuality, attributes, childDataset, fields, inputToProcesses, outputFromProcesses, ArchimateReference, email, businessOwnerAttribute, businessOwnerEntity, stewardAttribute, stewardEntity, domainLead, processOwner, creatorIndexPattern, creatorDashboard, creatorVisualization, sourcetype, childField, parentField, creator, version, updatedAt, elasticCluster, kibanaSpace, input, output, typename, datadomainname, dataqualityruledimension, dqscore, dqscore_accuracy, dqscore_completeness, dqscore_timeliness, dqscore_uniqueness, dqscore_validity, m4i_kubernetes_cronjob, m4i_kubernetes_namespace, m4i_kubernetes_pod, m4i_microservice_process, m4i_kubernetes_service_process, m4i_ingress_controller_process, m4i_kubernetes_cluster, m4i_kubernetes_environment, m4i_confluent_cloud, high_risk, medium_risk, low_risk, key_data, supertypenames, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"m4i_collection\":\"Collection\",\"m4i_confluent_environment\":\"Confluent Enviroment\",\"m4i_dataset\":\"Dataset\",\"m4i_data_attribute\":\"Data Attribute\",\"m4i_data_domain\":\"Data Domain\",\"m4i_data_entity\":\"Data Entity\",\"m4i_data_field\":\"Data Field\",\"m4i_field\":\"Data Field\",\"m4i_kafka_topic\":\"Kafka Topic\",\"m4i_system\":\"System\",\"m4i_indexPattern\":\"Index Pattern\",\"m4i_person\":\"Person\",\"m4i_dashboard\":\"Dashboard\",\"m4i_generic_process\":\"Generic Process\",\"m4i_confluent\":\"Confluent\",\"m4i_index_pattern\":\"Index Pattern\",\"m4i_confluent_environmet\":\"Confluent Environment\",\"m4i_referenceable\":\"Referenceable\",\"m4i_data_quality\":\"Data Quality Rule\",\"m4i_elastic_index\":\"Elastic Index\",\"m4i_visualization\":\"Visualization\",\"m4i_elastic_cluster\":\"Elastic Cluster\",\"m4i_connector_process\":\"Connector Process\",\"m4i_source\":\"Source\",\"m4i_elastic_field\":\"Elastic Field\",\"m4i_archimate_project\":\"Archimate Project\",\"m4i_visualizeInformationProcess_process\":\"Visualize Information Process\",\"m4i_changeDataCapture_process\":\"Change Data Capture Process\",\"m4i_kafka_field\":\"Kafka Field\",\"m4i_kibana_space\":\"Kibana Space\",\"m4i_kafka_cluster\":\"Kafka Cluster\",\"m4i_elastic\":\"Elastic\",\"qualifiedName\":\"Qualified Name\",\"attributeType\":\"Attribute Type\",\"fieldType\":\"Field Type\",\"dataDomain\":\"Data Domain\",\"systems\":\"Systems\",\"collections\":\"Collections\",\"parentDataset\":\"Parent Dataset\",\"derivedsystem\":\"System\",\"deriveddatadomain\":\"Data Domain\",\"deriveddataentity\":\"Data Entity\",\"parentEntity\":\"Parent Entity\",\"dataEntity\":\"Data Entity\",\"datasets\":\"Datasets\",\"isIncomplete\":\"Is Incomplete\",\"hasParent\":\"Has Parent\",\"PII\":\"Has PII\",\"isKeyData\":\"Is Keydata\",\"derivedcollection\":\"Collection\",\"deriveddataset\":\"Dataset\",\"derivedperson\":\"People\",\"riskClassification\":\"Risk Classification\",\"hasContent\":\"Has Content\",\"replicatedFrom\":\"Replicated from\",\"replicatedTo\":\"Replicated to\",\"optionalField\":\"Optional Field\",\"displayName\":\"Display Name\",\"meanings\":\"Meanings\",\"childEntity\":\" Child Entity\",\"dataAttribute\":\"Data Attribute\",\"dataQuality\":\"Data Quality\",\"attributes\":\"Attributes\",\"childDataset\":\"Child Dataset\",\"fields\":\"Fields\",\"inputToProcesses\":\"Input to Processes\",\"outputFromProcesses\":\"Output from Processes\",\"ArchimateReference\":\"ArchiMate Reference\",\"email\":\"Email\",\"businessOwnerAttribute\":\"Business owner for Attribute\",\"businessOwnerEntity\":\"Business owner for Entity\",\"stewardAttribute\":\"Steward for Attribute\",\"stewardEntity\":\"Steward for Entities\",\"domainLead\":\"Domain lead\",\"processOwner\":\"Process owner\",\"creatorIndexPattern\":\"Creator of Index pattern\",\"creatorDashboard\":\"Creator of Dashboard\",\"creatorVisualization\":\"Creator of Visualization\",\"sourcetype\":\"Source\",\"childField\":\"Child Field\",\"parentField\":\"Parent Field\",\"creator\":\"Creator\",\"version\":\"Version\",\"updatedAt\":\"Updated at\",\"elasticCluster\":\"Elastic cluster\",\"kibanaSpace\":\"Kibana space\",\"input\":\"Input\",\"output\":\"Output\",\"typename\":\"Type Name\",\"datadomainname\":\"Data Domain\",\"dataqualityruledimension\":\"Dimension\",\"dqscore\":\"Quality Score\",\"dqscore_accuracy\":\"Accuracy\",\"dqscore_completeness\":\"Completeness\",\"dqscore_timeliness\":\"Timeliness\",\"dqscore_uniqueness\":\"Uniqueness\",\"dqscore_validity\":\"Validity\",\"m4i_kubernetes_cronjob\":\"Kubernetes Cron Job\",\"m4i_kubernetes_namespace\":\"Kubernetes Namespace\",\"m4i_kubernetes_pod\":\"Kubernetes Pod\",\"m4i_microservice_process\":\"Microservice Process\",\"m4i_kubernetes_service_process\":\"Kubernetes Service Process\",\"m4i_ingress_controller_process\":\"Ingress Controller Process\",\"m4i_kubernetes_cluster\":\"Kubernetes Cluster\",\"m4i_kubernetes_environment\":\"Kubernetes Enviroment\",\"m4i_confluent_cloud\":\"Confluent Cloud\",\"high_risk\":\"High risk\",\"medium_risk\":\"Medium risk\",\"low_risk\":\"Low risk\",\"key_data\":\"Is key\",\"supertypenames\":\"Type Name\"}");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\thijs\Development\models4insight\apps\atlas\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map