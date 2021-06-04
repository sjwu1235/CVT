pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract covidVaccinRegister{
    struct VaccinationRecord{
        string Name;
        string Surname;
        string VaccinationDate;
        string VaccineName;
        string VaccinationPlace;
    }

    VaccinationRecord[] public vaccinationRecords;

    //good to know
    //https://gus-tavo-guim.medium.com/public-vs-external-functions-in-solidity-b46bcf0ba3ac

    function createVaccinationRecord(string calldata _Name, string calldata _Surname, string calldata _VaccinationDate, string calldata _VaccineName, string calldata _VaccinationPlace) external returns(uint){
        //insert a record into the array
        uint id =vaccinationRecords.push(VaccinationRecord(_Name, _Surname, _VaccinationDate, _VaccineName, _VaccinationPlace))-1;
        //get the position of the record in the array and return the position
        return id;
    }

    function getNumberOfVaccinations() public view returns(uint) {
        //returning length of vaccinationrecords array
        return vaccinationRecords.length;
    }

    function getVaccineRecord(int _ind) external view returns (VaccinationRecord memory){
        int max=int(getNumberOfVaccinations());
        require(
            (_ind>=0) && (_ind<max),
            "Index out of range."
        );
        return vaccinationRecords[uint(_ind)];
    }


}