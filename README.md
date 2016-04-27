# Google Fonts JSON to Google Font Format

http://devs.elitenetwork.es

Convert a Google Fonts list on format JSON to a Google Fonts official valid format.

With this NodeJS package you'll be able to transform from a JSON object of Google Fonts that you can download from 
the official Google Fonts API into a Google Font valid format to include it on some link stylesheets or some gulp package 
that admits a Google Font format to download (for learning pourposes) the .ttf font files.

This NodeJS tool requires the following dependencies:

* JSON to Array: Convert json object to array.
  * https://www.npmjs.com/package/json-to-array

## Working example

Lets assume you got this JSON object from Google Fonts API:

```
	"Roboto": {
		"category": "sans-serif",
		"lastModified": "2015-04-06",
		"version": "v15",
		"variants": {
			"italic": {
				"100": {
					"local": [
						"'Roboto Thin Italic'",
						"'Roboto-ThinItalic'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/12mE4jfMSBTmg-81EiS-YVQlYEbsez9cZjKsNMjLOwM.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=12mE4jfMSBTmg-81EiS-YaWUboTb-jS2tyCOQMtm97g&skey=8f53aa2e7deadc4a#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/12mE4jfMSBTmg-81EiS-YS3USBnSvpkopQaUR-2r7iU.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/12mE4jfMSBTmg-81EiS-YRsxEYwM7FgeyaSgU71cLG0.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/12mE4jfMSBTmg-81EiS-Yfk_vArhqVIZ0nv9q090hN8.woff2"
					}
				},
				"300": {
					"local": [
						"'Roboto Light Italic'",
						"'Roboto-LightItalic'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/7m8l7TlFO-S3VkhHuR0at2fQcKutQXcIrRfyR5jdjY8.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=7m8l7TlFO-S3VkhHuR0at3NsigHlcrQGNV8nkUSFQfc&skey=8f644060176e1f7e#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/7m8l7TlFO-S3VkhHuR0at50EAVxt0G0biEntp43Qt6E.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/7m8l7TlFO-S3VkhHuR0at4bN6UDyHWBl620a-IRfuBk.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/7m8l7TlFO-S3VkhHuR0at44P5ICox8Kq3LLUNMylGO4.woff2"
					}
				},
				"400": {
					"local": [
						"'Roboto Italic'",
						"'Roboto-Italic'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/OiNnAEwKzzJkQCr4qZmeq_esZW2xOQ-xsNqO47m55DA.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=d6hCKsxkfwUDuz8291ns3vesZW2xOQ-xsNqO47m55DA&skey=c608c610063635f9#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/W4wDsBUluyw0tK3tykhXEfesZW2xOQ-xsNqO47m55DA.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/1pO9eUAp8pSF8VnRTP3xnvesZW2xOQ-xsNqO47m55DA.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/vPcynSL0qHq_6dX7lKVByfesZW2xOQ-xsNqO47m55DA.woff2"
					}
				},
				"500": {
					"local": [
						"'Roboto Medium Italic'",
						"'Roboto-MediumItalic'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0WfQcKutQXcIrRfyR5jdjY8.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=OLffGBTaF0XFOW1gnuHF0XNsigHlcrQGNV8nkUSFQfc&skey=c985e17098069ce0#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0Z0EAVxt0G0biEntp43Qt6E.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0YbN6UDyHWBl620a-IRfuBk.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/OLffGBTaF0XFOW1gnuHF0Y4P5ICox8Kq3LLUNMylGO4.woff2"
					}
				},
				"700": {
					"local": [
						"'Roboto Bold Italic'",
						"'Roboto-BoldItalic'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/t6Nd4cfPRhZP44Q5QAjcC2fQcKutQXcIrRfyR5jdjY8.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=t6Nd4cfPRhZP44Q5QAjcC3NsigHlcrQGNV8nkUSFQfc&skey=dd030d266f3beccc#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/t6Nd4cfPRhZP44Q5QAjcC50EAVxt0G0biEntp43Qt6E.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/t6Nd4cfPRhZP44Q5QAjcC4bN6UDyHWBl620a-IRfuBk.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/t6Nd4cfPRhZP44Q5QAjcC44P5ICox8Kq3LLUNMylGO4.woff2"
					}
				},
				"900": {
					"local": [
						"'Roboto Black Italic'",
						"'Roboto-BlackItalic'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/bmC0pGMXrhphrZJmniIZpWfQcKutQXcIrRfyR5jdjY8.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=bmC0pGMXrhphrZJmniIZpXNsigHlcrQGNV8nkUSFQfc&skey=b80be3241fe40325#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/bmC0pGMXrhphrZJmniIZpZ0EAVxt0G0biEntp43Qt6E.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/bmC0pGMXrhphrZJmniIZpYbN6UDyHWBl620a-IRfuBk.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/bmC0pGMXrhphrZJmniIZpY4P5ICox8Kq3LLUNMylGO4.woff2"
					}
				}
			},
			"normal": {
				"100": {
					"local": [
						"'Roboto Thin'",
						"'Roboto-Thin'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/PP2U5prMl9yvKSWVu6DtvPesZW2xOQ-xsNqO47m55DA.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=hfaguKg3-IA6kBbQw6DBafesZW2xOQ-xsNqO47m55DA&skey=5473b731ec7fc9c1#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/Jzo62I39jc0gQRrbndN6nfesZW2xOQ-xsNqO47m55DA.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/vzIUHo9z-oJ4WgkpPOtg1_esZW2xOQ-xsNqO47m55DA.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/2tsd397wLxj96qwHyNIkxPesZW2xOQ-xsNqO47m55DA.woff2"
					}
				},
				"300": {
					"local": [
						"'Roboto Light'",
						"'Roboto-Light'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUffY6323mHUZFJMgTvxaG2iE.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=Hgo13k-tfSpn0qi1SFdUfZbd9NUM7myrQQz30yPaGQ4&skey=11ce8ad5f54705ca#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfaCWcynf_cDxXwCLxiixG1c.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfT8E0i7KZn-EPnyo3HZu7kw.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/Hgo13k-tfSpn0qi1SFdUfVtXRa8TVwTICgirnJhmVJw.woff2"
					}
				},
				"400": {
					"local": [
						"'Roboto'",
						"'Roboto-Regular'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/5YB-ifwqHP20Yn46l_BDhA.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=_YZOZaQ9UBZzaxiLBLcgZg&skey=a0a0114a1dcab3ac#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/zN7GBFwfMP4uA6AR0HCoLQ.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/2UX7WLTfW3W8TclTUvlFyQ.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/CWB0XYA8bzo0kSThX0UTuA.woff2"
					}
				},
				"500": {
					"local": [
						"'Roboto Medium'",
						"'Roboto-Medium'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUfY6323mHUZFJMgTvxaG2iE.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=RxZJdnzeo3R5zSexge8UUZbd9NUM7myrQQz30yPaGQ4&skey=ee881451c540fdec#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUaCWcynf_cDxXwCLxiixG1c.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUT8E0i7KZn-EPnyo3HZu7kw.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2"
					}
				},
				"700": {
					"local": [
						"'Roboto Bold'",
						"'Roboto-Bold'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOPY6323mHUZFJMgTvxaG2iE.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=d-6IYplOFocCacKzxwXSOJbd9NUM7myrQQz30yPaGQ4&skey=c06e7213f788649e#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOKCWcynf_cDxXwCLxiixG1c.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOD8E0i7KZn-EPnyo3HZu7kw.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/d-6IYplOFocCacKzxwXSOFtXRa8TVwTICgirnJhmVJw.woff2"
					}
				},
				"900": {
					"local": [
						"'Roboto Black'",
						"'Roboto-Black'"
					],
					"url": {
						"eot": "http://fonts.gstatic.com/s/roboto/v15/mnpfi9pxYH-Go5UiibESIvY6323mHUZFJMgTvxaG2iE.eot",
						"svg": "http://fonts.gstatic.com/l/font?kit=mnpfi9pxYH-Go5UiibESIpbd9NUM7myrQQz30yPaGQ4&skey=934406f772f9777d#Roboto",
						"ttf": "http://fonts.gstatic.com/s/roboto/v15/mnpfi9pxYH-Go5UiibESIqCWcynf_cDxXwCLxiixG1c.ttf",
						"woff": "http://fonts.gstatic.com/s/roboto/v15/mnpfi9pxYH-Go5UiibESIj8E0i7KZn-EPnyo3HZu7kw.woff",
						"woff2": "http://fonts.gstatic.com/s/roboto/v15/mnpfi9pxYH-Go5UiibESIltXRa8TVwTICgirnJhmVJw.woff2"
					}
				}
			}
		}
	}
}
```

Acces the NodeJS command line tool and dive through the projects folder and type `node google-font-process.js`. This process will convert the JSON Object above into a Google Fonts valid format like the following:

`Roboto:100italic,300italic,400italic,500italic,700italic,900italic,100,300,400,500,700,900,`

This code could be included for example in a `link` html tag to include this font into your website as the following example:
```
<link href='https://fonts.googleapis.com/css?family=Roboto:100italic,300italic,400italic,500italic,700italic,900italic,100,300,400,500,700,900,' rel='stylesheet' type='text/css'>
```

Now you have lots of possibilities to deal with this code, as many as build your own google fonts list or plugin or process every google font for many purpouses that you'll need them for.
