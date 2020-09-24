import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }

  async create(formData) {
    console.log(formData)
    let res = await axios({
      method: "POST",
      url: "http://localhost:5000/goal",
      data: {
        "name": formData.name,
        "description": formData.description,
        "goalValue": parseFloat(formData.goalValue)
    }
    });
    let data = res.data;
    console.log(data);

    return data;
  }

  async deleteGoal(id) {
    console.log(id)
    let res = await axios({
      method: "DELETE",
      url: `http://localhost:5000/goal/${id}`
    });
    let data = res.data;
    console.log(data);

    return data;
  }

  async credit(creditDTO) {
    console.log(creditDTO)
    let res = await axios({
      method: "POST",
      url: `http://localhost:5000/goal/credit`,
      data: { 
        "id": creditDTO.id,
        "value": creditDTO.value,
      }

    });
    let data = res.data;
    console.log(data);

    return data;
  }

  async debit(creditDTO) {
    console.log(creditDTO)
    let res = await axios({
      method: "POST",
      url: `http://localhost:5000/goal/debit`,
      data: { 
        "id": creditDTO.id,
        "value": creditDTO.value,
      }

    });
    let data = res.data;
    console.log(data);

    return data;
  }

  async listAll() {

    let res = await axios({
      method: "GET",
      url: "http://localhost:5000/goal"
    });
    let data = res.data.response;
    console.log(data);
    return data;
  }
  
}
