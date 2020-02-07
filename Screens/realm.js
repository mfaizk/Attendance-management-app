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


class attendanceData extends Realm.Object {}
attendanceData.schema={
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

export default new Realm({schema: [studentInfo, attendanceData,temporaryStudentInfo,dateInfo]});



