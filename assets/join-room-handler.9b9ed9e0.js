import{br as c,bs as i,aP as t,bc as s}from"./index.43c4ffc0.js";import{e as n}from"./routes.73fc4946.js";const U=async(m,o)=>{try{const r=m.replace(/\s+/g,""),e=c.rooms.get(r),l=e==null?void 0:e.periodicUUID,a=await c.joinRoom(l||r);switch(i.updateShowGuide(a.showGuide),i.updatePeriodicUUID(e==null?void 0:e.periodicUUID),a.roomType){case t.BigClass:{o(s.BigClassPage,a);break}case t.SmallClass:{o(s.SmallClassPage,a);break}case t.OneToOne:{o(s.OneToOnePage,a);break}default:new Error("failed to join room: incorrect room type")}}catch(r){o(s.HomePage),n(r)}};export{U as j};
//# sourceMappingURL=join-room-handler.9b9ed9e0.js.map
