/**
 * @file 录音时长获取设置问题
 * @author sufubo
 */

export const addAudioEvent = (audios, cb) => {
    for (let i = 0; i < audios.length; i++) {
        audios[i].addEventListener('loadedmetadata', cb);
    }
};

export const removeAudioEvent = (audios, cb) => {
    for (let i = 0; i < audios.length; i++) {
        audios[i].addEventListener('loadedmetadata', cb);
    }
};
