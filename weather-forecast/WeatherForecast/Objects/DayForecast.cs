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
    /// Day forecast.
    /// </summary>
    // *** Start programmer edit section *** (DayForecast CustomAttributes)

    // *** End programmer edit section *** (DayForecast CustomAttributes)
    [BusinessServer("IIS.WeatherForecast.DayForecastBS, WeatherForecast.BusinessServers", ICSSoft.STORMNET.Business.DataServiceObjectEvents.OnAllEvents)]
    [AutoAltered()]
    [Caption("Дневной прогноз")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("DayForecastE", new string[] {
            "Date as \'Дата\'",
            "Area as \'Местность\'",
            "Area.Name as \'Name\'",
            "Temperature as \'Температура воздуха\'",
            "Overcast as \'Облачность\'",
            "Overcast.Name as \'Name\'",
            "Precipitation as \'Осадки\'",
            "Precipitation.Name as \'Name\'",
            "Preasure as \'Давление (мм рт. ст.)\'",
            "WindDirection as \'Направление ветра\'",
            "WindSpeed as \'Скорость ветра (м/с)\'",
            "WindSpeedExtrem as \'Скорость ветра в порывах (м/с)\'",
            "Editor as \'Сотрудник, изменивший параметры последним\'",
            "Editor.LastName",
            "Editor.FirstName",
            "Editor.Patronymic",
            "Editor.FullName",
            "LastEditingDate as \'Дата последнего изменения\'",
            "ForecastInLine as \'Прогноз строкой\'",
            "IsArchive as \'Архивный\'"}, Hidden=new string[] {
            "Area.Name",
            "Overcast.Name",
            "Precipitation.Name",
            "Editor.LastName",
            "Editor.FirstName",
            "Editor.Patronymic",
            "Editor.FullName",
            "ForecastInLine",
            "IsArchive"})]
    [AssociatedDetailViewAttribute("DayForecastE", "PossibleCataclysm", "PossibleCataclysmL", true, "", "Возможные катаклизмы", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("DayForecastE", "Area", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    [MasterViewDefineAttribute("DayForecastE", "Overcast", ICSSoft.STORMNET.LookupTypeEnum.Combo, "", "Name")]
    [MasterViewDefineAttribute("DayForecastE", "Precipitation", ICSSoft.STORMNET.LookupTypeEnum.Combo, "", "Name")]
    [MasterViewDefineAttribute("DayForecastE", "Editor", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "FullName")]
    [View("DayForecastL", new string[] {
            "Date as \'Дата\'",
            "Area.Name as \'Местность\'",
            "Temperature as \'Температура воздуха\'",
            "Overcast.Name as \'Облачность\'",
            "Precipitation.Name as \'Осадки\'",
            "Preasure as \'Давление\'",
            "WindDirection as \'Направление ветра\'",
            "WindSpeed as \'Скорость ветра\'",
            "WindSpeedExtrem as \'Скорость ветра в порывах\'",
            "Editor.FullName as \'Сотрудник-корректор\'",
            "Editor.LastName",
            "Editor.FirstName",
            "Editor.Patronymic",
            "LastEditingDate as \'Дата изменения\'",
            "ForecastInLine as \'Прогноз строкой\'",
            "IsArchive as \'Архивный\'"}, Hidden=new string[] {
            "Editor.LastName",
            "Editor.FirstName",
            "Editor.Patronymic",
            "ForecastInLine",
            "IsArchive"})]
    public class DayForecast : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fDate;
        
        private int fTemperature;
        
        private int fPreasure;
        
        private IIS.WeatherForecast.WindDirection fWindDirection;
        
        private int fWindSpeed;
        
        private int fWindSpeedExtrem;
        
        private System.DateTime fLastEditingDate;
        
        private bool fIsArchive;
        
        private IIS.WeatherForecast.Precipitation fPrecipitation;
        
        private IIS.WeatherForecast.Area fArea;
        
        private IIS.WeatherForecast.Overcast fOvercast;
        
        private IIS.WeatherForecast.Meteorologist fEditor;
        
        private IIS.WeatherForecast.DetailArrayOfPossibleCataclysm fPossibleCataclysm;
        
        // *** Start programmer edit section *** (DayForecast CustomMembers)

        // *** End programmer edit section *** (DayForecast CustomMembers)

        
        /// <summary>
        /// Date.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Date CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Date CustomAttributes)
        public virtual System.DateTime Date
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Date Get start)

                // *** End programmer edit section *** (DayForecast.Date Get start)
                System.DateTime result = this.fDate;
                // *** Start programmer edit section *** (DayForecast.Date Get end)

                // *** End programmer edit section *** (DayForecast.Date Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Date Set start)

                // *** End programmer edit section *** (DayForecast.Date Set start)
                this.fDate = value;
                // *** Start programmer edit section *** (DayForecast.Date Set end)

                // *** End programmer edit section *** (DayForecast.Date Set end)
            }
        }
        
        /// <summary>
        /// Temperature.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Temperature CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Temperature CustomAttributes)
        public virtual int Temperature
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Temperature Get start)

                // *** End programmer edit section *** (DayForecast.Temperature Get start)
                int result = this.fTemperature;
                // *** Start programmer edit section *** (DayForecast.Temperature Get end)

                // *** End programmer edit section *** (DayForecast.Temperature Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Temperature Set start)

                // *** End programmer edit section *** (DayForecast.Temperature Set start)
                this.fTemperature = value;
                // *** Start programmer edit section *** (DayForecast.Temperature Set end)

                // *** End programmer edit section *** (DayForecast.Temperature Set end)
            }
        }
        
        /// <summary>
        /// Preasure.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Preasure CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Preasure CustomAttributes)
        public virtual int Preasure
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Preasure Get start)

                // *** End programmer edit section *** (DayForecast.Preasure Get start)
                int result = this.fPreasure;
                // *** Start programmer edit section *** (DayForecast.Preasure Get end)

                // *** End programmer edit section *** (DayForecast.Preasure Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Preasure Set start)

                // *** End programmer edit section *** (DayForecast.Preasure Set start)
                this.fPreasure = value;
                // *** Start programmer edit section *** (DayForecast.Preasure Set end)

                // *** End programmer edit section *** (DayForecast.Preasure Set end)
            }
        }
        
        /// <summary>
        /// WindDirection.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.WindDirection CustomAttributes)

        // *** End programmer edit section *** (DayForecast.WindDirection CustomAttributes)
        public virtual IIS.WeatherForecast.WindDirection WindDirection
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.WindDirection Get start)

                // *** End programmer edit section *** (DayForecast.WindDirection Get start)
                IIS.WeatherForecast.WindDirection result = this.fWindDirection;
                // *** Start programmer edit section *** (DayForecast.WindDirection Get end)

                // *** End programmer edit section *** (DayForecast.WindDirection Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.WindDirection Set start)

                // *** End programmer edit section *** (DayForecast.WindDirection Set start)
                this.fWindDirection = value;
                // *** Start programmer edit section *** (DayForecast.WindDirection Set end)

                // *** End programmer edit section *** (DayForecast.WindDirection Set end)
            }
        }
        
        /// <summary>
        /// WindSpeed.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.WindSpeed CustomAttributes)

        // *** End programmer edit section *** (DayForecast.WindSpeed CustomAttributes)
        public virtual int WindSpeed
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.WindSpeed Get start)

                // *** End programmer edit section *** (DayForecast.WindSpeed Get start)
                int result = this.fWindSpeed;
                // *** Start programmer edit section *** (DayForecast.WindSpeed Get end)

                // *** End programmer edit section *** (DayForecast.WindSpeed Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.WindSpeed Set start)

                // *** End programmer edit section *** (DayForecast.WindSpeed Set start)
                this.fWindSpeed = value;
                // *** Start programmer edit section *** (DayForecast.WindSpeed Set end)

                // *** End programmer edit section *** (DayForecast.WindSpeed Set end)
            }
        }
        
        /// <summary>
        /// WindSpeedExtrem.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.WindSpeedExtrem CustomAttributes)

        // *** End programmer edit section *** (DayForecast.WindSpeedExtrem CustomAttributes)
        public virtual int WindSpeedExtrem
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.WindSpeedExtrem Get start)

                // *** End programmer edit section *** (DayForecast.WindSpeedExtrem Get start)
                int result = this.fWindSpeedExtrem;
                // *** Start programmer edit section *** (DayForecast.WindSpeedExtrem Get end)

                // *** End programmer edit section *** (DayForecast.WindSpeedExtrem Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.WindSpeedExtrem Set start)

                // *** End programmer edit section *** (DayForecast.WindSpeedExtrem Set start)
                this.fWindSpeedExtrem = value;
                // *** Start programmer edit section *** (DayForecast.WindSpeedExtrem Set end)

                // *** End programmer edit section *** (DayForecast.WindSpeedExtrem Set end)
            }
        }
        
        /// <summary>
        /// ForecastInLine.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.ForecastInLine CustomAttributes)

        // *** End programmer edit section *** (DayForecast.ForecastInLine CustomAttributes)
        [ICSSoft.STORMNET.NotStored()]
        [StrLen(255)]
        public virtual string ForecastInLine
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.ForecastInLine Get)

                return null;
                // *** End programmer edit section *** (DayForecast.ForecastInLine Get)
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.ForecastInLine Set)

                // *** End programmer edit section *** (DayForecast.ForecastInLine Set)
            }
        }
        
        /// <summary>
        /// LastEditingDate.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.LastEditingDate CustomAttributes)

        // *** End programmer edit section *** (DayForecast.LastEditingDate CustomAttributes)
        public virtual System.DateTime LastEditingDate
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.LastEditingDate Get start)

                // *** End programmer edit section *** (DayForecast.LastEditingDate Get start)
                System.DateTime result = this.fLastEditingDate;
                // *** Start programmer edit section *** (DayForecast.LastEditingDate Get end)

                // *** End programmer edit section *** (DayForecast.LastEditingDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.LastEditingDate Set start)

                // *** End programmer edit section *** (DayForecast.LastEditingDate Set start)
                this.fLastEditingDate = value;
                // *** Start programmer edit section *** (DayForecast.LastEditingDate Set end)

                // *** End programmer edit section *** (DayForecast.LastEditingDate Set end)
            }
        }
        
        /// <summary>
        /// IsArchive.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.IsArchive CustomAttributes)

        // *** End programmer edit section *** (DayForecast.IsArchive CustomAttributes)
        public virtual bool IsArchive
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.IsArchive Get start)

                // *** End programmer edit section *** (DayForecast.IsArchive Get start)
                bool result = this.fIsArchive;
                // *** Start programmer edit section *** (DayForecast.IsArchive Get end)

                // *** End programmer edit section *** (DayForecast.IsArchive Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.IsArchive Set start)

                // *** End programmer edit section *** (DayForecast.IsArchive Set start)
                this.fIsArchive = value;
                // *** Start programmer edit section *** (DayForecast.IsArchive Set end)

                // *** End programmer edit section *** (DayForecast.IsArchive Set end)
            }
        }
        
        /// <summary>
        /// Day forecast.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Precipitation CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Precipitation CustomAttributes)
        [PropertyStorage(new string[] {
                "Precipitation"})]
        [NotNull()]
        public virtual IIS.WeatherForecast.Precipitation Precipitation
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Precipitation Get start)

                // *** End programmer edit section *** (DayForecast.Precipitation Get start)
                IIS.WeatherForecast.Precipitation result = this.fPrecipitation;
                // *** Start programmer edit section *** (DayForecast.Precipitation Get end)

                // *** End programmer edit section *** (DayForecast.Precipitation Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Precipitation Set start)

                // *** End programmer edit section *** (DayForecast.Precipitation Set start)
                this.fPrecipitation = value;
                // *** Start programmer edit section *** (DayForecast.Precipitation Set end)

                // *** End programmer edit section *** (DayForecast.Precipitation Set end)
            }
        }
        
        /// <summary>
        /// Day forecast.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Area CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Area CustomAttributes)
        [PropertyStorage(new string[] {
                "Area"})]
        [NotNull()]
        public virtual IIS.WeatherForecast.Area Area
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Area Get start)

                // *** End programmer edit section *** (DayForecast.Area Get start)
                IIS.WeatherForecast.Area result = this.fArea;
                // *** Start programmer edit section *** (DayForecast.Area Get end)

                // *** End programmer edit section *** (DayForecast.Area Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Area Set start)

                // *** End programmer edit section *** (DayForecast.Area Set start)
                this.fArea = value;
                // *** Start programmer edit section *** (DayForecast.Area Set end)

                // *** End programmer edit section *** (DayForecast.Area Set end)
            }
        }
        
        /// <summary>
        /// Day forecast.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Overcast CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Overcast CustomAttributes)
        [PropertyStorage(new string[] {
                "Overcast"})]
        [NotNull()]
        public virtual IIS.WeatherForecast.Overcast Overcast
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Overcast Get start)

                // *** End programmer edit section *** (DayForecast.Overcast Get start)
                IIS.WeatherForecast.Overcast result = this.fOvercast;
                // *** Start programmer edit section *** (DayForecast.Overcast Get end)

                // *** End programmer edit section *** (DayForecast.Overcast Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Overcast Set start)

                // *** End programmer edit section *** (DayForecast.Overcast Set start)
                this.fOvercast = value;
                // *** Start programmer edit section *** (DayForecast.Overcast Set end)

                // *** End programmer edit section *** (DayForecast.Overcast Set end)
            }
        }
        
        /// <summary>
        /// Day forecast.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.Editor CustomAttributes)

        // *** End programmer edit section *** (DayForecast.Editor CustomAttributes)
        [PropertyStorage(new string[] {
                "Editor"})]
        [NotNull()]
        public virtual IIS.WeatherForecast.Meteorologist Editor
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.Editor Get start)

                // *** End programmer edit section *** (DayForecast.Editor Get start)
                IIS.WeatherForecast.Meteorologist result = this.fEditor;
                // *** Start programmer edit section *** (DayForecast.Editor Get end)

                // *** End programmer edit section *** (DayForecast.Editor Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.Editor Set start)

                // *** End programmer edit section *** (DayForecast.Editor Set start)
                this.fEditor = value;
                // *** Start programmer edit section *** (DayForecast.Editor Set end)

                // *** End programmer edit section *** (DayForecast.Editor Set end)
            }
        }
        
        /// <summary>
        /// Day forecast.
        /// </summary>
        // *** Start programmer edit section *** (DayForecast.PossibleCataclysm CustomAttributes)

        // *** End programmer edit section *** (DayForecast.PossibleCataclysm CustomAttributes)
        public virtual IIS.WeatherForecast.DetailArrayOfPossibleCataclysm PossibleCataclysm
        {
            get
            {
                // *** Start programmer edit section *** (DayForecast.PossibleCataclysm Get start)

                // *** End programmer edit section *** (DayForecast.PossibleCataclysm Get start)
                if ((this.fPossibleCataclysm == null))
                {
                    this.fPossibleCataclysm = new IIS.WeatherForecast.DetailArrayOfPossibleCataclysm(this);
                }
                IIS.WeatherForecast.DetailArrayOfPossibleCataclysm result = this.fPossibleCataclysm;
                // *** Start programmer edit section *** (DayForecast.PossibleCataclysm Get end)

                // *** End programmer edit section *** (DayForecast.PossibleCataclysm Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (DayForecast.PossibleCataclysm Set start)

                // *** End programmer edit section *** (DayForecast.PossibleCataclysm Set start)
                this.fPossibleCataclysm = value;
                // *** Start programmer edit section *** (DayForecast.PossibleCataclysm Set end)

                // *** End programmer edit section *** (DayForecast.PossibleCataclysm Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "DayForecastE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DayForecastE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DayForecastE", typeof(IIS.WeatherForecast.DayForecast));
                }
            }
            
            /// <summary>
            /// "DayForecastL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View DayForecastL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("DayForecastL", typeof(IIS.WeatherForecast.DayForecast));
                }
            }
        }
    }
}