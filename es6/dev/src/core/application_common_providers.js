import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { APP_ID_RANDOM_PROVIDER } from './application_tokens';
import { IterableDiffers, defaultIterableDiffers, KeyValueDiffers, defaultKeyValueDiffers } from './change_detection/change_detection';
import { ResolvedMetadataCache } from 'angular2/src/core/linker/resolved_metadata_cache';
import { AppViewManager } from './linker/view_manager';
import { AppViewManager_ } from "./linker/view_manager";
import { ViewResolver } from './linker/view_resolver';
import { DirectiveResolver } from './linker/directive_resolver';
import { PipeResolver } from './linker/pipe_resolver';
import { Compiler } from './linker/compiler';
import { Compiler_ } from "./linker/compiler";
import { DynamicComponentLoader } from './linker/dynamic_component_loader';
import { DynamicComponentLoader_ } from "./linker/dynamic_component_loader";
/**
 * A default set of providers which should be included in any Angular
 * application, regardless of the platform it runs onto.
 */
export const APPLICATION_COMMON_PROVIDERS = CONST_EXPR([
    new Provider(Compiler, { useClass: Compiler_ }),
    APP_ID_RANDOM_PROVIDER,
    ResolvedMetadataCache,
    new Provider(AppViewManager, { useClass: AppViewManager_ }),
    ViewResolver,
    new Provider(IterableDiffers, { useValue: defaultIterableDiffers }),
    new Provider(KeyValueDiffers, { useValue: defaultKeyValueDiffers }),
    DirectiveResolver,
    PipeResolver,
    new Provider(DynamicComponentLoader, { useClass: DynamicComponentLoader_ })
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fY29tbW9uX3Byb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtVXdtRnducWUudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2FwcGxpY2F0aW9uX2NvbW1vbl9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBTyxVQUFVLEVBQUMsTUFBTSwwQkFBMEI7T0FDbEQsRUFBVSxRQUFRLEVBQXdCLE1BQU0sc0JBQXNCO09BQ3RFLEVBR0wsc0JBQXNCLEVBQ3ZCLE1BQU0sc0JBQXNCO09BQ3RCLEVBQ0wsZUFBZSxFQUNmLHNCQUFzQixFQUN0QixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3ZCLE1BQU0scUNBQXFDO09BQ3JDLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxrREFBa0Q7T0FDL0UsRUFBQyxjQUFjLEVBQUMsTUFBTSx1QkFBdUI7T0FDN0MsRUFBQyxlQUFlLEVBQUMsTUFBTSx1QkFBdUI7T0FDOUMsRUFBQyxZQUFZLEVBQUMsTUFBTSx3QkFBd0I7T0FDNUMsRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QjtPQUN0RCxFQUFDLFlBQVksRUFBQyxNQUFNLHdCQUF3QjtPQUM1QyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQjtPQUNuQyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQjtPQUNwQyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sbUNBQW1DO09BQ2pFLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUM7QUFFekU7OztHQUdHO0FBQ0gsT0FBTyxNQUFNLDRCQUE0QixHQUFtQyxVQUFVLENBQUM7SUFDckYsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0lBQzdDLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUMsUUFBUSxFQUFFLGVBQWUsRUFBQyxDQUFDO0lBQ3pELFlBQVk7SUFDWixJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztJQUNqRSxJQUFJLFFBQVEsQ0FBQyxlQUFlLEVBQUUsRUFBQyxRQUFRLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztJQUNqRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLElBQUksUUFBUSxDQUFDLHNCQUFzQixFQUFFLEVBQUMsUUFBUSxFQUFFLHVCQUF1QixFQUFDLENBQUM7Q0FDMUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBDT05TVF9FWFBSfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtwcm92aWRlLCBQcm92aWRlciwgSW5qZWN0b3IsIE9wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9kaSc7XG5pbXBvcnQge1xuICBBUFBfQ09NUE9ORU5UX1JFRl9QUk9NSVNFLFxuICBBUFBfQ09NUE9ORU5ULFxuICBBUFBfSURfUkFORE9NX1BST1ZJREVSXG59IGZyb20gJy4vYXBwbGljYXRpb25fdG9rZW5zJztcbmltcG9ydCB7XG4gIEl0ZXJhYmxlRGlmZmVycyxcbiAgZGVmYXVsdEl0ZXJhYmxlRGlmZmVycyxcbiAgS2V5VmFsdWVEaWZmZXJzLFxuICBkZWZhdWx0S2V5VmFsdWVEaWZmZXJzXG59IGZyb20gJy4vY2hhbmdlX2RldGVjdGlvbi9jaGFuZ2VfZGV0ZWN0aW9uJztcbmltcG9ydCB7UmVzb2x2ZWRNZXRhZGF0YUNhY2hlfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvcmVzb2x2ZWRfbWV0YWRhdGFfY2FjaGUnO1xuaW1wb3J0IHtBcHBWaWV3TWFuYWdlcn0gZnJvbSAnLi9saW5rZXIvdmlld19tYW5hZ2VyJztcbmltcG9ydCB7QXBwVmlld01hbmFnZXJffSBmcm9tIFwiLi9saW5rZXIvdmlld19tYW5hZ2VyXCI7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnLi9saW5rZXIvdmlld19yZXNvbHZlcic7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICcuL2xpbmtlci9kaXJlY3RpdmVfcmVzb2x2ZXInO1xuaW1wb3J0IHtQaXBlUmVzb2x2ZXJ9IGZyb20gJy4vbGlua2VyL3BpcGVfcmVzb2x2ZXInO1xuaW1wb3J0IHtDb21waWxlcn0gZnJvbSAnLi9saW5rZXIvY29tcGlsZXInO1xuaW1wb3J0IHtDb21waWxlcl99IGZyb20gXCIuL2xpbmtlci9jb21waWxlclwiO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyfSBmcm9tICcuL2xpbmtlci9keW5hbWljX2NvbXBvbmVudF9sb2FkZXInO1xuaW1wb3J0IHtEeW5hbWljQ29tcG9uZW50TG9hZGVyX30gZnJvbSBcIi4vbGlua2VyL2R5bmFtaWNfY29tcG9uZW50X2xvYWRlclwiO1xuXG4vKipcbiAqIEEgZGVmYXVsdCBzZXQgb2YgcHJvdmlkZXJzIHdoaWNoIHNob3VsZCBiZSBpbmNsdWRlZCBpbiBhbnkgQW5ndWxhclxuICogYXBwbGljYXRpb24sIHJlZ2FyZGxlc3Mgb2YgdGhlIHBsYXRmb3JtIGl0IHJ1bnMgb250by5cbiAqL1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0NPTU1PTl9QUk9WSURFUlM6IEFycmF5PFR5cGUgfCBQcm92aWRlciB8IGFueVtdPiA9IENPTlNUX0VYUFIoW1xuICBuZXcgUHJvdmlkZXIoQ29tcGlsZXIsIHt1c2VDbGFzczogQ29tcGlsZXJffSksXG4gIEFQUF9JRF9SQU5ET01fUFJPVklERVIsXG4gIFJlc29sdmVkTWV0YWRhdGFDYWNoZSxcbiAgbmV3IFByb3ZpZGVyKEFwcFZpZXdNYW5hZ2VyLCB7dXNlQ2xhc3M6IEFwcFZpZXdNYW5hZ2VyX30pLFxuICBWaWV3UmVzb2x2ZXIsXG4gIG5ldyBQcm92aWRlcihJdGVyYWJsZURpZmZlcnMsIHt1c2VWYWx1ZTogZGVmYXVsdEl0ZXJhYmxlRGlmZmVyc30pLFxuICBuZXcgUHJvdmlkZXIoS2V5VmFsdWVEaWZmZXJzLCB7dXNlVmFsdWU6IGRlZmF1bHRLZXlWYWx1ZURpZmZlcnN9KSxcbiAgRGlyZWN0aXZlUmVzb2x2ZXIsXG4gIFBpcGVSZXNvbHZlcixcbiAgbmV3IFByb3ZpZGVyKER5bmFtaWNDb21wb25lbnRMb2FkZXIsIHt1c2VDbGFzczogRHluYW1pY0NvbXBvbmVudExvYWRlcl99KVxuXSk7Il19