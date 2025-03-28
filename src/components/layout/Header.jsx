import React from 'react';
import { Button, Text } from '../ui';

const Header = () => {
    return (
        <div className="p-8 flex flex-col gap-8">
            <div>
                <Text variant="h2" className="mb-4">Button Examples</Text>
                
                <div className="space-y-6">
                    {/* Default Button */}
                    <div>
                        <Text variant="h4" className="mb-2">Default Button</Text>
                        <Text variant="small" className="mb-4 text-gray-500">Hovers to secondary color (#FFD84D)</Text>
                        <Button>
                            <Text variant="button">Done</Text>
                        </Button>
                    </div>
                    
                    {/* Secondary Button */}
                    <div>
                        <Text variant="h4" className="mb-2">Secondary Button</Text>
                        <Text variant="small" className="mb-4 text-gray-500">Changes on active/press state</Text>
                        <Button variant="secondary">
                            <Text variant="button">Secondary Button</Text>
                        </Button>
                    </div>
                    
                    {/* Button Specifications */}
                    <div className="mt-8 border-t pt-4">
                        <Text variant="h4" className="mb-4">Button Specifications</Text>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Text variant="small" className="font-semibold">Default Button:</Text>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                                    <li>Width: 340px</li>
                                    <li>Height: 40px</li>
                                    <li>Border Radius: 4px</li>
                                    <li>Padding: 10px 20px</li>
                                    <li>Gap: 10px</li>
                                    <li>Background: #FFCE22</li>
                                    <li>Hover Background: #FFD84D</li>
                                </ul>
                            </div>
                            <div>
                                <Text variant="small" className="font-semibold">Secondary Button:</Text>
                                <ul className="list-disc pl-5 text-sm space-y-1 mt-2">
                                    <li>Width: 340px</li>
                                    <li>Height: 40px</li>
                                    <li>Border Radius: 4px</li>
                                    <li>Padding: 10px 20px</li>
                                    <li>Gap: 10px</li>
                                    <li>Background: #FFD84D</li>
                                    <li>Active Background: #FFCE22</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    {/* Typography */}
                    <div className="mt-4 border-t pt-4">
                        <Text variant="h4" className="mb-4">Button Typography</Text>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                            <li>Font Family: Montserrat</li>
                            <li>Font Weight: 400</li>
                            <li>Font Size: 14px</li>
                            <li>Line Height: 130%</li>
                            <li>Letter Spacing: 0px</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
