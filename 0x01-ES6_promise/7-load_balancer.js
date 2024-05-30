/*
 * a module contain function defination
 */

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.any([chinaDownload, USDownload])
    .then((first) => first);
}
