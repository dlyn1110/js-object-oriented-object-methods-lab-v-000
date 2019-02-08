function BoardMember (name, homeState, training) {
  this.name = name ;
  this.homeState = homeState;
  this.training = training ;
  this.veto = function(veto) {
    return "No, I must Dosagree";
  }
  this.appprove = function(approve){
    return "You can do that";
  }
  this.doCharity = function(doCharity) {
    return "I like to help peopl";
  }
  this.releasePressStatement = function(releasePressStatement) {
    return "You will see great things from Scuber" ;
  }
}
