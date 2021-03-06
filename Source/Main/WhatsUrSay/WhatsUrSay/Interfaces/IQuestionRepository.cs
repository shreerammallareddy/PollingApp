﻿/*
Component :                             An interface which declares the methods that need to be defined in 'QuestionRepository.cs'
Author:                                 Sreedevi Koppula
Use of the component in system design:  Good coding practice 
Written and revised:                    11/14/2016
Reason for component existence:         Acts as a contract that specifies the list of all methods that need to be defined in 'QuestionRepository.cs' 
Component usage of data structures, algorithms and control(if any): 
    The component contains the declaration of below methods:
        'Add(Question question)'
    Theis method is defined in 'QuestionRepository.cs'
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WhatsUrSay.Models;

namespace WhatsUrSay.Interfaces
{
    interface IQuestionRepository
    {
        Question Add(Question question);
    }
}