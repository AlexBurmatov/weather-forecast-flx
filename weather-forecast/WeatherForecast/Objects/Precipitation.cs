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
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Precipitation.
    /// </summary>
    // *** Start programmer edit section *** (Precipitation CustomAttributes)

    // *** End programmer edit section *** (Precipitation CustomAttributes)
    [AutoAltered()]
    [Caption("Осадки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PrecipitationE", new string[] {
            "Name as \'Наименование\'"})]
    [View("PrecipitationL", new string[] {
            "Name as \'Наименование\'"})]
    public class Precipitation : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        // *** Start programmer edit section *** (Precipitation CustomMembers)

        // *** End programmer edit section *** (Precipitation CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Precipitation.Name CustomAttributes)

        // *** End programmer edit section *** (Precipitation.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Precipitation.Name Get start)

                // *** End programmer edit section *** (Precipitation.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Precipitation.Name Get end)

                // *** End programmer edit section *** (Precipitation.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Precipitation.Name Set start)

                // *** End programmer edit section *** (Precipitation.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Precipitation.Name Set end)

                // *** End programmer edit section *** (Precipitation.Name Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PrecipitationE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PrecipitationE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PrecipitationE", typeof(IIS.WeatherForecast.Precipitation));
                }
            }
            
            /// <summary>
            /// "PrecipitationL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PrecipitationL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PrecipitationL", typeof(IIS.WeatherForecast.Precipitation));
                }
            }
        }
    }
}