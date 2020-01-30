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
    

    }
}
class temporaryStudentInfo extends Realm.Object{}
temporaryStudentInfo.schema={

   name:'tempSinfo',
    properties: {
        
        name: 'string',
        rollNo: 'string',
        branch: 'string'
    }
}


export default new Realm({schema: [studentInfo, attendanceData,temporaryStudentInfo]});







