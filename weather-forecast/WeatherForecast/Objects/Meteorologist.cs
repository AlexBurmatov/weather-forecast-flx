﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.WeatherForecast
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Meteorologist.
    /// </summary>
    // *** Start programmer edit section *** (Meteorologist CustomAttributes)

    // *** End programmer edit section *** (Meteorologist CustomAttributes)
    [BusinessServer("IIS.WeatherForecast.ArchiverBS, WeatherForecast.BusinessServers", ICSSoft.STORMNET.Business.DataServiceObjectEvents.OnDeleteFromStorage)]
    [AutoAltered()]
    [Caption("Метеоролог")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("MeteorologistE", new string[] {
            "LastName as \'Фамилия\'",
            "FirstName as \'Имя\'",
            "Patronymic as \'Отчество\'",
            "FullName as \'ФИО\'",
            "Login as \'Логин\'",
            "IsArchive as \'Архивный\'"}, Hidden=new string[] {
            "LastName",
            "FirstName",
            "Patronymic",
            "IsArchive"})]
    [View("MeteorologistL", new string[] {
            "LastName as \'Фамилия\'",
            "FirstName as \'Имя\'",
            "Patronymic as \'Отчество\'",
            "FullName as \'ФИО\'",
            "Login as \'Логин\'",
            "IsArchive as \'Архивный\'"}, Hidden=new string[] {
            "FullName",
            "IsArchive"})]
    public class Meteorologist : ICSSoft.STORMNET.DataObject
    {
        
        private string fFirstName;
        
        private string fLastName;
        
        private string fPatronymic;
        
        private string fLogin;
        
        private bool fIsArchive;
        
        // *** Start programmer edit section *** (Meteorologist CustomMembers)

        // *** End programmer edit section *** (Meteorologist CustomMembers)

        
        /// <summary>
        /// FirstName.
        /// </summary>
        // *** Start programmer edit section *** (Meteorologist.FirstName CustomAttributes)

        // *** End programmer edit section *** (Meteorologist.FirstName CustomAttributes)
        [StrLen(255)]
        public virtual string FirstName
        {
            get
            {
                // *** Start programmer edit section *** (Meteorologist.FirstName Get start)

                // *** End programmer edit section *** (Meteorologist.FirstName Get start)
                string result = this.fFirstName;
                // *** Start programmer edit section *** (Meteorologist.FirstName Get end)

                // *** End programmer edit section *** (Meteorologist.FirstName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteorologist.FirstName Set start)

                // *** End programmer edit section *** (Meteorologist.FirstName Set start)
                this.fFirstName = value;
                // *** Start programmer edit section *** (Meteorologist.FirstName Set end)

                // *** End programmer edit section *** (Meteorologist.FirstName Set end)
            }
        }
        
        /// <summary>
        /// LastName.
        /// </summary>
        // *** Start programmer edit section *** (Meteorologist.LastName CustomAttributes)

        // *** End programmer edit section *** (Meteorologist.LastName CustomAttributes)
        [StrLen(255)]
        public virtual string LastName
        {
            get
            {
                // *** Start programmer edit section *** (Meteorologist.LastName Get start)

                // *** End programmer edit section *** (Meteorologist.LastName Get start)
                string result = this.fLastName;
                // *** Start programmer edit section *** (Meteorologist.LastName Get end)

                // *** End programmer edit section *** (Meteorologist.LastName Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteorologist.LastName Set start)

                // *** End programmer edit section *** (Meteorologist.LastName Set start)
                this.fLastName = value;
                // *** Start programmer edit section *** (Meteorologist.LastName Set end)

                // *** End programmer edit section *** (Meteorologist.LastName Set end)
            }
        }
        
        /// <summary>
        /// Patronymic.
        /// </summary>
        // *** Start programmer edit section *** (Meteorologist.Patronymic CustomAttributes)

        // *** End programmer edit section *** (Meteorologist.Patronymic CustomAttributes)
        [StrLen(255)]
        public virtual string Patronymic
        {
            get
            {
                // *** Start programmer edit section *** (Meteorologist.Patronymic Get start)

                // *** End programmer edit section *** (Meteorologist.Patronymic Get start)
                string result = this.fPatronymic;
                // *** Start programmer edit section *** (Meteorologist.Patronymic Get end)

                // *** End programmer edit section *** (Meteorologist.Patronymic Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteorologist.Patronymic Set start)

                // *** End programmer edit section *** (Meteorologist.Patronymic Set start)
                this.fPatronymic = value;
                // *** Start programmer edit section *** (Meteorologist.Patronymic Set end)

                // *** End programmer edit section *** (Meteorologist.Patronymic Set end)
            }
        }
        
        /// <summary>
        /// FullName.
        /// </summary>
        // *** Start programmer edit section *** (Meteorologist.FullName CustomAttributes)

        // *** End programmer edit section *** (Meteorologist.FullName CustomAttributes)
        [ICSSoft.STORMNET.NotStored()]
        [StrLen(255)]
        public virtual string FullName
        {
            get
            {
                // *** Start programmer edit section *** (Meteorologist.FullName Get)

                return null;
                // *** End programmer edit section *** (Meteorologist.FullName Get)
            }
            set
            {
                // *** Start programmer edit section *** (Meteorologist.FullName Set)

                // *** End programmer edit section *** (Meteorologist.FullName Set)
            }
        }
        
        /// <summary>
        /// Login.
        /// </summary>
        // *** Start programmer edit section *** (Meteorologist.Login CustomAttributes)

        // *** End programmer edit section *** (Meteorologist.Login CustomAttributes)
        [StrLen(255)]
        public virtual string Login
        {
            get
            {
                // *** Start programmer edit section *** (Meteorologist.Login Get start)

                // *** End programmer edit section *** (Meteorologist.Login Get start)
                string result = this.fLogin;
                // *** Start programmer edit section *** (Meteorologist.Login Get end)

                // *** End programmer edit section *** (Meteorologist.Login Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteorologist.Login Set start)

                // *** End programmer edit section *** (Meteorologist.Login Set start)
                this.fLogin = value;
                // *** Start programmer edit section *** (Meteorologist.Login Set end)

                // *** End programmer edit section *** (Meteorologist.Login Set end)
            }
        }
        
        /// <summary>
        /// IsArchive.
        /// </summary>
        // *** Start programmer edit section *** (Meteorologist.IsArchive CustomAttributes)

        // *** End programmer edit section *** (Meteorologist.IsArchive CustomAttributes)
        public virtual bool IsArchive
        {
            get
            {
                // *** Start programmer edit section *** (Meteorologist.IsArchive Get start)

                // *** End programmer edit section *** (Meteorologist.IsArchive Get start)
                bool result = this.fIsArchive;
                // *** Start programmer edit section *** (Meteorologist.IsArchive Get end)

                // *** End programmer edit section *** (Meteorologist.IsArchive Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Meteorologist.IsArchive Set start)

                // *** End programmer edit section *** (Meteorologist.IsArchive Set start)
                this.fIsArchive = value;
                // *** Start programmer edit section *** (Meteorologist.IsArchive Set end)

                // *** End programmer edit section *** (Meteorologist.IsArchive Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "MeteorologistE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MeteorologistE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MeteorologistE", typeof(IIS.WeatherForecast.Meteorologist));
                }
            }
            
            /// <summary>
            /// "MeteorologistL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View MeteorologistL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("MeteorologistL", typeof(IIS.WeatherForecast.Meteorologist));
                }
            }
        }
    }
}