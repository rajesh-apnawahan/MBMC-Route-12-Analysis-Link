var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MBMCWealthIndex_1 = new ol.format.GeoJSON();
var features_MBMCWealthIndex_1 = format_MBMCWealthIndex_1.readFeatures(json_MBMCWealthIndex_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCWealthIndex_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCWealthIndex_1.addFeatures(features_MBMCWealthIndex_1);
var lyr_MBMCWealthIndex_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCWealthIndex_1, 
                style: style_MBMCWealthIndex_1,
                popuplayertitle: "MBMC Wealth Index",
                interactive: true,
    title: 'MBMC Wealth Index<br />\
    <img src="styles/legend/MBMCWealthIndex_1_0.png" /> -0.29 - -0.16<br />\
    <img src="styles/legend/MBMCWealthIndex_1_1.png" /> -0.16 - -0.03<br />\
    <img src="styles/legend/MBMCWealthIndex_1_2.png" /> -0.03 - 0.11<br />\
    <img src="styles/legend/MBMCWealthIndex_1_3.png" /> 0.11 - 0.24<br />\
    <img src="styles/legend/MBMCWealthIndex_1_4.png" /> 0.24 - 0.37<br />\
    <img src="styles/legend/MBMCWealthIndex_1_5.png" /> 0.37 - 0.51<br />\
    <img src="styles/legend/MBMCWealthIndex_1_6.png" /> 0.51 - 0.64<br />\
    <img src="styles/legend/MBMCWealthIndex_1_7.png" /> 0.64 - 0.77<br />\
    <img src="styles/legend/MBMCWealthIndex_1_8.png" /> 0.77 - 0.91<br />\
    <img src="styles/legend/MBMCWealthIndex_1_9.png" /> 0.91 - 1.04<br />\
    <img src="styles/legend/MBMCWealthIndex_1_10.png" /> 1.04 - 1.18<br />\
    <img src="styles/legend/MBMCWealthIndex_1_11.png" /> 1.18 - 1.31<br />\
    <img src="styles/legend/MBMCWealthIndex_1_12.png" /> 1.31 - 1.44<br />\
    <img src="styles/legend/MBMCWealthIndex_1_13.png" /> 1.44 - 1.58<br />\
    <img src="styles/legend/MBMCWealthIndex_1_14.png" /> 1.58 - 1.71<br />'
        });
var format_PopulationMBMC_2 = new ol.format.GeoJSON();
var features_PopulationMBMC_2 = format_PopulationMBMC_2.readFeatures(json_PopulationMBMC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PopulationMBMC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PopulationMBMC_2.addFeatures(features_PopulationMBMC_2);
var lyr_PopulationMBMC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PopulationMBMC_2, 
                style: style_PopulationMBMC_2,
                popuplayertitle: "Population MBMC",
                interactive: true,
    title: 'Population MBMC<br />\
    <img src="styles/legend/PopulationMBMC_2_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/PopulationMBMC_2_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/PopulationMBMC_2_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/PopulationMBMC_2_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/PopulationMBMC_2_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/PopulationMBMC_2_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/PopulationMBMC_2_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/PopulationMBMC_2_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/PopulationMBMC_2_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/PopulationMBMC_2_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/PopulationMBMC_2_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/PopulationMBMC_2_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/PopulationMBMC_2_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/PopulationMBMC_2_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/PopulationMBMC_2_14.png" /> 28955 - 31023<br />'
        });
var format_RailwayStn_3 = new ol.format.GeoJSON();
var features_RailwayStn_3 = format_RailwayStn_3.readFeatures(json_RailwayStn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailwayStn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailwayStn_3.addFeatures(features_RailwayStn_3);
var lyr_RailwayStn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailwayStn_3, 
                style: style_RailwayStn_3,
                popuplayertitle: "Railway Stn",
                interactive: true,
                title: '<img src="styles/legend/RailwayStn_3.png" /> Railway Stn'
            });
var format_GovtOffice_4 = new ol.format.GeoJSON();
var features_GovtOffice_4 = format_GovtOffice_4.readFeatures(json_GovtOffice_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GovtOffice_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GovtOffice_4.addFeatures(features_GovtOffice_4);
var lyr_GovtOffice_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GovtOffice_4, 
                style: style_GovtOffice_4,
                popuplayertitle: "Govt Office",
                interactive: true,
                title: '<img src="styles/legend/GovtOffice_4.png" /> Govt Office'
            });
var format_Education_5 = new ol.format.GeoJSON();
var features_Education_5 = format_Education_5.readFeatures(json_Education_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Education_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_5.addFeatures(features_Education_5);
var lyr_Education_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Education_5, 
                style: style_Education_5,
                popuplayertitle: "Education",
                interactive: true,
                title: '<img src="styles/legend/Education_5.png" /> Education'
            });
var format_PrivateOffices_6 = new ol.format.GeoJSON();
var features_PrivateOffices_6 = format_PrivateOffices_6.readFeatures(json_PrivateOffices_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateOffices_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateOffices_6.addFeatures(features_PrivateOffices_6);
var lyr_PrivateOffices_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateOffices_6, 
                style: style_PrivateOffices_6,
                popuplayertitle: "Private Offices",
                interactive: true,
                title: '<img src="styles/legend/PrivateOffices_6.png" /> Private Offices'
            });
var format_PSU_7 = new ol.format.GeoJSON();
var features_PSU_7 = format_PSU_7.readFeatures(json_PSU_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSU_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSU_7.addFeatures(features_PSU_7);
var lyr_PSU_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSU_7, 
                style: style_PSU_7,
                popuplayertitle: "PSU",
                interactive: true,
                title: '<img src="styles/legend/PSU_7.png" /> PSU'
            });
var format_Hospitals_8 = new ol.format.GeoJSON();
var features_Hospitals_8 = format_Hospitals_8.readFeatures(json_Hospitals_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospitals_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitals_8.addFeatures(features_Hospitals_8);
var lyr_Hospitals_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospitals_8, 
                style: style_Hospitals_8,
                popuplayertitle: "Hospitals",
                interactive: true,
                title: '<img src="styles/legend/Hospitals_8.png" /> Hospitals'
            });
var format_Signals_9 = new ol.format.GeoJSON();
var features_Signals_9 = format_Signals_9.readFeatures(json_Signals_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Signals_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Signals_9.addFeatures(features_Signals_9);
var lyr_Signals_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Signals_9, 
                style: style_Signals_9,
                popuplayertitle: "Signals",
                interactive: true,
                title: '<img src="styles/legend/Signals_9.png" /> Signals'
            });
var format_Temples_10 = new ol.format.GeoJSON();
var features_Temples_10 = format_Temples_10.readFeatures(json_Temples_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temples_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temples_10.addFeatures(features_Temples_10);
var lyr_Temples_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temples_10, 
                style: style_Temples_10,
                popuplayertitle: "Temples",
                interactive: true,
                title: '<img src="styles/legend/Temples_10.png" /> Temples'
            });
var format_MBMCStops_11 = new ol.format.GeoJSON();
var features_MBMCStops_11 = format_MBMCStops_11.readFeatures(json_MBMCStops_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStops_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStops_11.addFeatures(features_MBMCStops_11);
var lyr_MBMCStops_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCStops_11, 
                style: style_MBMCStops_11,
                popuplayertitle: "MBMC Stops",
                interactive: true,
                title: '<img src="styles/legend/MBMCStops_11.png" /> MBMC Stops'
            });
var format_StopPopWithinMBMC_12 = new ol.format.GeoJSON();
var features_StopPopWithinMBMC_12 = format_StopPopWithinMBMC_12.readFeatures(json_StopPopWithinMBMC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopPopWithinMBMC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopPopWithinMBMC_12.addFeatures(features_StopPopWithinMBMC_12);
var lyr_StopPopWithinMBMC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StopPopWithinMBMC_12, 
                style: style_StopPopWithinMBMC_12,
                popuplayertitle: "Stop Pop Within MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopPopWithinMBMC_12.png" /> Stop Pop Within MBMC'
            });
var format_AreaUncovered_13 = new ol.format.GeoJSON();
var features_AreaUncovered_13 = format_AreaUncovered_13.readFeatures(json_AreaUncovered_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaUncovered_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaUncovered_13.addFeatures(features_AreaUncovered_13);
var lyr_AreaUncovered_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaUncovered_13, 
                style: style_AreaUncovered_13,
                popuplayertitle: "Area Uncovered",
                interactive: true,
                title: '<img src="styles/legend/AreaUncovered_13.png" /> Area Uncovered'
            });
var format_MBMCUncoveredPop_14 = new ol.format.GeoJSON();
var features_MBMCUncoveredPop_14 = format_MBMCUncoveredPop_14.readFeatures(json_MBMCUncoveredPop_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCUncoveredPop_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCUncoveredPop_14.addFeatures(features_MBMCUncoveredPop_14);
var lyr_MBMCUncoveredPop_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCUncoveredPop_14, 
                style: style_MBMCUncoveredPop_14,
                popuplayertitle: "MBMC Uncovered Pop",
                interactive: true,
    title: 'MBMC Uncovered Pop<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_0.png" /> 1 - 2069<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_1.png" /> 2069 - 4137<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_2.png" /> 4137 - 6205<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_3.png" /> 6205 - 8274<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_4.png" /> 8274 - 10342<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_5.png" /> 10342 - 12410<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_6.png" /> 12410 - 14478<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_7.png" /> 14478 - 16546<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_8.png" /> 16546 - 18614<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_9.png" /> 18614 - 20682<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_10.png" /> 20682 - 22750<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_11.png" /> 22750 - 24819<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_12.png" /> 24819 - 26887<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_13.png" /> 26887 - 28955<br />\
    <img src="styles/legend/MBMCUncoveredPop_14_14.png" /> 28955 - 31023<br />'
        });
var format_StopsinsideMBMC_15 = new ol.format.GeoJSON();
var features_StopsinsideMBMC_15 = format_StopsinsideMBMC_15.readFeatures(json_StopsinsideMBMC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StopsinsideMBMC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StopsinsideMBMC_15.addFeatures(features_StopsinsideMBMC_15);
var lyr_StopsinsideMBMC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StopsinsideMBMC_15, 
                style: style_StopsinsideMBMC_15,
                popuplayertitle: "Stops inside MBMC",
                interactive: true,
                title: '<img src="styles/legend/StopsinsideMBMC_15.png" /> Stops inside MBMC'
            });
var format_MBMCTerminals_16 = new ol.format.GeoJSON();
var features_MBMCTerminals_16 = format_MBMCTerminals_16.readFeatures(json_MBMCTerminals_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCTerminals_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCTerminals_16.addFeatures(features_MBMCTerminals_16);
var lyr_MBMCTerminals_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCTerminals_16, 
                style: style_MBMCTerminals_16,
                popuplayertitle: "MBMC Terminals",
                interactive: true,
    title: 'MBMC Terminals<br />\
    <img src="styles/legend/MBMCTerminals_16_0.png" /> Adani Power House<br />\
    <img src="styles/legend/MBMCTerminals_16_1.png" /> Bhayandar Station East<br />\
    <img src="styles/legend/MBMCTerminals_16_2.png" /> Bhayandar Station West<br />\
    <img src="styles/legend/MBMCTerminals_16_3.png" /> Borivali National Park<br />\
    <img src="styles/legend/MBMCTerminals_16_4.png" /> Borivali Railway Station<br />\
    <img src="styles/legend/MBMCTerminals_16_5.png" /> Chimaji Appa Chouk<br />\
    <img src="styles/legend/MBMCTerminals_16_6.png" /> GCC School<br />\
    <img src="styles/legend/MBMCTerminals_16_7.png" /> GHARTAN PADA<br />\
    <img src="styles/legend/MBMCTerminals_16_8.png" /> Ghodbunder Depot<br />\
    <img src="styles/legend/MBMCTerminals_16_9.png" /> Golden Nest<br />\
    <img src="styles/legend/MBMCTerminals_16_10.png" /> Jain Mandir 2<br />\
    <img src="styles/legend/MBMCTerminals_16_11.png" /> Jogeshwari station West<br />\
    <img src="styles/legend/MBMCTerminals_16_12.png" /> JP Infra<br />\
    <img src="styles/legend/MBMCTerminals_16_13.png" /> Kashimira<br />\
    <img src="styles/legend/MBMCTerminals_16_14.png" /> KD Empire<br />\
    <img src="styles/legend/MBMCTerminals_16_15.png" /> Manori Tar<br />\
    <img src="styles/legend/MBMCTerminals_16_16.png" /> Mira Road Station<br />\
    <img src="styles/legend/MBMCTerminals_16_17.png" /> Modern Company<br />\
    <img src="styles/legend/MBMCTerminals_16_18.png" /> Morva Bhat<br />\
    <img src="styles/legend/MBMCTerminals_16_19.png" /> MTNL Office<br />\
    <img src="styles/legend/MBMCTerminals_16_20.png" /> Nagar Bhavan Mandi talav<br />\
    <img src="styles/legend/MBMCTerminals_16_21.png" /> Pagoda<br />\
    <img src="styles/legend/MBMCTerminals_16_22.png" /> POONAM SAGAR<br />\
    <img src="styles/legend/MBMCTerminals_16_23.png" /> Prakshal<br />\
    <img src="styles/legend/MBMCTerminals_16_24.png" /> RAM NAGAR<br />\
    <img src="styles/legend/MBMCTerminals_16_25.png" /> RASHMI COMPLEX<br />\
    <img src="styles/legend/MBMCTerminals_16_26.png" /> S.K STONE POLICE STATION<br />\
    <img src="styles/legend/MBMCTerminals_16_27.png" /> Salasar Nagar<br />\
    <img src="styles/legend/MBMCTerminals_16_28.png" /> Shantiwan<br />\
    <img src="styles/legend/MBMCTerminals_16_29.png" /> Silver Park<br />\
    <img src="styles/legend/MBMCTerminals_16_30.png" /> Swa Praful Patil Chowk Indralok Naka<br />\
    <img src="styles/legend/MBMCTerminals_16_31.png" /> Thane Station East Kopri<br />\
    <img src="styles/legend/MBMCTerminals_16_32.png" /> Tiwari College<br />\
    <img src="styles/legend/MBMCTerminals_16_33.png" /> Tunga Hospital<br />\
    <img src="styles/legend/MBMCTerminals_16_34.png" /> Uttan Naka<br />\
    <img src="styles/legend/MBMCTerminals_16_35.png" /> Vinay Nagar<br />\
    <img src="styles/legend/MBMCTerminals_16_36.png" /> Western Park E.<br />\
    <img src="styles/legend/MBMCTerminals_16_37.png" /> <br />'
        });
var format_MBMCStopsMapped_17 = new ol.format.GeoJSON();
var features_MBMCStopsMapped_17 = format_MBMCStopsMapped_17.readFeatures(json_MBMCStopsMapped_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCStopsMapped_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCStopsMapped_17.addFeatures(features_MBMCStopsMapped_17);
var lyr_MBMCStopsMapped_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCStopsMapped_17, 
                style: style_MBMCStopsMapped_17,
                popuplayertitle: "MBMC Stops Mapped",
                interactive: true,
    title: 'MBMC Stops Mapped<br />\
    <img src="styles/legend/MBMCStopsMapped_17_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCStopsMapped_17_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCStopsMapped_17_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_17_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCStopsMapped_17_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCStopsMapped_17_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCStopsMapped_17_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCStopsMapped_17_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCStopsMapped_17_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCStopsMapped_17_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCStopsMapped_17_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCStopsMapped_17_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCStopsMapped_17_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCStopsMapped_17_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCStopsMapped_17_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCStopsMapped_17_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCStopsMapped_17_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCStopsMapped_17_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCStopsMapped_17_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCStopsMapped_17_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCStopsMapped_17_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCStopsMapped_17_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCStopsMapped_17_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCStopsMapped_17_23.png" /> <br />'
        });
var format_MBMCRoutesStats_18 = new ol.format.GeoJSON();
var features_MBMCRoutesStats_18 = format_MBMCRoutesStats_18.readFeatures(json_MBMCRoutesStats_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRoutesStats_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRoutesStats_18.addFeatures(features_MBMCRoutesStats_18);
var lyr_MBMCRoutesStats_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRoutesStats_18, 
                style: style_MBMCRoutesStats_18,
                popuplayertitle: "MBMC Routes Stats",
                interactive: true,
    title: 'MBMC Routes Stats<br />\
    <img src="styles/legend/MBMCRoutesStats_18_0.png" /> Route 1<br />\
    <img src="styles/legend/MBMCRoutesStats_18_1.png" /> Route 10<br />\
    <img src="styles/legend/MBMCRoutesStats_18_2.png" /> Route 10 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_18_3.png" /> Route 12<br />\
    <img src="styles/legend/MBMCRoutesStats_18_4.png" /> Route 14<br />\
    <img src="styles/legend/MBMCRoutesStats_18_5.png" /> Route 15<br />\
    <img src="styles/legend/MBMCRoutesStats_18_6.png" /> Route 16<br />\
    <img src="styles/legend/MBMCRoutesStats_18_7.png" /> Route 17<br />\
    <img src="styles/legend/MBMCRoutesStats_18_8.png" /> Route 18<br />\
    <img src="styles/legend/MBMCRoutesStats_18_9.png" /> Route 19<br />\
    <img src="styles/legend/MBMCRoutesStats_18_10.png" /> Route 2<br />\
    <img src="styles/legend/MBMCRoutesStats_18_11.png" /> Route 20<br />\
    <img src="styles/legend/MBMCRoutesStats_18_12.png" /> Route 21<br />\
    <img src="styles/legend/MBMCRoutesStats_18_13.png" /> Route 22<br />\
    <img src="styles/legend/MBMCRoutesStats_18_14.png" /> Route 23<br />\
    <img src="styles/legend/MBMCRoutesStats_18_15.png" /> Route 24<br />\
    <img src="styles/legend/MBMCRoutesStats_18_16.png" /> Route 25<br />\
    <img src="styles/legend/MBMCRoutesStats_18_17.png" /> Route 28<br />\
    <img src="styles/legend/MBMCRoutesStats_18_18.png" /> Route 29<br />\
    <img src="styles/legend/MBMCRoutesStats_18_19.png" /> Route 29 AC<br />\
    <img src="styles/legend/MBMCRoutesStats_18_20.png" /> Route 4<br />\
    <img src="styles/legend/MBMCRoutesStats_18_21.png" /> Route 5<br />\
    <img src="styles/legend/MBMCRoutesStats_18_22.png" /> Route 6<br />\
    <img src="styles/legend/MBMCRoutesStats_18_23.png" /> <br />'
        });
var format_MBMCRt12Pop10MinDissolved_19 = new ol.format.GeoJSON();
var features_MBMCRt12Pop10MinDissolved_19 = format_MBMCRt12Pop10MinDissolved_19.readFeatures(json_MBMCRt12Pop10MinDissolved_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRt12Pop10MinDissolved_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRt12Pop10MinDissolved_19.addFeatures(features_MBMCRt12Pop10MinDissolved_19);
var lyr_MBMCRt12Pop10MinDissolved_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRt12Pop10MinDissolved_19, 
                style: style_MBMCRt12Pop10MinDissolved_19,
                popuplayertitle: "MBMC Rt 12 Pop 10 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/MBMCRt12Pop10MinDissolved_19.png" /> MBMC Rt 12 Pop 10 Min Dissolved'
            });
var format_MBMCRt12Pop5MinDissolved_20 = new ol.format.GeoJSON();
var features_MBMCRt12Pop5MinDissolved_20 = format_MBMCRt12Pop5MinDissolved_20.readFeatures(json_MBMCRt12Pop5MinDissolved_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRt12Pop5MinDissolved_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRt12Pop5MinDissolved_20.addFeatures(features_MBMCRt12Pop5MinDissolved_20);
var lyr_MBMCRt12Pop5MinDissolved_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRt12Pop5MinDissolved_20, 
                style: style_MBMCRt12Pop5MinDissolved_20,
                popuplayertitle: "MBMC Rt 12 Pop 5 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/MBMCRt12Pop5MinDissolved_20.png" /> MBMC Rt 12 Pop 5 Min Dissolved'
            });
var format_MBMCRt12Pop250Mtrs_21 = new ol.format.GeoJSON();
var features_MBMCRt12Pop250Mtrs_21 = format_MBMCRt12Pop250Mtrs_21.readFeatures(json_MBMCRt12Pop250Mtrs_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRt12Pop250Mtrs_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRt12Pop250Mtrs_21.addFeatures(features_MBMCRt12Pop250Mtrs_21);
var lyr_MBMCRt12Pop250Mtrs_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRt12Pop250Mtrs_21, 
                style: style_MBMCRt12Pop250Mtrs_21,
                popuplayertitle: "MBMC Rt 12 Pop 250 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/MBMCRt12Pop250Mtrs_21.png" /> MBMC Rt 12 Pop 250 Mtrs'
            });
var format_MBMCRt12Pop100Mtrs_22 = new ol.format.GeoJSON();
var features_MBMCRt12Pop100Mtrs_22 = format_MBMCRt12Pop100Mtrs_22.readFeatures(json_MBMCRt12Pop100Mtrs_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MBMCRt12Pop100Mtrs_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MBMCRt12Pop100Mtrs_22.addFeatures(features_MBMCRt12Pop100Mtrs_22);
var lyr_MBMCRt12Pop100Mtrs_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MBMCRt12Pop100Mtrs_22, 
                style: style_MBMCRt12Pop100Mtrs_22,
                popuplayertitle: "MBMC Rt 12 Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/MBMCRt12Pop100Mtrs_22.png" /> MBMC Rt 12 Pop 100 Mtrs'
            });
var format_Rt12PopDivision_23 = new ol.format.GeoJSON();
var features_Rt12PopDivision_23 = format_Rt12PopDivision_23.readFeatures(json_Rt12PopDivision_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12PopDivision_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12PopDivision_23.addFeatures(features_Rt12PopDivision_23);
var lyr_Rt12PopDivision_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12PopDivision_23, 
                style: style_Rt12PopDivision_23,
                popuplayertitle: "Rt 12 Pop Division",
                interactive: true,
    title: 'Rt 12 Pop Division<br />\
    <img src="styles/legend/Rt12PopDivision_23_0.png" /> 10683 - 12035<br />\
    <img src="styles/legend/Rt12PopDivision_23_1.png" /> 12035 - 13387<br />\
    <img src="styles/legend/Rt12PopDivision_23_2.png" /> 13387 - 14739<br />\
    <img src="styles/legend/Rt12PopDivision_23_3.png" /> 14739 - 16092<br />\
    <img src="styles/legend/Rt12PopDivision_23_4.png" /> 16092 - 17444<br />\
    <img src="styles/legend/Rt12PopDivision_23_5.png" /> 17444 - 18796<br />\
    <img src="styles/legend/Rt12PopDivision_23_6.png" /> 18796 - 20148<br />\
    <img src="styles/legend/Rt12PopDivision_23_7.png" /> 20148 - 21500<br />\
    <img src="styles/legend/Rt12PopDivision_23_8.png" /> 21500 - 22852<br />\
    <img src="styles/legend/Rt12PopDivision_23_9.png" /> 22852 - 24204<br />\
    <img src="styles/legend/Rt12PopDivision_23_10.png" /> 24204 - 25556<br />\
    <img src="styles/legend/Rt12PopDivision_23_11.png" /> 25556 - 26909<br />\
    <img src="styles/legend/Rt12PopDivision_23_12.png" /> 26909 - 28261<br />\
    <img src="styles/legend/Rt12PopDivision_23_13.png" /> 28261 - 29613<br />\
    <img src="styles/legend/Rt12PopDivision_23_14.png" /> 29613 - 30965<br />'
        });
var format_Rt12LeastPreferredRecom_24 = new ol.format.GeoJSON();
var features_Rt12LeastPreferredRecom_24 = format_Rt12LeastPreferredRecom_24.readFeatures(json_Rt12LeastPreferredRecom_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12LeastPreferredRecom_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12LeastPreferredRecom_24.addFeatures(features_Rt12LeastPreferredRecom_24);
var lyr_Rt12LeastPreferredRecom_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12LeastPreferredRecom_24, 
                style: style_Rt12LeastPreferredRecom_24,
                popuplayertitle: "Rt 12 Least Preferred Recom",
                interactive: true,
                title: '<img src="styles/legend/Rt12LeastPreferredRecom_24.png" /> Rt 12 Least Preferred Recom'
            });
var format_Rt12RecomPop10MinDissolved_25 = new ol.format.GeoJSON();
var features_Rt12RecomPop10MinDissolved_25 = format_Rt12RecomPop10MinDissolved_25.readFeatures(json_Rt12RecomPop10MinDissolved_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomPop10MinDissolved_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomPop10MinDissolved_25.addFeatures(features_Rt12RecomPop10MinDissolved_25);
var lyr_Rt12RecomPop10MinDissolved_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomPop10MinDissolved_25, 
                style: style_Rt12RecomPop10MinDissolved_25,
                popuplayertitle: "Rt 12 Recom Pop 10 Min Dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomPop10MinDissolved_25.png" /> Rt 12 Recom Pop 10 Min Dissolved'
            });
var format_Rt12RecomPop10Min_26 = new ol.format.GeoJSON();
var features_Rt12RecomPop10Min_26 = format_Rt12RecomPop10Min_26.readFeatures(json_Rt12RecomPop10Min_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomPop10Min_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomPop10Min_26.addFeatures(features_Rt12RecomPop10Min_26);
var lyr_Rt12RecomPop10Min_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomPop10Min_26, 
                style: style_Rt12RecomPop10Min_26,
                popuplayertitle: "Rt 12 Recom Pop 10 Min",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomPop10Min_26.png" /> Rt 12 Recom Pop 10 Min'
            });
var format_Rt12RecomPop5mindissolved_27 = new ol.format.GeoJSON();
var features_Rt12RecomPop5mindissolved_27 = format_Rt12RecomPop5mindissolved_27.readFeatures(json_Rt12RecomPop5mindissolved_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomPop5mindissolved_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomPop5mindissolved_27.addFeatures(features_Rt12RecomPop5mindissolved_27);
var lyr_Rt12RecomPop5mindissolved_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomPop5mindissolved_27, 
                style: style_Rt12RecomPop5mindissolved_27,
                popuplayertitle: "Rt 12 Recom Pop 5 min dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomPop5mindissolved_27.png" /> Rt 12 Recom Pop 5 min dissolved'
            });
var format_RT12RecomPop5min_28 = new ol.format.GeoJSON();
var features_RT12RecomPop5min_28 = format_RT12RecomPop5min_28.readFeatures(json_RT12RecomPop5min_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RT12RecomPop5min_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RT12RecomPop5min_28.addFeatures(features_RT12RecomPop5min_28);
var lyr_RT12RecomPop5min_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RT12RecomPop5min_28, 
                style: style_RT12RecomPop5min_28,
                popuplayertitle: "RT 12 Recom Pop 5 min",
                interactive: true,
                title: '<img src="styles/legend/RT12RecomPop5min_28.png" /> RT 12 Recom Pop 5 min'
            });
var format_Rt12RecomPop250mtrs_29 = new ol.format.GeoJSON();
var features_Rt12RecomPop250mtrs_29 = format_Rt12RecomPop250mtrs_29.readFeatures(json_Rt12RecomPop250mtrs_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomPop250mtrs_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomPop250mtrs_29.addFeatures(features_Rt12RecomPop250mtrs_29);
var lyr_Rt12RecomPop250mtrs_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomPop250mtrs_29, 
                style: style_Rt12RecomPop250mtrs_29,
                popuplayertitle: "Rt 12 Recom Pop 250 mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomPop250mtrs_29.png" /> Rt 12 Recom Pop 250 mtrs'
            });
var format_Rt12RecomPop100Mtrs_30 = new ol.format.GeoJSON();
var features_Rt12RecomPop100Mtrs_30 = format_Rt12RecomPop100Mtrs_30.readFeatures(json_Rt12RecomPop100Mtrs_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomPop100Mtrs_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomPop100Mtrs_30.addFeatures(features_Rt12RecomPop100Mtrs_30);
var lyr_Rt12RecomPop100Mtrs_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomPop100Mtrs_30, 
                style: style_Rt12RecomPop100Mtrs_30,
                popuplayertitle: "Rt 12 Recom Pop 100 Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomPop100Mtrs_30.png" /> Rt 12 Recom Pop 100 Mtrs'
            });
var format_Rt12CurrentStopPop10Min_31 = new ol.format.GeoJSON();
var features_Rt12CurrentStopPop10Min_31 = format_Rt12CurrentStopPop10Min_31.readFeatures(json_Rt12CurrentStopPop10Min_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12CurrentStopPop10Min_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12CurrentStopPop10Min_31.addFeatures(features_Rt12CurrentStopPop10Min_31);
var lyr_Rt12CurrentStopPop10Min_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12CurrentStopPop10Min_31, 
                style: style_Rt12CurrentStopPop10Min_31,
                popuplayertitle: "Rt 12 Current Stop Pop 10 Min",
                interactive: true,
                title: '<img src="styles/legend/Rt12CurrentStopPop10Min_31.png" /> Rt 12 Current Stop Pop 10 Min'
            });
var format_Rt12CurrentStopPop5Min_32 = new ol.format.GeoJSON();
var features_Rt12CurrentStopPop5Min_32 = format_Rt12CurrentStopPop5Min_32.readFeatures(json_Rt12CurrentStopPop5Min_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12CurrentStopPop5Min_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12CurrentStopPop5Min_32.addFeatures(features_Rt12CurrentStopPop5Min_32);
var lyr_Rt12CurrentStopPop5Min_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12CurrentStopPop5Min_32, 
                style: style_Rt12CurrentStopPop5Min_32,
                popuplayertitle: "Rt 12 Current Stop Pop 5 Min",
                interactive: true,
                title: '<img src="styles/legend/Rt12CurrentStopPop5Min_32.png" /> Rt 12 Current Stop Pop 5 Min'
            });
var format_Rt12CurrentStopPop5Mindissolved_33 = new ol.format.GeoJSON();
var features_Rt12CurrentStopPop5Mindissolved_33 = format_Rt12CurrentStopPop5Mindissolved_33.readFeatures(json_Rt12CurrentStopPop5Mindissolved_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12CurrentStopPop5Mindissolved_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12CurrentStopPop5Mindissolved_33.addFeatures(features_Rt12CurrentStopPop5Mindissolved_33);
var lyr_Rt12CurrentStopPop5Mindissolved_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12CurrentStopPop5Mindissolved_33, 
                style: style_Rt12CurrentStopPop5Mindissolved_33,
                popuplayertitle: "Rt 12 Current Stop Pop 5 Min dissolved",
                interactive: true,
                title: '<img src="styles/legend/Rt12CurrentStopPop5Mindissolved_33.png" /> Rt 12 Current Stop Pop 5 Min dissolved'
            });
var format_Rt12CurrentSuggestedStopPop_34 = new ol.format.GeoJSON();
var features_Rt12CurrentSuggestedStopPop_34 = format_Rt12CurrentSuggestedStopPop_34.readFeatures(json_Rt12CurrentSuggestedStopPop_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12CurrentSuggestedStopPop_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12CurrentSuggestedStopPop_34.addFeatures(features_Rt12CurrentSuggestedStopPop_34);
var lyr_Rt12CurrentSuggestedStopPop_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12CurrentSuggestedStopPop_34, 
                style: style_Rt12CurrentSuggestedStopPop_34,
                popuplayertitle: "Rt 12 Current Suggested Stop Pop",
                interactive: true,
                title: '<img src="styles/legend/Rt12CurrentSuggestedStopPop_34.png" /> Rt 12 Current Suggested Stop Pop'
            });
var format_Rt12CurrentMtrs_35 = new ol.format.GeoJSON();
var features_Rt12CurrentMtrs_35 = format_Rt12CurrentMtrs_35.readFeatures(json_Rt12CurrentMtrs_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12CurrentMtrs_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12CurrentMtrs_35.addFeatures(features_Rt12CurrentMtrs_35);
var lyr_Rt12CurrentMtrs_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12CurrentMtrs_35, 
                style: style_Rt12CurrentMtrs_35,
                popuplayertitle: "Rt 12 Current Mtrs",
                interactive: true,
                title: '<img src="styles/legend/Rt12CurrentMtrs_35.png" /> Rt 12 Current Mtrs'
            });
var format_Rt12StopsCurrent_36 = new ol.format.GeoJSON();
var features_Rt12StopsCurrent_36 = format_Rt12StopsCurrent_36.readFeatures(json_Rt12StopsCurrent_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12StopsCurrent_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12StopsCurrent_36.addFeatures(features_Rt12StopsCurrent_36);
var lyr_Rt12StopsCurrent_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12StopsCurrent_36, 
                style: style_Rt12StopsCurrent_36,
                popuplayertitle: "Rt 12 Stops Current",
                interactive: true,
                title: '<img src="styles/legend/Rt12StopsCurrent_36.png" /> Rt 12 Stops Current'
            });
var format_Rt12RecomRoute_37 = new ol.format.GeoJSON();
var features_Rt12RecomRoute_37 = format_Rt12RecomRoute_37.readFeatures(json_Rt12RecomRoute_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomRoute_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomRoute_37.addFeatures(features_Rt12RecomRoute_37);
var lyr_Rt12RecomRoute_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomRoute_37, 
                style: style_Rt12RecomRoute_37,
                popuplayertitle: "Rt 12 Recom Route",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomRoute_37.png" /> Rt 12 Recom Route'
            });
var format_Rt12RecomStops_38 = new ol.format.GeoJSON();
var features_Rt12RecomStops_38 = format_Rt12RecomStops_38.readFeatures(json_Rt12RecomStops_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12RecomStops_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12RecomStops_38.addFeatures(features_Rt12RecomStops_38);
var lyr_Rt12RecomStops_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12RecomStops_38, 
                style: style_Rt12RecomStops_38,
                popuplayertitle: "Rt 12 Recom Stops",
                interactive: true,
                title: '<img src="styles/legend/Rt12RecomStops_38.png" /> Rt 12 Recom Stops'
            });
var format_Rt12CurrentSuggestStops_39 = new ol.format.GeoJSON();
var features_Rt12CurrentSuggestStops_39 = format_Rt12CurrentSuggestStops_39.readFeatures(json_Rt12CurrentSuggestStops_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12CurrentSuggestStops_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12CurrentSuggestStops_39.addFeatures(features_Rt12CurrentSuggestStops_39);
var lyr_Rt12CurrentSuggestStops_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12CurrentSuggestStops_39, 
                style: style_Rt12CurrentSuggestStops_39,
                popuplayertitle: "Rt 12 Current Suggest Stops",
                interactive: true,
    title: 'Rt 12 Current Suggest Stops<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_0.png" /> 0<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_1.png" /> 375.600000000000023<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_2.png" /> 751.200000000000045<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_3.png" /> 1126.800000000000182<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_4.png" /> 1502.400000000000091<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_5.png" /> 1878.000000000000000<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_6.png" /> 2253.599999999999909<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_7.png" /> 2629.199999999999818<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_8.png" /> 3004.799999999999727<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_9.png" /> 3380.399999999999636<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_10.png" /> 3755.999999999999545<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_11.png" /> 4131.599999999999454<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_12.png" /> 4507.199999999999818<br />\
    <img src="styles/legend/Rt12CurrentSuggestStops_39_13.png" /> <br />'
        });
var format_Rt12StopsToBeChangedxlsx_40 = new ol.format.GeoJSON();
var features_Rt12StopsToBeChangedxlsx_40 = format_Rt12StopsToBeChangedxlsx_40.readFeatures(json_Rt12StopsToBeChangedxlsx_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12StopsToBeChangedxlsx_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12StopsToBeChangedxlsx_40.addFeatures(features_Rt12StopsToBeChangedxlsx_40);
var lyr_Rt12StopsToBeChangedxlsx_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12StopsToBeChangedxlsx_40, 
                style: style_Rt12StopsToBeChangedxlsx_40,
                popuplayertitle: "Rt 12 Stops To Be Changed.xlsx",
                interactive: true,
                title: '<img src="styles/legend/Rt12StopsToBeChangedxlsx_40.png" /> Rt 12 Stops To Be Changed.xlsx'
            });
var format_Rt12StopsChangedxlsx_41 = new ol.format.GeoJSON();
var features_Rt12StopsChangedxlsx_41 = format_Rt12StopsChangedxlsx_41.readFeatures(json_Rt12StopsChangedxlsx_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rt12StopsChangedxlsx_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rt12StopsChangedxlsx_41.addFeatures(features_Rt12StopsChangedxlsx_41);
var lyr_Rt12StopsChangedxlsx_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rt12StopsChangedxlsx_41, 
                style: style_Rt12StopsChangedxlsx_41,
                popuplayertitle: "Rt 12 Stops Changed.xlsx",
                interactive: true,
    title: 'Rt 12 Stops Changed.xlsx<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_0.png" /> 1.28%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_1.png" /> 2.39%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_2.png" /> 278.67%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_3.png" /> 49.90%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_4.png" /> 51.88%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_5.png" /> 7.57%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_6.png" /> 8.06%<br />\
    <img src="styles/legend/Rt12StopsChangedxlsx_41_7.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_MBMCWealthIndex_1.setVisible(true);lyr_PopulationMBMC_2.setVisible(true);lyr_RailwayStn_3.setVisible(true);lyr_GovtOffice_4.setVisible(true);lyr_Education_5.setVisible(true);lyr_PrivateOffices_6.setVisible(true);lyr_PSU_7.setVisible(true);lyr_Hospitals_8.setVisible(true);lyr_Signals_9.setVisible(true);lyr_Temples_10.setVisible(true);lyr_MBMCStops_11.setVisible(true);lyr_StopPopWithinMBMC_12.setVisible(true);lyr_AreaUncovered_13.setVisible(true);lyr_MBMCUncoveredPop_14.setVisible(true);lyr_StopsinsideMBMC_15.setVisible(true);lyr_MBMCTerminals_16.setVisible(true);lyr_MBMCStopsMapped_17.setVisible(true);lyr_MBMCRoutesStats_18.setVisible(true);lyr_MBMCRt12Pop10MinDissolved_19.setVisible(true);lyr_MBMCRt12Pop5MinDissolved_20.setVisible(true);lyr_MBMCRt12Pop250Mtrs_21.setVisible(true);lyr_MBMCRt12Pop100Mtrs_22.setVisible(true);lyr_Rt12PopDivision_23.setVisible(true);lyr_Rt12LeastPreferredRecom_24.setVisible(true);lyr_Rt12RecomPop10MinDissolved_25.setVisible(true);lyr_Rt12RecomPop10Min_26.setVisible(true);lyr_Rt12RecomPop5mindissolved_27.setVisible(true);lyr_RT12RecomPop5min_28.setVisible(true);lyr_Rt12RecomPop250mtrs_29.setVisible(true);lyr_Rt12RecomPop100Mtrs_30.setVisible(true);lyr_Rt12CurrentStopPop10Min_31.setVisible(true);lyr_Rt12CurrentStopPop5Min_32.setVisible(true);lyr_Rt12CurrentStopPop5Mindissolved_33.setVisible(true);lyr_Rt12CurrentSuggestedStopPop_34.setVisible(true);lyr_Rt12CurrentMtrs_35.setVisible(true);lyr_Rt12StopsCurrent_36.setVisible(true);lyr_Rt12RecomRoute_37.setVisible(true);lyr_Rt12RecomStops_38.setVisible(true);lyr_Rt12CurrentSuggestStops_39.setVisible(true);lyr_Rt12StopsToBeChangedxlsx_40.setVisible(true);lyr_Rt12StopsChangedxlsx_41.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MBMCWealthIndex_1,lyr_PopulationMBMC_2,lyr_RailwayStn_3,lyr_GovtOffice_4,lyr_Education_5,lyr_PrivateOffices_6,lyr_PSU_7,lyr_Hospitals_8,lyr_Signals_9,lyr_Temples_10,lyr_MBMCStops_11,lyr_StopPopWithinMBMC_12,lyr_AreaUncovered_13,lyr_MBMCUncoveredPop_14,lyr_StopsinsideMBMC_15,lyr_MBMCTerminals_16,lyr_MBMCStopsMapped_17,lyr_MBMCRoutesStats_18,lyr_MBMCRt12Pop10MinDissolved_19,lyr_MBMCRt12Pop5MinDissolved_20,lyr_MBMCRt12Pop250Mtrs_21,lyr_MBMCRt12Pop100Mtrs_22,lyr_Rt12PopDivision_23,lyr_Rt12LeastPreferredRecom_24,lyr_Rt12RecomPop10MinDissolved_25,lyr_Rt12RecomPop10Min_26,lyr_Rt12RecomPop5mindissolved_27,lyr_RT12RecomPop5min_28,lyr_Rt12RecomPop250mtrs_29,lyr_Rt12RecomPop100Mtrs_30,lyr_Rt12CurrentStopPop10Min_31,lyr_Rt12CurrentStopPop5Min_32,lyr_Rt12CurrentStopPop5Mindissolved_33,lyr_Rt12CurrentSuggestedStopPop_34,lyr_Rt12CurrentMtrs_35,lyr_Rt12StopsCurrent_36,lyr_Rt12RecomRoute_37,lyr_Rt12RecomStops_38,lyr_Rt12CurrentSuggestStops_39,lyr_Rt12StopsToBeChangedxlsx_40,lyr_Rt12StopsChangedxlsx_41];
lyr_MBMCWealthIndex_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'rwi': 'rwi', 'error': 'error', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_PopulationMBMC_2.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_RailwayStn_3.set('fieldAliases', {'network': 'network', 'name': 'name', });
lyr_GovtOffice_4.set('fieldAliases', {'addr_state': 'addr_state', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'website': 'website', 'phone': 'phone', 'opening_ho': 'opening_ho', 'descriptio': 'descriptio', 'name_en': 'name_en', 'amenity': 'amenity', 'name_hi': 'name_hi', 'addr_house': 'addr_house', 'layer': 'layer', });
lyr_Education_5.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_PrivateOffices_6.set('fieldAliases', {'office': 'office', 'name': 'name', });
lyr_PSU_7.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_Hospitals_8.set('fieldAliases', {'amenity': 'amenity', 'addr_full': 'addr_full', 'name': 'name', });
lyr_Signals_9.set('fieldAliases', {'highway': 'highway', });
lyr_Temples_10.set('fieldAliases', {'religion': 'religion', 'amenity': 'amenity', 'name': 'name', });
lyr_MBMCStops_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_StopPopWithinMBMC_12.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_AreaUncovered_13.set('fieldAliases', {'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', });
lyr_MBMCUncoveredPop_14.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop_2': 'Pop_2', 'Pop/Km2': 'Pop/Km2', 'Area UC KM': 'Area UC KM', 'Peri UC KM': 'Peri UC KM', 'Pop UC': 'Pop UC', 'NoCoverage': 'NoCoverage', });
lyr_StopsinsideMBMC_15.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', });
lyr_MBMCTerminals_16.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_MBMCStopsMapped_17.set('fieldAliases', {'Name': 'Name', 'Sr__No_': 'Sr__No_', 'Depot_Name': 'Depot_Name', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Name_2': 'Name_2', 'Length Km': 'Length Km', });
lyr_MBMCRoutesStats_18.set('fieldAliases', {'Name': 'Name', 'Length Km': 'Length Km', });
lyr_MBMCRt12Pop10MinDissolved_19.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', '_sum': '_sum', 'Pop': 'Pop', });
lyr_MBMCRt12Pop5MinDissolved_20.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'Pop': 'Pop', 'Ridership': 'Ridership', 'Ridership%': 'Ridership%', 'Rider Dwn': 'Rider Dwn', 'Rider Dwn%': 'Rider Dwn%', });
lyr_MBMCRt12Pop250Mtrs_21.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_MBMCRt12Pop100Mtrs_22.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop': 'Pop', });
lyr_Rt12PopDivision_23.set('fieldAliases', {'fid': 'fid', 'h3': 'h3', 'population': 'population', 'shapeName': 'shapeName', 'Area KM': 'Area KM', 'Perimeter': 'Perimeter', 'Pop': 'Pop', 'Pop/Km2': 'Pop/Km2', 'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Pop_2': 'Pop_2', });
lyr_Rt12LeastPreferredRecom_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Rt12RecomPop10MinDissolved_25.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', '_sum': '_sum', });
lyr_Rt12RecomPop10Min_26.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt12RecomPop5mindissolved_27.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', 'Pop': 'Pop', });
lyr_RT12RecomPop5min_28.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt12RecomPop250mtrs_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'StopDist': 'StopDist', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', '_sum': '_sum', });
lyr_Rt12RecomPop100Mtrs_30.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'StopDist': 'StopDist', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'Pop': 'Pop', });
lyr_Rt12CurrentStopPop10Min_31.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt12CurrentStopPop5Min_32.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt12CurrentStopPop5Mindissolved_33.set('fieldAliases', {'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', '_sum': '_sum', 'Pop': 'Pop', });
lyr_Rt12CurrentSuggestedStopPop_34.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt12CurrentMtrs_35.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_Rt12StopsCurrent_36.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_Rt12RecomRoute_37.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'StopDist': 'StopDist', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', });
lyr_Rt12RecomStops_38.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'StopDist': 'StopDist', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_Rt12CurrentSuggestStops_39.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'Drive Time': 'Drive Time', 'Bus Time': 'Bus Time', 'distance': 'distance', 'angle': 'angle', });
lyr_Rt12StopsToBeChangedxlsx_40.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Rt12StopsChangedxlsx_41.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'TOTAL_POP': 'TOTAL_POP', 'Diff': 'Diff', '__Diff': '__Diff', });
lyr_MBMCWealthIndex_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'rwi': 'TextEdit', 'error': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_PopulationMBMC_2.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_RailwayStn_3.set('fieldImages', {'network': 'TextEdit', 'name': 'TextEdit', });
lyr_GovtOffice_4.set('fieldImages', {'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'opening_ho': 'TextEdit', 'descriptio': 'TextEdit', 'name_en': 'TextEdit', 'amenity': 'TextEdit', 'name_hi': 'TextEdit', 'addr_house': 'TextEdit', 'layer': 'TextEdit', });
lyr_Education_5.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_PrivateOffices_6.set('fieldImages', {'office': 'TextEdit', 'name': 'TextEdit', });
lyr_PSU_7.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_Hospitals_8.set('fieldImages', {'amenity': 'TextEdit', 'addr_full': 'TextEdit', 'name': 'TextEdit', });
lyr_Signals_9.set('fieldImages', {'highway': 'TextEdit', });
lyr_Temples_10.set('fieldImages', {'religion': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_MBMCStops_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_StopPopWithinMBMC_12.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_AreaUncovered_13.set('fieldImages', {'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'Range', });
lyr_MBMCUncoveredPop_14.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop_2': 'TextEdit', 'Pop/Km2': 'TextEdit', 'Area UC KM': 'TextEdit', 'Peri UC KM': 'TextEdit', 'Pop UC': 'TextEdit', 'NoCoverage': 'TextEdit', });
lyr_StopsinsideMBMC_15.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', });
lyr_MBMCTerminals_16.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_MBMCStopsMapped_17.set('fieldImages', {'Name': 'TextEdit', 'Sr__No_': 'TextEdit', 'Depot_Name': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Name_2': 'TextEdit', 'Length Km': 'TextEdit', });
lyr_MBMCRoutesStats_18.set('fieldImages', {'Name': 'TextEdit', 'Length Km': '', });
lyr_MBMCRt12Pop10MinDissolved_19.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', '_sum': 'TextEdit', 'Pop': 'Range', });
lyr_MBMCRt12Pop5MinDissolved_20.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'Pop': 'Range', 'Ridership': 'Range', 'Ridership%': 'Range', 'Rider Dwn': 'Range', 'Rider Dwn%': 'Range', });
lyr_MBMCRt12Pop250Mtrs_21.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_MBMCRt12Pop100Mtrs_22.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop': 'Range', });
lyr_Rt12PopDivision_23.set('fieldImages', {'fid': 'TextEdit', 'h3': 'TextEdit', 'population': 'TextEdit', 'shapeName': 'TextEdit', 'Area KM': 'TextEdit', 'Perimeter': 'TextEdit', 'Pop': 'TextEdit', 'Pop/Km2': 'TextEdit', 'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Pop_2': 'Range', });
lyr_Rt12LeastPreferredRecom_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Rt12RecomPop10MinDissolved_25.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', '_sum': '', });
lyr_Rt12RecomPop10Min_26.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt12RecomPop5mindissolved_27.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Pop': 'TextEdit', });
lyr_RT12RecomPop5min_28.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt12RecomPop250mtrs_29.set('fieldImages', {'DIST_KM': '', 'DURATION_H': '', 'PROFILE': '', 'PREF': '', 'StopDist': '', 'Drive Time': '', 'Bus Time': '', '_sum': '', });
lyr_Rt12RecomPop100Mtrs_30.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'StopDist': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'Pop': 'Range', });
lyr_Rt12CurrentStopPop10Min_31.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt12CurrentStopPop5Min_32.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt12CurrentStopPop5Mindissolved_33.set('fieldImages', {'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', '_sum': 'TextEdit', 'Pop': 'Range', });
lyr_Rt12CurrentSuggestedStopPop_34.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_Rt12CurrentMtrs_35.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', });
lyr_Rt12StopsCurrent_36.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_Rt12RecomRoute_37.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'StopDist': 'Range', 'Drive Time': 'Range', 'Bus Time': 'Range', });
lyr_Rt12RecomStops_38.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'StopDist': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_Rt12CurrentSuggestStops_39.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'Drive Time': 'TextEdit', 'Bus Time': 'TextEdit', 'distance': 'TextEdit', 'angle': 'TextEdit', });
lyr_Rt12StopsToBeChangedxlsx_40.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Rt12StopsChangedxlsx_41.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'AA_MINS': 'TextEdit', 'AA_MODE': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'TOTAL_POP': 'TextEdit', 'Diff': 'TextEdit', '__Diff': 'TextEdit', });
lyr_MBMCWealthIndex_1.set('fieldLabels', {'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'rwi': 'header label - visible with data', 'error': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'header label - visible with data', });
lyr_PopulationMBMC_2.set('fieldLabels', {'fid': 'no label', 'h3': 'no label', 'population': 'header label - visible with data', 'shapeName': 'inline label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_RailwayStn_3.set('fieldLabels', {'network': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_GovtOffice_4.set('fieldLabels', {'addr_state': 'inline label - always visible', 'addr_full': 'hidden field', 'addr_distr': 'hidden field', 'website': 'hidden field', 'phone': 'hidden field', 'opening_ho': 'hidden field', 'descriptio': 'hidden field', 'name_en': 'hidden field', 'amenity': 'hidden field', 'name_hi': 'hidden field', 'addr_house': 'hidden field', 'layer': 'header label - visible with data', });
lyr_Education_5.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PrivateOffices_6.set('fieldLabels', {'office': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_PSU_7.set('fieldLabels', {'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Hospitals_8.set('fieldLabels', {'amenity': 'inline label - always visible', 'addr_full': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_Signals_9.set('fieldLabels', {'highway': 'header label - visible with data', });
lyr_Temples_10.set('fieldLabels', {'religion': 'inline label - always visible', 'amenity': 'inline label - always visible', 'name': 'header label - visible with data', });
lyr_MBMCStops_11.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Sr__No_': 'hidden field', 'Depot_Name': 'hidden field', 'center_lat': 'inline label - visible with data', 'center_lon': 'inline label - visible with data', });
lyr_StopPopWithinMBMC_12.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_AreaUncovered_13.set('fieldLabels', {'shapeName': 'no label', 'Area KM': 'no label', 'Perimeter': 'no label', 'Pop_2': 'no label', 'Pop/Km2': 'no label', 'Area UC KM': 'no label', 'Peri UC KM': 'no label', 'Pop UC': 'no label', 'NoCoverage': 'no label', });
lyr_MBMCUncoveredPop_14.set('fieldLabels', {'fid': 'no label', 'h3': 'no label', 'population': 'no label', 'shapeName': 'no label', 'Area KM': 'no label', 'Perimeter': 'no label', 'Pop_2': 'no label', 'Pop/Km2': 'no label', 'Area UC KM': 'no label', 'Peri UC KM': 'no label', 'Pop UC': 'no label', 'NoCoverage': 'no label', });
lyr_StopsinsideMBMC_15.set('fieldLabels', {'Name': 'header label - visible with data', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'shapeName': 'inline label - always visible', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', });
lyr_MBMCTerminals_16.set('fieldLabels', {'Name': 'header label - visible with data', 'layer': 'inline label - always visible', });
lyr_MBMCStopsMapped_17.set('fieldLabels', {'Name': 'header label - visible with data', 'Sr__No_': 'inline label - always visible', 'Depot_Name': 'inline label - always visible', 'center_lat': 'inline label - always visible', 'center_lon': 'inline label - always visible', 'Name_2': 'inline label - always visible', 'Length Km': 'inline label - always visible', });
lyr_MBMCRoutesStats_18.set('fieldLabels', {'Name': 'header label - visible with data', 'Length Km': 'inline label - always visible', });
lyr_MBMCRt12Pop10MinDissolved_19.set('fieldLabels', {'AA_MINS': 'no label', 'AA_MODE': 'no label', '_sum': 'no label', 'Pop': 'no label', });
lyr_MBMCRt12Pop5MinDissolved_20.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Ridership': 'inline label - always visible', 'Ridership%': 'header label - visible with data', 'Rider Dwn': 'inline label - always visible', 'Rider Dwn%': 'header label - visible with data', });
lyr_MBMCRt12Pop250Mtrs_21.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_MBMCRt12Pop100Mtrs_22.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Pop': 'header label - visible with data', });
lyr_Rt12PopDivision_23.set('fieldLabels', {'fid': 'no label', 'h3': 'no label', 'population': 'inline label - always visible', 'shapeName': 'header label - visible with data', 'Area KM': 'inline label - always visible', 'Perimeter': 'inline label - always visible', 'Pop': 'inline label - always visible', 'Pop/Km2': 'inline label - always visible', 'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Pop_2': 'inline label - always visible', });
lyr_Rt12LeastPreferredRecom_24.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Rt12RecomPop10MinDissolved_25.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', '_sum': 'no label', });
lyr_Rt12RecomPop10Min_26.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt12RecomPop5mindissolved_27.set('fieldLabels', {'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'inline label - visible with data', 'Pop': 'header label - visible with data', });
lyr_RT12RecomPop5min_28.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt12RecomPop250mtrs_29.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'StopDist': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', '_sum': 'no label', });
lyr_Rt12RecomPop100Mtrs_30.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'StopDist': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'Pop': 'inline label - always visible', });
lyr_Rt12CurrentStopPop10Min_31.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt12CurrentStopPop5Min_32.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt12CurrentStopPop5Mindissolved_33.set('fieldLabels', {'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', '_sum': 'no label', 'Pop': 'no label', });
lyr_Rt12CurrentSuggestedStopPop_34.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Rt12CurrentMtrs_35.set('fieldLabels', {'DIST_KM': 'header label - visible with data', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'header label - visible with data', });
lyr_Rt12StopsCurrent_36.set('fieldLabels', {'Name': 'header label - visible with data', 'layer': 'inline label - always visible', });
lyr_Rt12RecomRoute_37.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'StopDist': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'header label - visible with data', });
lyr_Rt12RecomStops_38.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'StopDist': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'distance': 'header label - visible with data', 'angle': 'inline label - always visible', });
lyr_Rt12CurrentSuggestStops_39.set('fieldLabels', {'DIST_KM': 'inline label - always visible', 'DURATION_H': 'inline label - always visible', 'PROFILE': 'inline label - always visible', 'PREF': 'inline label - always visible', 'Drive Time': 'inline label - always visible', 'Bus Time': 'inline label - always visible', 'distance': 'header label - visible with data', 'angle': 'inline label - always visible', });
lyr_Rt12StopsToBeChangedxlsx_40.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'TOTAL_POP': 'header label - visible with data', });
lyr_Rt12StopsChangedxlsx_41.set('fieldLabels', {'Name': 'header label - visible with data', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'AA_MINS': 'inline label - always visible', 'AA_MODE': 'inline label - always visible', 'CENTER_LON': 'inline label - always visible', 'CENTER_LAT': 'inline label - always visible', 'TOTAL_POP': 'inline label - always visible', 'Diff': 'inline label - always visible', '__Diff': 'header label - visible with data', });
lyr_Rt12StopsChangedxlsx_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});