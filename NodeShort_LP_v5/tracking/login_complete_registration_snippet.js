// === H5登录页：识别来自注册页 -> 上报 CompleteRegistration (2025-10-19) ===
// 需确保本页已初始化 Pixel：fbq('init','1141066934824572'); fbq('track','PageView');
(function(){
  function uuid(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0,v=c==='x'?r:(r&0x3|0x8);return v.toString(16);});}
  function qp(k){ try{ return new URL(location.href).searchParams.get(k)||'' }catch(e){ return '' } }
  var ref = document.referrer || '';
  var fromRegister = ref.indexOf('/#/pages/login/register') !== -1;
  var ns_uid = qp('extid') || localStorage.getItem('ns_uid') || '';
  var sentKey = 'ns_reg_complete_sent';
  if (fromRegister && !localStorage.getItem(sentKey)){
    var regEID = uuid();
    try{
      fbq('track', 'CompleteRegistration', {
        external_id: ns_uid || undefined,
        registration_method: 'h5_redirect_to_login'
      }, {eventID: regEID});
    }catch(e){}
    localStorage.setItem(sentKey, regEID);
  }
})();