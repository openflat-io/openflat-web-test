import{b8 as w,aZ as m,k as s,bb as x,bF as T,q as i,m as a,n as f,b2 as I}from"./index.43c4ffc0.js";import{w as k,u as B,S as P,a as E,W,E as O,R as y,b as A,N as M,T as N,c as S,d as u,e as L,C as V,f as G,I as j,U as z,g as F,h as Q,i as q,j as J,k as Z,l as $,m as C}from"./UsersButton.3be34569.js";import{T as l,a as c}from"./constants.dd61e0d4.js";import{u as H}from"./use-login-check.e01c4832.js";import"./SVGUserGroup.adcc3976.js";import"./index.891e0e8b.js";import"./index.a792be8b.js";import"./routes.73fc4946.js";import"./style.9d551dbf.js";import"./Skeleton.b37802c7.js";import"./Table.77c4b21e.js";import"./index.10dbff5d.js";import"./CSSTransition.a4d82697.js";import"./isEqual.5ca85d66.js";import"./lifecycle.32153b61.js";import"./debounce.3c601f71.js";import"./agora.7ea1cd24.js";import"./courseware-converting.d1c4ae45.js";import"./constants.1a2b4361.js";const ce=k(w(function({classroomStore:e}){H();const r=m(),d=e.whiteboardStore,t=s.exports.useContext(x),{confirm:U,...D}=B(e),[g,v]=s.exports.useState(!0);return s.exports.useEffect(()=>{e.isCreator&&e.roomStatus===T.Idle&&e.startClass()},[e]),i("div",{className:"big-class-page-container",children:i("div",{className:"big-class-realtime-container",children:a("div",{className:"big-class-realtime-box",children:[t?i(l,{left:p(),right:h(),showWindowsSystemBtn:t.showWindowsBtn,onClickWindowsSystemBtn:t.onClickWindowsSystemBtn,onDoubleClick:t.clickWindowMaximize}):i(l,{left:p(),right:h()}),a("div",{className:"big-class-realtime-content",children:[a("div",{className:"big-class-realtime-content-container",children:[i(P,{classroomStore:e}),i(E,{classroomStore:e,handleOk:()=>e.toggleShareScreen(!0)}),i(W,{classRoomStore:e,whiteboardStore:d})]}),R()]}),i(O,{isCreator:e.isCreator,...D}),i(y,{isCreator:e.isCreator,isRemoteLogin:e.isRemoteLogin,roomStatus:e.roomStatus})]})})});function p(){var n,o;return a(f,{children:[i(A,{}),i(M,{networkQuality:e.networkQuality}),e.isCreator?((n=e.roomInfo)==null?void 0:n.beginTime)&&i(N,{beginTime:e.roomInfo.beginTime,roomStatus:e.roomStatus}):i(S,{roomStatus:e.roomStatus,roomType:(o=e.roomInfo)==null?void 0:o.roomType})]})}function h(){return a(f,{children:[d.allowDrawing&&!e.isRemoteScreenSharing&&i(u,{icon:i(L,{active:e.isScreenSharing}),title:r("share-screen.self"),onClick:()=>{window.isElectron?e.isScreenSharing?e.toggleShareScreen(!1):e.toggleShareScreenPicker(!0):e.toggleShareScreen()}}),e.isCreator&&i(V,{isRecording:e.isRecording,loading:e.isRecordingLoading,onClick:()=>{e.toggleRecording({onStop(){I.success(r("recording-completed-tips"))}})}}),e.whiteboardStore.allowDrawing&&i(G,{classroom:e}),i(j,{roomInfo:e.roomInfo}),i(z,{classroom:e}),!(t!=null&&t.showWindowsBtn)&&i(u,{icon:i(F,{}),title:r("exit"),onClick:()=>U(Q.ExitButton)}),t!=null&&t.showWindowsBtn?null:i(c,{}),i(u,{icon:g?i(q,{}):i(J,{}),title:r(g?"side-panel.hide":"side-panel.show"),onClick:b}),(t==null?void 0:t.showWindowsBtn)&&i(c,{})]})}function R(){const{creator:n}=e.users;return i(Z,{chatSlot:i($,{classRoomStore:e}),isShow:g,isVideoOn:e.isJoinedRTC,videoSlot:a("div",{className:"big-class-realtime-rtc-box",children:[i(C,{avatarUser:n,getPortal:e.getPortal,isAvatarUserCreator:!0,isCreator:e.isCreator,isDropTarget:e.isDropTarget(e.ownerUUID),rtcAvatar:n&&e.rtc.getAvatar(n.rtcUID),updateDeviceState:e.updateDeviceState,userUUID:e.userUUID,onDoubleClick:()=>e.createMaximizedAvatarWindow(e.ownerUUID),onDragEnd:e.onDragEnd,onDragStart:e.onDragStart}),e.onStageUserUUIDs.length>0&&i(C,{avatarUser:e.firstOnStageUser,getPortal:e.getPortal,isAvatarUserCreator:!1,isCreator:e.isCreator,isDropTarget:e.firstOnStageUser&&e.isDropTarget(e.firstOnStageUser.userUUID),rtcAvatar:e.firstOnStageUser&&e.rtc.getAvatar(e.firstOnStageUser.rtcUID),updateDeviceState:e.updateDeviceState,userUUID:e.userUUID,onDoubleClick:()=>e.firstOnStageUser&&e.createMaximizedAvatarWindow(e.firstOnStageUser.userUUID),onDragEnd:e.onDragEnd,onDragStart:e.onDragStart})]})})}function b(){v(n=>!n),d.setRightSideClose(g)}}));export{ce as BigClassPage,ce as default};
//# sourceMappingURL=index.0fdb1528.js.map
