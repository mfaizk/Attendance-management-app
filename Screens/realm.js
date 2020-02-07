import Realm from 'realm'
class studentInfo extends Realm.Object {}
studentInfo.schema={
    name: 'sInfo',
    
   
    properties: {
        
        name: 'string',
        rollNo: 'string',
        branch: 'string'
    }

}


class PresentData extends Realm.Object {}
PresentData.schema={
    name:'pData',
  
    properties:{
        date:'string',
        rollNo:'string',
        wholeDate:'string'

    }
}


class AbsentData extends Realm.Object {}
AbsentData.schema={
    name:'aData',
  
    properties:{
        date:'string',
        rollNo:'string',
        wholeDate:'string'

    }
}




class temporaryStudentInfo extends Realm.Object{}
temporaryStudentInfo.schema={

   name:'tempSinfo',
    properties: {
        id:{type:'int',default:0},
        name: 'string',
        rollNo: 'string',
        branch: 'string'
    }
}

class dateInfo extends Realm.Object{}
dateInfo.schema={
    name:'tempDate',
    properties:{
        curDate:{type:'int'},
        counter:{type:'int',default:0}
    }
}

export default new Realm({schema: [studentInfo, PresentData,temporaryStudentInfo,dateInfo,AbsentData]});



