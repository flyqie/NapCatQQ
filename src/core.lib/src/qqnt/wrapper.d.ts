import { WrapperSessionInitConfig } from './sessionConfig';
import { NodeIDependsAdapter, NodeIDispatcherAdapter, NodeIGlobalAdapter } from './adapters';
import { NodeIKernelSessionListener, NodeIKernelMsgListener, NodeIKernelLoginListener, NodeIKernelBuddyListener, NodeIKernelGroupListener, NodeIKernelProfileListener } from './listeners';
import { NodeIKernelLoginService, NodeIKernelMsgService, NodeIKernelBuddyService, NodeIKernelGroupService, NodeIKernelProfileService, NodeIKernelProfileLikeService } from './services';
export interface NodeQQNTWrapperUtil {
    new (): NodeQQNTWrapperUtil;
    getNTUserDataInfoConfig(): string;
    emptyWorkingSet(n: 38704): void;
    getSsoCmdOfOidbReq(...args: unknown[]): unknown;
    getSsoBufferOfOidbReq(...args: unknown[]): unknown;
    getOidbRspInfo(...args: unknown[]): unknown;
    getFileSize(...args: unknown[]): Promise<number>;
    genFileMd5Buf(...args: unknown[]): unknown;
    genFileMd5Hex(...args: unknown[]): unknown;
    genFileShaBuf(...args: unknown[]): unknown;
    genFileCumulateSha1(...args: unknown[]): unknown;
    genFileShaHex(...args: unknown[]): unknown;
    fileIsExist(...args: unknown[]): unknown;
    startTrace(...args: unknown[]): unknown;
    copyFile(...args: unknown[]): unknown;
    genFileShaAndMd5Hex(...args: unknown[]): unknown;
    setTraceInfo(...args: unknown[]): unknown;
    encodeOffLine(...args: unknown[]): unknown;
    decodeOffLine(...args: unknown[]): unknown;
    DecoderRecentInfo(...args: unknown[]): unknown;
    getPinyin(...args: unknown[]): unknown;
    matchInPinyin(...args: unknown[]): unknown;
    makeDirByPath(...args: unknown[]): unknown;
    emptyWorkingSet(...args: unknown[]): unknown;
    runProcess(...args: unknown[]): unknown;
    runProcessArgs(...args: unknown[]): unknown;
    calcThumbSize(...args: unknown[]): unknown;
    fullWordToHalfWord(...args: unknown[]): unknown;
    getNTUserDataInfoConfig(...args: unknown[]): unknown;
    pathIsReadableAndWriteable(...args: unknown[]): unknown;
    resetUserDataSavePathToDocument(...args: unknown[]): unknown;
    getSoBuildInfo(...args: unknown[]): unknown;
    registerCountInstruments(...args: unknown[]): unknown;
    registerValueInstruments(...args: unknown[]): unknown;
    registerValueInstrumentsWithBoundary(...args: unknown[]): unknown;
    reportCountIndicators(...args: unknown[]): unknown;
    reportValueIndicators(...args: unknown[]): unknown;
    checkNewUserDataSaveDirAvailable(...args: unknown[]): unknown;
    copyUserData(...args: unknown[]): unknown;
    setUserDataSaveDirectory(...args: unknown[]): unknown;
    hasOtherRunningQQProcess(...args: unknown[]): unknown;
    quitAllRunningQQProcess(...args: unknown[]): unknown;
    checkNvidiaConfig(...args: unknown[]): unknown;
    repairNvidiaConfig(...args: unknown[]): unknown;
    getNvidiaDriverVersion(...args: unknown[]): unknown;
    isNull(...args: unknown[]): unknown;
}
export interface NodeIQQNTWrapperSession {
    new (): NodeIQQNTWrapperSession;
    init(wrapperSessionInitConfig: WrapperSessionInitConfig, nodeIDependsAdapter: NodeIDependsAdapter, nodeIDispatcherAdapter: NodeIDispatcherAdapter, nodeIKernelSessionListener: NodeIKernelSessionListener): void;
    startNT(n: 0): void;
    startNT(): void;
    getMsgService(): NodeIKernelMsgService;
    getProfileService(): NodeIKernelProfileService;
    getProfileLikeService(): NodeIKernelProfileLikeService;
    getGroupService(): NodeIKernelGroupService;
    getBuddyService(): NodeIKernelBuddyService;
}
export interface EnginInitDesktopConfig {
    base_path_prefix: string;
    platform_type: 3;
    app_type: 4;
    app_version: string;
    os_version: string;
    use_xlog: true;
    qua: string;
    global_path_config: {
        desktopGlobalPath: string;
    };
    thumb_config: {
        maxSide: 324;
        minSide: 48;
        longLimit: 6;
        density: 2;
    };
}
export interface NodeIQQNTWrapperEngine {
    new (): NodeIQQNTWrapperEngine;
    initWithDeskTopConfig(config: EnginInitDesktopConfig, nodeIGlobalAdapter: NodeIGlobalAdapter): void;
}
interface WrapperNodeApi {
    NodeIKernelBuddyListener: NodeIKernelBuddyListener;
    NodeIKernelGroupListener: NodeIKernelGroupListener;
    NodeQQNTWrapperUtil: NodeQQNTWrapperUtil;
    NodeIQQNTWrapperSession: NodeIQQNTWrapperSession;
    NodeIKernelMsgListener: NodeIKernelMsgListener;
    NodeIQQNTWrapperEngine: NodeIQQNTWrapperEngine;
    NodeIGlobalAdapter: NodeIGlobalAdapter;
    NodeIDependsAdapter: NodeIDependsAdapter;
    NodeIDispatcherAdapter: NodeIDispatcherAdapter;
    NodeIKernelSessionListener: NodeIKernelSessionListener;
    NodeIKernelLoginService: NodeIKernelLoginService;
    NodeIKernelLoginListener: NodeIKernelLoginListener;
    NodeIKernelProfileService: NodeIKernelProfileService;
    NodeIKernelProfileListener: NodeIKernelProfileListener;
}
declare const QQWrapper: WrapperNodeApi;
export default QQWrapper;
