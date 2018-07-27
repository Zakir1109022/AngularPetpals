import { Http, Response, Headers } from '@angular/http'
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable, Subject } from 'rxjs'
import { Pet } from '../shared/pet.model';

@Injectable()
export class AlliedService {

    private baseUrl="http://staging.mypetfriends.in/api/";
    private PetList: Pet[] = [];
    searchPetList = new Subject<Pet[]>();
    showloadingImageSubject = new Subject<boolean>();
    dataHasOrNotSubject = new Subject<boolean>();

    constructor(private http: Http) {

    }

    showAlliedServicesByPage(pageNumber: number) {
        var body = { "UserType": "Allied" }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token + '&pageNumber=' + pageNumber, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                this.showloadingImageSubject.next(false);

                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    getAlliedPetByPetId(petId: number) {
        var body = { "UserType": "Allied", "PetId": petId }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                this.showloadingImageSubject.next(false);
                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }



    getPetByAlliedName(alliedName: string) {
        this.dataHasOrNotSubject.next(false);
        this.showloadingImageSubject.next(true);
        var body = { "UserType": "Allied", "BreedName": alliedName }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.get(this.baseUrl+'Utils/GetAllUserTypes?token=' + token, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                this.showloadingImageSubject.next(false);

                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    getPetByLocation(country: string, city: string, area: string) {
        this.dataHasOrNotSubject.next(false);
        this.showloadingImageSubject.next(true);
        var body = { "UserType": "Allied", "AreaName": area, "CityName": city, "CountryName": country }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                this.showloadingImageSubject.next(false);

                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    getPetByCountry(country: string) {
        var body = { "UserType": "Allied", "CountryName": country }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    getPetByCity(city: string) {
        var body = { "UserType": "Allied", "CityName": city }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    getPetByArea(area: string) {
        var body = { "UserType": "Allied", "AreaName": area }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    getPetByCityAndArea(city: string, area: string) {
        var body = { "UserType": "Allied", "CityName": city, "AreaName": area }
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const token = '6742142b-0623-4adc-8e41-0b290330db7f';
        return this.http.post(this.baseUrl+'Utils/SearchPets?token=' + token, body, { headers: headers })
            .map((response: Response) => {
                const petList = response.json().Data;
                let transferPetList: Pet[] = [];
                for (let pet of petList) {
                    transferPetList.push(new Pet(
                        pet.AcceptedCount,
                        pet.AreaId,
                        pet.AreaName,
                        pet.AvilableForAdotpion,
                        pet.BreedId,
                        pet.BreedName,
                        pet.CityId,
                        pet.CityName,
                        pet.CountryId,
                        pet.Colors,
                        pet.CountryName,
                        pet.Description,
                        pet.Dummy,
                        pet.ExerciseNeeds,
                        pet.GoodWithDogs,
                        pet.GroomingNeeds,
                        pet.HeatingCycleFrom,
                        pet.HeatingCycleTo,
                        pet.Height,
                        pet.IsFavorite,
                        pet.KCIDetails,
                        pet.KCIRegistered,
                        pet.LastApprovedDate,
                        pet.LastRequstedDate,
                        pet.Latitude,
                        pet.Longitude,
                        pet.OfferPriceFrom,
                        pet.OfferPriceTo,
                        pet.PetDob,
                        pet.PetGender,
                        pet.PetId,
                        pet.PetName,
                        pet.PetOwnerId,
                        pet.PetType,
                        pet.PictrueName,
                        pet.RequestedCount,
                        pet.UserType,
                        pet.WatchdogAbility,
                        pet.Wight,
                        pet.WillingToSell,
                        pet.searchText
                    ));
                }
                return transferPetList;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }


    aliedServiceRequest(body: any, userToken: string) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('SecurityToken',userToken)
        headers.append('Authorization','Bearer '+userToken)

        this.baseUrl=' http://app.petpals.love/staging/api/'

        return this.http.post(this.baseUrl + 'Utils/AlliedRequest', body, { headers: headers })
            .map((response: Response) => {
                const jsonResult = response.json();
                return jsonResult;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }



}